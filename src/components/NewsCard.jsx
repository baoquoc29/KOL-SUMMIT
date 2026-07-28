import ImagePlaceholder from './ImagePlaceholder';

export default function NewsCard({ source, title, date, image }) {
  return (
    <div className="gradient-border neon-glow overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.25)] hover:-translate-y-1 group">
      <ImagePlaceholder
        label="News Thumbnail"
        src={image}
        className="w-full !rounded-none !rounded-t-[15px]"
        aspectRatio="16/9"
      />
      <div className="p-4 md:p-5">
        <span className="inline-block px-2.5 py-0.5 rounded-full bg-neon-purple/20 text-neon-purple text-[11px] font-semibold mb-3">
          {source}
        </span>
        <h3 className="text-sm md:text-base font-bold text-white leading-snug mb-3 line-clamp-2 group-hover:text-cyan-400 transition-colors duration-300">
          {title}
        </h3>
        <div className="flex items-center justify-between">
          <span className="text-xs text-white/40">{date}</span>
          <button
            type="button"
            className="text-xs text-cyan-400 hover:text-cyan-300 font-medium transition-colors cursor-pointer"
          >
            Xem chi tiết →
          </button>
        </div>
      </div>
    </div>
  );
}
