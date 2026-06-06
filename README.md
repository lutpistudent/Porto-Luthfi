# Portfolio Landing Page - Luthfiansyah Aufa Windra

Personal portfolio frontend berbasis Vue 3, Vite, Tailwind CSS, dan TypeScript.

Website menampilkan profil, skills, project dari GitHub API, licenses & certifications dari data lokal, education, dan contact footer.

## Fitur

- Hero section dengan nama lengkap dan role.
- About section dengan bio dan statistik.
- Skills section dengan filter kategori.
- Projects section dari GitHub REST API.
- Licenses & Certifications dari `src/data/certifications.ts`.
- Education section dari data lokal.
- Contact footer.
- Dark/light mode.
- Responsive layout.

## Tech Stack

| Teknologi | Fungsi |
|-----------|--------|
| Vue.js 3 | Frontend framework |
| Vite 8 | Build tool dan dev server |
| Tailwind CSS 4 | Styling |
| TypeScript | Type safety |
| Axios | GitHub API request |
| GitHub REST API | Data repository |
| Lucide Icons | Icon library |

## Setup

```bash
npm install
```

Copy env:

```bash
cp .env.example .env
```

Isi GitHub username:

```env
VITE_GITHUB_USERNAME=lutpistudent
```

Jalankan development server:

```bash
npm run dev
```

Build production:

```bash
npm run build
```

## Data Lokal

Data utama ada di:

```text
src/data/profile.ts
src/data/skills.ts
src/data/education.ts
src/data/certifications.ts
```

Untuk mengubah certificates/licenses, edit:

```text
src/data/certifications.ts
```

## Struktur Singkat

```text
src/
  assets/
  components/
  composables/
  data/
  services/
  types/
```

`src/services/githubService.ts` masih dipakai untuk Projects section. Certificates tidak memakai service/backend/database.

## Dokumentasi

- [PRD](docs/PRD.md)
- [Design](docs/DESIGN.md)
- [API Notes](docs/API_NOTES.md)
- [Deployment](docs/DEPLOYMENT.md)
- [Tech Stack](docs/TECH_STACK.md)
