# PRD - Product Requirements Document

## Overview

Website portfolio personal untuk menampilkan profil, skill, project GitHub, licenses & certifications, pendidikan, dan kontak.

## User Stories

### Melihat Profil
- Hero section menampilkan nama, role, dan deskripsi.
- About section menampilkan ringkasan kemampuan dan statistik.

### Melihat Skills
- Skills dapat difilter berdasarkan kategori.
- Setiap skill menampilkan level dan deskripsi singkat.

### Melihat Projects
- Project diambil otomatis dari GitHub API.
- Jika GitHub API gagal, UI menampilkan pesan error yang aman.

### Melihat Licenses & Certifications
- Data disimpan langsung di `src/data/certifications.ts`.
- Tampilan berbentuk card LinkedIn-style.

### Dark/Light Mode
- Toggle tersedia di navbar.
- Preferensi disimpan di localStorage.

### Menghubungi Kandidat
- Informasi kontak ditampilkan di footer.
- Link email, GitHub, LinkedIn, dan phone tersedia.

## Non-Functional Requirements

| Requirement | Target |
|-------------|--------|
| Responsive | Desktop, tablet, mobile |
| Performance | Static frontend ringan |
| Accessibility | Semantic HTML dan aria-labels |
| SEO | Meta tags dan heading hierarchy rapi |
| Browser Support | Chrome, Firefox, Safari, Edge |
