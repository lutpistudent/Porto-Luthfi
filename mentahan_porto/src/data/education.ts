export interface Education {
  institution: string;
  major: string;
  period: string;
  location: string;
  description: string;
  keySubjects: string[];
}

export const educations: Education[] = [
  {
    institution: "SMKN 2 Depok Sleman",
    major: "Mata Pelajaran Utama: PPLG / SIJA (Pengembangan Perangkat Lunak dan GIM / Sistem Informatika Jaringan dan Aplikasi)",
    period: "2023 - 2026",
    location: "Sleman, Yogyakarta",
    description: "Fokus belajar pada web development, manajemen basis data, administrasi jaringan komputer, rekayasa perangkat lunak, sistem operasional server, dan adopsi cloud computing.",
    keySubjects: [
      "Pemrograman Web & Perangkat Bergerak (Frontend & Backend)",
      "Basis Data Relasional & Manajemen Query SQL",
      "Sistem Informatika Jaringan & Layanan Web (SIJA)",
      "Object-Oriented Programming (OOP)",
      "UI/UX Design & Prototyping"
    ]
  }
];
