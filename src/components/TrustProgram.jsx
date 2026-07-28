import { trustProgramCards } from '../data/landingData';
import GradientButton from './GradientButton';

export default function TrustProgram() {
  return (
    <section id="trust-program" className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-navy-950" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-neon-purple/6 rounded-full blur-[150px]" />
      <div className="absolute inset-0 diagonal-lines opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <p className="text-sm md:text-base text-cyan-400 tracking-widest uppercase mb-3 font-medium">
            Chính thức khởi động chương trình
          </p>
          <h2 className="font-display-wide text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight mb-6">
            <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              Tín nhiệm người có ảnh hưởng
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-purple via-electric-blue to-cyan-400 rounded-full mx-auto mb-6" />
          <p className="text-sm md:text-base text-white/70 max-w-4xl mx-auto leading-relaxed">
            Chương trình Tín nhiệm Người có ảnh hưởng hướng tới nâng cao hiểu biết pháp lý, năng lực quản trị rủi ro và hành động có trách nhiệm trên không gian số dành cho các KOLs, nhà sáng tạo nội dung và influencers, đặc biệt ưu tiên nhóm người trẻ hoạt động tích cực trên các nền tảng số.
          </p>
        </div>

        {/* 3 activities */}
        <div className="text-center mb-8 md:mb-10">
          <h3 className="font-display text-lg md:text-xl lg:text-2xl font-extrabold uppercase">
            <span className="bg-gradient-to-r from-neon-purple to-cyan-400 bg-clip-text text-transparent">
              3 hoạt động chính
            </span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {trustProgramCards.map((card, index) => (
            <div
              key={index}
              className="gradient-border neon-glow p-5 md:p-6 lg:p-8 flex flex-col hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon-purple/30 to-cyan-500/30 flex items-center justify-center mb-4">
                <span className="text-sm font-bold text-cyan-400">{card.number}</span>
              </div>
              <h4 className="text-base md:text-lg font-bold text-white mb-3 leading-snug">
                {card.title}
              </h4>
              <p className="text-xs md:text-sm text-white/60 leading-relaxed mb-6 flex-1">
                {card.description}
              </p>
              <GradientButton variant="outline" className="!text-xs md:!text-sm w-full">
                {card.cta}
              </GradientButton>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
