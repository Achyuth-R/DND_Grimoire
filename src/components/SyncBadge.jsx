import { useEffect, useState } from 'react'
import { getSyncStatus, onSyncStatus } from '../sync.js'

const LABELS = {
  syncing: ['Saving…', 'Syncing characters with the shared store'],
  synced: ['Synced', 'Characters are shared across devices'],
  offline: ['Offline', 'Changes are saved on this device and will sync when you reconnect'],
  error: ['Sync error', "Couldn't reach the shared store; changes are kept on this device and will retry"],
}

// Small nav indicator for shared-character sync; hidden when sync isn't configured.
export default function SyncBadge() {
  const [status, setStatus] = useState(getSyncStatus)
  useEffect(() => onSyncStatus(setStatus), [])
  if (status === 'local') return null
  const [label, title] = LABELS[status]
  return <span className={`sync-badge ${status}`} title={title} role="status">● {label}</span>
}
