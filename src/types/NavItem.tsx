import {
  Home,
  User,
  Briefcase,
  GraduationCap,
  FolderKanban,
  Newspaper,
  Wrench,
  Mail,
} from "lucide-react";
import type { NavItem } from './type';
 
export const NAV_ITEMS: NavItem[] = [
  { id: "home",       label: "Home",       icon: <Home size={16} />,        },
  { id: "about",      label: "About",      icon: <User size={16} />,           },
  { id: "experience", label: "Experience", icon: <Briefcase size={16} />,     },
  { id: "education",  label: "Education",  icon: <GraduationCap size={16} />,  },
  { id: "projects",   label: "Projects",   icon: <FolderKanban size={16} />,  },
  { id: "blog",       label: "Blog",       icon: <Newspaper size={16} />,      },
  { id: "skill",     label: "Skills",     icon: <Wrench size={16} />,        },
  { id: "contact",    label: "Contact",    icon: <Mail size={16} />,          },
];
 