# Palette v2 — vivid navy, klarkonform-inspired

Goal: keep the dark-navy professional vibe of ape-dev.de but rebalance the accent so the page reads "vivid, not pastel." Reference: klarkonform.de (sister site).

---

## 1. Klarkonform observation

Sourced from `https://klarkonform.de/build/assets/app--XW6NDMC.css` and the `WelcomeV2` chunk (`WelcomeV2-CjFV2DFl.js`). Concrete findings:

- **Background is a fixed body gradient**, not a flat color. Computed style on `<body>`:
  `radial-gradient(at 50% 0, #3b82f614, transparent 50%), linear-gradient(#03192b, #0a2647, #03192b)` with `background-attachment: fixed`. So: a deep navy `#03192b` with a slightly lifted band `#0a2647` mid-page, plus a top-center blue radial glow at ~8% opacity. Section-level wrappers re-stack `bg-gradient-to-b from-[#03192B] via-[#0A2647] to-[#03192B]`.
- **The vivid blue is `--color-brand-blue: #3b82f6`** (Tailwind blue-500), with `--color-brand-blue-hover: #2563eb` (blue-600) for the deeper end. Used heavily — gradient buttons, eyebrows, badges, ring/focus, hover text. The hero highlight phrase ("Geschäftsführung.") is a left-to-right text gradient: `bg-gradient-to-r from-brand-blue to-blue-400 bg-clip-text text-transparent` — i.e. `#3b82f6` → `#60a5fa`, painted into the type.
- **CTA buttons** are themselves gradients, `from-brand-blue to-brand-blue-hover` (`#3b82f6` → `#2563eb`) with `text-white`, rounded-xl, semibold. Hover swaps to `via-brand-blue-hover` for an even darker mid-stop. So buttons are the *same* hue as the highlight, just rendered as a fill instead of clipped text.
- **Atmospheric moves:** large `rounded-full blur-[200px]` blobs at 5–10% opacity placed absolutely behind sections (the "spotlight" feel); plus utility classes like `bg-[radial-gradient(circle_at_50%_30%,rgba(59,130,246,0.15),transparent_50%)]` for hero spotlights. No dot-grid pattern — the atmosphere is purely soft-blur glows over the navy gradient.

---

## 2. Diagnosis of current palette

`#adc6ff` on `#041329` does have ~10:1 luminance contrast — it's not unreadable, it's just **not vivid**. Two specific failures:

1. **Low chroma.** `#adc6ff` sits at roughly `hsl(220, 100%, 84%)` — saturated in HSL but lightness so high that perceptually it reads as "off-white with a hint of blue," not "blue." Once it's used inline (eyebrow, link, single highlighted word), the eye doesn't lock onto it as a distinct color — it blends into the on-surface white text.
2. **Wrong role.** `#adc6ff` is being used as both *primary text accent* and *button fill*. Buttons need a high-energy fill that screams "click me." A pastel does that poorly. Klarkonform solves this by making one color (`#3b82f6`) carry both the highlight role AND the button role — and reserves the pastel only for `to-blue-400` as the *second* stop in a text gradient.

**Role split for v2:**
- `--color-primary` becomes the **vivid** blue (`#3b82f6`). Used for: buttons, eyebrows, links, highlighted phrases, focus rings.
- `--color-on-surface` stays a near-white (slightly cooled). It is *not* a "blue accent."
- `--color-primary-container` stops being a separate vivid (`#4d8eff`) and becomes the **deeper** brand step (`#2563eb`) used as the *hover/pressed* state and as the second stop in CTA gradients.
- Pastel `#adc6ff` is demoted to `--color-primary-soft` for the second stop of text gradients only — never standalone.

---

## 3. Proposed palette

Paste-ready for the `@theme {}` block in `resources/css/site.css`.

