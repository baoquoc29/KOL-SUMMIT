export default function SectionTitle({ title, subtitle, className = '' }) {
  return (
    <div className={`text-center mb-10 md:mb-14 ${className}`}>
      {subtitle && (
        <p className="text-sm md:text-base text-cyan-400 tracking-widest uppercase mb-3 font-medium">
          {subtitle}
        </p>
      )}
      <h2 className="font-display-wide text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight">
        <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      <div className="mt-4 mx-auto w-24 h-1 bg-gradient-to-r from-neon-purple via-electric-blue to-cyan-400 rounded-full" />
    </div>
  );
}
