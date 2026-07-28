import { heroArtworkVertical, heroArtworkHorizontal } from '../data/landingData';
import ImagePlaceholder from './ImagePlaceholder';
import GradientButton from './GradientButton';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[70vh] md:min-h-screen flex flex-col justify-end overflow-hidden pt-16">
      {/* Background decorations for glow and feel */}
      <div className="absolute inset-0 bg-navy-950 -z-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric-blue/5 rounded-full blur-[150px] -z-10" />

      {/* Full-screen Banner Wrapper */}
      <div className="relative w-full h-[60vh] sm:h-[75vh] md:h-[90vh] lg:h-[calc(100vh-80px)] select-none">
        
        {/* Desktop/Laptop Horizontal Banner (Full Screen) */}
        <div className="hidden md:block w-full h-full">
          <ImagePlaceholder
            label="Laptop Event Banner"
            src={heroArtworkHorizontal}
            className="w-full h-full !rounded-none border-none bg-transparent"
          />
        </div>

        {/* Mobile/Tablet Vertical Banner (Full Screen) */}
        <div className="block md:hidden w-full h-full">
          <ImagePlaceholder
            label="Mobile Event Banner"
            src={heroArtworkVertical}
            className="w-full h-full !rounded-none border-none bg-transparent"
          />
        </div>
      </div>
    </section>
  );
}
