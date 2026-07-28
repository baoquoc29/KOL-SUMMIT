import { heroArtworkVertical, heroArtworkHorizontal } from '../data/landingData';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden pt-[95px] bg-navy-950">
      {/* Background decorations for glow and feel */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric-blue/5 rounded-full blur-[150px] -z-10" />

      {/* Desktop/Laptop Horizontal Banner */}
      <div className="hidden md:block w-full h-[calc(100vh-95px)] min-h-[550px] select-none">
        <img
          src={heroArtworkHorizontal}
          alt="Laptop Event Banner"
          className="w-full h-full object-cover object-center pointer-events-none"
        />
      </div>

      {/* Mobile/Tablet Banner - Full Natural Height (No height limit) */}
      <div className="block md:hidden w-full h-auto select-none">
        <img
          src={heroArtworkVertical}
          alt="Mobile Event Banner"
          className="w-full h-auto block object-contain pointer-events-none"
        />
      </div>
    </section>
  );
}
