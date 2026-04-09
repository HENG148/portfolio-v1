import { ReactNode } from "react";

export type SectionId = 
  | "home"
  | "about"
  | "experience"
  | "education"
  | "projects"
  | "blog"
  | "skill"
  | "contact"

export interface NavItem {
  id: SectionId;
  label: string;
  icon: ReactNode;
  shortcut?: string;
}



{/*********************************/ }
// About Type 
{/*********************************/}

export interface Slide {
  src: string;
  alt: string;
}
export interface Highlight {
  text: string;
}
export interface Tag {
  label: string;
}
export const slides: Slide[] = [
  { src: "/me.jpg", alt: "" },
  { src: "/me(1).jpg", alt: ""},
]

export const highlights: Highlight[] = [
  { text: "Product mindset across web, mobile, and startups" },
  { text: "Ship fast with quality: React, Next.js, Node" },
  { text: "UX / UI and performance focused" },
]

export const tags: Tag[] = [
  { label: "Web" },
  { label: "Mobile" },
  { label: "UX / UI"}
]



{/*********************************/ }
// About Type 
{/*********************************/ }

export interface Bullet {
  text: string;
}

export interface Experience {
  _id: string;
  title: string;
  company: string;
  period: string;
  bullets: Bullet[];
}



{/*********************************/ }
// Education Type 
{/*********************************/ }

export interface Education {
  _id?: string;
  title: string;
  school: string;
  year: string;
}

export interface ApiResponse {
  success: boolean;
  data: Education[];
  message?: string;
}



{/*********************************/ }
// Skills Type 
{/*********************************/ }

export interface SkillCategory{
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Front-end",
    skills: [
      "Web Development",
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "HTML / CSS",
      "JavaScript",
    ],
  },
  {
    title: "Mobile",
    skills: ["Dart"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST", "PHP"],
  },
  {
    title: "DevOps",
    skills: ["Docker", "Git"],
  },
  {
    title: "Data",
    skills: ["PostgreSQL", "MongoDB"],
  },
  {
    title: "Design",
    skills: ["UX / UI", "Figma"],
  },
]




{/*********************************/ }
// Skills Type 
{/*********************************/ }

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  instagram: string;
}
 
export const contactInfo: ContactInfo = {
  email: "rongsokheng148@gmail.com",
  phone: "+855 17 540 260",
  location: "Porsenchey, Phnom Penh, Cambodia",
  linkedin: "https://www.linkedin.com/in/rong-sokheng-a20512258/",
  instagram: "https://www.instagram.com/__heng0_",
};
 