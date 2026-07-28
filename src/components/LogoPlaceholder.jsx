export default function LogoPlaceholder({ label, size = 'md', className = '' }) {
  const sizes = {
    sm: 'w-16 h-10 md:w-20 md:h-12',
    md: 'w-24 h-14 md:w-28 md:h-16',
    lg: 'w-32 h-18 md:w-40 md:h-20',
    xl: 'w-40 h-20 md:w-52 md:h-24',
  };

  return (
    <div
      className={`flex items-center justify-center rounded-lg border border-dashed border-white/20 bg-white/5 text-[10px] md:text-xs text-white/40 text-center p-2 hover:bg-white/10 hover:border-white/30 transition-all duration-300 ${sizes[size]} ${className}`}
    >
      {label}
    </div>
  );
}
