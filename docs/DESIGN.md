# Design Documentation

## Ringkasan

Portfolio ini memakai gaya **Muted Neo-Brutalist Dark** dengan sentuhan editorial. Fokus desainnya adalah tegas, kontras, mudah dipindai, dan tetap terasa personal.

## Konsep Visual

Gaya utama menggabungkan beberapa karakter berikut:

- Border tegas dan shadow offset ala neo-brutalism.
- Palet muted dengan aksen merah yang tidak terlalu terang.
- Layout editorial seperti majalah atau newspaper.
- Tipografi kuat dengan kombinasi sans-serif dan monospace.
- Motion sederhana untuk membantu orientasi pengguna saat scroll.

Referensi awal berasal dari prototype `mentahan_porto/`. Elemen yang dipertahankan:

- Dark color palette.
- Card dengan offset shadow.
- Section header bernomor, seperti `01 /`, `02 /`, dan seterusnya.
- Timeline layout untuk experience.
- Filter tabs untuk skills.
- Contact footer yang sederhana dan langsung bisa diklik.

## Color Palette

### Dark Mode

Dark mode menjadi tampilan default.

| Token | Hex | Fungsi |
| --- | --- | --- |
| `--bg-primary` | `#0f0f0f` | Background utama |
| `--bg-card` | `#181818` | Background card |
| `--bg-card-alt` | `#121212` | Background card alternatif |
| `--text-primary` | `#e5e5e5` | Teks utama |
| `--text-secondary` | `#a3a3a3` | Teks sekunder |
| `--text-muted` | `#737373` | Teks pendukung |
| `--accent` | `#b23a3a` | Aksen merah |
| `--border` | `#2f2f2f` | Border utama |
| `--border-light` | `#1f1f1f` | Border halus |
| `--shadow` | `#121212` | Shadow offset |

### Light Mode

Light mode dipakai sebagai alternatif untuk pengguna yang lebih nyaman dengan background terang.

| Token | Hex | Fungsi |
| --- | --- | --- |
| `--bg-primary` | `#f8f8f8` | Background utama |
| `--bg-card` | `#ffffff` | Background card |
| `--bg-card-alt` | `#f0f0f0` | Background card alternatif |
| `--text-primary` | `#1a1a1a` | Teks utama |
| `--text-secondary` | `#555555` | Teks sekunder |
| `--text-muted` | `#888888` | Teks pendukung |
| `--accent` | `#b23a3a` | Aksen merah |
| `--border` | `#e0e0e0` | Border utama |
| `--shadow` | `#d0d0d0` | Shadow offset |

## Typography

| Jenis | Font | Penggunaan |
| --- | --- | --- |
| Sans | Inter | Body text, heading, dan deskripsi |
| Mono | JetBrains Mono | Label, badge, section number, dan metadata |

Font dimuat dari Google Fonts melalui `index.html`.

## Layout

### Breakpoints

| Breakpoint | Width | Layout |
| --- | --- | --- |
| Mobile | `< 640px` | Satu kolom, konten stacked |
| Tablet | `640px - 1024px` | Dua kolom pada section tertentu |
| Desktop | `> 1024px` | Editorial grid dengan ruang visual lebih lebar |

### Pola Section

Setiap section mengikuti pola yang konsisten:

1. Section number.
2. Judul uppercase.
3. Accent bar merah berukuran `4px x 48px`.
4. Subtitle opsional.
5. Content area dalam grid, list, atau timeline.

## Komponen UI

| Komponen | Pola Visual |
| --- | --- |
| Navbar | Sticky, ringkas, berisi link section dan theme toggle |
| Hero | Nama, role, deskripsi singkat, CTA, dan social links |
| Skill Card | Card dengan kategori, level, dan deskripsi singkat |
| Project Card | List editorial berisi metadata repository GitHub |
| Timeline | Garis vertikal dengan item experience |
| Certification Card | Card bergaya LinkedIn untuk sertifikasi |
| Footer Contact | Grid contact item dengan link email, GitHub, WhatsApp, dan LinkedIn |

## Motion

| Animasi | Keterangan | Implementasi |
| --- | --- | --- |
| Fade-up on scroll | Section muncul saat masuk viewport | `IntersectionObserver` dan class `.reveal` / `.visible` |
| Hover lift | Card naik sedikit saat hover | `transform` dan offset shadow |
| Button transition | Transisi halus saat hover atau click | `transition-all duration-300` |
| Floating animation | Elemen hero bergerak perlahan | `@keyframes floating` |
| Theme transition | Perpindahan theme terasa halus | Transition pada background, color, dan border |
| Icon rotate | Icon theme toggle berubah dengan animasi | Vue `<Transition>` |
| Card filter | Skill card masuk/keluar saat filter berubah | Vue `<TransitionGroup>` |

Prinsip animasi:

- Subtle dan fungsional.
- Membantu UX, bukan menjadi distraksi.
- Durasi umum berada di rentang `0.2s - 0.8s`.
- Easing utama memakai `cubic-bezier(0.16, 1, 0.3, 1)`.
- Tidak memakai parallax berlebihan.
- Animasi infinite hanya digunakan untuk elemen kecil seperti floating hero dan pulse dot.

## Accessibility

- Struktur heading dijaga agar urut dan mudah dibaca screen reader.
- Tombol icon memakai `aria-label`.
- Link eksternal membuka tab baru dengan `rel="noreferrer"`.
- Warna teks memakai token yang menjaga kontras di dark dan light mode.
- Layout tetap terbaca pada mobile, tablet, dan desktop.
