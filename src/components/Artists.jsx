import { artists } from '../data/landingData';
import SectionTitle from './SectionTitle';
import ArtistCard from './ArtistCard';

export default function Artists() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-pink-purple/8 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-neon-purple/8 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Nghệ sĩ, KOL tham gia" />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-5">
          {artists.map((artist, index) => (
            <ArtistCard
              key={index}
              name={artist.name}
              role={artist.role}
              gradient={artist.gradient}
              image={artist.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
