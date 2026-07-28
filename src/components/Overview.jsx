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
      <div className="absolute -left-40 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-purple-700/40 blur-[140px]" />

      <div className="absolute -right-40 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-purple-700/50 blur-[140px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1152px] px-6 py-16 lg:py-[100px]">
        <div className="flex flex-col items-center justify-between gap-10 lg:flex-row lg:gap-[48px]">
          {/* Image */}
          <div className="flex w-full justify-center lg:w-[497px] lg:flex-none">
            <div className="relative w-full max-w-[497px] overflow-hidden rounded-[20px] border border-white">
              <img
                src={overviewBanner}
                alt="KOL Summit 2025"
                className="block h-auto w-full object-cover lg:h-[262px]"
              />
            </div>
          </div>

          {/* Text */}
          <div className="flex w-full lg:w-[609px] lg:flex-none">
            <div className="space-y-4 text-justify text-base font-normal leading-[1.45] text-white md:text-[20px]">
              <p>
                Không chỉ dừng lại ở vai trò giải trí, người có sức ảnh hưởng
                trở thành một trong những lực lượng quan trọng{' '}
                <strong className="font-bold">
                  định hình nhận thức, dẫn dắt hành vi công chúng
                </strong>{' '}
                và đóng góp tích cực vào sự bùng nổ của{' '}
                <strong className="font-bold">kinh tế sáng tạo.</strong>
              </p>

              <p>
                Tuy nhiên, sự phát triển của Trí tuệ nhân tạo (AI) đang đặt một
                bước ngoặt đôi: mở ra nhiều{' '}
                <strong className="font-bold">cơ hội</strong> bứt phá nhưng
                cũng kéo theo những{' '}
                <strong className="font-bold">thách thức</strong> về khủng
                hoảng niềm tin, bản quyền số và trách nhiệm xã hội.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}