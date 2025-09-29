
export interface Project {
  title: string;
  goal: string;
  features: string;
  technologies: string[];
  imageUrl: string;
}

export interface Skill {
  name: string;
  category: string;
}

export interface Education {
  degree: string;
  institution: string;
  cgpa: string;
  year: string;
}

export interface Certification {
  title: string;
  issuer: string;
}

export interface Experience {
  role: string;
  description: string;
  organization: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  location: string;
  linkedin: string;
  github: string;
}
