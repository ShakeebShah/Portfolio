# Shakeeb Khalid — Portfolio

Personal portfolio for Muhammad Shakeeb Khalid, Full Stack MERN Developer.
Built with React + Vite, Tailwind CSS v4, Framer Motion, and an interactive
Three.js (react-three-fiber) hero visualizing the MERN stack.

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```

Output goes to `dist/`.

## Deploy

### Netlify
1. Push this folder to a GitHub repo.
2. In Netlify: **Add new site → Import from Git**, pick the repo.
3. Build command: `npm run build`, publish directory: `dist` (already set in `netlify.toml`).

### GitHub Pages / Vercel
Any static host works — just serve the `dist/` folder after `npm run build`.

## Editing content

All personal copy (name, summary, skills, experience, education, project
descriptions) lives in one place: `src/data/content.js`. Screenshots for
projects live in `public/images/`.

## Adding the Multi-Vendor Marketplace screenshots

The third project card is text-only for now. Drop its screenshots into
`public/images/` and add entries to the `images` array for the
`multivendor` project in `src/data/content.js`.
