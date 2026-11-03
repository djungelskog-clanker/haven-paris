# Haven Paris

The website for [Haven Paris](https://haven.djungelskog.lol), a free game jam
for 13-18 year olds on 14-15 November 2026 at AGECA (Paris 11e), part of
[Hack Club Haven](https://haven.hackclub.com).

It is built from the [hackclub/haven](https://github.com/hackclub/haven) site:
the same SvelteKit components and artwork, trimmed down to one static page in
French, with a teachers section and a venue card added.

## Editing

All the copy lives in [`src/lib/data/paris.ts`](src/lib/data/paris.ts): the
schedule, FAQ, sponsors, venue and signup link. The teachers and venue sections
are [`Teachers.svelte`](src/lib/components/Teachers.svelte) and
[`Venue.svelte`](src/lib/components/Venue.svelte).

The steps notebook uses `static/images/steps/step-bg-desktop-fr.webp`, the
original artwork with its English captions painted out; the French captions are
positioned over it in [`Steps.svelte`](src/lib/components/Steps.svelte).

## Running

```sh
npm install
npm run dev     # local dev server
npm run build   # static site in build/
```

`build/` is a plain static site (adapter-static) and can be served from
anywhere, e.g. GitHub Pages; `static/CNAME` sets the custom domain.
