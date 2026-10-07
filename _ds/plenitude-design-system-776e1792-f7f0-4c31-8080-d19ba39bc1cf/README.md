# Plenitude Design System

A brand + UI system for **Plenitude Consulting** — a regulatory and financial-services consultancy with an innovation hub that ships RegTech products and managed services.

## Company context

Plenitude Consulting helps financial institutions navigate regulation, risk, and compliance. Their **Innovation Hub** is the product-and-services arm that houses:

- **RegTech Products** — software for regulatory / compliance workflows. Anchored on the Plenitude **blue** palette, extending the core with a range of secondary blues. Product logos follow the parent-brand construction.
- **Managed Service** — an operational offering (outsourced compliance / managed ops). Anchored on the Plenitude **green** palette.
- **Parent brand materials** — corporate-level communications (site, reports, decks) that use the graphic device and core-blue or white hero backgrounds.

The brand visual DNA is three angled "shards" — the top cut-away of the Plenitude icon, a geometric wedge that frames imagery of cities, skylines, and finance/tech abstractions. The shards read as growth, plurality, and forward motion.

## Sources

We were given:

- `uploads/Plenitude Logo Core RGB-Colour.svg` — primary wordmark (originally unstyled; fills injected).
- `uploads/Plenitude Icon_RGB_Colour.svg` — icon mark (5 angled shards).
- `uploads/Overview_image.png` — hero reference showing the graphic-device effect applied to city photography.
- A written brand-guidelines excerpt (logo rules, colour palette with Pantone / CMYK / RGB / HEX, typography = Lexend, imagery styles, graphic device construction, application rules).

No production codebase or Figma file was attached. UI kits are therefore a **principled interpretation** of the written guidelines — not a re-skin of existing screens. See **Caveats** at the bottom.

---

## Content fundamentals

Tone is **professional, confident, precise**. The audience is heads of compliance, risk officers, and financial-services executives — people who expect seriousness and measured claims.

- **Voice** — consultative and evidence-led. Plenitude explain *what they do and what it delivers* without hyperbole. "We help firms meet regulatory obligations" rather than "We revolutionise compliance."
- **Grammar** — UK English (organisation, colour, recognised, authorised). Oxford comma optional but consistent within a piece.
- **Person** — **"we"** when talking about Plenitude; **"you"** or **"your firm"** when addressing the reader. First-person singular is never used.
- **Casing** — **Sentence case** for headings, buttons, and nav. Title Case is reserved for proper nouns and product names (RegTech Products, Managed Service).
- **Product names** — always paired with the parent brand on first mention ("Plenitude RegTech Products"); shortened afterwards.
- **Numbers & claims** — quantified where possible ("reduces reporting effort by ~40%") and never without substantiation.
- **Emoji** — **never used**. Icons and the graphic device carry visual weight instead.
- **Abbreviations** — regulatory acronyms (MiFID II, FCA, AML, KYC, DORA) appear unexplained at expert-audience level and are spelled out on first mention in general-audience copy.
- **Calls to action** — short, verb-led, sentence case: "Talk to us", "Request a demo", "Read the report", "Download the briefing".

Example phrases that feel *on brand*:

- "Regulatory change, delivered."
- "Built by practitioners, for practitioners."
- "We help financial institutions meet their obligations — accurately, efficiently, and at scale."
- "A managed service for ongoing compliance — so your team can focus on the edge cases."

Phrases that feel *off brand* (avoid):

- "Game-changing compliance platform 🚀"
- "We're so excited to announce…"
- "Supercharge your regulatory workflow"

---

## Visual foundations

### Colour

The palette is **cool, institutional, and binary** — deep navy paired with a bright progression of greens and cyans. There is no warm accent. Core blue (`#002959`) and core green (`#47A340`) are the two primaries; light green (`#78BF26`) is an **accent only** and must not dominate a layout. Light blue (`#99DBF7`) is the only secondary that may be used as a background tint; the rest of the secondary palette is for charts, product accents, and sub-brand systems.

Backgrounds are **predominantly white or core blue**. Light blue is the only exception. The palette is not a gradient system — shards sit flat against each other; avoid blue→purple or blue→green gradients.

### Typography

**Lexend** is the sole family — used for everything from display to fine print. Weights in play: Light (300), Regular (400), Medium (500), Bold (700), Black (900). Display uses Black; headings use Bold; body is Regular; eyebrows / metadata use Bold uppercase with wide tracking. Line-length is disciplined (~70 characters max). No serif, no mono-as-body.

### Motifs & layout

- **The graphic device** (three shards, top cut-away) is the single most important visual motif. It appears on hero sections, covers, and digital headers — never repeated as a pattern and never decorative inside body copy.
- **Shard edges** — acute angles (~10–12° from vertical). When translated to CSS backgrounds, use `clip-path` polygons rather than rounded shapes.
- **Imagery** — city skylines (jurisdictional), abstract finance/tech composites, and motion-blurred commerce shots. All imagery is tinted via the graphic device's "Colour" effect — blue or green, depending on context. Never full-colour / unaltered photography in hero positions.
- **Transparency & blur** — used sparingly. The graphic device's centre panels are *transparent* (to show imagery behind), and light blue overlays are semi-transparent (around 80–90% opacity). No aqua-style glass or frosted blur.

### Spacing, layout, and rhythm

- **4px base grid.** Major layout rhythm is 8px; hero sections use 48–96px vertical spacing.
- **Generous whitespace** — Plenitude is corporate, not dense. Marketing pages breathe; product screens are information-rich but gridded.
- **Max content width** ~1200px; hero imagery full-bleed.

### Corner radii

