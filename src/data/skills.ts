export interface SkillGroup {
  title: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Core Strengths',
    skills: [
      'Risk assessment (NIST CSF & MITRE ATT&CK)',
      'Network segmentation & firewall configuration',
      'Packet analysis & traffic validation',
      'Linux & infrastructure lab environments',
      'Technical documentation & lab write-ups',
      'Network device configuration (VLANs, NAT, routing, ACLs)',
    ],
  },
  {
    title: 'Security Frameworks & Methods',
    skills: [
      'NIST Cybersecurity Framework (CSF) 2.0',
      'MITRE ATT&CK',
      'Risk assessment & threat scenario mapping',
      'Incident response planning',
      'Quantitative risk / ALE concepts',
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
      'pfSense',
      'Cisco Packet Tracer',
      'Splunk',
      'Wazuh',
      'Keycloak',
      'OpenWrt',
      'Git',
      'GitHub',
    ],
  },
  {
    title: 'Systems & Infrastructure',
    skills: [
      'Linux (Ubuntu/OpenWrt)',
      'SSH',
      'Bash scripting',
      'PowerShell',
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
  {
    title: 'Developing / In Progress',
    skills: [
      'IAM (Keycloak)',
      'SIEM deployment & analysis',
      'Cloud security',
      'AI/ML for network monitoring',
      'GRC documentation',
    ],
  },
];
