import { scheduleData, ongoingActivities } from '../data/landingData';
import SectionTitle from './SectionTitle';
import ScheduleItem from './ScheduleItem';
import GradientButton from './GradientButton';

export default function Schedule() {
  return (
    <section id="schedule" className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-navy-950" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-electric-blue/6 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Lịch trình sự kiện" />

        {/* Timeline */}
        <div className="max-w-3xl mx-auto mb-14 md:mb-20">
          {scheduleData.map((item, index) => (
            <ScheduleItem
              key={index}
              time={item.time}
              title={item.title}
              items={item.items}
              isLast={index === scheduleData.length - 1}
            />
          ))}
        </div>

        {/* Ongoing activities */}
        <div className="mb-10 md:mb-14">
          <h3 className="font-display text-lg md:text-xl lg:text-2xl font-extrabold uppercase text-center mb-8 md:mb-10">
            <span className="bg-gradient-to-r from-neon-purple to-cyan-400 bg-clip-text text-transparent">
              Hoạt động xuyên suốt sự kiện
            </span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {ongoingActivities.map((activity, index) => (
              <div
                key={index}
                className="gradient-border neon-glow p-5 md:p-6 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-neon-purple/30 to-cyan-500/30 flex items-center justify-center mb-4">
                  <span className="text-lg font-bold text-cyan-400">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h4 className="text-sm md:text-base font-bold text-white mb-2">{activity.title}</h4>
                <p className="text-xs md:text-sm text-white/60 leading-relaxed">
                  {activity.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-6">
          <p className="text-sm md:text-base text-white/70 max-w-3xl mx-auto leading-relaxed">
            Tham gia để cùng thảo luận, định hình và thúc đẩy các định hướng phát triển của hệ sinh thái ảnh hưởng số trong kỷ nguyên AI.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
            <GradientButton variant="outline">Điểm nhấn hội thảo</GradientButton>
            <GradientButton href="#register">Đăng ký tham dự</GradientButton>
            <GradientButton variant="outline">Các hoạt động nổi bật</GradientButton>
          </div>
        </div>
      </div>
    </section>
  );
}
