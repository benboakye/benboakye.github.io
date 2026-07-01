import { motion } from 'framer-motion';
import {
  Database,
  Globe,
  HardDrive,
  Laptop,
  Router,
  Server,
  Shield,
  Smartphone,
  Tablet,
  Wifi,
} from 'lucide-react';

const layers = [
  {
    id: 'application',
    label: 'Application Layer',
    accent: 'text-primary',
    border: 'border-primary/40',
    glow: 'shadow-glow',
    items: [
      { icon: Globe, text: 'GCTU E Library Web App' },
      { icon: Server, text: 'uHTTPd + PHP 8 CGI' },
      { icon: Database, text: 'Chunked upload & file manager' },
    ],
  },
  {
    id: 'network',
    label: 'Network Layer · OpenWrt',
    accent: 'text-accent',
    border: 'border-accent/40',
    glow: 'shadow-glow-cyan',
    items: [
      { icon: Wifi, text: 'Wi-Fi 7 Access Point' },
      { icon: Router, text: 'DHCP · DNS · LAN Bridge' },
      { icon: Shield, text: 'Firewall Zones · SQM' },
    ],
  },
  {
    id: 'storage',
    label: 'Storage Layer',
    accent: 'text-accent-green',
    border: 'border-accent-green/40',
    glow: '',
    items: [
      { icon: HardDrive, text: '128 GB NVMe SSD' },
      { icon: Database, text: 'ext4 · /mnt/nvme0n1p1' },
    ],
  },
];

const clients = [
  { icon: Smartphone, label: 'Phones' },
  { icon: Laptop, label: 'Laptops' },
  { icon: Tablet, label: 'Tablets' },
];

function ClientConnectivityBridge() {
  return (
    <div className="mx-auto w-full max-w-xl">
      <p className="text-center font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted sm:text-xs">
        Client Devices
      </p>

      <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-4">
        {clients.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-background/60 px-2 py-3 sm:px-4"
          >
            <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
            <span className="text-[11px] text-text-muted sm:text-xs">{label}</span>
          </div>
        ))}
      </div>

      {/* Converging connector: devices → Wi-Fi hub → label → downlink */}
      <div className="relative mx-auto mt-1 w-full max-w-md" aria-hidden="true">
        <svg
          viewBox="0 0 320 76"
          className="h-[76px] w-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="nas-bridge-line" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(34, 211, 238, 0.15)" />
              <stop offset="45%" stopColor="rgba(34, 211, 238, 0.85)" />
              <stop offset="100%" stopColor="rgba(124, 58, 237, 0.7)" />
            </linearGradient>
            <filter id="nas-bridge-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <path d="M 53 0 V 28" stroke="url(#nas-bridge-line)" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M 160 0 V 28" stroke="url(#nas-bridge-line)" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M 267 0 V 28" stroke="url(#nas-bridge-line)" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M 53 28 H 267" stroke="url(#nas-bridge-line)" strokeWidth="1.5" strokeLinecap="round" />
          <path
            d="M 53 28 L 160 44 M 267 28 L 160 44 M 160 28 V 44"
            stroke="rgba(34, 211, 238, 0.55)"
            strokeWidth="1.25"
            strokeLinecap="round"
          />
          <circle
            cx="160"
            cy="56"
            r="18"
            stroke="rgba(34, 211, 238, 0.45)"
            strokeWidth="1.5"
            fill="rgba(13, 17, 23, 0.9)"
            filter="url(#nas-bridge-glow)"
          />
          <circle cx="160" cy="56" r="11" stroke="rgba(124, 58, 237, 0.5)" strokeWidth="1" fill="none" />
        </svg>

        <div className="pointer-events-none absolute left-1/2 top-[34px] flex -translate-x-1/2 flex-col items-center">
          <Wifi className="h-4 w-4 text-accent" aria-hidden="true" />
        </div>
      </div>

      <div className="mx-auto mt-3 max-w-xs text-center">
        <p className="font-mono text-[10px] font-medium uppercase leading-relaxed tracking-wide text-accent sm:text-xs">
          Wi-Fi 7 · MediaTek MT7996 / BE14
        </p>
        <p className="mt-1 text-[10px] text-text-muted sm:text-xs">Local wireless access · 5 GHz</p>
      </div>

      <div className="mx-auto mt-5 mb-1 flex flex-col items-center" aria-hidden="true">
        <div className="h-8 w-px bg-gradient-to-b from-accent/70 to-primary/50" />
        <svg viewBox="0 0 12 12" className="mt-1 h-3 w-3 text-accent" aria-hidden="true">
          <path d="M6 9 2 4h8L6 9Z" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
}

export function NasArchitectureDiagram() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-surface/40 p-5 sm:p-8"
    >
      <ClientConnectivityBridge />

      {/* NAS device enclosure */}
      <div className="relative mx-auto mt-2 max-w-2xl rounded-2xl border border-primary/30 bg-gradient-to-b from-surface/90 to-background/80 p-4 shadow-glow sm:mt-3 sm:p-6">
        <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

        <div className="mb-5 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5">
            <Router className="h-4 w-4 text-primary" aria-hidden="true" />
            <span className="font-display text-sm font-semibold text-text-main sm:text-base">
              Banana Pi BPI-R4 NAS Device
            </span>
          </div>
          <p className="mt-2 font-mono text-[10px] text-text-muted sm:text-xs">
            OpenWrt 24.10.2 · Quad-core ARM · 4 GB RAM
          </p>
        </div>

        <div className="space-y-3">
          {layers.map((layer, index) => (
            <div key={layer.id}>
              <div
                className={`rounded-xl border bg-background/50 p-4 ${layer.border} ${layer.glow}`}
              >
                <p
                  className={`mb-3 font-mono text-[10px] uppercase tracking-wider sm:text-xs ${layer.accent}`}
                >
                  {layer.label}
                </p>
                <div className="grid gap-2 sm:grid-cols-3">
                  {layer.items.map(({ icon: Icon, text }) => (
                    <div
                      key={text}
                      className="flex items-start gap-2 rounded-lg border border-white/5 bg-surface/60 px-3 py-2"
                    >
                      <Icon className={`mt-0.5 h-4 w-4 shrink-0 ${layer.accent}`} aria-hidden="true" />
                      <span className="text-xs leading-snug text-text-muted">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
              {index < layers.length - 1 && (
                <div className="flex justify-center py-1">
                  <div className="h-4 w-px bg-white/10" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Optional backhaul note */}
      <div className="mt-5 flex flex-wrap justify-center gap-2 text-center">
        {['Ethernet WAN', 'Wi-Fi Client', 'USB Tethering'].map((item) => (
          <span
            key={item}
            className="rounded-full border border-dashed border-white/15 bg-background/40 px-3 py-1 text-[10px] text-text-muted sm:text-xs"
          >
            Optional backhaul: {item}
          </span>
        ))}
      </div>

      {/* SVG connector decoration - desktop horizontal flow hint */}
      <svg
        className="pointer-events-none absolute inset-0 hidden h-full w-full opacity-[0.04] lg:block"
        aria-hidden="true"
      >
        <defs>
          <pattern id="nas-grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M32 0H0V32" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#nas-grid)" className="text-accent" />
      </svg>
    </motion.div>
  );
}
