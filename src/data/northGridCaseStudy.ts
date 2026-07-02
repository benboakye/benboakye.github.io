export interface AssessmentPhase {
  id: string;
  shortTitle: string;
  mainOutcome: string;
  title: string;
  subtitle: string;
  summary: string;
  findings: string[];
  tools: string[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface EvidenceItem {
  title: string;
  description: string;
  image?: string;
}

export const northGridCaseStudy = {
  id: 'cybersecurity-risk-assessment',
  pageTitle:
    'Critical Infrastructure Cybersecurity Risk Assessment & Governance Roadmap | Bernard Boakye Appiah',
  metaDescription:
    'Portfolio case study showing a six-phase cybersecurity risk assessment for a fictional Ontario energy operator using NIST CSF 2.0, MITRE ATT&CK, IAM review, OpenSCAP, SBOM analysis, KEV/EPSS vulnerability prioritization, Sigma detection rules, and a 12-month governance roadmap.',
  title: 'Critical Infrastructure Cybersecurity Risk Assessment & Governance Roadmap',
  orgLabel: 'NorthGrid Energy — Fictional Critical Infrastructure Operator',
  description:
    'I assessed a fictional Ontario energy operator across cyber, physical, and supply chain domains using NIST CSF 2.0, MITRE ATT&CK, IAM review, endpoint hardening evidence, SBOM-driven vulnerability analysis, and incident response tabletop decisions. The final deliverable was a prioritized 12-month security roadmap to improve governance, identity, OT visibility, resilience, and vulnerability management.',
  category: 'Governance, Risk & Compliance / Critical Infrastructure Security',
  status: 'Completed Portfolio Case Study',
  boundaryNote:
    'NorthGrid Energy is a fictional organization used as a structured portfolio scenario. The project demonstrates how I would perform an end-to-end cybersecurity risk assessment for an energy-sector operator. No production customer systems or real utility data were assessed.',
  statusNote:
    'This project is based on a fictional critical infrastructure scenario and was created to demonstrate cybersecurity risk assessment, GRC, infrastructure security, IAM, vulnerability management, and incident response skills. All public artifacts are sanitized portfolio deliverables and do not represent a live assessment of a real utility.',
  reportPath: '/reports/northgrid/NorthGrid-Full-Program-Assessment.pdf',
  evidenceBriefsPath: '#downloads',
  tags: [
    'NIST CSF 2.0',
    'MITRE ATT&CK',
    'Keycloak IAM',
    'OpenSCAP',
    'SBOM',
    'Sigma Rules',
    'CISA KEV',
    'EPSS',
    'OT Security',
  ],
  metrics: [
    { label: 'Organization', value: 'NorthGrid Energy — fictional CI operator' },
    { label: 'Assessment phases', value: '6 integrated phases' },
    { label: 'Security domains', value: 'Cyber, Physical, Supply Chain' },
    { label: 'Frameworks', value: 'NIST CSF 2.0, MITRE ATT&CK, C-SCRM' },
    { label: 'OpenSCAP baseline', value: '88.88% CIS Ubuntu 22.04 Level 1' },
    { label: 'SBOM components', value: '2,393 packages catalogued' },
    { label: 'Vulnerability scan', value: '119 CVEs identified with Grype' },
    { label: 'Roadmap target', value: 'CSF maturity target: Tier 3 in 12 months' },
  ],
  role: 'Security Analyst / GRC and Infrastructure Security',
  scope:
    'Threat surface mapping, NIST CSF 2.0 profiling, IAM review, vendor access risk, endpoint baseline assessment, SBOM/vulnerability analysis, detection engineering, ransomware tabletop decisions, ALE calculations, and security roadmap planning.',
  toolsAndMethods:
    'NIST CSF 2.0, MITRE ATT&CK, Keycloak, Docker, OpenSCAP, Docker Bench, Syft, Grype, CISA KEV, FIRST EPSS, Sigma rules, CPTED, ALE risk calculations.',
  deliverables:
    'Current-state profile, three-domain threat register, IAM recommendations, vulnerability prioritization queue, detection rules, incident response decisions, and a 12-month governance roadmap.',
  problem:
    'NorthGrid Energy began with a weak security posture: flat IT/OT networking, incomplete MFA coverage, no formal incident response plan, persistent vendor VPN access, limited OT visibility, no SBOM requirements, and untested recovery processes. These gaps created risk across remote access, privileged administration, OT availability, physical facility access, and third-party dependencies.',
  solution:
    'I treated the project as a phased security program assessment. First, I built a current-state profile using NIST CSF 2.0 and mapped NorthGrid assets across cyber, physical, and supply chain domains. Next, I connected the threat surface to MITRE ATT&CK techniques and real-world incident patterns. I then validated identity, endpoint, container, SBOM, and detection findings using practical tools and closed the project with vulnerability prioritization, tabletop response decisions, ALE calculations, and a 12-month governance roadmap.',
  programOutcomes: [
    'Built an integrated three-domain threat register linking cyber, physical, and supply chain gaps to ATT&CK techniques.',
    'Created a CSF 2.0 current-state profile and target maturity roadmap.',
    'Recommended IAM improvements: VPN MFA, phishing-resistant WebAuthn/FIDO2, PAM, named admin accounts, and vendor JIT access.',
    'Designed network security improvements: IT/OT DMZ, EMS egress restrictions, VPN hardening, and OT-safe monitoring.',
    'Generated SBOM-backed vulnerability evidence and applied KEV + EPSS + asset reachability prioritization.',
    'Authored Sigma-style detections for MFA fatigue and OT scheduled-task activity.',
    'Validated response decisions through a ransomware tabletop: isolate, preserve evidence, recover cleanly, and avoid ransom payment unless leadership/legal conditions require reconsideration.',
    'Produced a 12-month roadmap targeting CSF maturity level 3 across all six functions.',
  ],
  evidenceGalleryIntro:
    'Selected evidence from the assessment workflow, including IAM configuration, baseline hardening, SBOM/vulnerability scan results, Docker hardening findings, detection logic, and governance roadmap outputs.',
  evidenceGallery: [
    {
      title: 'Keycloak IAM Roles',
      description:
        'RBAC model for OT operator, IT admin, helpdesk, and vendor HVAC identities.',
    },
    {
      title: 'OpenSCAP Baseline',
      description:
        'CIS Ubuntu 22.04 Level 1 scan showing 88.88% compliance and failed hardening controls.',
    },
    {
      title: 'SBOM & Grype Results',
      description: 'CycloneDX SBOM with 2,393 packages and 119 vulnerability findings.',
    },
    {
      title: 'Docker Bench Findings',
      description:
        '137 security checks with key warnings around namespaces, logging, and privilege restriction.',
    },
    {
      title: 'Sigma Detection Logic',
      description: 'MFA fatigue and OT scheduled-task detection patterns.',
    },
    {
      title: 'Governance Roadmap',
      description: '12-month CSF maturity roadmap targeting Tier 3 outcomes.',
    },
  ] as EvidenceItem[],
  phases: [
    {
      id: 'profiling',
      shortTitle: 'Threat Surface & CSF Profiling',
      mainOutcome:
        'Mapped NorthGrid across cyber, physical, and supply chain domains; built CSF current-state profile and compared gaps with Colonial Pipeline.',
      title: 'Phase 1 — Threat Surface & CSF Profiling',
      subtitle: 'Establish baseline posture and map the enterprise attack surface',
      summary:
        'Mapped NorthGrid\'s threat surface across cyber, physical, and supply chain domains and built a NIST CSF 2.0 current-state profile. Applied the same framework to Colonial Pipeline to extract cross-domain lessons on identity, segmentation, and vendor access.',
      findings: [
        'GOVERN and IDENTIFY functions rated Tier 1–2: no documented risk appetite, no formal IR plan, no supply chain assessments in 24 months.',
        'PROTECT gaps: MFA absent on VPN, flat IT/OT network, USB ports active on NOC workstations, HVAC vendor has persistent VPN without MFA.',
        'Colonial Pipeline gap analysis reinforced that identity compromise plus insufficient segmentation can cascade into OT disruption.',
        'Cross-domain dependencies identified: physical NOC access weaknesses amplify cyber credential theft scenarios.',
      ],
      tools: ['NIST CSF 2.0 Reference Tool', 'CISA Advisory AA21-131A', 'AlienVault OTX'],
    },
    {
      id: 'threat-intelligence',
      shortTitle: 'Threat Actor & Supply Chain Intelligence',
      mainOutcome:
        'Profiled APT29 and SolarWinds-style supply chain compromise; mapped exposed paths such as remote services, public-facing apps, and valid accounts.',
      title: 'Phase 2 — Threat Actor & Supply Chain Intelligence',
      subtitle: 'Profile APT29 and map sector-relevant TTPs',
      summary:
        'Operationalized threat intelligence by profiling APT29 (Cozy Bear), analyzing SolarWinds supply chain compromise (T1195.002), and connecting techniques to NorthGrid\'s remote access and Active Directory dependencies.',
      findings: [
        'Credential Access was the most populated APT29 tactic (11 techniques) — high relevance for VPN and AD-dependent utilities.',
        'Top sector exposures: T1133 External Remote Services, T1190 Exploit Public-Facing Application, T1078.002 Valid Domain Accounts.',
        'Physical control gaps: NOC lacks dedicated badge access and internal CCTV; USB ports remain enabled on operational workstations.',
        'SolarWinds mapped across six supply chain phases with C-SCRM categories; SBOM absence in vendor contracts identified as systemic gap.',
      ],
      tools: ['MITRE ATT&CK Navigator', 'MITRE ATT&CK Enterprise Matrix', 'AlienVault OTX'],
    },
    {
      id: 'identity-access',
      shortTitle: 'Identity & Access Management',
      mainOutcome:
        'Configured a Keycloak IAM model, mapped physical zones to logical tiers, and audited vendor privilege using JEA/JIT principles.',
      title: 'Phase 3 — Identity & Access Management',
      subtitle: 'Deploy IAM controls and audit vendor privilege',
      summary:
        'Configured Keycloak as NorthGrid\'s identity namespace with RBAC roles, MFA enrollment paths, physical-to-logical zone mapping, and a vendor access audit using just-enough and just-in-time access principles.',
      findings: [
        'Deployed Keycloak 24.0.4 with northgrid-energy realm, four roles (ot-operator, it-admin, helpdesk, vendor-hvac), and scoped user assignments.',
        'Most critical physical misalignment: OT cabinet room shares general office badge access despite Tier 1 logical sensitivity.',
        'HVAC contractor badge anomalies and unescorted visitor policy gaps create paths to reach OT-adjacent systems.',
        'Recommended WebAuthn/FIDO2 for phishing-resistant MFA and JIT session limits for vendor-hvac accounts.',
      ],
      tools: ['Keycloak 24.0.4', 'Docker', 'Have I Been Pwned API', 'RBAC / PBAC concepts'],
    },
    {
      id: 'resilience',
      shortTitle: 'Resilience & Baseline Hardening',
      mainOutcome:
        'Ran OpenSCAP against Ubuntu 22.04, reviewed CPTED physical controls, and designed staged rollout controls for vendor endpoint updates.',
      title: 'Phase 4 — Resilience & Baseline Hardening',
      subtitle: 'Measure endpoint compliance and physical/site resilience',
      summary:
        'Ran OpenSCAP against Ubuntu 22.04 using the CIS Level 1 Server benchmark, performed CPTED-based physical site review of the Hamilton facility, and mapped disaster recovery dependencies including a CrowdStrike-style staged rollout scenario.',
      findings: [
        'OpenSCAP: 651 rules evaluated — 87 pass, 22 fail, 88.88% overall score; failures concentrated in password quality and account lockout controls.',
        'Top failures: minimum password length, log file permissions, failed-login lockout, pam_wheel for su, password hashing algorithm.',
        'CPTED review: NOC and OT cabinet zones lack territorial reinforcement and natural surveillance adequate for CI operations.',
        'Managed SOC vendor identified as single point of failure; staged agent rollout policy designed to prevent fleet-wide outage.',
      ],
      tools: ['OpenSCAP 1.2.17', 'SCAP Security Guide 0.1.72', 'Docker', 'CIS Ubuntu 22.04 L1 Benchmark'],
    },
    {
      id: 'detection-supply-chain',
      shortTitle: 'Hardening, SBOM & Detection Engineering',
      mainOutcome:
        'Used Docker Bench, Syft, Grype, CISA KEV, and Sigma rules to connect hardening, software supply chain visibility, and detection engineering.',
      title: 'Phase 5 — Hardening, SBOM & Detection Engineering',
      subtitle: 'Container security, software supply chain visibility, and detection rules',
      summary:
        'Assessed Docker host hardening with Docker Bench, generated a CycloneDX SBOM for Ubuntu 22.04, scanned 2,393 components with Grype, cross-referenced CISA KEV, and authored Sigma-style detections for OT and identity threats.',
      findings: [
        'Docker Bench: 137 tests, 21 warnings, 0 failures — key gaps in inter-container network restriction, user namespaces, centralized logging, and privilege restriction.',
        'SBOM: 2,393 components in CycloneDX 1.6 format; Grype found 119 vulnerabilities (1 High, 66 Medium, 44 Low).',
        'Highest-risk CVE tracked: CVE-2026-45447 in libssl3 (High); KEV cross-reference performed for operational prioritization context.',
        'Authored MFA push fatigue detection rule; reviewed and improved Industroyer2 scheduled-task detection pattern for OT environments.',
        'Sysinternals Autoruns flagged a broken 2FA shortcut target requiring investigation on engineering workstations.',
      ],
      tools: ['Docker Bench Security', 'Syft 1.45.1', 'Grype', 'CISA KEV Catalog', 'Sigma', 'Sysinternals Autoruns'],
    },
    {
      id: 'governance',
      shortTitle: 'Prioritization, IR & Governance Roadmap',
      mainOutcome:
        'Prioritized CVEs with KEV/EPSS/CVSS and asset reachability, ran ransomware tabletop decisions, calculated ALE, and built a 12-month roadmap.',
      title: 'Phase 6 — Prioritization, IR & Governance Roadmap',
      subtitle: 'Quantify risk and define program improvements',
      summary:
        'Prioritized vulnerabilities using KEV, EPSS, CVSS, asset confirmation, and reachability; ran ransomware tabletop decisions; calculated annualized loss expectancy for EternalBlue exposure; rated CSF 2.0 maturity across all six functions; and produced a 12-month roadmap.',
      findings: [
        'P1 queue: CVE-2024-3400, CVE-2023-36884, and CVE-2021-44228 pending EMS SBOM verification.',
        'EternalBlue ALE: $650,000 SLE × 0.30 ARO = $195,000/year.',
        'Ransomware tabletop decisions: activate IR, disable shared admin credentials, isolate affected systems while preserving OT communications, preserve evidence, and avoid ransom payment at this stage.',
        'CSF maturity baseline: GOVERN 1, IDENTIFY 1, PROTECT 1, DETECT 2, RESPOND 1, RECOVER 1. Target: maturity 3 across all functions within 12 months.',
      ],
      tools: ['NIST NVD', 'CISA KEV', 'FIRST EPSS API', 'NIST CSF 2.0', 'ALE / quantitative risk'],
    },
  ] as AssessmentPhase[],
  incidentLessons: [
    {
      incident: 'Colonial Pipeline',
      lesson:
        'Identity compromise and weak segmentation can turn an IT incident into an operations-impacting event.',
    },
    {
      incident: 'SolarWinds Orion',
      lesson:
        'A trusted software update channel can become an attack path; SBOMs, supplier attestation, and update validation matter.',
    },
    {
      incident: 'Uber 2022',
      lesson:
        'MFA fatigue, vendor access, and exposed privileged credentials show why phishing-resistant MFA and PAM matter.',
    },
    {
      incident: 'CrowdStrike-style outage',
      lesson:
        'Trusted security tools can still create operational disruption; staged rollout, health checks, and rollback plans are resilience controls.',
    },
  ],
  downloads: [
    {
      label: 'Full Program Assessment',
      path: '/reports/northgrid/NorthGrid-Full-Program-Assessment.pdf',
      description: 'Executive summary across all six phases. Best for recruiters and hiring managers.',
    },
    {
      label: 'Threat Surface & CSF Brief',
      path: '/reports/northgrid/NorthGrid-Threat-Surface-CSF-Brief.pdf',
      description: 'Baseline posture, three-domain mapping, and CSF gap analysis.',
    },
    {
      label: 'IAM & Vendor Access Brief',
      path: '/reports/northgrid/NorthGrid-IAM-Vendor-Access-Brief.pdf',
      description:
        'Keycloak IAM model, RBAC/PBAC thinking, physical-to-logical tier mapping, and vendor JIT recommendations.',
    },
    {
      label: 'SBOM & Vulnerability Brief',
      path: '/reports/northgrid/NorthGrid-SBOM-Vulnerability-Brief.pdf',
      description: 'Syft/Grype results, CISA KEV cross-reference, and vulnerability prioritization workflow.',
    },
    {
      label: 'Detection Engineering Brief',
      path: '/reports/northgrid/NorthGrid-Detection-Engineering-Brief.pdf',
      description: 'Sigma-style detection logic for MFA fatigue and OT scheduled-task patterns.',
    },
    {
      label: 'Docker Benchmark Results',
      path: '/reports/northgrid/NorthGrid-Docker-Benchmark-Results.pdf',
      description: 'Supporting scan output for container hardening review.',
    },
  ],
  skillGroups: [
    {
      category: 'GRC and Risk',
      items: [
        'NIST CSF 2.0 gap analysis',
        'Maturity assessment',
        'ALE calculations',
        '12-month roadmap',
        'C-SCRM',
      ],
    },
    {
      category: 'Infrastructure Security',
      items: [
        'IT/OT segmentation',
        'Endpoint baseline hardening',
        'Docker security',
        'OpenSCAP',
        'CPTED physical controls',
      ],
    },
    {
      category: 'Identity Security',
      items: [
        'Keycloak IAM',
        'RBAC/PBAC concepts',
        'MFA',
        'WebAuthn/FIDO2',
        'PAM',
        'JEA/JIT vendor access',
      ],
    },
    {
      category: 'Vulnerability Management',
      items: [
        'SBOM generation',
        'CycloneDX',
        'Syft',
        'Grype',
        'CISA KEV',
        'EPSS',
        'Asset reachability triage',
      ],
    },
    {
      category: 'Detection and Response',
      items: [
        'MITRE ATT&CK mapping',
        'Sigma detection engineering',
        'Ransomware tabletop',
        'Evidence preservation decisions',
      ],
    },
  ] as SkillGroup[],
};
