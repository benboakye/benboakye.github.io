import type { LucideIcon } from 'lucide-react';
import {
  Container,
  Globe,
  Network,
  Radar,
  Shield,
  Terminal,
  Code2,
} from 'lucide-react';

export interface TechStackItem {
  name: string;
  icon: LucideIcon;
}

export const techStack: TechStackItem[] = [
  { name: 'Python', icon: Code2 },
  { name: 'Linux', icon: Terminal },
  { name: 'Wireshark', icon: Network },
  { name: 'OPNsense', icon: Shield },
  { name: 'Docker', icon: Container },
  { name: 'React', icon: Globe },
  { name: 'Tailwind', icon: Code2 },
  { name: 'Nmap', icon: Radar },
  { name: 'Kali Linux', icon: Terminal },
];
