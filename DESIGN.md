---
name: PORCELANA
description: Aesthetic dental clinic in Sopot; warm porcelain white, stone and champagne gold, drawn with one gold smile curve.
colors:
  white: "#ffffff"
  paper: "#faf8f4"
  stone: "#efe9df"
  hero-ground: "#eeedeb"
  champagne: "#c2a46c"
  champagne-bright: "#d3b885"
  champagne-ink: "#8a6a32"
  gold-line: "#d9c49b"
  graphite: "#1f1d1a"
  graphite-soft: "#57524a"
  line: "#e7e0d4"
  error-brick: "#a5361f"
  open-green: "#3f7a3a"
  graphite-hover: "#3a362f"
  on-gold-muted: "#3a3227"
  placeholder: "#8b8478"
  footer-text: "#e9e3d8"
  footer-rule: "#3d3830"
  footer-muted: "#b9b1a3"
  header-veil: "rgba(255, 255, 255, .96)"
  bar-veil: "rgba(255, 255, 255, .85)"
  button-veil: "rgba(255, 255, 255, .7)"
typography:
  display:
    fontFamily: "Albert Sans, system-ui, sans-serif"
    fontSize: "clamp(44px, 6vw, 88px)"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Albert Sans, system-ui, sans-serif"
    fontSize: "clamp(32px, 4vw, 54px)"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  panel-title:
    fontFamily: "Albert Sans, system-ui, sans-serif"
    fontSize: "clamp(26px, 2.4vw, 34px)"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  quote:
    fontFamily: "Albert Sans, system-ui, sans-serif"
    fontSize: "clamp(24px, 2.8vw, 36px)"
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Albert Sans, system-ui, sans-serif"
    fontSize: "21px"
    fontWeight: 600
    lineHeight: 1.25
  list-item:
    fontFamily: "Albert Sans, system-ui, sans-serif"
    fontSize: "19px"
    fontWeight: 500
    lineHeight: 1.3
  lead:
    fontFamily: "Albert Sans, system-ui, sans-serif"
    fontSize: "clamp(18px, 1.5vw, 21px)"
    fontWeight: 400
    lineHeight: 1.65
  body:
    fontFamily: "Albert Sans, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Albert Sans, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 600
    lineHeight: 1.4
  button:
    fontFamily: "Albert Sans, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 600
    lineHeight: 1.15
  caption:
    fontFamily: "Albert Sans, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.5
  wordmark:
    fontFamily: "Albert Sans, system-ui, sans-serif"
    fontSize: "19px"
    fontWeight: 600
    letterSpacing: "0.28em"
rounded:
  field: "12px"
  base: "14px"
  surface: "21px"
  form: "22.4px"
  pill: "999px"
  circle: "50%"
spacing:
  gutter-sm: "14px"
  gutter: "24px"
  block: "28px"
  head-gap: "44px"
  section: "clamp(72px, 9vw, 128px)"
  container: "1240px"
components:
  button-primary:
    backgroundColor: "{colors.champagne}"
    textColor: "{colors.graphite}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.champagne-bright}"
  button-dark:
    backgroundColor: "{colors.graphite}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  button-dark-hover:
    backgroundColor: "{colors.graphite-hover}"
  button-line:
    backgroundColor: "{colors.button-veil}"
    textColor: "{colors.graphite}"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  button-line-hover:
    backgroundColor: "{colors.graphite}"
    textColor: "{colors.white}"
  input:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.graphite}"
    rounded: "{rounded.field}"
    padding: "13px 16px"
    height: "54px"
  input-focus:
    backgroundColor: "{colors.white}"
  chip:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.graphite}"
    rounded: "{rounded.field}"
    padding: "12px 6px"
  chip-selected:
    backgroundColor: "{colors.graphite}"
    textColor: "{colors.white}"
  treatment-item:
    backgroundColor: "transparent"
    textColor: "{colors.graphite}"
    typography: "{typography.list-item}"
    rounded: "{rounded.base}"
    padding: "18px 20px"
  treatment-item-active:
    backgroundColor: "{colors.stone}"
  treatment-panel:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.surface}"
  card:
    backgroundColor: "{colors.white}"
    rounded: "{rounded.surface}"
    padding: "26px 28px"
  step-number:
    backgroundColor: "{colors.white}"
    textColor: "{colors.champagne-ink}"
    rounded: "{rounded.circle}"
    size: "56px"
