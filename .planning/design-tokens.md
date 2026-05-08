# ape-dev.de — Design Tokens & Visual System

A warm, light, confident system for a 1–3 person German tech studio. "Series A" without enterprise cosplay. No case-study heroes, no all-black, no rigid framed grids.

---

## 1. Reference patterns

### clerk.com
- **Borrow:** centered text-led hero on a near-white canvas with a soft, low-saturation gradient wash; generous breathing room around the H1; one assertive primary button + one ghost; section labels (small uppercase eyebrow text) used sparingly.
- **Don't borrow:** the dense product-component showcase grids — we don't have a SaaS UI to show off, and faking it reads as derivative.

### plausible.io
- **Borrow:** warm off-white background, calm green accent used surgically (CTAs and a few inline highlights), conversational copy density (paragraphs longer than typical SaaS), customer avatars with names rather than logo walls of strangers, clear vertical section rhythm.
- **Don't borrow:** the literal Plausible green (we need our own), and the slightly mid-2010s "screenshot-with-drop-shadow" hero — too tied to product UI we don't yet have public.

### posthog.com (chosen third)
- **Borrow:** personality-via-typography (tight, confident headline weight), light canvas, willingness to break the grid for one playful moment per page, hand-drawn arrow / underline as accent (this maps directly to the brief's "subtle wink" requirement), human faces over stock.
- **Don't borrow:** the maximalist hedgehog mascot system, the hand-drawn-everything overload, and the kitchen-sink homepage. We want one wink, not twelve.

Why posthog over Linear/Vercel/Resend: those three lean cool, dark, dev-tool-flavored. PostHog is the only major reference doing warm-light with personality and a literal hand-drawn flourish — exactly the brief.

---

## 2. Color palette

Light mode is the canonical mode. Values in HSL for Tailwind compatibility, hex provided.

| Token | HSL | Hex | Rationale |
|---|---|---|---|
| `--bg` | `36 33% 97%` | `#FAF7F2` | Warm off-white, paper-like. Avoids sterile #FFF; reads "considered." |
| `--bg-soft` | `36 25% 94%` | `#F3EEE6` | One step warmer for alternating sections — no hard borders needed. |
| `--ink` | `220 18% 14%` | `#1E2230` | Warm-leaning near-black, never #000. Reads softer in long copy. |
| `--ink-muted` | `220 10% 38%` | `#5A6172` | Body secondary, captions, meta. |
| `--ink-faint` | `220 12% 82%` | `#CDD0D7` | Borders, dividers, disabled. |
| `--accent` | `18 78% 52%` | `#E5662A` | Warm terracotta-orange. Justification: green is taken (Plausible, Vercel-adjacent), blue is generic SaaS, purple is shadcn-default. Terracotta is warm, German-design-tradition friendly (Bauhaus / Vitra-adjacent), confident without neon, and survives next to compliance/security content without feeling alarming. |
| `--accent-soft` | `22 80% 94%` | `#FBE7DA` | Highlight backgrounds, inline pill chips, the "wink" underline. |
| `--accent-ink` | `0 0% 100%` | `#FFFFFF` | Text on `--accent` (passes AA at body sizes). |
| `--trust` | `205 55% 32%` | `#25577F` | Compliance section only. Deep, calm blue — security-trust signal without going corporate cyan. |
| `--trust-soft` | `205 40% 94%` | `#E5EEF5` | Backgrounds for compliance cards / diagram blocks. |

**Dark mode:** Recommendation — **do not ship dark mode at launch.** The brief explicitly rejects the all-black aesthetic, and a half-baked dark mode dilutes the warm-light identity. Revisit post-launch only if analytics demand it.

---

## 3. Type scale

**Pick:** **Inter** (variable, Google Fonts + Bunny Fonts both verified) for everything, **JetBrains Mono** for code/compliance technical bits.

- Inter is the closest free analog to Clerk's custom face and is what Plausible effectively uses. It's boring in the right way — the personality should come from copy and accent, not from a quirky display face.
- **No serif accent.** A serif display undercuts the "modern German tech studio" read and pushes toward editorial / consultancy. Stay sans, all-Inter, vary weight.
- Self-host via Bunny Fonts (`fonts.bunny.net`) — GDPR-clean, no Google call.

| Token | Size / Line-height / Tracking / Weight |
|---|---|
| `display` | 64 / 68 / -0.02em / 600 (mobile: 44 / 48) |
| `h1` | 48 / 54 / -0.018em / 600 (mobile: 36 / 42) |
| `h2` | 36 / 42 / -0.015em / 600 |
| `h3` | 24 / 32 / -0.01em / 600 |
| `h4` | 18 / 26 / -0.005em / 600 |
| `body-lg` | 19 / 30 / 0 / 400 — hero subhead and lede paragraphs |
| `body` | 16 / 26 / 0 / 400 |
| `body-sm` | 14 / 22 / 0 / 400 |
| `caption` | 12 / 18 / 0.04em / 500 — eyebrows, meta |
| `mono` | 14 / 22 / 0 / 400 — JetBrains Mono |

---

## 4. Spacing & layout

- **Section padding (vertical):** desktop `120px` top/bottom, mobile `72px`. Generous — Plausible-rhythm, not Stripe-rhythm.
- **Container max-width:** `1200px`, with `1040px` for text-heavy sections. Side gutter `24px` mobile, `48px` desktop.
- **Grid baseline:** 8px. All spacing tokens are multiples (8, 16, 24, 32, 48, 64, 96, 120).
- **Border radius:** `--radius-sm 6px`, `--radius-md 10px`, `--radius-lg 16px`, `--radius-xl 24px`. Pick a side: **moderate-large**, Clerk-leaning. Cards `16px`, buttons `10px`, pills `999px`.
- **Shadows:** Warm, low. Not none — flat is too austere for the friendly tone.
  - `--shadow-sm`: `0 1px 2px hsl(20 30% 20% / 0.06)`
  - `--shadow-md`: `0 6px 24px -8px hsl(20 30% 20% / 0.10)`
  - `--shadow-lg`: `0 24px 48px -16px hsl(20 30% 20% / 0.12)`
  Shadow tint uses the warm-orange family, not neutral gray — keeps everything on-palette.

---

## 5. Component decisions

**Buttons.** Two on-page max.
- **Primary:** solid `--accent` background, white text, `10px` radius, `12px 20px` padding, weight 500. Hover: `-2%` lightness, no transform. No gradient.
- **Secondary (ghost):** transparent background, `--ink` text, `1px solid --ink-faint`, same radius/padding. Hover: background `--bg-soft`.
- **Tertiary (text link):** `--ink` with `--accent` underline on hover. Used inline only.

**Hero pattern.** Centered text-led, no product screenshot (we don't have one to show), with a single off-canvas warm gradient blob behind the headline. One word in the headline gets the "wink" underline (see §5 last item).

```
+----------------------------------------------------+
|                  STUDIO · BERLIN                   |  <- caption eyebrow
|                                                    |
|      Software, die ihr nicht ersetzen müsst.       |  <- display, "ersetzen" underlined
|                                                    |
|   Wir bauen Individualsoftware, modernisieren      |  <- body-lg, max 640px
|   bestehende Systeme und liefern Compliance-       |
|   Werkzeuge für den Mittelstand.                   |
|                                                    |
|        [ Projekt besprechen ]   Was wir tun →      |  <- primary + tertiary
|                                                    |
|   ░░ soft warm gradient blob, top-right, blurred ░░|
+----------------------------------------------------+
```

**Logo cloud.** **Monochrome** — render in `--ink-muted` at ~70% opacity, hover to full `--ink`. Justification: with TQG, cosinex, Cesaris, Festglanz the visual styles clash; monochrome unifies and reads more confident than full-color. Plausible/Clerk both correct on this.

**Imagery / illustration.** **Photography of the team** (1–3 people — show the face, that's the brief) + **abstract warm gradient blobs** for atmosphere. **No** isometric illustrations, **no** 3D renders, **no** stock photography. Team photos shot on the warm `--bg` against neutral wall — not white-cyc studio.

**The single wink.** A **hand-drawn-feel underline stroke** in `--accent`, applied to exactly one word per major heading (max one per viewport). Implemented as an inline SVG, not `text-decoration`, so it has the slight wobble. This is the personality moment. Used on the Websites section heading on the winked word ("gut") to carry the copy joke. Restraint: no mascot, no arrows elsewhere, no sticker pack.

---

## 6. Compliance section visual move

**Recommendation: a structured "infrastructure" data block.** A single full-width card with `--trust-soft` background, `--trust` accents, containing a 2-column layout: left side a small static topology diagram (Hetzner Frankfurt → K3s → vLLM → MongoDB, drawn in flat SVG with `--trust` strokes and `--ink` labels in `mono`), right side a key-value table (`Hosting: Hetzner Frankfurt`, `Daten: GDPR-konform`, `LLM: self-hosted vLLM`, `Architektur: Hexagonal`).

Why this works: it shows the work instead of claiming trust with a shield icon. German B2B buyers evaluating compliance tools want infrastructure facts. Avoid: SOC2-style badge rows (we likely don't have them, and faking enterprise certifications reads dishonest), padlock icons, "bank-grade encryption" copy.

---

## 7. Anti-goals — this site must NOT look like

1. **A consultancy with stock photos of handshakes / diverse teams in glass meeting rooms.** Death.
2. **An agency portfolio with a full-bleed autoplay video hero and a horizontal scroll of "selected work."** We have no public case studies — pretending otherwise is the central trap.
3. **shadcn-default purple-on-zinc.** Every dev-tool startup launched in 2024 looks like this. We are not one.
4. **Linear/Vercel all-black with neon gradient.** Explicitly rejected by the owner; also wrong audience (German B2B mid-market is not the dark-mode-IDE crowd).
5. **Stripe-style rigid framed grid with iconography in colored squares.** Too enterprise, too 2019, undercuts the "small studio with a face" positioning.

---

## 8. Mood statement

ape-dev.de should feel like a well-lit Altbau studio at 10am: warm paper-white walls, one good piece of orange furniture, books on the shelf, no clutter. The site is confident enough to use long sentences and short button labels. It shows faces, not stock. It picks one place per page to be playful — a hand-drawn underline on a single word — and is otherwise quiet, structured, and serious about the work. When in doubt, add space and remove a color.
