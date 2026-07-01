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
    report?: string;
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
    title: 'Portable Offline Network-Attached Storage Platform',
    category: 'Infrastructure / Embedded Networking / Local Network Systems',
    description:
      'Built and demonstrated a portable offline NAS for multimedia file sharing at Ghana Communication Technology University. Uses Banana Pi BPI-R4, OpenWrt, Wi-Fi 7 (MediaTek MT7996/BE14), NVMe storage, and the GCTU E Library browser interface for local upload/download without cloud dependency.',
    highlights: [
      'Demonstrated as GCTU E Library for offline academic file access',
      'Wi-Fi 7 local access point with NVMe storage and OpenWrt network stack',
      'Chunked PHP uploads supporting files greater than 1 GB',
      'Load tested with Apache JMeter up to 50 simulated concurrent users',
      'Peak throughput ~56–58 MB/s; prototype donated to GCTU after faculty demonstration',
    ],
    tags: [
      'Banana Pi BPI-R4',
      'OpenWrt',
      'Wi-Fi 7',
      'NVMe',
      'GCTU E Library',
      'Apache JMeter',
      'PHP',
      'SQM',
      'Local Servers',
    ],
    thumbnail: '/projects/nas/assembled-top-view.png',
    featured: true,
    links: {
      caseStudy: '/projects/portable-offline-nas',
      report: '/reports/GCTU-NAS-Final-Year-Project.pdf',
    },
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
