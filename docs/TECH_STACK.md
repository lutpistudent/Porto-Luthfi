# Tech Stack Documentation

## Ringkasan

Portfolio ini dibangun sebagai static frontend dengan Vue 3, Vite, Tailwind CSS, dan TypeScript. Data portfolio mayoritas disimpan secara lokal, sedangkan project repository diambil dari GitHub REST API.

## Core Stack

| Teknologi | Peran |
| --- | --- |
| Vue 3 | Framework utama untuk component-based UI |
| Vite | Development server dan production bundler |
| TypeScript | Type safety untuk data, service, dan komponen |
| Tailwind CSS 4 | Utility-first styling dan responsive layout |
| Axios | HTTP client untuk GitHub REST API |
| Lucide Icons | Icon library untuk navbar, cards, footer, dan tombol |

## Browser APIs

| API | Peran |
| --- | --- |
| `localStorage` | Menyimpan preferensi dark/light theme |
| `IntersectionObserver` | Menjalankan animasi reveal saat section masuk viewport |
| `window.scrollTo` | Smooth scroll untuk tombol kembali ke atas |

## Project Structure

```text
src/
  assets/
    main.css
  components/
    *.vue
  composables/
    useTheme.ts
    useIntersectionObserver.ts
  data/
    profile.ts
    skills.ts
    certifications.ts
    experience.ts
    education.ts
  services/
    githubService.ts
  types/
    index.ts
  App.vue
  main.ts
```

## Data Flow

```text
Static data in src/data/
  -> Vue components
  -> Rendered portfolio sections

GitHub username from VITE_GITHUB_USERNAME
  -> githubService.ts
  -> GitHub REST API
  -> ProjectsSection.vue
```

## Architecture Notes

- Aplikasi tidak memakai backend custom.
- Routing dibuat sebagai single-page section navigation.
- Data portfolio lokal diketik melalui interface di `src/types/index.ts`.
- GitHub API hanya dipakai untuk public repository.
- Theme state dipisahkan ke composable `useTheme.ts`.
- Reveal animation dipisahkan ke composable `useIntersectionObserver.ts`.

## Build Output

Build production dibuat oleh Vite:

```bash
npm run build
```

Output siap deploy berada di:

```text
dist/
```