---

# Design System: PORCELANA

## Overview

**Creative North Star: "The Porcelain Atelier"**

A clinic that reads like a ceramist's studio, not a surgery with blue tiles. Warm white and pale stone carry almost every surface; champagne gold appears as one thin smile curve, the primary pill, the step rings, and once as a full-bleed field for patient voices. Graphite type sits on top in a single humanist sans at medium weight, sentence case, large. Depth comes from alternating grounds (white, stone, gold, graphite), not from boxes and shadows.

The page is light from the first pixel. The hero is a pale ground (hero-ground) with the patient portrait masked into it from the right, so photo and page are one surface. Sections alternate white and stone; content sits on full fields and hairline-ruled lists rather than tiled cards. Motion is quiet: a 2.2s settle on the hero image, 2px hover lifts on buttons, gold underline sweeps in the nav, and nothing that shifts layout.

**Key Characteristics:**
- Light, warm, low-contrast grounds with one gold accent family.
- Albert Sans 400–600 only, sentence case everywhere except the PORCELANA wordmark.
- Pill buttons, gently rounded surfaces (14px base), circular step rings.
- Hairline rules (1px line, 1.5px graphite top rule) structure lists, tables and FAQ.
- The gold smile curve is the only mark and the only ornament.

## Colors

Warm neutrals stepped from white to stone, one champagne gold in three strengths, graphite ink.

### Primary
- **Champagne Gold** (champagne): primary button fill, smile-curve stroke, step rings, status dot, focus-on-field border, scrollbar, and the full opinie field. Text on it is always graphite.
- **Bright Champagne** (champagne-bright): hover state of gold buttons, selection highlight, gold headings and links on the graphite footer, chip sub-label when selected.
- **Champagne Ink** (champagne-ink): gold as text and line on light grounds: links, doctor specialties, step numerals, FAQ plus sign, tick marks, focus outline, active hours row, featured price.
- **Gold Line** (gold-line): the 1.5px connector line behind the process steps.

### Neutral
- **White** (white): default page ground, form, card, step-ring fill.
- **Porcelain Paper** (paper): treatment panel, inputs, chips, hovered list items, featured price row, theme-color.
- **Stone** (stone): alternate section ground (proces, klinika, wizyta) and the active treatment item.
- **Hero Ground** (hero-ground): hero only; a neutral grey-white matched to the portrait's backdrop so the mask fade is seamless.
- **Graphite** (graphite): all primary text, dark button, selected chip, footer ground, 1.5px top rules.
- **Soft Graphite** (graphite-soft): secondary text, leads, table descriptions, captions.
- **Line** (line): 1px dividers, input and chip borders, header bottom rule.
- **Secondary values in use:** graphite-hover (dark button hover), on-gold-muted (figcaptions on the gold field), placeholder (input placeholder), footer-text / footer-rule / footer-muted (graphite footer), error-brick and open-green (validation and open-now status). Veils: header-veil (solid header on scroll and open menu), bar-veil (hero address bar), button-veil (line-button fill over the hero). `#000` appears only as a mask-image alpha stop. The favicon strokes the smile in `#a8864b`, the contract's original gold.

### Named Rules
**The One Gold Rule.** Gold is one family in three strengths: champagne fills, champagne-bright on dark and on hover, champagne-ink as text. No second accent hue; green and brick exist only as status.

**The Ink-On-Gold Rule.** Anything on a champagne fill is graphite, never white.

**The Gold Text Ground Rule.** champagne-ink as body-size text sits on white or paper only; on stone it falls under 4.5:1.

## Typography

