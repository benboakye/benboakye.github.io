export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  highlights?: string[];
  tags: string[];
  thumbnail: string;
  status?: string;
  featured: boolean;
  links: {
    caseStudy?: string;
    github?: string;
    liveDemo?: string;
  };
}

export const projects: Project[] = [
  {
    id: 'risk-assessment',
    title: 'Cybersecurity Risk Assessment Project',
    category: 'Governance, Risk & Compliance / Cybersecurity Analysis',
    description:
      'Assessed cybersecurity gaps using NIST CSF and mapped threat scenarios with MITRE ATT&CK, including social engineering, supply-chain compromise, insider risk, and APT activity.',
    highlights: [
      'NIST CSF assessment',
      'MITRE ATT&CK threat mapping',
      'Incident analysis: Stuxnet, SolarWinds, Uber',
      'Recommendations: MFA, segmentation, vulnerability management, incident response planning, supply-chain risk management, continuous monitoring',
    ],
    tags: [
      'NIST CSF',
      'MITRE ATT&CK',
      'Risk Assessment',
      'Threat Modeling',
      'Security Documentation',
    ],
    thumbnail: '/images/project-risk-assessment.svg',
    featured: true,
    links: {},
  },
  {
    id: 'network-security-labs',
    title: 'Enterprise Network Security, Firewall & Traffic Analysis Labs',
    category: 'Network Security / Advanced Network Security',
    description:
      'Designed and configured segmented enterprise lab networks using VLANs, VLSM, DHCP, OSPF/static routing, NAT, ACLs, and OPNsense firewall rules.',
    highlights: [
      'Segmented LAN/WAN/DMZ environments',
      'OPNsense firewall rules',
      'Internal, External, and DMZ traffic control',
      'Nmap before/after validation',
      'Wireshark and Tcpdump packet analysis',
      'Reduced reconnaissance visibility and minimized exposed attack surface',
    ],
    tags: [
      'OPNsense',
      'VLANs',
      'ACLs',
      'NAT',
      'OSPF',
      'Nmap',
      'Wireshark',
      'Tcpdump',
      'Network Segmentation',
    ],
    thumbnail: '/images/project-network-security.svg',
    featured: true,
    links: {},
  },
  {
    id: 'nas-architecture',
    title: 'Offline Network-Attached Storage Architecture',
    category: 'Infrastructure / Local Network Systems',
    description:
      'Engineered a portable, internet-independent NAS using Banana Pi BPI-R4, NVMe storage, OpenWrt, and Wi-Fi 7 for local multimedia file sharing.',
    highlights: [
      'Independent Wi-Fi access point',
      'Firewall zones',
      'Internet-independent local network',
      'SQM for bufferbloat reduction',
      'Multi-user local sharing',
      'Chunked uploads using uHTTPd and PHP 8 CGI',
    ],
    tags: [
      'Banana Pi BPI-R4',
      'OpenWrt',
      'NVMe',
      'Wi-Fi 7',
      'SQM',
      'uHTTPd',
      'PHP 8 CGI',
      'Local Servers',
    ],
    thumbnail: '/images/project-nas.svg',
    featured: true,
    links: {},
  },
  {
    id: 'iam-lab',
    title: 'Identity and Access Management Lab',
    category: 'IAM / Access Control',
    description:
      'Configured users, roles, and access control concepts in Keycloak to understand IAM workflows and role-based access foundations.',
    tags: ['Keycloak', 'IAM', 'RBAC', 'Access Control', 'Authentication Concepts'],
    thumbnail: '/images/project-iam.svg',
    featured: false,
    links: {},
  },
  {
    id: 'ai-ids',
    title: 'ML-Based Network Monitoring IDS',
    category: 'AI Cybersecurity / Network Defense',
    description:
      'Prototype IDS that uses machine learning to monitor network and host activity for possible attacks, with deployed agents and a server-hosted dashboard on cloud Ubuntu hosts.',
    highlights: [
      'Built and deployed monitoring agents with a dashboard on cloud Ubuntu server and test host',
      'Uses live network captures for prototype monitoring; planning NSL-KDD or newer datasets for ML optimization',
      'Applied Isolation Forest for anomaly detection',
      'Remaining work: installer-based deployment, host agent rollout, and ML tuning',
    ],
    tags: [
      'Python',
      'Isolation Forest',
      'Network Monitoring',
      'Anomaly Detection',
      'Ubuntu',
      'IDS',
      'Machine Learning',
    ],
    thumbnail: '/images/project-ai-ids.svg',
    status: 'Ongoing',
    featured: false,
    links: {
      github: 'https://github.com/benboakye/ML-Network-Intrusion-detection',
    },
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
