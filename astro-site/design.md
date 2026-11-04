# Design — ysidroalmonte.io

Locked design system for this site. Every page reads this file; extend or amend it
rather than overriding locally. Tokens live in `src/styles/tokens.css`.

## Genre
modern-minimal (technical-docs / engineering spec-sheet school).

## Macrostructure family
- Home, /work/: **Index-First** — one featured project with a real screenshot, the rest as ruled index rows.
- Case studies, /about/: **Long Document** — single column, 65ch measure, inline architecture diagram.
- Nav: **N1b** (wordmark · links · lang switch + CTA), square controls, no glass. Footer: **Ft4** dense colophon.

## Theme (custom, anchored on the YA monogram teal, hue 195)
Light (default) / dark via `prefers-color-scheme`. Only lightness and chroma move.
- paper `oklch(97.5% .006 195)` / dark `oklch(15% .012 205)`
- ink `oklch(21% .02 215)` / dark `oklch(94% .008 195)`
- accent `oklch(50% .11 185)` / dark `oklch(78% .10 185)` — one accent, links, numerals, focus, diagram highlight; ≤5% of a viewport.
- Removed: violet, seven per-project accents, gradients, grain, blobs, orbits, glass on cards.

## Typography
- Display: Bricolage Grotesque 600, always roman, tracking −0.02em
- Body: IBM Plex Sans 400/500
- Mono: IBM Plex Mono — one role only: technology tokens and labels
- Scale: major third (1.25), body 1.0625rem; `--text-display` = clamp(2.25rem, 4.4vw + .4rem, 3.75rem)

## Motion
Kept small, opacity + transform only, all off under `prefers-reduced-motion`:
- Hero: one staggered rise on load (title, lede, facts, actions, proof strip).
- Scroll reveal: sections, prose, results and figures fade up once. Content is only hidden when JS is present (`.js` on `<html>`).
- Hover: index rows tint and nudge the title 6px; the featured screenshot zooms 3%.
- Sticky walkthrough (`StickyWalkthrough.astro`, case studies with `walkthrough` frontmatter): a tall track holds a sticky stage; scroll progress slides one vertical strip of screenshots through the frame (translate only: pan down tall ones, then glide to the next) while the text panel cross-fades. Live only at ≥861px with motion allowed and JS on; otherwise steps render stacked (text, then its screenshot). Max 12 steps. Screenshots are real captures in a hairline frame, never drawn chrome.
- Pinned-visual list (`StickyProjects.astro`, /work/ "Additional client work"): the frame stays pinned on the left while long text blocks scroll on the right; a strip of images slides continuously with the block crossing the viewport centre, non-active text dims to 32%. Stacked (image above text) under 861px, reduced motion, or no JS.
- Colour/underline transitions at 160 ms; `:focus-visible` ring is instant.
- Glass: the sticky header and mobile menu use a translucent paper + `backdrop-filter` blur (purposeful, it floats over content). Nowhere else.

## CTA voice
Primary: ink-filled rectangle, 6px radius, 44px min height, hover → accent. Secondary: underlined text link (accent underline).
No pills, no arrows-as-decoration, no two-line labels (`white-space: nowrap`).

## Rules pages MUST follow
- Colours and fonts only through `var(--…)` tokens. No inline hex/oklch, no raw `font-family`.
- No fake browser/phone chrome: screenshots sit in a hairline-bordered `<figure>`.
- No eyebrows/section numbers unless the content is genuinely ordinal (AI workflow steps, contact checklist).
- Diagrams are inline SVG styled by `.dg-*` classes so they follow the theme.
- i18n: `src/views/*View.astro` take `lang`; routes are thin wrappers. Add copy to both EN and ES.