**Display Font:** Albert Sans (with system-ui, sans-serif)
**Body Font:** Albert Sans

**Character:** One clean, slightly geometric humanist sans doing all the work through size and weight 400–600. Large, light-feeling headings at weight 500 with tight negative tracking; no uppercase, no italics.

### Hierarchy
- **Display** (500, clamp(44px, 6vw, 88px), 1, -0.035em): hero headline only, max ~9.5em wide, balanced. Mobile clamp(36px, 10.5vw, 46px).
- **Headline** (500, clamp(32px, 4vw, 54px), 1.08, -0.02em): every section heading.
- **Panel title** (500, clamp(26px, 2.4vw, 34px), 1.15): treatment panel heading. Also 32px for the form success heading and 42px for the consultation price figure.
- **Quote** (400, clamp(24px, 2.8vw, 36px), 1.3): the lead testimonial only.
- **Title** (600, 21px, 1.25): step titles, doctor names.
- **List item** (500, 19px, 1.3): treatment picker items, price-table rows, FAQ summaries (17px on mobile).
- **Lead** (400, clamp(18px, 1.5vw, 21px)): hero lead, max 40ch.
- **Body** (400, 17px, 1.65; 16px under 640px): paragraphs, max 42–62ch.
- **Label** (600, 15px): form labels, footer headings, status text; 15px 400–500 for notes and captions.
- **Caption** (14px): errors, form note, footer small print.
- **Secondary steps in use:** 13.5px (chip sub-label), 14.5px (mobile bar and price descriptions), 15.5px (price descriptions), 16px (step text, buttons, inputs, nav), 18px (testimonial quotes), 20px (prices), 22px (step numerals), 24px (footer wordmark).
- **Wordmark** (600, 19px, 0.28em tracking): PORCELANA in capitals, logo only.

### Named Rules
**The Sentence Case Rule.** All text is sentence case. The tracked capitals of the PORCELANA wordmark are a logotype, not a style to reuse for labels.

**The Medium Ceiling Rule.** Headings top out at 500, UI at 600. Weight 700 is loaded but never used.

**The Tabular Price Rule.** Prices, hours and fact values use tabular numerals.

## Layout

Container min(1240px, 100% - 40px) (100% - 32px under 640px). Sections pad clamp(72px, 9vw, 128px) vertically; section heads are a split row (headline left, a short 46ch note right, 44px below). Two-column grids are asymmetric (.7–.85fr text to 1.15–1.6fr content) and collapse to one column at 1000px. Rhythm: 6px list gaps, 14px tight gutters, 24px card gutters, 28px block gaps, 40–56px between larger groups. The hero is full-viewport with the portrait in the right 56%, text left; under 640px the portrait takes the top 46% and fades down into the ground. A fixed gold pill CTA appears at the bottom on tablet and mobile, hidden while hero or form are in view. Header is 76px (64px mobile), transparent over the hero, veiled white once scrolled.

## Elevation & Depth

Flat by default; depth is tonal (white, paper, stone, gold, graphite fields alternate). Shadows are soft, warm and few.

### Shadow Vocabulary
- **Gold button glow** (`box-shadow: 0 10px 24px -14px rgba(138, 106, 50, .9)`): under gold buttons only.
- **Form lift** (`box-shadow: 0 30px 60px -40px rgba(60, 45, 20, .45)`): the booking form, the one raised surface.
- **Floating CTA** (`box-shadow: 0 14px 28px -12px rgba(60, 45, 20, .55)`): mobile fixed button.
- **Menu drop** (`box-shadow: 0 24px 30px -24px rgba(0, 0, 0, .3)`): mobile nav sheet.
- **Header rule** (`box-shadow: 0 1px 0 #e7e0d4`): solid header.

### Named Rules
**The Fields Not Cards Rule.** Separate content with ground changes and hairlines. Only the form and the consultation card are bounded surfaces.

## Shapes

