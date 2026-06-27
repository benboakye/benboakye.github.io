import { ArrowRight, Clock } from 'lucide-react';
import type { Article } from '../data/articles';

interface ArticleCardProps {
  article: Article;
  compact?: boolean;
}

export function ArticleCard({ article, compact = false }: ArticleCardProps) {
  return (
    <article
      className={`rounded-xl border border-white/10 bg-background/40 transition hover:border-primary/30 ${
        compact ? 'p-3' : 'p-5'
      }`}
    >
      <div className="flex gap-3">
        {!compact && (
          <div className="hidden h-16 w-16 shrink-0 rounded-lg border border-white/10 bg-gradient-to-br from-primary/30 to-accent/20 sm:block" />
        )}
        <div className="min-w-0 flex-1">
          <p className="text-xs font-medium text-accent">{article.category}</p>
          <h3 className={`mt-1 font-medium text-text-main ${compact ? 'text-sm' : 'text-base'}`}>
            {article.title}
          </h3>
          {!compact && <p className="mt-2 text-sm text-text-muted">{article.excerpt}</p>}
          <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-text-muted">
            <span className="inline-flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" aria-hidden="true" />
              {article.readingTime}
            </span>
            <span>{article.date}</span>
          </div>
          <button
            type="button"
            className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-accent transition hover:text-text-main"
            aria-label={`Read more about ${article.title} — coming soon`}
          >
            Read More
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </article>
  );
}
