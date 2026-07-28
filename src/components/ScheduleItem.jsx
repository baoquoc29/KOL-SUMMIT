export default function ScheduleItem({ time, title, items, isLast = false }) {
  return (
    <div className="flex gap-4 md:gap-6">
      {/* Timeline column */}
      <div className="flex flex-col items-center flex-shrink-0">
        <div className="timeline-dot" />
        {!isLast && <div className="timeline-line flex-1 min-h-8" />}
      </div>

      {/* Content */}
      <div className="pb-8 md:pb-10 flex-1">
        <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-neon-purple/20 to-cyan-500/20 border border-neon-purple/30 mb-3">
          <span className="text-sm md:text-base font-bold text-cyan-400">{time}</span>
        </div>
        {title && (
          <h3 className="text-base md:text-lg font-bold text-white mb-2">{title}</h3>
        )}
        <ul className="space-y-1.5">
          {items.map((item, i) => (
            <li
              key={i}
              className="text-sm md:text-base text-white/70 flex items-start gap-2"
            >
              <span className="text-neon-purple mt-1.5 text-[8px]">●</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
