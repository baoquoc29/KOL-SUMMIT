export default function LogoPlaceholder({ label, image, size = 'md', className = '' }) {
  const sizes = {
    sm: 'w-24 h-14 md:w-28 md:h-16',
    md: 'w-32 h-16 md:w-36 md:h-20',
    lg: 'w-44 h-20 md:w-52 md:h-24',
    xl: 'w-52 h-24 md:w-60 md:h-28',
  };

  return (
    <div
      className={`relative flex items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md px-4 py-2 text-center text-sm md:text-base font-semibold text-white/90 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:bg-white/20 hover:border-white/40 hover:scale-105 hover:shadow-[0_0_20px_rgba(150,223,255,0.4)] transition-all duration-300 ${sizes[size]} ${className}`}
    >
      {image ? (
        <img src={image} alt={label || 'Logo'} className="max-w-full max-h-full object-contain" />
      ) : (
        <span className="leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]">{label}</span>
      )}
    </div>
  );
}
