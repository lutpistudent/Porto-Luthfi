# Tech Stack Documentation

## Teknologi

### Vue.js 3
Frontend framework utama untuk semua section portfolio.

### Vite 8
Build tool dan development server.

### Tailwind CSS 4
Utility-first styling dan responsive layout.

### TypeScript 6
Type safety untuk data, services, dan Vue components.

### Axios
Dipakai oleh `src/services/githubService.ts` untuk mengambil data repository dari GitHub API.

### GitHub REST API
Dipakai di section Projects untuk mengambil public repositories dari username GitHub.

### Static Data
Data profil, skills, education, dan certificates disimpan langsung di `src/data/`.

### Lucide Icons
Icon library untuk tombol, cards, navbar, footer, dan section UI.

### localStorage
Menyimpan preferensi dark/light theme.

### IntersectionObserver
Dipakai untuk animasi reveal saat section masuk viewport.

## Arsitektur Singkat

```text
Browser
  |
  +-- Vue 3 + Vite
  |     |
  |     +-- Components
  |     +-- Composables
  |     +-- Static data: src/data/*
  |
  +-- GitHub REST API
        |
        +-- ProjectsSection
```
