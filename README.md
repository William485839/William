# PK Partners, practice redesign

A practice rebuild of [pkpartners.se](https://www.pkpartners.se/), made by William to learn web design. It is not the real company site.

## Run it on your computer

You need [Node.js](https://nodejs.org/) 22.12 or newer.

```sh
npm install      # downloads Astro and the font, once
npm run dev      # starts the site at http://localhost:4321 and reloads when you save
npm run build    # makes the finished site in the dist/ folder
```

## Where things are

| File or folder | What it is |
| --- | --- |
| `src/pages/` | One file per page. The file name is the web address: `join-us.astro` becomes `/join-us/`. |
| `src/pages/who-we-are/[slug].astro` | One template that makes a page for every person in the team. |
| `src/layouts/Base.astro` | The frame around every page: the menu at the top and the footer. Change it once, every page changes. |
| `src/components/Tombstone.astro` | One deal card ("tombstone", the formal way banks announce a finished deal). |
| `src/data/deals.ts` | All 42 deals. Add a new deal here and it shows up on the home page and the deals page. |
| `src/data/team.ts` | The 12 people and their backgrounds. |
| `src/data/offices.ts` | The four offices and the partner network. |
| `src/styles/global.css` | All colours, font sizes and spacing, as named tokens at the top (`--salmon`, `--ink`, ...). |
| `PRODUCT.md` | What the site is for and who it is for. |

## Still to do

- Add the real logo and team photos (they could not be downloaded when this was built).
- Check three deals whose company names were only in logo pictures (marked "to be confirmed").
- Ask PK Partners whether people's job titles should be shown (the live site has none).
