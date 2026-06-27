export interface Article {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  readingTime: string;
  date: string;
}

export const articles: Article[] = [
  {
    id: 'firewall-segmentation',
    title: 'How Firewall Segmentation Reduces Attack Surface',
    category: 'Network Security',
    excerpt:
      'A beginner-friendly breakdown of how firewall rules, VLANs, and DMZ design limit attacker movement.',
    readingTime: '6 min read',
    date: 'Coming Soon',
  },
  {
    id: 'enterprise-labs',
    title: 'What I Learned Building Enterprise Network Security Labs',
    category: 'Cybersecurity Labs',
    excerpt:
      'Lessons from configuring VLANs, routing, ACLs, NAT, OPNsense rules, and validating traffic with Nmap and Wireshark.',
    readingTime: '8 min read',
    date: 'Coming Soon',
  },
  {
    id: 'ai-anomaly-detection',
    title: 'AI-Based Anomaly Detection for Network Security',
    category: 'AI + Cybersecurity',
    excerpt:
      'How machine learning can model normal traffic behavior and detect suspicious deviations in enterprise environments.',
    readingTime: '7 min read',
    date: 'Coming Soon',
  },
  {
    id: 'ot-career-path',
    title: 'My Path Toward Critical Infrastructure and OT Cybersecurity',
    category: 'Career Development',
    excerpt:
      'A personal reflection on moving from telecommunications engineering into cybersecurity operations and infrastructure defense.',
    readingTime: '5 min read',
    date: 'Coming Soon',
  },
];