Porcelain-soft: rounded but never bubbly. Base radius 14px on list items; 21px (1.5x) on panels, photos and cards; 22.4px on the form; 12px on inputs and chips; full pills for every button; circles for step rings and status dots. Photos are always rounded at 21px except the hero portrait, which is masked, not framed. Lines are 1px line-color hairlines, with 1.5px graphite top rules opening tables, the FAQ and testimonials.

**The Smile Curve Rule.** The only mark is one SVG path (`M2 3c7 13 21 13 28 0`, 32x16, round caps, 2.4–2.6 stroke) in champagne: beside the wordmark, as the testimonial mark (graphite on gold), and drawn in on form success.

## Components

### Buttons
- **Shape:** full pill (999px), 1.5px border, min-height 52px (58px large, 46px in nav).
- **Primary:** champagne fill, graphite text, 600 16px, 14px 28px padding (16px 32px large, 17px), gold glow shadow.
- **Hover / Focus:** champagne-bright and a 2px lift over .25s with cubic-bezier(.16, 1, .3, 1); focus is a 2px champagne-ink outline at 3px offset.
- **Dark:** graphite fill, white text; hover graphite-hover with lift. Used inside the treatment panel.
- **Line:** button-veil fill, graphite border and text; hover inverts to graphite.

### Chips
- **Style:** four radio tiles, paper fill, 1.5px line border, 12px radius, 600 label with a 13.5px sub-label.
- **State:** hover gold border; selected graphite fill, white text, champagne-bright sub-label.

### Cards / Containers
- **Corner Style:** 21px.
- **Background:** white on stone.
- **Shadow Strategy:** none; 1px line border.
- **Internal Padding:** 26px 28px.

### Inputs / Fields
- **Style:** paper fill, 1.5px line border, 12px radius, 54px min height, 16px text, champagne-ink caret; select uses a champagne-ink chevron.
- **Focus:** border turns champagne, fill turns white.
- **Error:** error-brick border and 14px 500 message below.

### Navigation
- 16px 500 graphite links, 30px apart, with a 2px gold underline that sweeps in on hover; gold pill CTA at the end. Under 1000px a two-bar burger opens a white sheet with ruled 17px rows and a full-width CTA.

### Treatment Picker (signature)
A tab list of treatments (list-item type, "od" price in 14px soft graphite) beside a paper panel split image | body. Active item takes stone; hover takes paper. The panel shows title, description, a ruled fact list (time, visits, price in tabular 600) and a dark pill CTA pinned to the bottom. Image swaps fade to .3 opacity, no layout movement.

### Numbered Process
Four columns joined by a 1.5px gold-line rule through 56px white circles with 1.5px champagne border and 22px 600 champagne-ink numerals; 21px titles, 16px soft text. Stacks with the rule removed under 1000px.

### Patient Voices Field
Full champagne section: graphite smile mark, 36px lead quote, then two quotes under 1.5px graphite top rules; captions in on-gold-muted with graphite names.

### Footer
Graphite ground, footer-text copy, champagne-bright headings and small-print links, white links, footer-rule divider, wordmark at 24px with a gold pill CTA.

## Do's and Don'ts

### Do:
- **Do** keep every surface on white, paper, stone, hero-ground, champagne or graphite.
- **Do** put graphite text on champagne, and use champagne-ink for gold text on white or paper.
- **Do** use pills for every button and 14/21px radii for surfaces.
- **Do** separate lists, prices and FAQ with 1px line hairlines under a 1.5px graphite top rule.
- **Do** match a hero ground to its photo's backdrop and mask the photo into it.
- **Do** keep motion to colour, 2px lifts and opacity; honour prefers-reduced-motion.

### Don't:
- **Don't** use uppercase labels, tracked caps or small headings above section titles; the only capitals are the wordmark.
- **Don't** add a second accent hue or blue clinical tones.
- **Don't** wrap sections in shadowed card grids; use fields and hairlines.
- **Don't** set headings heavier than 500 or use weight 700.
- **Don't** add icons or ornaments beyond the smile curve and the drawn tick.
