export default function StatCard({ value, label, className = '' }) {
  return (
    <div className={`gradient-border neon-glow p-6 md:p-8 text-center ${className}`}>
      <div className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-neon-purple via-electric-blue to-cyan-400 bg-clip-text text-transparent mb-2">
        {value}
      </div>
      <p className="text-white/70 text-sm md:text-base leading-relaxed">{label}</p>
    </div>
  );
}
