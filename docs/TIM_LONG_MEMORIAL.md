# Tim Long Memorial Fund — LAUNCHED 2026-10-05 (founder approved)

The sections below are the pre-launch notes, kept for history.

---


**Status (2026-08-29):** built and previewed, **not live**. Target launch is
October/November 2026.

**Do not merge this to `main` until the founder has approved it.** Every push
to `main` deploys to GitHub Pages within minutes.

## Where the work is

Local branch `tim-long-memorial` (never pushed), three commits on top of
`15402b8`:

| Commit | What | Gated on founder? |
|---|---|---|
| `42ca286` | PayPal + CanadaHelps QR codes on `/giving-options` | No — **already shipped** to `main` as `a332e4c` (2026-09-04) |
| `c939fac` | The memorial page at `/giving-options/tim-long` + "Ways to Give" nav link | **Yes — this is the only commit still parked** |
| `0f34dd4` | `/donate` redirect (URL printed on his poster 404'd) + `NEXT_PUBLIC_SITE_URL` in CI (every og:image shipped as `localhost`) | No — **already shipped** to `main` as `688ac39` (2026-09-04) |

Rebasing the branch on `main` will drop the two shipped commits automatically
(identical patches), leaving just the memorial page.

## Preview

https://acce-website-cutu5qg4a-rogerchen803-3573s-projects.vercel.app/giving-options/tim-long

- Vercel project `acce-website` (`prj_h7085BGjifkuGLriNxtW1uV2IQGo`), scope
  `rogerchen803-3573s-projects`. `.vercel/` is gitignored — run
  `vercel link --yes` if it's missing. Deploy a fresh preview with
  `vercel deploy --yes` (never `--prod`: that would publish an indexable copy).
- It is behind Vercel Authentication (`302 → vercel.com/sso-api`), so the
  founder can't open it yet. Vercel has no per-email allowlist on a personal
  account; the fix is **Settings → Deployment Protection → Vercel
  Authentication → Disabled**. Previews stay `noindex` regardless.

## Source assets

The founder's Google Drive folder was downloaded to `~/Downloads/Tim Long`
(not in the repo). Processed web copies live in `public/tim_long/` on the
branch. **"Tim 2.jpg" was missing** from the folder; Tim 1 and 3–11 are used.

## Open with the founder

1. **The hero.** He asked to use `0-Tim Long.png` — a fully designed poster
   with text and a donate button baked in — to fill the top section. Instead
   the hero is rebuilt as HTML: portrait cropped from the poster at full
   resolution, name/dates/tagline as live text, a real red donate button. The
   poster is the social-share image. Roger chose not to raise this
   proactively; if the founder asks, the reason is phone readability, screen
   readers, search, and a clickable button.
2. **Photo captions** are deliberately generic ("a loved one", "a family
   photograph from earlier years") to avoid guessing at relationships. Real
   captions need names/occasions from him.
3. His poster prints `accecan.ca/donate`, now forwarding to `/giving-options`.
   If that poster only ever promotes this fund, it could point at the memorial
   page instead — his call.

## To resume

```
git checkout tim-long-memorial
git rebase main            # main will have moved on
npm run build
vercel deploy --yes        # fresh preview link for the founder
```

Then: founder approves → merge to `main` → push → GitHub Pages deploys.
