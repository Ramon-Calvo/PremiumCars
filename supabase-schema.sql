-- ============================================================
-- ReportMotor Sales — Schema de Supabase
-- Ejecuta este script en el SQL Editor de Supabase
-- https://supabase.com/dashboard → SQL Editor
-- ============================================================

-- ---- Extensiones ----------------------------------------
create extension if not exists "uuid-ossp";

-- ---- Tabla: vehicles ------------------------------------
create table if not exists public.vehicles (
  id              uuid primary key default uuid_generate_v4(),
  brand           text not null,
  model           text not null,
  version         text,
  year            integer not null check (year >= 1990 and year <= extract(year from now())::integer + 1),
  kilometers      integer not null check (kilometers >= 0),
  price           integer not null check (price > 0),
  original_price  integer,
  monthly_fee     integer,
  fuel_type       text not null check (fuel_type in ('Gasolina', 'Diésel', 'Híbrido', 'Eléctrico', 'GLP', 'Otro')),
  transmission    text not null check (transmission in ('Manual', 'Automático')),
  color           text,
  location        text,
  description     text,
  dgt_label       text check (dgt_label in ('0', 'ECO', 'C', 'B')),
  images          text[] default '{}',
  model_3d_url    text,
  status          text not null default 'available' check (status in ('available', 'reserved', 'sold')),
  horsepower      integer check (horsepower > 0),
  doors           integer check (doors in (2, 3, 4, 5)),
  seats           integer check (seats > 0 and seats <= 9),
  owners          integer check (owners >= 0),
  itv_until       text,
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now()
);

-- Auto-update updated_at
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists vehicles_updated_at on public.vehicles;
create trigger vehicles_updated_at
  before update on public.vehicles
  for each row execute procedure public.set_updated_at();

-- ---- Tabla: reservations --------------------------------
create table if not exists public.reservations (
  id              uuid primary key default uuid_generate_v4(),
  car_id          uuid not null references public.vehicles(id) on delete cascade,
  monthly_fee     integer not null check (monthly_fee > 0),
  deposit         integer not null default 150,
  status          text not null default 'pending' check (status in ('pending', 'confirmed', 'cancelled')),
  customer_name   text,
  customer_email  text,
  customer_phone  text,
  notes           text,
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now()
);

drop trigger if exists reservations_updated_at on public.reservations;
create trigger reservations_updated_at
  before update on public.reservations
  for each row execute procedure public.set_updated_at();

-- ---- Tabla: contact_messages ----------------------------
create table if not exists public.contact_messages (
  id          uuid primary key default uuid_generate_v4(),
  name        text not null,
  email       text not null,
  phone       text,
  subject     text not null,
  message     text not null,
  read        boolean not null default false,
  created_at  timestamptz not null default now()
);

-- ---- Tabla: sell_requests --------------------------------
create table if not exists public.sell_requests (
  id              uuid primary key default uuid_generate_v4(),
  name            text not null,
  phone           text not null,
  email           text not null,
  brand           text not null,
  model           text not null,
  year            integer not null,
  km              integer not null,
  fuel            text not null,
  transmission    text not null,
  notes           text,
  status          text not null default 'pending' check (status in ('pending', 'contacted', 'appraised', 'closed')),
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now()
);

drop trigger if exists sell_requests_updated_at on public.sell_requests;
create trigger sell_requests_updated_at
  before update on public.sell_requests
  for each row execute procedure public.set_updated_at();

-- ---- Row Level Security (RLS) ---------------------------

-- vehicles: lectura pública, escritura solo autenticados
alter table public.vehicles enable row level security;
drop policy if exists "vehicles_public_read" on public.vehicles;
create policy "vehicles_public_read"
  on public.vehicles for select using (true);
drop policy if exists "vehicles_authenticated_write" on public.vehicles;
create policy "vehicles_authenticated_write"
  on public.vehicles for all using (auth.role() = 'authenticated');

-- reservations: inserción pública (clientes reservan sin login),
-- lectura y modificación solo autenticados
alter table public.reservations enable row level security;
drop policy if exists "reservations_public_insert" on public.reservations;
create policy "reservations_public_insert"
  on public.reservations for insert with check (true);
drop policy if exists "reservations_authenticated_read_write" on public.reservations;
create policy "reservations_authenticated_read_write"
  on public.reservations for all using (auth.role() = 'authenticated');

-- contact_messages: inserción pública, lectura solo autenticados
alter table public.contact_messages enable row level security;
drop policy if exists "contact_public_insert" on public.contact_messages;
create policy "contact_public_insert"
  on public.contact_messages for insert with check (true);
drop policy if exists "contact_authenticated_read" on public.contact_messages;
create policy "contact_authenticated_read"
  on public.contact_messages for select using (auth.role() = 'authenticated');

-- sell_requests: inserción pública, lectura solo autenticados
alter table public.sell_requests enable row level security;
drop policy if exists "sell_public_insert" on public.sell_requests;
create policy "sell_public_insert"
  on public.sell_requests for insert with check (true);
drop policy if exists "sell_authenticated_read" on public.sell_requests;
create policy "sell_authenticated_read"
  on public.sell_requests for all using (auth.role() = 'authenticated');

-- ---- Índices de rendimiento -----------------------------
create index if not exists idx_vehicles_status       on public.vehicles(status);
create index if not exists idx_vehicles_brand        on public.vehicles(brand);
create index if not exists idx_vehicles_fuel_type    on public.vehicles(fuel_type);
create index if not exists idx_vehicles_price        on public.vehicles(price);
create index if not exists idx_vehicles_year         on public.vehicles(year);
create index if not exists idx_reservations_car_id   on public.reservations(car_id);
create index if not exists idx_reservations_status   on public.reservations(status);
create index if not exists idx_contact_created       on public.contact_messages(created_at desc);
create index if not exists idx_sell_requests_created on public.sell_requests(created_at desc);