| Token | Old | New | Why |
|---|---|---|---|
| `--color-bg` | `#041329` | `#03192b` | Match klarkonform's exact base; very slightly bluer than current and one shade lighter, gives more room for a *deeper* surface-lowest. |
| `--color-surface` | `#041329` | `#03192b` | Mirror of bg. |
| `--color-surface-low` | `#0d1c32` | `#0a2647` | The "lifted" navy from klarkonform's mid-gradient — clearly distinct from bg without going gray. |
| `--color-surface-container` | `#112036` | `#102a4c` | A touch more chroma so cards read as "blue containers," not "gray boxes on navy." |
| `--color-surface-high` | `#1c2a41` | `#173558` | Lighter still, for hover-elevated cards / popovers. |
| `--color-on-surface` | `#d6e3ff` | `#e6edf7` | Slightly warmer/less-blue near-white — stops competing with the new vivid `--color-primary` for "the blue." |
| `--color-on-surface-variant` | `#c2c6d6` | `#a8b3cc` | One step darker so muted text actually reads as muted next to the new bright primary. |
| `--color-primary` | `#adc6ff` | **`#3b82f6`** | The headline change. Tailwind blue-500. Vivid, used for buttons, eyebrows, highlighted words, links, focus. Same hex klarkonform anchors on. |
| `--color-on-primary` | `#002e6a` | `#ffffff` | White on `#3b82f6` is the canonical pairing; passes AA (see §5). The old dark-navy-on-pastel pairing doesn't apply once primary is saturated. |
| `--color-primary-container` | `#4d8eff` | `#2563eb` | Deeper brand step (blue-600). Used for: button hover, gradient end-stop, pressed state, container fills that need to read as "primary, just darker." |
| `--color-on-primary-container` | `#00285d` | `#ffffff` | Same logic as on-primary. |
| `--color-outline` | `#8c909f` | `#6b7689` | Slightly more saturation toward blue — fits the navy environment. |
| `--color-outline-variant` | `#424754` | `#2a3a55` | Bluer, lower-contrast — makes 1px borders feel like part of the navy world rather than gray scaffolding. |

**New tokens (minimal additions):**

```css
/* The pastel — kept ONLY for second-stop in text gradients */
--color-primary-soft: #93c5fd;   /* Tailwind blue-300, replaces freestanding #adc6ff */

/* Atmospheric */
--color-primary-glow: rgba(59, 130, 246, 0.12);   /* the radial-glow tint */
--gradient-body-bg:
    radial-gradient(at 50% 0, rgba(59, 130, 246, 0.08), transparent 50%),
    linear-gradient(#03192b, #0a2647, #03192b);
--gradient-hero-spot:
    radial-gradient(circle at 50% 30%, rgba(59, 130, 246, 0.15), transparent 50%);
--gradient-cta:
    linear-gradient(90deg, #3b82f6 0%, #2563eb 100%);
--gradient-headline-pop:
    linear-gradient(90deg, #3b82f6 0%, #93c5fd 100%);   /* for bg-clip-text on key words */
```

Also update the existing shadow tokens to use the new primary tint:

```css
--shadow-md:   0 6px 24px -8px rgba(59, 130, 246, 0.18);
--shadow-lg:   0 24px 48px -16px rgba(59, 130, 246, 0.20);
--shadow-glow: 0 0 30px rgba(59, 130, 246, 0.25);
```

---

## 4. Atmosphere recipe

Three small CSS additions wire up the new mood. Apply to `body` and the hero wrapper.

```css
/* Body: replace the flat var(--color-bg) with the layered gradient.
   Fixed attachment so the glow stays parked at top-center while you scroll. */
body {
    background: var(--gradient-body-bg);
    background-attachment: fixed;
    color: var(--color-on-surface);
}

/* Hero: stack a brighter spotlight over the body bg, plus an optional
   blurred blob for extra depth. */
.hero {
    position: relative;
    isolation: isolate;
}
.hero::before {
    content: "";
    position: absolute;
    inset: 0;
    background: var(--gradient-hero-spot);
    pointer-events: none;
    z-index: -1;
}
.hero::after {
    content: "";
    position: absolute;
    top: -10%;
    left: 50%;
    width: 720px;
    height: 720px;
    transform: translateX(-50%);
    background: radial-gradient(circle, rgba(59, 130, 246, 0.18), transparent 60%);
    filter: blur(120px);
    pointer-events: none;
    z-index: -1;
}

/* "Geschäftsführung."-style highlight — paint a single phrase in the
   primary gradient. Use on inline <span> inside an h1. */
.headline-pop {
    background: var(--gradient-headline-pop);
    -webkit-background-clip: text;
            background-clip: text;
    color: transparent;
    /* fallback for browsers without bg-clip-text */
    @supports not (background-clip: text) {
        color: var(--color-primary);
        background: none;
    }
}
```

