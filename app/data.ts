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

export const personalData = {
  name: "Daffa Raihan Ramadhan",
  role: "Mahasiswa S1 Informatika",
  institution: "Universitas Islam Indonesia",
  description: "Mahasiswa informatika yang bersemangat dalam rekayasa perangkat lunak dan web development modern.",
  contact: {
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
    email: "daffa@example.com",
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


export const projects: Project[] = [
  {
    title: "Project Alpha",
    description: "A full-stack web application built with Next.js and Firebase for real-time data synchronization.",
    tags: ["Next.js", "React", "Firebase", "Tailwind CSS"],
    imageUrl: "https://picsum.photos/seed/101/600/400",
    imageHint: "code abstract",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Project Beta",
    description: "A Python-based data analysis tool that visualizes complex datasets using modern libraries.",
    tags: ["Python", "Pandas", "Matplotlib"],
    imageUrl: "https://picsum.photos/seed/102/600/400",
    imageHint: "web dashboard",
    githubUrl: "#",
  },
  {
    title: "Project Gamma",
    description: "An e-commerce platform with a focus on user experience and performance, utilizing modern frontend technologies.",
    tags: ["React", "TypeScript", "Node.js", "Express"],
    imageUrl: "https://picsum.photos/seed/103/600/400",
    imageHint: "data analysis",
    githubUrl: "#",
    liveUrl: "#",
  },
];

export const aboutStats = [
  { icon: BookOpen, title: "Pendidikan", desc: "Informatika UII", color: "text-blue-400" },
  { icon: Code, title: "Keahlian", desc: "Fullstack Web", color: "text-teal-400" },
  { icon: Terminal, title: "Fokus", desc: "Clean Code", color: "text-purple-400" }
];
