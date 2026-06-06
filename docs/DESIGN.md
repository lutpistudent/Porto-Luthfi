# Design Documentation

## Konsep Desain

### Muted Neo-Brutalist Dark
Desain terinspirasi dari **Muted Neo-Brutalism** dengan nuansa editorial/magazine yang gelap dan elegan. Gaya ini menggabungkan:
- Elemen brutalist (border tegas, shadow offset, font mono)
- Warna muted/subdued (bukan warna primer terang)
- Layout editorial ala majalah/newspaper
- Tipografi yang kuat dan kontras

### Referensi
Desain utama mengacu pada folder `mentahan_porto/` yang merupakan prototype awal website portfolio. Elemen-elemen yang diambil:
- Color palette dark (#0f0f0f, #181818, #b23a3a)
- Card styling dengan shadow offset
- Section header editorial (01 /, 02 /)
- Timeline layout untuk experience
- Filter tabs untuk skills
- Form styling untuk contact

---

## Color Palette

### Dark Mode (Default)

| Token | Hex | Fungsi |
|-------|-----|--------|
| `--bg-primary` | `#0f0f0f` | Background utama |
| `--bg-card` | `#181818` | Background card |
| `--bg-card-alt` | `#121212` | Background card alternatif |
| `--text-primary` | `#e5e5e5` | Teks utama |
| `--text-secondary` | `#a3a3a3` | Teks sekunder |
| `--text-muted` | `#737373` | Teks muted/subtle |
| `--accent` | `#b23a3a` | Warna aksen merah |
| `--border` | `#2f2f2f` | Border utama |
| `--border-light` | `#1f1f1f` | Border subtle |
| `--shadow` | `#121212` | Shadow card |

### Light Mode

| Token | Hex | Fungsi |
|-------|-----|--------|
| `--bg-primary` | `#f8f8f8` | Background utama |
| `--bg-card` | `#ffffff` | Background card |
| `--bg-card-alt` | `#f0f0f0` | Background card alternatif |
| `--text-primary` | `#1a1a1a` | Teks utama |
| `--text-secondary` | `#555555` | Teks sekunder |
| `--text-muted` | `#888888` | Teks muted |
| `--accent` | `#b23a3a` | Warna aksen (tetap sama) |
| `--border` | `#e0e0e0` | Border utama |
| `--shadow` | `#d0d0d0` | Shadow card |

---

## Typography

| Jenis | Font | Penggunaan |
|-------|------|-----------|
| Sans | Inter | Body text, heading, deskripsi |
| Mono | JetBrains Mono | Label, badge, section number, meta text |

Sumber: Google Fonts (loaded via index.html)

---

## Layout

### Responsive Breakpoints

| Breakpoint | Width | Layout |
|-----------|-------|--------|
| Mobile | < 640px | 1 column, stacked |
| Tablet | 640px - 1024px | 2 columns partial |
| Desktop | > 1024px | Full editorial grid (12 cols) |

### Section Pattern
Setiap section mengikuti pattern editorial:
1. Section number besar (01 /, 02 /, ...)
2. Title mono uppercase
3. Accent bar (4px × 48px merah)
4. Optional subtitle
5. Content area (grid 12 kolom atau full-width)

---

## Simple Motion / Animation

| Animasi | Keterangan | Implementasi |
|---------|-----------|--------------|
| **Fade-up on scroll** | Section muncul dari bawah saat scroll | `IntersectionObserver` + CSS class `.reveal` → `.visible` |
| **Hover lift** | Card naik sedikit saat hover | `transform: translateX(-2px) translateY(-2px)` + shadow shift |
| **Smooth button transition** | Transisi halus pada hover/click | `transition-all duration-300` |
| **Floating animation** | Elemen hero bergerak naik-turun | `@keyframes floating` dengan `translateY` |
| **Theme transition** | Perpindahan dark↔light halus | `transition: background-color 0.3s, color 0.15s, border-color 0.3s` |
| **Icon rotate** | Icon Sun↔Moon berputar saat toggle | Vue `<Transition>` dengan rotate transform |
| **Card filter** | Skill cards animasi saat filter berubah | Vue `<TransitionGroup>` dengan scale + opacity |
| **Stagger children** | Card muncul berurutan saat scroll | CSS stagger delay (0.05s increment per child) |

### Prinsip Animasi
- ✅ Subtle dan fungsional
- ✅ Mendukung UX, bukan mengganggu
- ✅ Timing: 0.2s - 0.8s
- ✅ Easing: `cubic-bezier(0.16, 1, 0.3, 1)` (smooth exponential)
- ❌ Tidak ada parallax berlebihan
- ❌ Tidak ada animasi infinite kecuali floating dan pulse dot
