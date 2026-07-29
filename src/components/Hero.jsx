import { heroVideo } from '../data/landingData';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden pt-[95px] bg-navy-950">
      {/* Background decorations for glow and feel */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric-blue/5 rounded-full blur-[150px] -z-10" />

      {/* Video Banner Container - Full Width */}
      <div className="w-full select-none">
        <video
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto block object-cover"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
