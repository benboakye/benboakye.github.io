import { Download } from 'lucide-react';
import { profile } from '../data/profile';
import { assetPath } from '../utils/helpers';

interface DownloadCvButtonProps {
  variant?: 'solid' | 'outline';
  className?: string;
  label?: string;
}

export function DownloadCvButton({
  variant = 'solid',
  className = '',
  label = 'Download CV',
}: DownloadCvButtonProps) {
  const base =
    'inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent';

  const styles =
    variant === 'solid'
      ? 'bg-primary text-white hover:bg-primary-dark hover:shadow-glow'
      : 'border border-primary/60 text-text-main hover:border-primary hover:shadow-glow';

  return (
    <a
      href={assetPath(profile.resumePath)}
      download
      className={`${base} ${styles} ${className}`}
      aria-label="Download Bernard Boakye Appiah resume PDF"
    >
      <Download className="h-4 w-4" aria-hidden="true" />
      {label}
    </a>
  );
}
