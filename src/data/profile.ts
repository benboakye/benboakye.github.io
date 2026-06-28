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
    'MCS Graduate Student at Humber Polytechnic | Cybersecurity Operations & Management',
  headline:
    'Building Secure, Resilient Infrastructure Through Network Security and Cybersecurity Operations',
  intro:
    'Cybersecurity Operations and Management graduate student and Telecommunications Engineering graduate with hands-on experience in network security labs, risk assessment, firewall segmentation, and infrastructure-focused projects. Motivated to protect operational technology, critical infrastructure, and industrial control environments.',
  about:
    'I combine an engineering background with practical cybersecurity lab work — network segmentation, packet analysis, risk assessment, and infrastructure projects — supported by strong technical documentation. My telecom foundation helps me understand systems at the physical and communication layer, while my coursework and projects focus on network security, GRC, and OT security foundations. I am a Permanent Resident of Canada, authorized to work, and actively seeking internships and entry-level roles in cybersecurity operations, network security, and infrastructure defense.',
  linkedinHeadline:
    'MCS Graduate Student at Humber Polytechnic | Cybersecurity Operations & Management | Network Security, Risk Assessment & OT Security',
  email: 'N10036999@humber.ca',
  linkedin: 'https://linkedin.com/in/ben-boakye',
  github: 'https://github.com/benboakye',
  location: 'Toronto, ON',
  resumePath: '/resume/Bernard-Boakye-Appiah-Resume.pdf',
  badges: [
    'Network Security',
    'Risk Assessment',
    'Firewall Segmentation',
    'Packet Analysis',
    'OT Security Foundations',
    'Technical Documentation',
  ],
  stats: [
    { value: '5', label: 'Cybersecurity & Infrastructure Projects' },
    { value: '10+', label: 'Security and Infrastructure Tools' },
    { value: '2', label: 'Academic Programs' },
    { value: '1', label: 'Cybersecurity Certification (ISC2 CC)' },
  ],
};

export const resumeSummary =
  'Cybersecurity Operations and Management graduate student and Telecommunications Engineering graduate with hands-on experience in network security labs, risk assessment, firewall segmentation, and infrastructure-focused projects. Skilled in packet analysis, network segmentation, NIST CSF and MITRE ATT&CK-based risk assessment, Linux systems, and technical documentation. Seeking opportunities in cybersecurity operations, network security, GRC, and OT/security operations roles.';

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
    period: 'Sep 2024 – Oct 2024',
    highlights: [
      'Supported 3 pre-flight checks and early morning inspections 3 times per week',
      'Tracked and logged departure and arrival data for domestic flight operations',
      'Applied systems thinking through resilience testing and maintenance for system safety',
      'Maintained technical records in a regulated environment requiring procedural discipline',
    ],
  },
  {
    title: 'Data Entry Intern',
    company: 'PRIME Infrastructure & Engineering Services Ltd',
    period: 'Oct 2023 – Dec 2023',
    highlights: [
      'Processed 8–12 business operations records daily and 60–80 telecom equipment records weekly',
      'Audited and validated cell tower deployment, inventory, and expenditure data within a 6-person team',
      'Supported RF Engineers and Project Managers on site visits, improving distribution speed by ~10%',
      'Strengthened data integrity and documentation for engineering infrastructure operations',
    ],
  },
];

export const relevantCoursework = [
  {
    title: 'Advanced Network Security',
    topics:
      'VPNs and cryptography, network troubleshooting, network design, SIEM deployment, MITRE ATT&CK Framework',
  },
  {
    title: 'Integrated Infrastructure Cybersecurity',
    topics:
      'NIST CSF 2.0 gap analysis, GOVERN function, C-SCRM, incident response playbooks, Purdue Model, Industrial DMZ, EDR/XDR, Sigma Rules, ZTNA, quantitative risk / ALE, threat surface mapping',
  },
];

export const careerGoals = [
  'Security Engineer',
  'Cybersecurity Educator',
  'Cybersecurity Consultant',
];
