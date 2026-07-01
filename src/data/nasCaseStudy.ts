export const nasCaseStudy = {
  id: 'portable-offline-nas',
  title: 'Portable Offline Network-Attached Storage Platform',
  subtitle:
    'A Banana Pi BPI-R4 and OpenWrt-based local file-sharing platform — demonstrated as GCTU E Library for offline access to lecture materials, research files, and educational multimedia without relying on Internet connectivity.',
  category: 'Infrastructure / Embedded Networking / Local Network Systems',
  status: 'Completed · Demonstrated · Donated to GCTU',
  statusNote:
    'Following a successful faculty demonstration, the completed prototype was donated to Ghana Communication Technology University (GCTU) for academic use. A public live demo is not available because the hardware is no longer in my possession.',
  reportPath: '/reports/GCTU-NAS-Final-Year-Project.pdf',
  tags: [
    'Banana Pi BPI-R4',
    'OpenWrt',
    'Wi-Fi 7',
    'MediaTek MT7996',
    'NVMe Storage',
    'GCTU E Library',
    'Apache JMeter',
    'PHP',
    'SQM',
    'NAS',
  ],
  metrics: [
    { label: 'Platform', value: 'Banana Pi BPI-R4' },
    { label: 'Operating System', value: 'OpenWrt 24.10.2' },
    { label: 'Storage', value: '128 GB NVMe SSD' },
    { label: 'Wireless', value: 'Wi-Fi 7 (MT7996/BE14)' },
    { label: 'Web Interface', value: 'GCTU E Library' },
    { label: 'Load Testing', value: 'Apache JMeter (up to 50 users)' },
  ],
  problem:
    'Educational institutions often need to distribute large multimedia resources — lecture videos, research papers, and software tools — but cloud storage depends on Internet connectivity, bandwidth, and cost. In classrooms and campuses with limited or congested connectivity, simultaneous access to large files becomes slow and unreliable.',
  solution:
    'I designed and built a portable, Internet-independent NAS that hosts files on local NVMe storage and shares them over a dedicated Wi-Fi network through a browser-based interface — demonstrated as GCTU E Library for offline academic file access and local distribution of educational content.',
  eLibrary:
    'The web interface was demonstrated as GCTU E Library — an offline electronic library for shared academic content. The same platform supports local distribution of lecture videos, research papers, software tools, and other educational media over a dedicated Wi-Fi network without requiring Internet access during use.',
  architecture: `Users: Phones / Laptops / Tablets
        |
        | Wi-Fi 7 Access (MT7996/BE14)
        v
Banana Pi BPI-R4 NAS Device
        |
OpenWrt Local Network Stack
        |
 DHCP / DNS / Firewall Zones / SQM / AP
        |
   uHTTPd + PHP 8 Web App (GCTU E Library)
        |
      NVMe File Storage`,
  implementation: [
    {
      title: 'Hardware Assembly',
      body: 'Banana Pi BPI-R4 with 128 GB NVMe SSD, Wi-Fi 7 NIC module, cooling, and protective enclosure for portable deployment across classrooms and labs.',
    },
    {
      title: 'OpenWrt Network Stack',
      body: 'Local Wi-Fi access point, LAN bridge, DHCP/DNS, firewall zones for WAN/LAN separation, optional Ethernet/Wi-Fi client/USB tethering backhaul, and SQM for traffic management.',
    },
    {
      title: 'NVMe Storage',
      body: 'ext4-formatted NVMe partition mounted at /mnt with dedicated file-sharing directories and permissions configured for the web application.',
    },
    {
      title: 'GCTU E Library Web App',
      body: 'uHTTPd + PHP 8 CGI file manager with chunked uploads (5 MB chunks) supporting files greater than 1 GB without memory exhaustion or timeouts.',
    },
  ],
  testingMethodology:
    'Performance was evaluated using Apache JMeter to simulate concurrent download clients. Tests used file sizes of 89.3 MB, 196 MB, and 403 MB with 1–20 simulated users. The 403 MB file was additionally tested at 30 and 50 concurrent users. System monitoring was captured through OpenWrt (CPU per core, load, memory, Wi-Fi signal quality, and br-lan traffic).',
  results: [
    'Peak aggregate throughput reached approximately 56–58 MB/s with a small number of concurrent users.',
    '89.3 MB file: peak ~56–57 MB/s at ~3 users; ~18–20 MB/s total throughput at 20 users.',
    '196 MB file: peak ~56–57 MB/s at 5–6 users; declined to ~7–10 MB/s at 20 users.',
    '403 MB file: peak ~57–58 MB/s at 5–6 users; ~8–12 MB/s at 18–20 users.',
    '403 MB @ 50 simulated users: transmission still peaked near ~60 MB/s with sustained multi-user delivery.',
    'Wi-Fi signal quality remained 80–90% on 5 GHz during active tests — throughput drops were not radio-limited.',
    'Memory headroom stayed strong (~140 MB used, ~3.1–3.4 GB free); no packet loss observed on br-lan.',
    'CPU load peaked around 1.3–1.4 on 1-minute averages during heaviest 403 MB tests without instability.',
  ],
  challenges: [
    {
      title: 'Internet-Independent Operation',
      solution:
        'Configured the BPI-R4 as a standalone wireless access point and local NAS using OpenWrt, removing dependency on cloud services or external Internet during deployment.',
    },
    {
      title: 'Large File Uploads',
      solution:
        'Implemented chunked upload logic (5 MB parts) with PHP assembly on the server, enabling multi-gigabyte uploads without memory spikes or timeouts.',
    },
    {
      title: 'Storage Mounting & Permissions',
      solution:
        'Formatted and mounted NVMe storage with ext4, configured sharing directories, and aligned web process write permissions for reliable upload/download access.',
    },
    {
      title: 'Wireless & Network Configuration',
      solution:
        'Tuned OpenWrt AP mode, LAN bridge, DHCP, firewall zones, and optional WAN backhaul paths for flexible setup while preserving offline operation.',
    },
    {
      title: 'Stability Under Concurrent Load',
      solution:
        'Added cooling, SQM, and monitored CPU/memory/Wi-Fi during JMeter load tests to validate behaviour under realistic academic concurrency.',
    },
  ],
  securityNote:
    'The system was designed for offline educational use with basic access controls: isolated firewall zones between LAN and optional WAN, a hardened OpenWrt root account, and restricted write permissions on shared storage. Advanced controls such as MFA, end-to-end encryption, and intrusion detection were identified as future improvements in the project scope.',
  skills: [
    'Local network design',
    'Access point configuration',
    'DHCP & DNS',
    'Firewall zones',
    'SQM traffic management',
    'OpenWrt administration',
    'NVMe storage setup',
    'PHP web backend',
    'Chunked file uploads',
    'Apache JMeter load testing',
    'Performance monitoring',
    'Technical documentation',
  ],
  images: {
    hero: '/projects/nas/assembled-top-view.png',
    hardware: [
      { src: '/projects/nas/hardware-components.png', alt: 'NAS hardware components' },
      { src: '/projects/nas/hardware-assembly.png', alt: 'NAS hardware assembly process' },
      { src: '/projects/nas/assembled-side-view.png', alt: 'Assembled NAS side view' },
      { src: '/projects/nas/assembled-top-view.png', alt: 'Assembled NAS top view' },
    ],
    webUi: [
      { src: '/projects/nas/admin-upload-page.png', alt: 'GCTU E Library admin upload page' },
      { src: '/projects/nas/admin-file-management.png', alt: 'GCTU E Library file management page' },
      { src: '/projects/nas/download-home-page.png', alt: 'GCTU E Library download home page' },
    ],
    throughput: [
      { src: '/projects/nas/throughput-89mb.png', alt: 'Throughput vs users for 89.3 MB file', caption: '89.3 MB — up to 20 users' },
      { src: '/projects/nas/throughput-196mb.png', alt: 'Throughput vs users for 196 MB file', caption: '196 MB — up to 20 users' },
      { src: '/projects/nas/throughput-403mb.png', alt: 'Throughput vs users for 403 MB file', caption: '403 MB — up to 20 users (also tested at 50)' },
    ],
    monitoring: [
      { src: '/projects/nas/system-load.png', alt: 'System load during NAS testing' },
      { src: '/projects/nas/memory-usage.png', alt: 'Memory usage during NAS testing' },
      { src: '/projects/nas/system-quality.png', alt: 'Packet traffic on br-lan during testing' },
      { src: '/projects/nas/processor-core-3.png', alt: 'Processor usage on core 3 during testing' },
    ],
  },
};
