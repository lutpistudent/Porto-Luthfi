export interface Experience {
  id: string;
  role: string;
  company: string; // or organization name
  period: string; // e.g. "2024 - Sekarang"
  description: string;
  contributions: string[];
}

export const experiences: Experience[] = [
  {
    id: "EXP-01",
    role: "Fullstack Web Developer (Project Sekolah)",
    company: "SMKN 2 Depok Sleman",
    period: "2025 - Present",
    description: "Merancang dan membangun beberapa sistem informasi sekolah serta aplikasi web sederhana untuk mengoptimalkan administrasi internal.",
    contributions: [
      "Mengembangkan aplikasi web responsif menggunakan framework Vue 3 dan Tailwind CSS.",
      "Mendesain arsitektur database relasional MySQL dan mengintegrasikan RESTful API dengan Laravel.",
      "Berkolaborasi dalam tim Agile kecil untuk merencanakan sprint dan implementasi fitur."
    ]
  },
  {
    id: "EXP-02",
    role: "Bendahara & Humas (Organisasi Sekolah)",
    company: "Organisasi Siswa SMKN 2 Depok Sleman",
    period: "2024 - 2025",
    description: "Mengemban tanggung jawab ganda dalam pengelolaan finansial kegiatan dan membangun hubungan komunikasi eksternal sekolah.",
    contributions: [
      "Mengelola arus kas, pencatatan transaksi masuk-keluar, serta menyusun laporan pertanggungjawaban dana anggaran.",
      "Menyebarluaskan informasi kegiatan sekolah melalui media sosial resmi dan menjaring kolaborasi pihak ketiga.",
      "Mengambil peran kunci dalam perizinan dan penyelarasan jadwal rapat kepengurusan."
    ]
  },
  {
    id: "EXP-03",
    role: "Tim Dana Usaha (Kepanitiaan)",
    company: "Panitia Event & Proyek Kewirausahaan",
    period: "2024",
    description: "Merancang program penggalangan dana kreatif guna menyokong pendanaan acara pameran teknologi tahunan sekolah.",
    contributions: [
      "Negosiasi kerja sama sponsorship dengan beberapa brand lokal dan penyedia merchandise.",
      "Mengorganisasikan stan penjualan makanan dan produk kreatif siswa secara kolektif.",
      "Membantu melampaui target anggaran pendanaan acara sebesar 15% dari target awal."
    ]
  },
  {
    id: "EXP-04",
    role: "Junior Web Creator (Freelance & Personal Projects)",
    company: "Mandiri & Komunitas",
    period: "2023 - Present",
    description: "Mengeksplorasi dunia pengembangan aplikasi mandiri untuk mengasah skill coding dan problem solving secara riil.",
    contributions: [
      "Merancang portofolio web interaktif dan webmail login templates.",
      "Mempublikasikan kode program secara open-source di GitHub untuk berbagi dengan komunitas pemula.",
      "Melakukan troubleshooting dan optimasi performa query database."
    ]
  }
];
