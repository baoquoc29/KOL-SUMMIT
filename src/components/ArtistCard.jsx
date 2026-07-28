import ImagePlaceholder from './ImagePlaceholder';

export default function ArtistCard({ name, role, gradient, image }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]">
      {/* Gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-b ${gradient} opacity-60`} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Portrait placeholder */}
      <div className="relative p-3 pt-4">
        <ImagePlaceholder
          label="Ảnh nghệ sĩ"
          src={image}
          className="w-full !rounded-xl"
          aspectRatio="3/4"
        />
      </div>

      {/* Info */}
      <div className="relative px-3 pb-4 -mt-1">
        <p className="text-[11px] sm:text-xs text-cyan-400 uppercase tracking-wider font-medium mb-1">
          {role}
        </p>
        <h3 className="text-sm sm:text-base font-bold text-white leading-tight">{name}</h3>
      </div>
    </div>
  );
}
