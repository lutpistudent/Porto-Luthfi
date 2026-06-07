# Product Requirements Document

## Ringkasan

Website ini adalah portfolio personal untuk menampilkan profil, skills, project GitHub, licenses and certifications, education, experience, dan contact.

Tujuan utamanya adalah memberi gambaran cepat tentang kemampuan teknis, gaya visual, dan cara menghubungi pemilik portfolio.

## Target Pengguna

- Recruiter atau HR yang ingin menilai profil kandidat.
- Mentor, guru, atau penguji project.
- Collaborator yang ingin melihat karya dan repository.
- Pengunjung umum yang ingin menghubungi pemilik portfolio.

## Fitur Utama

### Hero

- Menampilkan nama, role, deskripsi singkat, dan CTA.
- Menyediakan link cepat ke GitHub, LinkedIn, dan email.
- Mengarahkan pengguna ke section About atau Contact.

### About

- Menampilkan ringkasan profil.
- Menjelaskan minat, fokus belajar, dan kemampuan utama.
- Menampilkan statistik singkat seperti jumlah project dan durasi belajar.

### Skills

- Menampilkan daftar skill dari `src/data/skills.ts`.
- Skill dapat difilter berdasarkan kategori.
- Setiap skill memiliki nama, kategori, level, dan deskripsi opsional.

### Projects

- Mengambil public repositories dari GitHub REST API.
- Username GitHub dikonfigurasi melalui `VITE_GITHUB_USERNAME`.
- Repository fork disaring agar tidak tampil sebagai project utama.
- Jika API gagal atau username kosong, UI menampilkan state error yang aman.

### Licenses And Certifications

- Data disimpan di `src/data/certifications.ts`.
- Tampilan berbentuk card yang mudah dipindai.
- Setiap item dapat memiliki link credential.

### Experience

- Menampilkan riwayat pengalaman dari `src/data/experience.ts`.
- Format dibuat seperti timeline agar urutan pengalaman mudah dibaca.

### Education

- Menampilkan informasi pendidikan dari `src/data/education.ts`.
- Berisi institusi, jurusan, periode, lokasi, deskripsi, dan subject utama.

### Theme

- Mendukung dark mode dan light mode.
- Toggle tersedia di navbar.
- Preferensi theme disimpan di `localStorage`.

### Contact

- Informasi contact ditampilkan di footer.
- Link email memakai `mailto:` dengan subject dan body awal.
- Link GitHub dan LinkedIn membuka halaman eksternal.
- Link phone diarahkan ke WhatsApp melalui `wa.me`.

## Non-Functional Requirements

| Requirement | Target |
| --- | --- |
| Responsive | Mendukung desktop, tablet, dan mobile |
| Performance | Static frontend ringan dan cepat dimuat |
| Accessibility | Semantic HTML, `aria-label`, dan heading hierarchy rapi |
| SEO | Meta tags dasar dan struktur heading jelas |
| Browser Support | Chrome, Firefox, Safari, dan Edge versi modern |
| Maintainability | Data portfolio dikelola dari `src/data/` |

## Data Source

| Data | Lokasi |
| --- | --- |
| Profile | `src/data/profile.ts` |
| Skills | `src/data/skills.ts` |
| Projects | GitHub REST API |
| Certifications | `src/data/certifications.ts` |
| Experience | `src/data/experience.ts` |
| Education | `src/data/education.ts` |

## Acceptance Criteria

- Semua section utama bisa diakses dari navbar.
- Website tetap rapi di ukuran mobile, tablet, dan desktop.
- Theme toggle menyimpan preferensi pengguna.
- Projects menampilkan repository saat `VITE_GITHUB_USERNAME` tersedia.
- Contact footer memiliki link yang bisa diklik dan mengarah ke tujuan yang benar.
- Build production menghasilkan output di folder `dist/`.