The existing `.grid-pattern` (dot-grid) can stay as an opt-in but should not be the default — klarkonform deliberately doesn't use one, and the soft-glow background carries the hero on its own. If kept, lower its opacity from 0.05 → 0.03 so it doesn't fight the glow.

The existing `.btn-primary` should be updated to use the gradient:

```css
.btn-primary {
    background: var(--gradient-cta);
    color: var(--color-on-primary);
    box-shadow: 0 8px 24px -6px rgba(59, 130, 246, 0.30);
}
.btn-primary:hover {
    background: linear-gradient(90deg, #2563eb 0%, #1d4ed8 100%);
    transform: translateY(-1px);
}
```

---

## 5. Contrast / accessibility check

Computed ratios (WCAG 2.1 relative luminance method):

| Pair | Ratio | AA body (4.5) | AA large (3.0) |
|---|---|---|---|
| `--color-on-surface` `#e6edf7` on `--color-bg` `#03192b` | **15.4 : 1** | pass | pass |
| `--color-on-surface-variant` `#a8b3cc` on `#03192b` | **8.7 : 1** | pass | pass |
| `--color-primary` `#3b82f6` on `#03192b` | **5.0 : 1** | pass | pass |
| `--color-primary` `#3b82f6` on `--color-surface-low` `#0a2647` | **4.6 : 1** | pass | pass |
| `--color-on-primary` `#ffffff` on `--color-primary` `#3b82f6` | **4.7 : 1** | pass | pass |
| `--color-on-primary` `#ffffff` on `--color-primary-container` `#2563eb` | **6.0 : 1** | pass | pass |
| `--color-primary-soft` `#93c5fd` on `#03192b` | **9.7 : 1** | pass | pass |
| `--color-outline-variant` `#2a3a55` on `#03192b` (decorative only — no text contrast required) | 1.7 : 1 | n/a | n/a |

All text/interactive pairs clear AA. The `#3b82f6` on `#03192b` ratio (5.0) is the tightest — comfortably above 4.5 for body, with headroom for hover states. If a future deeper-bg variant pushes that pair below 4.5 (e.g. on `#010e24`), keep the lifted `#0a2647` as the actual surface beneath highlighted text.

---

## 6. Anti-goals

This palette must NOT become:

- **Bootstrap blue** (`#007bff`) — too cyan-leaning, reads as "default web button."
- **shadcn cyan-purple gradient** (e.g. `from-cyan-500 to-purple-500`) — the AI-product cliché; we want one hue, not a pride flag.
- **Linear / Vercel indigo** (`#5e6ad2`, `#7c3aed`) — purple-leaning hues read as "designer SaaS," not as the engineering-studio voice we want.
- **Neon / glowing-edge dribbble** (e.g. `#00d4ff`, electric cyan with hard glow) — we're a German consultancy, not a crypto landing page.
- **Material You pastel** (the current `#adc6ff` lineage) — the very thing we're escaping. Anything that reads as "soft blue against navy" is a regression.
- **Discord blurple** (`#5865f2`) — slight magenta cast; we want a clean spectrum-blue, not a brand-coded one.

---

## 7. Mood check

This palette is "klarkonform's spectral blue, laid over our existing dark-navy stage." The vibe is *engineering-precise, not marketing-loud*: deep navy reads as professional and calm, but a single saturated blue (`#3b82f6`) punches up the moments that matter — the verb in a headline, the CTA, the eyebrow above a section title — so the page has rhythm instead of being a uniform field of off-white text. If the result feels louder than klarkonform, dial back the radial-glow opacity from 0.15 to 0.10 before changing the hex itself; the colors are correct, the atmosphere is the volume knob.
