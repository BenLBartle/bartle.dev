# bartl.io

Ben Bartle's blog, built with [Astro](https://astro.build/).

## Development

```
npm install
npm run dev
```

## Building

```
npm run build
npm run preview
```

## Content

Blog posts live in `src/content/blog/<slug>/index.md`, each with any colocated images. The "Uses" page lives in `src/content/uses/index.md`. The `/slides/push/` presentation in `public/slides/push/` is a standalone static site, unrelated to Astro.

## Deployment

Deploys to Netlify (see `netlify.toml`). `public/_redirects` and `public/robots.txt` are copied verbatim into the build output.
