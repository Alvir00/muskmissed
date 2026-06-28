# 🚀 Deploying Musk Missed for Free

This app is **Next.js** + **PostgreSQL**. You'll deploy it free with two services:

| Piece | Service (free) | Why |
|-------|----------------|-----|
| **Database** | **[Neon](https://neon.tech)** | Free serverless Postgres |
| **App hosting** | **[Vercel](https://vercel.com)** | Made by the Next.js team — zero-config |

Both are free forever for this size of app.

---

## Step 1 — Create your Neon database with `neonctl init`

Run this **on your own machine** (it opens a browser to log into YOUR Neon account,
so it can't run inside a hosted sandbox):

```bash
npx neonctl@latest init
```

This interactive command will:
1. Open your browser to log into Neon (create a free account if needed)
2. Create a new Neon project for you
3. Detect Next.js + Drizzle and **write your `DATABASE_URL` into `.env` automatically**

> Done. Your `.env` now contains the real Neon connection string.

---

## Step 2 — Create the table & load the 82 predictions

These two commands read the Neon URL from `.env` (no manual setup needed):

```bash
# 1. Create the `predictions` table in your Neon database
npx drizzle-kit push

# 2. Load the researched 82 predictions
npx tsx src/db/seed-cli.ts
```

You should see `Seed result: { seeded: true, count: 82 }`.

Verify it worked in the Neon dashboard → **Tables** → you'll see the `predictions`
table with 82 rows. 🎉

---

## Step 3 — Push the code to GitHub

```bash
git init
git add .
git commit -m "Musk Missed — ready to deploy"
git branch -M main

# Create an empty repo on github.com first, then:
git remote add origin https://github.com/YOUR-USERNAME/musk-missed.git
git push -u origin main
```

✅ `.env` is gitignored, so your database secret stays private.

> No git? Install the Vercel CLI instead: `npm i -g vercel`, then run `vercel`
> from the project folder and skip to Step 5.

---

## Step 4 — Deploy to Vercel (free)

1. Go to **[vercel.com](https://vercel.com)** → Sign up with GitHub.
2. **Add New → Project** → import your `musk-missed` repo.
3. Vercel auto-detects Next.js — **leave build settings as default**.
4. **Add the Environment Variable** (expand the section before deploying):
   | Name | Value |
   |------|-------|
   | `DATABASE_URL` | *(the same Neon URL from your `.env`)* |
5. Click **Deploy**. ~1–2 minutes later it's live at
   `https://musk-missed-xxxx.vercel.app`. 🎉

---

## Step 5 — Set your production URL (so SEO & sharing links are correct)

1. In Vercel → your project → **Settings → Environment Variables**.
2. Add / set:
   | Name | Value |
   |------|-------|
   | `NEXT_PUBLIC_SITE_URL` | `https://musk-missed-xxxx.vercel.app` (no trailing slash) |
3. **Redeploy** (Deployments → latest → ⋯ → Redeploy).

> Optional free custom domain: Vercel → Settings → Domains → add one, then set
> `NEXT_PUBLIC_SITE_URL` to it and redeploy.

---

## ✅ Verify

- Home page loads with prediction cards
- `your-url/api/health` → `{"ok":true}`
- `your-url/sitemap.xml` lists all pages
- **Add a Miss** saves a new prediction permanently (check Neon → Tables)

---

## Environment variables

| Variable | Server? | Purpose |
|----------|---------|---------|
| `DATABASE_URL` | server only | Neon Postgres connection string |
| `NEXT_PUBLIC_SITE_URL` | server + client | Your public domain (SEO, sharing) |

See [`.env.example`](./.env.example).

---

## Troubleshooting

- **`relation "predictions" does not exist`** → You skipped Step 2.
  Run `npx drizzle-kit push` against your Neon database.
- **Build fails / blank page on Vercel** → `DATABASE_URL` wasn't added to
  Vercel's Environment Variables, or the DB wasn't seeded (Step 2). The build
  connects to the DB to pre-render the prediction pages.
- **Social/share links show `localhost`** → `NEXT_PUBLIC_SITE_URL` isn't set, or
  you didn't redeploy after setting it.
- **`neonctl init` didn't update `.env`** → Re-run it, or paste your Neon
  connection string into `.env` manually as `DATABASE_URL=...`.
