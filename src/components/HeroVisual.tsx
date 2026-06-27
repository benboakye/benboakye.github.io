import { motion } from 'framer-motion';
import { Brain, Code2, Fingerprint, Network, Shield } from 'lucide-react';

export function HeroVisual() {
  return (
    <div className="relative mx-auto flex h-64 w-full max-w-sm items-center justify-center sm:h-72">
      <div className="absolute inset-0 rounded-full bg-primary/10 blur-3xl" />
      <motion.div
        className="relative flex h-40 w-40 items-center justify-center rounded-full border border-primary/40 bg-surface-soft/80 shadow-glow"
        animate={{ boxShadow: ['0 0 20px rgba(124,58,237,0.2)', '0 0 35px rgba(34,211,238,0.25)', '0 0 20px rgba(124,58,237,0.2)'] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <Shield className="h-16 w-16 text-accent" aria-hidden="true" />
      </motion.div>

      {[
        { Icon: Fingerprint, position: 'left-0 top-4', delay: 0 },
        { Icon: Brain, position: 'right-0 top-8', delay: 0.5 },
        { Icon: Network, position: 'bottom-2 left-4', delay: 1 },
        { Icon: Code2, position: 'bottom-4 right-2', delay: 1.5 },
      ].map(({ Icon, position, delay }) => (
        <motion.div
          key={position}
          className={`absolute ${position} flex h-12 w-12 items-center justify-center rounded-full border border-accent/30 bg-surface/90`}
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay }}
        >
          <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
        </motion.div>
      ))}
    </div>
  );
}
