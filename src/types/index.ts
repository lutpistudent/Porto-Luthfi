// ===== Profile =====
export interface Profile {
  name: string
  fullName: string
  role: string
  description: string
  aboutIntro: string
  aboutDetailed: string
  aboutExtra: string
  contact: {
    email: string
    github: string
    linkedin: string
    phone: string
  }
  stats: {
    label: string
    value: string
    accent: boolean
  }[]
}

// ===== Skill =====
export interface Skill {
  name: string
  category: 'Frontend' | 'Backend' | 'Tools & Design'
  level: 'Advanced' | 'Intermediate' | 'Beginner'
  description?: string
}

// ===== GitHub Repository (from API) =====
export interface GitHubRepo {
  id: number
  name: string
  full_name: string
  description: string | null
  fork: boolean
  html_url: string
  homepage: string | null
  language: string | null
  stargazers_count: number
  forks_count: number
  topics: string[]
  updated_at: string
  created_at: string
}

// ===== Certification =====
export interface Certification {
  id: number
  title: string
  issuer: string
  issued_date: string
  skill: string
  description: string
  credential_url: string
  image_url: string
  created_at?: string
  updated_at?: string
}

// ===== Experience =====
export interface Experience {
  id: string
  role: string
  company: string
  period: string
  description: string
  contributions: string[]
}

// ===== Education =====
export interface Education {
  institution: string
  major: string
  period: string
  location: string
  description: string
  keySubjects: string[]
}

// ===== Nav Item =====
export interface NavItem {
  name: string
  href: string
}
