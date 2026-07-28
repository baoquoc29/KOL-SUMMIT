import { overviewBanner } from '../data/landingData';

export default function Overview() {
  return (
    <section
      id="overview"
      className="relative w-full overflow-hidden bg-[#09090d]"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#12071f] via-[#09090d] to-[#160824]" />

      {/* Purple glow */}
      <div className="absolute -left-40 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-purple-700/15 blur-[140px]" />

      <div className="absolute -right-40 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-purple-700/20 blur-[140px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-10 px-6 py-16 md:px-10 md:py-20 lg:grid-cols-[340px_1fr] lg:gap-8 lg:px-12 xl:grid-cols-[340px_1fr]">
        {/* Image */}
        <div className="flex w-full justify-center lg:justify-start">
          <div className="relative w-full max-w-[340px] overflow-hidden rounded-[14px] border border-white/80">
            <img
              src={overviewBanner}
              alt="KOL Summit 2025"
              className="block aspect-[1.9/1] h-auto w-full object-cover"
            />
          </div>
        </div>

        {/* Text */}
        <div className="flex items-center">
          <div className="max-w-[720px] space-y-5 text-sm leading-[1.55] text-white/90 md:text-[15px]">
            <p>
              Không chỉ dừng lại ở vai trò giải trí, người có sức ảnh hưởng
              trở thành một trong những lực lượng quan trọng{' '}
              <strong className="font-bold text-white">
                định hình nhận thức, dẫn dắt hành vi công chúng
              </strong>{' '}
              và đóng góp tích cực vào sự bùng nổ của{' '}
              <strong className="font-bold text-white">
                kinh tế sáng tạo.
              </strong>
            </p>

            <p>
              Tuy nhiên, sự phát triển của Trí tuệ nhân tạo (AI) đang đặt một
              bước ngoặt đôi: mở ra nhiều{' '}
              <strong className="font-bold text-white">cơ hội</strong> bứt phá
              nhưng cũng kéo theo những{' '}
              <strong className="font-bold text-white">thách thức</strong> về
              khủng hoảng niềm tin, bản quyền số và trách nhiệm xã hội.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}