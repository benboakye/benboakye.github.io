import { education, experience } from '../data/profile';

interface ResumeTimelineProps {
  compact?: boolean;
}

export function ResumeTimeline({ compact = false }: ResumeTimelineProps) {
  const items = compact
    ? [
        ...education.map((e) => ({ ...e, type: 'education' as const })),
        ...experience.slice(0, 1).map((e) => ({ ...e, type: 'experience' as const })),
      ]
    : [
        ...education.map((e) => ({ ...e, type: 'education' as const })),
        ...experience.map((e) => ({ ...e, type: 'experience' as const })),
      ];

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div key={`${item.type}-${'degree' in item ? item.degree : item.title}`} className="relative pl-4">
          <span className="absolute left-0 top-1.5 h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
          <span className="absolute left-[3px] top-4 h-full w-px bg-white/10" aria-hidden="true" />
          {'degree' in item ? (
            <>
              <p className="text-sm font-medium text-text-main">{item.degree}</p>
              <p className="text-xs text-text-muted">{item.institution}</p>
              <p className="text-xs text-text-muted">{item.period}</p>
            </>
          ) : (
            <>
              <p className="text-sm font-medium text-text-main">{item.title}</p>
              <p className="text-xs text-text-muted">{item.company}</p>
              <p className="text-xs text-text-muted">{item.period}</p>
              {!compact && (
                <ul className="mt-2 space-y-1 text-xs text-text-muted">
                  {item.highlights.map((h) => (
                    <li key={h}>• {h}</li>
                  ))}
                </ul>
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
}