**Angular-leaning.** Inherit the graphic-device's geometry: structural panels = 0, cards = 4–8px, buttons = 4px (never pill by default), inputs = 4px. Pill radius exists only for status chips and avatars.

### Shadows & borders

- Shadows are **soft and cool-tinted** (`rgba(0, 41, 89, x)`) — never warm greys. Three levels only (1, 2, 3). Elevation is rare; Plenitude leans on borders and background tints for separation.
- Borders are 1px, `--border-1` (`#E2E8F0`) or stronger. Focus rings use a 3px mid-blue halo.

### Cards & surfaces

Cards are **flat panels** with a 1px border and `--radius-4` (8px), no shadow at rest. Shadow-2 appears on hover for clickable cards. Hero cards may use the graphic device as a corner treatment.

### Hover & press states

- **Buttons** — hover darkens by ~8% (core-blue → `#00224A`), press darkens further and reduces scale by 1%.
- **Links** — underline on hover only; colour shift from core-blue to mid-blue.
- **Cards (clickable)** — elevate from shadow-0 to shadow-2, border stays.
- **Icon buttons** — background tint `rgba(0, 41, 89, 0.06)` on hover.

### Motion

- Default duration `--dur-base` = 200ms with `--ease-out`.
- Transforms are **restrained**: fades and small translates (2–4px), never bounces, never spring.
- Page-level transitions: subtle cross-fade (150ms). The graphic device never animates in marketing contexts.
- Loading states: indeterminate bar in core-blue or a pulsing 3-dot in core-green.

### Imagery colour vibe

**Cool, high-contrast, architectural.** Glass, steel, sunset-through-skyline, abstract circuitry. Imagery is tinted **blue or green** via the graphic device's duotone effect — never left full-colour. No grain, no warm golden-hour photography unless it's a sunset skyline being overlaid.

### Iconography

See **Iconography** section below.

---

## Iconography

Plenitude's brand guidelines do not specify an icon system, so this design system sets the following rule:

- **Primary system — Lucide** (CDN-linked). Lucide's clean 1.5–2px stroke, 24×24 grid, and geometric construction match Lexend and the graphic device's angular vocabulary. This is a **substitution** — flag it to the brand team for approval.
- Stroke width: **1.75px**. Corners: rounded. Colour: inherits `currentColor`; default is `--fg-2`, or `--core-blue` when emphasised.
- Sizes: 16, 20, 24, 32, 48. Always on the 4px grid.
- **No emoji** — ever. Including in microcopy, empty states, and success toasts.
- **No decorative illustration** beyond (a) the Plenitude icon mark, (b) the graphic device applied to photography. Custom hero illustrations are not part of this system.
- **Sub-brand marks** follow the parent-brand logo construction. Product marks under RegTech Products use the parent logo with a product wordmark in the same Lexend treatment.

Assets copied into `assets/`:

- `plenitude-logo-color.png` / `-white.svg` / `-darkgrey.svg` — wordmark, three approved versions.
- `plenitude-icon-color.png` / `-white.svg` / `-darkgrey.svg` — icon mark.
- `overview-graphic-device.png` — the hero reference (graphic device on city imagery).
- Originals preserved as `plenitude-logo-original.svg` and `plenitude-icon-original.svg`.

Lucide is linked from CDN at the UI-kit level via `<script src="https://unpkg.com/lucide@latest"></script>`.

---

## Index — what lives where

```
/
├── README.md                    ← you are here
├── SKILL.md                     ← Agent-Skills entry point
├── colors_and_type.css          ← CSS variables (colour, type, spacing, shadows, motion)
├── assets/                      ← logos, icon mark, reference imagery
│   ├── plenitude-logo-color.png
│   ├── plenitude-logo-white.png
│   ├── plenitude-logo-color.png
│   ├── plenitude-icon-color.png
│   ├── plenitude-icon-white.png
│   ├── plenitude-icon-color.png
│   ├── plenitude-logo-original.svg
│   ├── plenitude-icon-original.svg
│   └── overview-graphic-device.png
├── preview/                     ← design-system cards (shown in the Design System tab)
│   ├── brand-*.html
│   ├── colors-*.html
│   ├── type-*.html
│   ├── spacing-*.html
│   └── components-*.html
└── ui_kits/
    ├── website/                 ← Plenitude marketing site (parent brand)
    │   ├── index.html
    │   └── *.jsx
    └── regtech/                 ← RegTech Products app UI kit
        ├── index.html
        └── *.jsx
```

---

## Caveats — please iterate with me

- **No codebase or Figma** was provided, so UI kits are an interpretation of the written brand rules. They are **pixel-honest to the palette and type**, but the *specific product screens* of Plenitude RegTech Products and Managed Service are imagined compositions. **Please attach real screens (Figma link or screenshots) and I will re-skin the kits to match.**
- **Lexend** is served from the brand-provided TTFs in `fonts/` (all 9 weights, Thin → Black). No CDN or Google Fonts dependency.
- **Icon system (Lucide)** is a substitution. If Plenitude have an approved icon library, share it and I will switch.
- **Graphic device** is rendered via CSS `clip-path` in the UI kits — close to the guidelines but not pixel-identical to the master SVG. Happy to swap for an authored SVG if you provide one.
- **Secondary brand colours** — I mapped them to neutral CSS vars but have not yet built a dedicated RegTech-product sub-brand surface; flag if you want a full RegTech theme file.

**The clear ask:** review the Design System tab, and (a) confirm the palette / type / iconography feel right, (b) attach real product screens or a Figma so I can replace the imagined RegTech app, and (c) confirm Lucide-as-icon-system before I propagate it further.
