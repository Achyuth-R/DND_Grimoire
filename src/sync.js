// Shared character storage on Supabase, layered over the localStorage cache in store.js.
// Pages keep reading localStorage synchronously; this module:
//  - pulls the shared list on start (and on reconnect) and merges it in, newest updatedAt wins
//  - pushes local edits (debounced) and soft-deletes, queuing them while offline
//  - applies other devices' changes live via Supabase Realtime
// Without VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY the app stays local-only.
import { createClient } from '@supabase/supabase-js'
import { loadCharacters, saveCharacters, putLocal, migrateCharacter, onLocalWrite, emitCharactersChanged } from './store.js'

// Tolerate a value pasted as a whole "NAME=value" line (or with quotes/whitespace) in the host's settings.
const cleanEnv = (v, name) => (v || '').trim().replace(new RegExp(`^${name}\\s*=\\s*`), '').replace(/^["']|["']$/g, '')
const URL_ = cleanEnv(import.meta.env.VITE_SUPABASE_URL, 'VITE_SUPABASE_URL').replace(/\/rest\/v1\/?$/, '')
const KEY_ = cleanEnv(import.meta.env.VITE_SUPABASE_ANON_KEY, 'VITE_SUPABASE_ANON_KEY')
const TABLE = 'characters'
const PENDING_KEY = 'grimoire.pending.v1'
const PUSH_DELAY = 800

// A misconfigured URL or key must never take the site down: fall back to local-only.
function makeClient() {
  if (!URL_ || !KEY_) return null
  try {
    return createClient(URL_.trim(), KEY_.trim())
  } catch (err) {
    console.warn('[sync] Supabase is misconfigured; characters stay on this device.', err.message)
    return null
  }
}
const supabase = makeClient()

// ---------- status ----------
// 'local' (not configured) | 'syncing' | 'synced' | 'offline' | 'error'
let status = supabase ? 'syncing' : 'local'
const statusListeners = new Set()
export const getSyncStatus = () => status
export const onSyncStatus = (fn) => { statusListeners.add(fn); return () => statusListeners.delete(fn) }
const setStatus = (s) => { status = s; statusListeners.forEach((fn) => fn(s)) }

// ---------- pending queue (survives reloads) ----------
// { [id]: 'upsert' | 'delete' }
const readPending = () => { try { return JSON.parse(localStorage.getItem(PENDING_KEY)) || {} } catch { return {} } }
const writePending = (p) => localStorage.setItem(PENDING_KEY, JSON.stringify(p))
const markPending = (id, op) => writePending({ ...readPending(), [id]: op })
const clearPending = (id, op) => {
  const p = readPending()
  if (p[id] === op) { delete p[id]; writePending(p) }
}

const time = (iso) => (iso ? Date.parse(iso) || 0 : 0)

// ---------- push ----------
const timers = new Map()

async function pushOne(id) {
  const op = readPending()[id]
  if (!op) return
  if (op === 'delete') {
    const { error } = await supabase.from(TABLE).update({ deleted: true, updated_at: new Date().toISOString() }).eq('id', id)
    if (error) throw error
    clearPending(id, 'delete')
    return
  }
  const char = loadCharacters().find((c) => c.id === id)
  if (!char) { clearPending(id, 'upsert'); return }
  const { error } = await supabase.from(TABLE).upsert({
    id: char.id, data: char, updated_at: char.updatedAt || new Date().toISOString(), deleted: false,
  })
  if (error) throw error
  clearPending(id, 'upsert')
}

async function flush() {
  if (!supabase) return
  const ids = Object.keys(readPending())
  if (!ids.length) return
  setStatus('syncing')
  try {
    for (const id of ids) await pushOne(id)
    setStatus('synced')
  } catch {
    setStatus(navigator.onLine ? 'error' : 'offline')
  }
}

function schedule(id) {
  clearTimeout(timers.get(id))
  timers.set(id, setTimeout(() => { timers.delete(id); flush() }, PUSH_DELAY))
}

// ---------- pull / merge ----------

// Apply one remote row to the local cache. Returns true if local data changed.
function applyRemote(row) {
  const pending = readPending()[row.id]
  const local = loadCharacters().find((c) => c.id === row.id)
  if (row.deleted) {
    // A newer local edit that hasn't been pushed yet wins over an older remote delete.
    if (!local || (pending === 'upsert' && time(local.updatedAt) > time(row.updated_at))) return false
    saveCharacters(loadCharacters().filter((c) => c.id !== row.id))
    return true
  }
  if (pending === 'delete') return false
  if (local && time(local.updatedAt) >= time(row.updated_at)) return false
  putLocal(migrateCharacter({ ...row.data, updatedAt: row.updated_at }))
  return true
}

async function pull() {
  if (!supabase) return
  setStatus('syncing')
  const { data, error } = await supabase.from(TABLE).select('id, data, updated_at, deleted')
  if (error) { setStatus(navigator.onLine ? 'error' : 'offline'); return }
  let changed = false
  const remoteIds = new Set()
  for (const row of data) {
    remoteIds.add(row.id)
    if (applyRemote(row)) changed = true
  }
  // Characters that exist only here, or are newer here, get uploaded.
  const rows = new Map(data.map((r) => [r.id, r]))
  for (const c of loadCharacters()) {
    const r = rows.get(c.id)
    if (!remoteIds.has(c.id) || (!r.deleted && time(c.updatedAt) > time(r.updated_at))) markPending(c.id, 'upsert')
  }
  if (changed) emitCharactersChanged()
  setStatus('synced')
  await flush()
}

// ---------- start ----------
let started = false
export function startSync() {
  if (!supabase || started) return
  started = true

  onLocalWrite((e) => {
    if (e.type === 'upsert') { markPending(e.char.id, 'upsert'); schedule(e.char.id) }
    else { markPending(e.id, 'delete'); schedule(e.id) }
  })

  supabase
    .channel('characters')
    .on('postgres_changes', { event: '*', schema: 'public', table: TABLE }, (payload) => {
      if (payload.new && applyRemote(payload.new)) emitCharactersChanged()
    })
    .subscribe()

  window.addEventListener('online', () => pull())
  window.addEventListener('offline', () => setStatus('offline'))
  // Flush queued edits if the tab is closed or hidden before the debounce fires.
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') flush() })

  pull()
}
