import type { LucideIcon } from 'lucide-react';
import {
  BookOpen,
  Briefcase,
  FolderKanban,
  Home,
  Mail,
  User,
} from 'lucide-react';

export interface NavSection {
  id: string;
  label: string;
  description: string;
  icon: LucideIcon;
}

export const navSections: NavSection[] = [
  {
    id: 'home',
    label: 'Home',
    description: 'Overview and featured work',
    icon: Home,
  },
  {
    id: 'about',
    label: 'About',
    description: 'Background and focus areas',
    icon: User,
  },
  {
    id: 'resume',
    label: 'Resume',
    description: 'Education and experience',
    icon: Briefcase,
  },
  {
    id: 'projects',
    label: 'Projects',
    description: 'Security and infrastructure labs',
    icon: FolderKanban,
  },
  {
    id: 'articles',
    label: 'Articles',
    description: 'Technical writing and insights',
    icon: BookOpen,
  },
  {
    id: 'contact',
    label: 'Contact',
    description: 'Get in touch',
    icon: Mail,
  },
];

export const profile = {
  name: 'Bernard Boakye Appiah',
  firstName: 'Bernard',
  role: 'Aspiring Critical Infrastructure & OT Cybersecurity Professional',
  tagline:
    'Cybersecurity Operations & Management Student | Telecommunications Engineering Graduate',
  headline:
    'Building Secure, Resilient Infrastructure Through Network Security and Cybersecurity Operations',
  intro:
    'I am a Cybersecurity Operations and Management student and Telecommunications Engineering graduate focused on network security, infrastructure defense, OT cybersecurity foundations, and practical security lab documentation.',
  about:
    'Cybersecurity Operations and Management student and Telecommunications Engineering graduate with practical experience in network security, Linux systems, infrastructure security, and cybersecurity risk assessment. I focus on hands-on lab work — firewall segmentation, packet analysis, infrastructure projects, and clear technical documentation that demonstrates real operational understanding.',
  email: 'N10036999@humber.ca',
  linkedin: 'https://linkedin.com/in/ben-boakye',
  github: 'https://github.com/benboakye',
  location: 'Toronto, ON',
  resumePath: '/resume/Bernard-Boakye-Appiah-Resume.pdf',
  badges: [
    'Network Security',
    'OT Cybersecurity Foundations',
    'Firewall Segmentation',
    'Packet Analysis',
    'Critical Infrastructure Security',
  ],
  stats: [
    { value: '4+', label: 'Cybersecurity & Infrastructure Projects' },
    { value: '10+', label: 'Security and Infrastructure Tools' },
    { value: '2', label: 'Academic Programs' },
    { value: '1', label: 'Cybersecurity Certification' },
  ],
};

export const resumeSummary =
  'Cybersecurity Operations and Management student and Telecommunications Engineering graduate with practical experience in network security, Linux systems, infrastructure security, and cybersecurity risk assessment. Skilled in packet analysis, network segmentation, firewall configuration, vulnerability assessment, and technical documentation through academic projects and hands-on lab environments.';

export const education = [
  {
    degree: 'MSc Computer Science — Cybersecurity Operations & Management',
    institution: 'Humber Polytechnic',
    period: 'Expected Aug 2027',
  },
  {
    degree: 'BSc Telecommunications Engineering',
    institution: 'Ghana Communication Technology University',
    period: 'Nov 2025',
  },
];

export const certification = {
  name: 'ISC2 Certified in Cybersecurity (CC)',
  status: 'Certified',
};

export const experience = [
  {
    title: 'Intern — Avionics & Systems Diagnostics',
    company: 'Ghana Air Force',
    period: 'Jun 2024 – Aug 2024',
    highlights: [
      'Pre-flight checks and engine warming/testing support',
      'Avionics and electronic systems inspection',
      'Troubleshooting support and technical records',
      'Procedural discipline and safety awareness',
    ],
  },
  {
    title: 'Data Entry Intern',
    company: 'PRIME Infrastructure & Engineering Services Ltd',
    period: 'Oct 2023 – Dec 2023',
    highlights: [
      'Data auditing, cleaning, and validation',
      'Documentation and record management',
      'Support for engineering and infrastructure operations',
    ],
  },
];
