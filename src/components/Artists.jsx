import { artists } from '../data/landingData';
import ArtistCard from './ArtistCard';

export default function Artists() {
  const topArtists = artists.slice(0, 2);
  const gridArtists = artists.slice(2);

  return (
    <section className="relative flex w-full flex-col items-center overflow-hidden bg-transparent py-10 lg:py-[60px] px-4 sm:px-6">
      <div className="relative mx-auto flex w-full max-w-[1152px] flex-col gap-8 lg:gap-[50px]">
        {/* KOL Section Logo (Hidden on mobile to avoid overflow) */}
        <img
          src="/images/kol-section.png"
          alt="KOL Section Logo"
          className="pointer-events-none absolute z-10 hidden lg:block"
          style={{
            width: '213px',
            height: '159.21px',
            top: '20px',
            left: 'calc(50% - 213px/2 - 469.5px)',
          }}
        />

        {/* Top Row: Title + 2 Artists */}
        <div className="relative z-10 flex flex-col items-center gap-6 lg:h-[221px] lg:flex-row lg:justify-start lg:gap-[28px]">
          <h2 className="w-full text-center text-[34px] sm:text-[50px] lg:w-[562px] lg:text-right lg:text-[70px] font-extrabold uppercase leading-[1.15] text-[#F9F6FF]">
            Nghệ sĩ, KOL<br className="hidden sm:inline" /> tham gia
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full lg:w-auto">
            {topArtists.map((artist, index) => (
              <ArtistCard
                key={index}
                index={index}
                name={artist.name}
                role={artist.role}
                gradient={artist.gradient}
                image={artist.image}
                figmaBackground={artist.figmaBackground}
                imageStyle={artist.imageStyle}
              />
            ))}
          </div>
        </div>

        {/* Bottom Grid: Remaining Artists */}
        <div className="relative z-10 grid w-full grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-[27px] lg:gap-y-[28px]">
          {gridArtists.map((artist, index) => (
            <ArtistCard
              key={index + 2}
              index={index + 2}
              name={artist.name}
              role={artist.role}
              gradient={artist.gradient}
              image={artist.image}
              figmaBackground={artist.figmaBackground}
              imageStyle={artist.imageStyle}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
