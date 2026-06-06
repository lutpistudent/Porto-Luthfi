# Deployment Documentation

## Build Production

```bash
npm run build
```

Output build ada di folder `dist/`.

## Environment Variables

| Variable | Keterangan | Wajib |
|----------|------------|-------|
| `VITE_GITHUB_USERNAME` | GitHub username untuk Projects section | Ya |

Certificates tidak butuh environment variable karena datanya disimpan langsung di `src/data/certifications.ts`.

## Netlify

1. Import repository.
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Set `VITE_GITHUB_USERNAME`.

## Vercel

1. Import project dari GitHub.
2. Framework preset: Vite.
3. Build command: `npm run build`
4. Output directory: `dist`
5. Set `VITE_GITHUB_USERNAME`.

## GitHub Pages

Jika repository butuh base path, tambahkan di `vite.config.ts`:

```ts
export default defineConfig({
  base: '/nama-repository/',
})
```

Lalu build:

```bash
npm run build
```
