import type { LucideIcon } from 'lucide-react';
import { CodeXml, Type, Wind, Code, Database, Cloud, Cog, GitBranch } from 'lucide-react';
import { BookOpen, Terminal, Sparkles } from 'lucide-react';

export interface Skill {
  name: string;
  Icon: LucideIcon;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  imageHint: string;
  githubUrl: string;
  liveUrl?: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

export const personalData = {
  name: "Daffa Raihan Ramadhan",
  role: "Undergraduate Informatics student",
  institution: "Universitas Islam Indonesia",
  description: "Undergraduate Informatics student that passionate about web development and technology.",
  contact: {
    github: "https://github.com/Raiiynn",
    linkedin: "https://linkedin.com/in/daffaraihanramadhan",
    email: "daffaraihan72@gmail.com",
  },
};

export const navigationLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const skillsData: { name: string; icon: string; color: string; }[] = [
  { name: 'HTML5', icon: 'https://cdn.simpleicons.org/html5/E34F26', color: 'bg-orange-500/10 text-orange-500' },
  { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript/F7DF1E', color: 'bg-yellow-500/10 text-yellow-500' },
  { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/3178C6', color: 'bg-blue-600/10 text-blue-600' },
  { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB', color: 'bg-cyan-500/10 text-cyan-500' },
  { name: 'Next.js', icon: 'https://cdn.simpleicons.org/next.js/ffffff', color: 'bg-slate-500/10 text-slate-200' },
  { name: 'Tailwind', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4', color: 'bg-cyan-400/10 text-cyan-400' },
  { name: 'Python', icon: 'https://cdn.simpleicons.org/python/3776AB', color: 'bg-blue-500/10 text-blue-400' },
  { name: 'Git', icon: 'https://cdn.simpleicons.org/git/F05032', color: 'bg-red-500/10 text-red-500' },
  { name: 'GoLang', icon: 'https://cdn.simpleicons.org/go/00ADD8', color: 'bg-emerald-500/10 text-emerald-400' },
];

export const experiences: Experience[] = [
  {
    title: "AIESEC Future Leaders",
    company: "AIESEC in Indonesia",
    period: "April 2024 - July 2024",
    description: "Engaged in bi-weekly coaching sessions focused on soft and hard skills, including project management, public speaking, and strategic thinking.",
  },
  {
    title: "Cyber Laboratory Assistant",
    company: "Universitas Islam Indonesia",
    period: "Nov 2025 - Present",
    description: "Assist the Cyber ​​Laboratory in the development and management of the lab environment, guide students through hands-on cybersecurity and network system practices, explain basic security, networking, and programming concepts, and support the overall operational learning of the lab.",
  },
  {
    title: "Freelance Web Developer",
    company: "Self Employed",
    period: "Jan 2024 - JPresent",
    description: "Developed and maintained websites for small businesses and personal projects using HTML, CSS, JavaScript, and React. Collaborated with design user interfaces, and implement responsive web designs.",
  }
];

export const projects: Project[] = [
  {
    title: "Audio Feature-Based Music Analysis Web App",
    description: "A full-stack web application built with Python and Streamlit for real-time data synchronization.",
    tags: ["Python", "Streamlit", "Pandas"],
    imageUrl: "https://drive.google.com/uc?export=view&id=1zw2ImKP-h6cZ2ps8NhYLt43Nz8k_cTHu",
    imageHint: "code abstract",
    githubUrl: "https://github.com/Raiiynn/musicfsd",
  },
  {
    title: "GameBoy Retro Web App",
    description: "A fully interactive GameBoy simulation built with React and TypeScript, featuring pixel-perfect CSS styling and responsive controls.",
    tags: ["Next Js", "TypeScript", "React"],
    imageUrl: "https://drive.google.com/uc?export=view&id=1Jcps6mRcxLz6fPWHCUclAz1zF38LfyrK",
    imageHint: "web dashboard",
    githubUrl: "#",
    liveUrl: "https://semangat-ujian.vercel.app/",
  },
  {
    title: "RakyatAdu",
    description: "A software system designed to assist the government in addressing various local issues. Through this platform, citizens can easily report various issues they face in their neighborhoods, from damaged roads and security concerns to other issues that affect their daily quality of life.",
    tags: ["Java", "PHP", "MySQL"],
    imageUrl: "https://drive.google.com/uc?export=view&id=1aBRhpSc-0s-fuwsYpTbYa0-oDGLDhAYT",
    imageHint: "data analysis",
    githubUrl: "https://github.com/Raiiynn/BitMinds-RakyatAdu",
  },
];

export const aboutStats = [
  { icon: BookOpen, title: "Web Developer", desc: " ", color: "text-blue-400" },
  { icon: Code, title: "Front End Developer", desc: " ", color: "text-teal-400" },
  { icon: Terminal, title: "Back End Developer", desc: "  ", color: "text-purple-400" }
];