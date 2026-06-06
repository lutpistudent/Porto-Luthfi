export interface Skill {
  name: string;
  category: "Frontend" | "Backend" | "Tools & Design";
  level: string; // e.g. "Advanced", "Intermediate"
}

export const skills: Skill[] = [
  { name: "Vue.js", category: "Frontend", level: "Intermediate" },
  { name: "Tailwind CSS", category: "Frontend", level: "Advanced" },
  { name: "HTML", category: "Frontend", level: "Advanced" },
  { name: "CSS", category: "Frontend", level: "Advanced" },
  { name: "JavaScript", category: "Frontend", level: "Intermediate" },
  { name: "Laravel", category: "Backend", level: "Intermediate" },
  { name: "MySQL", category: "Backend", level: "Intermediate" },
  { name: "Database Management", category: "Backend", level: "Intermediate" },
  { name: "REST API", category: "Backend", level: "Advanced" },
  { name: "Git & GitHub", category: "Tools & Design", level: "Intermediate" },
  { name: "UI/UX Design", category: "Tools & Design", level: "Intermediate" }
];
