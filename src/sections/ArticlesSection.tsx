import { ArticleCard } from '../components/ArticleCard';
import { SectionHeader } from '../components/SectionHeader';
import { articles } from '../data/articles';

export function ArticlesSection() {
  return (
    <section id="articles" className="scroll-mt-24">
      <SectionHeader
        label="Articles"
        title="Technical Writing"
        description="Reflections and breakdowns on network security, lab work, AI in cybersecurity, and career development."
      />

      <div className="grid gap-4 md:grid-cols-2">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
}
