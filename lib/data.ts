import {
  Code2,
  Database,
  Github,
  Linkedin,
  MapPin,
  Mail,
  Phone,
  Server,
  TerminalSquare,
  Trophy,
} from "lucide-react";

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const stack = [
  "Python",
  "Java",
  "JavaScript",
  "HTML5",
  "CSS3",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Docker",
  "GitHub",
  "Postman",
  "Command Line Basics",
  "Data Structures & Algorithms",
  "REST APIs",
  "Authentication & Authorization",
  "Problem Solving",
];

export const projects = [
  {
    index: "01",
    title: "Qurate - Open Source Issue Management Engine",
    description:
      "Built backend APIs for issue and task management using Node.js and Express.js, added AI-based issue prioritization and GitHub issue scoring, and developed responsive frontend components with React.js and MongoDB.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Docker"],
    image: "/images/qurate-hero.png",
    github: "https://github.com/Rishit-07/Qurate",
    liveDemo: "https://qurate-ashen.vercel.app",
  },
  {
    index: "02",
    title: "Socials - Social Productivity Platform",
    description:
      "Developed a full-stack productivity platform for goal tracking and community collaboration. Built REST APIs for authentication, task management, and user interactions; designed responsive React.js interfaces and managed data with MongoDB. Implemented secure authentication and user-matching features for accountability groups.",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    image: "/images/social-hero.png",
    github: "https://github.com/Rishit-07/Socials",
    liveDemo: "https://socials-green.vercel.app",
  },
];

export const skillGroups = [
  {
    title: "Programming Languages",
    icon: TerminalSquare,
    skills: ["Java", "Python", "JavaScript"],
  },
  {
    title: "Frontend Development",
    icon: Code2,
    skills: ["HTML5", "CSS3", "React.js"],
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: ["Node.js", "Express.js"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["MongoDB"],
  },
  {
    title: "DevOps & Tools",
    icon: Trophy,
    skills: ["Docker", "GitHub", "Postman", "Command Line Basics"],
  },
  {
    title: "Core Concepts",
    icon: Trophy,
    skills: [
      "Data Structures & Algorithms",
      "REST APIs",
      "Authentication & Authorization",
      "Problem Solving",
    ],
  },
];

export const skillContactItems = [
  { label: "Phone", value: "6362804872", href: "tel:6362804872", icon: Phone },
  {
    label: "Email",
    value: "sairishitsunku@gmail.com",
    href: "mailto:sairishitsunku@gmail.com",
    icon: Mail,
  },
  { label: "Location", value: "Banglore, India", href: "#contact", icon: MapPin },
];

export const achievements = [
  { value: 25, label: "DSA Problems Solved" },
  { value: 2, label: "Projects Built" },
  { value: 1, suffix:"+",label: "Years Learning Development" },
];

export const socialLinks = [
  { label: "LeetCode", href: "https://leetcode.com/u/Rishit-07/", icon: Code2 },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sai-rishit-sunku-487a08370/",
    icon: Linkedin,
  },
  { label: "GitHub", href: "https://github.com/Rishit-07", icon: Github },
  {
    label: "Email",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=sairishitsunku@gmail.com",
    icon: Mail,
  },
];
