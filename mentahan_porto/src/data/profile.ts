export interface Profile {
  name: string;
  role: string;
  description: string;
  aboutIntro: string;
  aboutDetailed: string;
  contact: {
    email: string;
    github: string;
    linkedin: string;
    instagram: string;
    whatsapp: string;
  };
}

export const profile: Profile = {
  name: "Luthfiansyah",
  role: "Web Developer / Fullstack Developer",
  description: "Saya adalah pelajar yang tertarik pada pengembangan web, UI/UX, database, dan teknologi digital. Saya suka membangun website yang rapi, responsive, dan mudah digunakan.",
  aboutIntro: "I'm focused on building clean interfaces, structured systems, and useful digital products.",
  aboutDetailed: "Saya memiliki ketertarikan pada pengembangan aplikasi web menggunakan Vue, Laravel, MySQL, dan Tailwind CSS. Saya juga terbiasa mengerjakan project sekolah, membuat UI, mengelola database, serta melakukan integrasi API.",
  contact: {
    email: "luthfiansyaahaw@gmail.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    whatsapp: "https://wa.me/#"
  }
};
