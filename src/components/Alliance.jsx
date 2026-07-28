import { allianceStats } from '../data/landingData';
import GradientButton from './GradientButton';

export default function Alliance() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="gradient-border neon-glow-strong p-6 sm:p-8 md:p-10 lg:p-14">
          {/* Extra gradient overlay inside */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-neon-purple/5 via-transparent to-cyan-500/5" />

          <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left */}
            <div className="space-y-6">
              <h2 className="font-display-wide text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase">
                <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                  Liên minh Niềm tin Số
                </span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-neon-purple to-cyan-400 rounded-full" />
              <p className="text-sm md:text-base text-white/70 leading-relaxed">
                Đơn vị tổ chức KOL Summit và Chương trình Tín nhiệm Người có ảnh hưởng.
              </p>
              <p className="text-sm md:text-base text-white/70 leading-relaxed">
                Được thành lập với sứ mệnh kết nối các lực lượng xã hội nhằm thúc đẩy niềm tin, an toàn và trách nhiệm trên không gian mạng.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <GradientButton>Tìm hiểu thêm về Liên minh</GradientButton>
                <GradientButton variant="secondary">Đăng ký thành viên</GradientButton>
              </div>
            </div>

            {/* Right */}
            <div className="space-y-6">
              <h3 className="text-sm md:text-base text-cyan-400 uppercase tracking-widest font-medium">
                Quy mô thành viên
              </h3>
              <div className="space-y-4">
                {allianceStats.map((stat, index) => (
                  <div
                    key={index}
                    className="glass-card p-4 md:p-5 flex items-center gap-4 hover:border-neon-purple/30 transition-all duration-300"
                  >
                    <div className="font-display text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-neon-purple to-cyan-400 bg-clip-text text-transparent min-w-[60px] md:min-w-[80px]">
                      {stat.value}
                    </div>
                    <p className="text-xs md:text-sm text-white/70 leading-relaxed">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
