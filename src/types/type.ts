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
  // { src: "/me(1).jpg", alt: "" },
  // { src: "/me(2).jpg", alt: "" },
  { src: "/me(3).jpg", alt: "" },
  { src: "/me(4).jpg", alt: "" },
  { src: "/me(5).jpg", alt: ""},
]

export const highlights: Highlight[] = [
  { text: "Product mindset across web, mobile, and startups" },
  { text: "Ship fast with quality: React, Next.js, Node" },
  { text: "UX / UI and performance focused" },
]

export const tags: Tag[] = [
  { label: "Software" },
  { label: "Web" },
  { label: "Mobile" },
  { label: "UX / UI" },
  { label: "Design" },
  { label: "RUPP Graduated" },
  { label: "Open freelance" },
  { label: "Developer"}
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
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "HTML / CSS",
      "JavaScript",
    ],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "Python", "REST API"],
  },
  {
    title: "Mobile",
    skills: ["Dart"],
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
    skills: ["UX / UI", "Figma", "Adobe"],
  },
]



{/*********************************/ }
// Contact Type 
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

// const details = [
//   {
//     icon: Mail,
//     label: "Email",
//     value: contactInfo.email,
//     // href: `mailto:${contactInfo.email}`,
//   },
//   {
//     icon: Phone,
//     label: "Phone",
//     value: contactInfo.phone,
//     // href: `tel:${contactInfo.phone.replace(/\s/g, "")}`,
//   },
//   {
//     icon: MapPin,
//     label: "Location",
//     value: "Phnom Penh, Cambodia",
//   },
// ];