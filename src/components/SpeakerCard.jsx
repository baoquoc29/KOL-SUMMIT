import ImagePlaceholder from './ImagePlaceholder';

export default function SpeakerCard({ name, position, org, image }) {
  return (
    <div className="gradient-border neon-glow p-4 md:p-5 flex flex-col items-center text-center transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] hover:scale-[1.02]">
      <ImagePlaceholder
        label="Ảnh diễn giả"
        src={image}
        className="w-28 h-36 md:w-32 md:h-40 mb-4 !rounded-lg"
        aspectRatio="3/4"
      />
      <h3 className="text-sm md:text-base font-bold text-white mb-1">{name}</h3>
      <p className="text-xs md:text-sm text-cyan-400 font-medium mb-0.5">{position}</p>
      <p className="text-xs text-white/50">{org}</p>
    </div>
  );
}
