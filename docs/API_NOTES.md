# API Notes

## Ringkasan

API eksternal yang digunakan hanya GitHub REST API untuk section Projects. Data lain seperti profile, skills, certifications, experience, dan education memakai static data dari folder `src/data/`.

## GitHub REST API

### Endpoint

```text
GET https://api.github.com/users/{username}/repos
```

### Configuration

Username GitHub dibaca dari environment variable:

```env
VITE_GITHUB_USERNAME=your-github-username
```

Nilai ini bisa berupa:

- Username biasa, contoh `lutpistudent`.
- Username dengan awalan `@`, contoh `@lutpistudent`.
- URL profil GitHub, contoh `https://github.com/lutpistudent`.
- URL API GitHub, contoh `https://api.github.com/users/lutpistudent`.

Normalisasi nilai tersebut dilakukan di `src/services/githubService.ts`.

### Query Params

Request repository memakai parameter berikut:

| Param | Value | Fungsi |
| --- | --- | --- |
| `sort` | `updated` | Mengurutkan berdasarkan update terbaru |
| `direction` | `desc` | Menampilkan yang terbaru lebih dulu |
| `per_page` | `12` | Membatasi jumlah data dari API |
| `type` | `owner` | Mengambil repository milik user |

Setelah data diterima, repository fork difilter agar tidak tampil sebagai project utama.

### Data Yang Ditampilkan

Section Projects memakai field berikut dari response GitHub:

- Repository name.
- Description.
- Main language.
- Stars.
- Fork count.
- Topics atau tags.
- Repository URL.
- Homepage URL jika tersedia.
- Last updated date.

### Error Handling

Jika username kosong:

- Service mengembalikan array kosong.
- UI menampilkan pesan bahwa username belum dikonfigurasi.

Jika GitHub API gagal:

- Error dicatat di console.
- Service mengembalikan array kosong.
- UI menampilkan pesan gagal memuat project.

Jika response berhasil tetapi tidak ada repository yang bisa ditampilkan:

- UI masuk ke state kosong atau error yang aman.

## Static Data

| Data | File |
| --- | --- |
| Profile | `src/data/profile.ts` |
| Skills | `src/data/skills.ts` |
| Certifications | `src/data/certifications.ts` |
| Experience | `src/data/experience.ts` |
| Education | `src/data/education.ts` |

Static data diketik dengan TypeScript interface dari `src/types/index.ts`.
