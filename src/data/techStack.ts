import type { LucideIcon } from 'lucide-react';
import {
  Globe,
  Network,
  Radar,
  Shield,
  Terminal,
  Code2,
  Activity,
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
  { name: 'Splunk', icon: Activity },
  { name: 'React', icon: Globe },
  { name: 'Tailwind', icon: Code2 },
  { name: 'Nmap', icon: Radar },
  { name: 'Kali Linux', icon: Terminal },
];
