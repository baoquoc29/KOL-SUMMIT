import { newsArticles } from '../data/landingData';
import SectionTitle from './SectionTitle';
import NewsCard from './NewsCard';

export default function News() {
  return (
    <section id="news" className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-pink-purple/8 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Tin tức nổi bật" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {newsArticles.map((article, index) => (
            <NewsCard
              key={index}
              source={article.source}
              title={article.title}
              date={article.date}
              image={article.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
