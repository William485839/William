---
name: PK Partners (practice redesign)
description: The financial-press announcement page. Every deal is a tombstone.
colors:
  paper: "#fafafa"
  paper-2: "#eeeeec"
  salmon: "#f1d6c6"
  slip: "#f8e9df"
  ink: "#161514"
  ink-2: "#4a4542"
  ink-on-salmon: "#4d3b33"
  blue: "#1d4266"
  blue-deep: "#142f49"
  paper-3: "#e4e4e1"
  on-ink: "#dedede"
  on-ink-2: "#c4c4c4"
typography:
  hero:
    fontFamily: "Schibsted Grotesk Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.75rem, 1.4rem + 5vw, 6rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.04em"
  display:
    fontFamily: "Schibsted Grotesk Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.5rem, 1.4rem + 4.6vw, 5.5rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  heading:
    fontFamily: "Schibsted Grotesk Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.75rem, 1.3rem + 1.8vw, 2.75rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  tagline:
    fontFamily: "Schibsted Grotesk Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.375rem, 1rem + 1.2vw, 2.125rem)"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  lead:
    fontFamily: "Schibsted Grotesk Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.25rem, 1.1rem + 0.6vw, 1.5rem)"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "-0.01em"
  small:
    fontFamily: "Schibsted Grotesk Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0em"
  wordmark-footer:
    fontFamily: "Schibsted Grotesk Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(3.5rem, 1rem + 12vw, 13rem)"
    fontWeight: 800
    lineHeight: 0.85
    letterSpacing: "-0.05em"
  city:
    fontFamily: "Schibsted Grotesk Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2rem, 1rem + 2.6vw, 3.5rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Schibsted Grotesk Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "0em"
rounded:
  none: "0px"
spacing:
  slip-gap: "clamp(0.5rem, 0.3rem + 0.6vw, 0.875rem)"
  gutter: "clamp(1rem, 0.5rem + 2.5vw, 3rem)"
  section: "clamp(5rem, 3rem + 8vw, 12rem)"
components:
  button-primary:
    backgroundColor: "{colors.blue}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "0.85em 1.3em"
  button-primary-hover:
    backgroundColor: "{colors.blue-deep}"
  button-quiet:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.85em 1.3em"
  tombstone:
    backgroundColor: "{colors.slip}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "clamp(1.5rem, 1rem + 1.5vw, 2.25rem) 1.25rem"
  filter-chip:
    backgroundColor: "{colors.slip}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.6em 1em"
  filter-chip-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
---

# Design System: PK Partners (practice redesign)

## Overview

The site is built like the page of a financial newspaper that carries deal announcements. The unit of the whole site is the **tombstone**: the formal notice a bank prints when a deal closes ("Clinstorage, sold to RHP. PK Partners: adviser to seller. 2026"). The home page opens on a wall of them, and the deals page is the full record of 42.

The rest of the site stays quiet and exact, like a firm that sells discretion: white newsprint, black ink, one grotesk, square corners, and no ornament. Trust comes from the record and the named people, not from decoration.

## Colors

### Primary
- **Blue** `#1d4266`: links and the one action per view (call, email, contact). Hover goes to **Blue deep** `#142f49`.

### Neutral
- **Paper** `#fafafa`: the page.
- **Paper 2** `#eeeeec`: one tone step down, for quiet panels (services, team cards, profile facts, offices field).
- **Ink** `#161514`: text, the footer field, selected filter chips, the Stockholm contact panel.
- **Ink 2** `#4a4542`: secondary text on paper.
- **Paper 3** `#e4e4e1`: hover on a paper 2 panel.
- **On ink** `#dedede` and **On ink 2** `#c4c4c4`: secondary and tertiary text on the ink field.

### Tertiary: the deal colours
- **Salmon** `#f1d6c6`: the field behind deals (home wall, deals page, service proof).
- **Slip** `#f8e9df`: a tombstone, one tone lighter than the salmon.
- **Ink on salmon** `#4d3b33`: secondary text inside the deal regions.

### Named Rules
- **Salmon means deals.** Salmon and slip are only used where deals are shown. People, offices and contact panels use paper, paper 2 or ink.
- **Tone steps, not lines.** Surfaces are separated by a step in background tone. There are no borders, hairlines or outlined boxes.

## Typography

One family: **Schibsted Grotesk** (variable, self-hosted via Fontsource), a Nordic newspaper grotesk.

### Hierarchy
- **Hero** (home h1): up to 6rem, weight 700, -0.04em.
- **Display** (page h1): up to 5.5rem, weight 700, -0.03em.
- **Heading** (h2): up to 2.75rem, weight 700.
- **Tagline**: up to 2.125rem, weight 500. The company's own taglines are set here, as paragraphs.
- **Lead**: up to 1.5rem. Also tombstone client names (weight 800).
- **Body**: 17px, line height 1.55, max 65ch.
- **Small**: 15px, for the adviser line and notes.
- **City** (home offices, up to 3.5rem) and **Footer wordmark**: the two large display moments below the hero.

### Named Rules
- **Two lines at most.** Every heading fits on two lines at every width. Long taglines go in a tagline paragraph, not the heading.
- **Centre only the tombstone.** All text is left-aligned except inside tombstones, which are centred like printed notices.
- **Proportional figures.** Never use tabular numerals in running text or values: this face spaces the decimal point out ("2 . 5bn").

## Layout

- One frame: max 90rem wide, equal side gutters (16 to 48px), used by the header, every section and the footer.
- Inner pages open with a split head on wide screens: the page title on the left (5 columns), the tagline and lead on the right (7 columns).
- Sections are 80 to 192px apart. Neighbouring sections never share a layout.
- Deal walls are tight grids with a small gap (8 to 14px) on a salmon field. The biggest deals (over about SEK 20bn) take two slots on the deals page.
- The footer is a designed close: the name at full width, then the four offices.

## Elevation & Depth

Flat. No shadows anywhere. Depth comes only from tone steps.

## Shapes

Square corners on everything: buttons, chips, slips, panels.

## Components

### Buttons
Square, flat, one fill (blue, or paper on a dark panel). Press scales to 0.97 in 160ms.

### Chips
The deal filters: slip-coloured chips, ink when selected, with the count beside the label. They are real radio buttons, so they work with the keyboard.

### Cards / Containers
Panels in paper 2 for quiet content. Never nested.

### Navigation
Wordmark, five plain links and one Contact us button. The current page and hovered links get a 2px underline that grows from the left. Below 68rem the links fold behind a Menu button.

### Tombstone (signature component)
Client name (bold), what happened, the value if public, then after extra space "PK Partners: adviser to …" in italic, then the year in bold at the foot. A large size exists for the biggest deals.

## Do's and Don'ts

### Do:
- Do keep every company name as real text, never only inside a logo.
- Do add new deals in `src/data/deals.ts` so every page picks them up.
- Do use the company's own photos when they arrive, large and square-cornered.

### Don't:
- Don't use salmon outside deal regions.
- Don't add borders, shadows, gradients or rounded corners.
- Don't put small labels above headings.
- Don't invent job titles, client quotes or numbers the company has not published.
