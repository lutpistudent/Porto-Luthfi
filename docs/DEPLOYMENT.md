# Deployment Documentation

## Ringkasan

Project ini adalah aplikasi Vue 3 + Vite yang dideploy sebagai static frontend. Output production berada di folder `dist/`.

## Prerequisites

- Node.js sesuai versi yang dipakai project.
- Dependency sudah terinstall dengan `npm install`.
- Environment variable `VITE_GITHUB_USERNAME` sudah disiapkan jika ingin menampilkan Projects dari GitHub.

## Environment Variables

| Variable | Fungsi | Wajib |
| --- | --- | --- |
| `VITE_GITHUB_USERNAME` | Username GitHub untuk section Projects | Wajib untuk fitur Projects |

Contoh `.env`:

```env
VITE_GITHUB_USERNAME=lutpistudent
```

Data profile, skills, certifications, experience, dan education tidak memakai environment variable karena disimpan sebagai static data di `src/data/`.

## Local Build

Jalankan build production:

```bash
npm run build
```

Output:

```text
dist/
```

Preview hasil build:

```bash
npm run preview
```

## Quality Check

Perintah yang biasa dipakai sebelum deploy:

```bash
npm run type-check
npm run build
```

Jika menjalankan command di PowerShell Windows dan `npm` terkena execution policy, gunakan:

```bash
npm.cmd run build
```

## Netlify

1. Import repository ke Netlify.
2. Set build command ke `npm run build`.
3. Set publish directory ke `dist`.
4. Tambahkan environment variable `VITE_GITHUB_USERNAME`.
5. Deploy.

## Vercel

1. Import project dari GitHub.
2. Pilih framework preset `Vite`.
3. Set build command ke `npm run build`.
4. Set output directory ke `dist`.
5. Tambahkan environment variable `VITE_GITHUB_USERNAME`.
6. Deploy.

## GitHub Pages

Jika repository memakai base path, tambahkan konfigurasi `base` di `vite.config.ts`:

```ts
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/nama-repository/',
})
```

Setelah itu jalankan:

```bash
npm run build
```

Upload isi folder `dist/` sesuai workflow GitHub Pages yang digunakan.

## Post-Deploy Checklist

- Halaman utama bisa dibuka tanpa error.
- Navbar scroll ke section yang benar.
- Theme toggle berjalan dan tersimpan setelah refresh.
- Projects tampil jika `VITE_GITHUB_USERNAME` valid.
- Contact footer membuka email, GitHub, WhatsApp, dan LinkedIn dengan benar.
- Tampilan mobile tidak overflow horizontal.
