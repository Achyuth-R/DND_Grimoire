-- Shared character store for Grimoire (run once in the Supabase SQL editor).
-- Everyone using the site shares one list; there are no user accounts.

create table if not exists public.characters (
  id text primary key,                         -- the character's id from the app
  data jsonb not null,                         -- the full character object
  updated_at timestamptz not null default now(),
  deleted boolean not null default false       -- soft delete: rows are never removed by the app
);

alter table public.characters enable row level security;

-- The site's anon key is public, so these policies are what anyone can do.
-- There is deliberately no DELETE policy: deletes are soft, so a bad edit can be undone
-- from the Supabase dashboard (set deleted = false, or restore older data).
drop policy if exists "public read" on public.characters;
drop policy if exists "public insert" on public.characters;
drop policy if exists "public update" on public.characters;
create policy "public read" on public.characters for select using (true);
create policy "public insert" on public.characters for insert with check (true);
create policy "public update" on public.characters for update using (true) with check (true);

-- Live updates across devices.
alter publication supabase_realtime add table public.characters;
