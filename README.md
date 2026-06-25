# DC Solar KC

Marketing site + quote lead capture for **DC Solar KC** ([dcsolarkc.com](https://dcsolarkc.com)) — residential & commercial solar installation, plus solar **removals and reinstalls for roofing and insurance claims** across the Kansas City metro.

Built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Supabase**. Deployed on **Vercel**. Domain hosted at **Squarespace**.

---

## Tech Stack

| Layer      | Tool                       |
| ---------- | -------------------------- |
| Framework  | Next.js 14 (App Router)    |
| Language   | TypeScript                 |
| Styling    | Tailwind CSS               |
| Backend/DB | Supabase (Postgres)        |
| Email      | Resend (optional)          |
| Hosting    | Vercel                     |
| Domain     | dcsolarkc.com (Squarespace)|

## Project Structure

```
app/                 App Router pages, layout, API routes, sitemap/robots
  api/quote/         POST endpoint that saves quote requests to Supabase
components/          UI sections (Header, Hero, Services, QuoteForm, etc.)
lib/                 Site config, validation, email, Supabase clients
  supabase/          Browser + server Supabase clients
public/              logo.png (official KC skyline mark) + icon.svg
styles/              Global Tailwind styles + brand tokens
types/               Database + quote types
```

## Getting Started (Local Dev)

```bash
npm install
cp .env.example .env.local   # then fill in your Supabase keys
npm run dev                  # http://localhost:3000
```

| Variable                        | Required | Description                                              |
| ------------------------------- | -------- | -------------------------------------------------------- |
| `NEXT_PUBLIC_SUPABASE_URL`      | Yes      | Supabase project URL (Settings → API)                    |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Yes      | Supabase anon/public key (Settings → API)                |
| `SUPABASE_SERVICE_ROLE_KEY`     | Optional | Service role key for trusted server inserts (server-only)|
| `RESEND_API_KEY`                | Optional | Enables email notifications on new quote requests        |
| `NOTIFICATION_TO`               | Optional | Where to send notifications (defaults to site email)     |
| `NOTIFICATION_FROM`             | Optional | Verified Resend sender on your domain                    |

## Supabase Setup

Run this in the Supabase **SQL Editor** to create the `quote_requests` table and an
insert-only public policy:

```sql
create table if not exists public.quote_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  phone text,
  address text,
  service_type text,
  property_type text,
  is_insurance_claim boolean not null default false,
  message text,
  status text not null default 'new'
);

alter table public.quote_requests enable row level security;

-- Allow anonymous + authenticated visitors to submit a quote request.
create policy "Allow public inserts"
  on public.quote_requests
  for insert
  to anon, authenticated
  with check (true);

-- Reads are NOT public. Only the service role (server) / dashboard can read.
```

Review incoming leads in **Table Editor → `quote_requests`**.

## Deployment (Vercel)

1. Push this folder to its GitHub repo.
2. In [Vercel](https://vercel.com), **Import** the GitHub repository.
3. Add the environment variables under **Project → Settings → Environment Variables**.
4. Deploy. Vercel auto-detects Next.js — no extra config needed.

### GitHub deploy key

A read/write SSH **deploy key** was generated for this repo:

- Public key: `public/../deploy_key_dcsolar.pub` (in the `website/` folder)
- Private key: `deploy_key_dcsolar` (in the `website/` folder) — **never commit this** (it is gitignored)

To add it to GitHub: **Repo → Settings → Deploy keys → Add deploy key**, paste the
contents of `deploy_key_dcsolar.pub`, and check **Allow write access** if you want to
push with it. Then configure git to use it:

```bash
git remote set-url origin git@github.com:<owner>/<repo>.git
# point SSH at the key (e.g. via ~/.ssh/config Host entry using IdentityFile)
```

### Connecting the domain (Squarespace)

1. In Vercel: **Project → Settings → Domains → Add** `dcsolarkc.com` (and `www.dcsolarkc.com`).
2. In Squarespace **Domains → DNS Settings** for `dcsolarkc.com`, add the records Vercel shows:
   - An `A` record for `@` → Vercel's IP (`76.76.21.21`), **or** the apex record Vercel provides.
   - A `CNAME` record for `www` → `cname.vercel-dns.com`.
3. Wait for DNS to propagate; Vercel issues SSL automatically.

## Branding

Logo: `public/logo.png` — the official DC Solar KC Kansas City–skyline wordmark
(black art on a transparent background; auto-inverted to white on dark sections via
`components/Logo.tsx`). `public/logo-original.png` keeps the untouched source.

| Token      | Hex       | Use                              |
| ---------- | --------- | -------------------------------- |
| Cream      | `#FFF3E6` | Page background                  |
| Tan        | `#ECD9BE` | Header + alternating sections    |
| Tan Deep   | `#D9BF98` | Footer surface                   |
| Sky        | `#9FD6F2` | Hero/contact pastel-blue surface |
| Sky Soft   | `#DCEFFB` | Soft blue section background      |
| Ocean      | `#5AA8CF` | Links / secondary accents        |
| Sun        | `#FFB066` | Primary CTA / accents            |
| Sun Light  | `#FFD3A6` | Soft highlights                  |
| Ink        | `#3D352E` | Text + dark icon tiles (warm brown) |

## Notes

- Contact details live in `lib/site.ts`.
- All copy is original to DC Solar KC. Update service descriptions in `components/Services.tsx`.
- No pricing is published on the site (quote-based). Add a Pricing section later if desired.
