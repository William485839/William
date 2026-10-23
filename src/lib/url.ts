// The site lives in a sub-folder on GitHub Pages (/William/), so every
// internal link goes through this helper to get that folder in front.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const url = (path: string) => `${base}${path}`;
