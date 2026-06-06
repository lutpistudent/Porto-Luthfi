export interface Project {
  id: string; // e.g. "01"
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  demoUrl: string;
  isFeatured: boolean;
}

export const projects: Project[] = [
  {
    id: "01",
    title: "E-Furniture",
    description: "Website katalog furniture interaktif dengan frontend Vue 3 dan sistem backend RESTful API terintegrasi menggunakan Laravel PHP.",
    tags: ["Vue.js", "Laravel", "MySQL", "Tailwind CSS"],
    githubUrl: "https://github.com",
    demoUrl: "#",
    isFeatured: true
  },
  {
    id: "02",
    title: "SiMail",
    description: "Mendesain ulang dan mengkustomisasi tampilan Roundcube webmail lengkap dengan antarmuka login dan registrasi modern, responsif, serta aman.",
    tags: ["HTML", "CSS", "JavaScript", "Roundcube"],
    githubUrl: "https://github.com",
    demoUrl: "#",
    isFeatured: true
  },
  {
    id: "03",
    title: "IoT Monitoring System",
    description: "Sistem monitoring IoT berbasis mikrokontroler ESP8266 dengan sensor suhu DHT, sensor jarak ultrasonic, relay kontrol, dan pompa air otomatis.",
    tags: ["C++", "IoT ESP8266", "Sensors", "Dashboard"],
    githubUrl: "https://github.com",
    demoUrl: "#",
    isFeatured: true
  },
  {
    id: "04",
    title: "Portfolio Website",
    description: "Website portofolio personal menggunakan Vue 3, Vite, dan Tailwind CSS, dirancang dengan konsep Neo Brutalism Dark yang minimalis dan elegan.",
    tags: ["Vue.js", "Vite", "Tailwind CSS"],
    githubUrl: "https://github.com",
    demoUrl: "#",
    isFeatured: false
  }
];
