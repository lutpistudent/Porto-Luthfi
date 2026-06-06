# API Notes

## GitHub REST API

### Endpoint
```text
GET https://api.github.com/users/{username}/repos
```

### Configuration
```env
VITE_GITHUB_USERNAME=your-github-username
```

### Data yang Ditampilkan
- Nama repository
- Deskripsi
- Bahasa pemrograman utama
- Jumlah star
- Topics/tags
- Link repository
- Link homepage jika tersedia

### Fallback
Jika GitHub API gagal atau username kosong, `src/services/githubService.ts` mengembalikan array kosong dan UI menampilkan pesan error yang aman.

## Certifications

Data Licenses & Certifications tidak memakai API atau database. Semua data disimpan langsung di:

```text
src/data/certifications.ts
```
