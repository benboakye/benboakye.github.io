export interface SkillGroup {
  title: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Security Frameworks & Methods',
    skills: [
      'NIST Cybersecurity Framework (CSF)',
      'MITRE ATT&CK',
      'Risk assessment',
      'Threat scenario mapping',
      'Security recommendations',
    ],
  },
  {
    title: 'Network Security',
    skills: [
      'OSI Model',
      'TCP/IP',
      'DHCP',
      'ARP',
      'ICMP',
      'Routing',
      'OSPF',
      'VLANs',
      'VLSM',
      'ACLs',
      'NAT/PAT',
      'Network segmentation',
      'VPN concepts',
      'TLS',
      'SSH',
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      'Wireshark',
      'Tcpdump',
      'Nmap',
      'Kali Linux',
      'OPNsense',
      'Cisco Packet Tracer',
      'Keycloak',
      'OpenWrt',
    ],
  },
  {
    title: 'Systems & Infrastructure',
    skills: [
      'Linux Ubuntu/OpenWrt',
      'SSH',
      'Bash scripting',
      'Windows',
      'Active Directory fundamentals',
      'UAC',
      'Windows Registry',
      'Windows Defender',
      'BitLocker',
      'Local servers',
      'Banana Pi',
      'Raspberry Pi',
    ],
  },
  {
    title: 'Programming & Data',
    skills: ['Python', 'Pandas', 'NumPy', 'Data cleaning', 'Technical documentation'],
  },
];
