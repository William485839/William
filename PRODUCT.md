# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro (static site, plain HTML and CSS in `.astro` components). Chosen by William on 2026-10-23 over plain HTML files, so the menu and footer are written once and the deal list lives in one data file.

## Users

Inferred from the live site (pkpartners.se), not yet confirmed by the company:

- Owners, boards and management of Nordic mid-size and large companies thinking about selling, buying, merging or raising capital. They usually arrive after a referral or a name in the press, and check whether the firm is senior, independent and has done deals like theirs.
- Financial investors (private equity) checking track record before a mandate.
- Students and young professionals looking for an investment-banking job or internship in Stockholm.

## Product Purpose

Marketing website for PK Partners AB, a partner-led M&A and corporate finance advisory firm in Stockholm (founded 2002). The site must make a visitor trust the firm enough to get in touch, and make it easy to reach the right person.

This repo is William's practice redesign of the live site. It does not replace pkpartners.se.

## Positioning

- Independent, partner-led advice: senior partners work on every deal themselves.
- Stockholm firm that is part of a European partnership through CASE CASSIOPEA (Paris, Frankfurt, Milan), with access to a global banking-group network, ABN AMRO for Benelux, and MAP Alliance for Latin America and Spain.
- Track record of about 60 transactions and more than SEK 250bn combined value since 2002, often cross-border, mostly sell-side.

## Operating Context

Visitors read on desktop at work and on phones between meetings. Most will look at the deal list and the team before contacting. Contact happens by phone or email; the live site has no contact form.

## Capabilities and Constraints

- Pages on the live site: Home, Who we are (+12 profile pages), What we do, Where we are, What we have done (42 deals), Join us, Contact us, Privacy policy.
- No team titles are published on the live site. Do not invent titles.
- Some deal parties are only shown as logos on the live site and could not be read; they are marked "to confirm" in the data.
- The live site and its images could not be downloaded from this build environment, so the real logo and photos are not in the repo yet.

## Brand Commitments

- Name: PK Partners (PK Partners AB). The logo pairs PK Partners with CASE CASSIOPEA.
- Language: English, formal and understated.
- Real taglines from the live site: "Bespoke service meets global reach.", "In case you need independent advice.", "International teamwork instead of just a network.", "Proven expertise in delivering value to our clients.", "Whether sell-side or buy-side – fully committed by your side."

## Evidence on Hand

- Key figures (live site): ~60 transactions, 11 M&A professionals, >SEK 250bn combined transaction value, founded 2002.
- Deal list: 42 transactions 2006–2026, with role, year and value where public (`src/data/deals.ts`).
- Team: 12 people with background and education from their profile pages (`src/data/team.ts`).
- Offices: Stockholm, Paris, Frankfurt, Milan with addresses, phones and emails.
- No testimonials, client quotes or press on the live site. Do not invent any.

## Product Principles

1. Show the record, don't describe it: deals and people carry the trust.
2. Discretion over noise: a firm that sells confidentiality should look calm and exact.
3. Every visitor can reach a named person in two clicks.
4. Keep every fact traceable to the live site; mark anything unconfirmed.

## Accessibility & Inclusion

Every company name must exist as real text, not only inside a logo image. WCAG 2.2 AA contrast and keyboard access.
