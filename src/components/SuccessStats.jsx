const stats = [
  {
    value: '19M+',
    title: 'LƯỢT TƯƠNG TÁC',
    subtitle: 'trên mạng xã hội',
  },
  {
    value: '124K+',
    title: 'LƯỢT THẢO LUẬN',
    subtitle: '',
  },
  {
    value: '700+',
    title: 'ĐẠI BIỂU VÀ KOLS',
    subtitle: 'Nghệ sĩ, KOL, nhà sáng tạo\nnội dung và chuyên gia',
  },
];

function StatCard({ value, title, subtitle, withDivider = false }) {
  return (
    <div
      className={`flex min-h-[150px] flex-col items-center justify-start px-5 py-5 text-center lg:min-h-[190px] lg:px-7 ${
        withDivider ? 'lg:border-l lg:border-white/12' : ''
      }`}
    >
      <div
        className="text-[42px] font-bold leading-[1.2] sm:text-[52px] lg:text-[64px]"
        style={{
          fontFamily: 'Media Sans, SVN-Apparat, sans-serif',
          background:
            'linear-gradient(184deg, rgba(232,223,248,0) 83.76%, rgba(170,118,234,0.4) 120.64%, rgba(144,101,214,0.7) 155.28%, #6B57A6 188.8%), radial-gradient(88.41% 116.31% at 46.39% 20.86%, #F1F1F1 27%, #E7B7F8 56%, #9F42E1 80.5%, #5A1798 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        {value}
      </div>

      <div className="mt-0 text-lg font-bold uppercase leading-[1.15] text-white sm:text-xl lg:text-[22px] xl:text-[24px]">
        {title}
      </div>

      <div className="mt-1 max-w-[250px] whitespace-pre-line text-sm font-medium leading-relaxed text-white/90 sm:text-base lg:text-[16px]">
        {subtitle || '\u00A0'}
      </div>
    </div>
  );
}

export default function SuccessStats() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-0">
      <div className="relative w-full overflow-hidden bg-[#261187]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-55 mix-blend-screen"
          style={{ backgroundImage: "url('/images/section-1.png')" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.08)_0%,_rgba(40,2,100,0.82)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(7,98,49,0.78)_0%,_transparent_54%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(213,94,238,0.58)_0%,_transparent_48%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,6,15,0)_-12.59%,rgba(12,109,255,0.26)_118%)]" />

        <div className="relative z-10 mx-auto grid min-h-[214px] w-full max-w-[1440px] grid-cols-1 gap-8 px-5 py-8 sm:px-6 md:px-8 lg:grid-cols-[360px_minmax(0,1fr)] lg:gap-6 lg:px-12 lg:py-[18px] xl:grid-cols-[380px_minmax(0,1fr)] xl:px-14">
          <div className="flex flex-col justify-center text-center lg:text-left">
            <div className="text-[28px] font-bold uppercase leading-[1.11] text-[#f9f6ff] sm:text-[34px] lg:text-[40px]">
              TIẾP NỐI
            </div>
            <div className="mt-1 text-[28px] font-bold uppercase leading-[1.11] text-[#f9f6ff] sm:text-[34px] lg:pl-[72px] lg:text-[40px]">
              THÀNH CÔNG
            </div>
            <div className="mt-1 text-[28px] font-extrabold uppercase leading-[1.11] text-[#f9f6ff] sm:text-[34px] lg:text-[40px]">
              KOL SUMMIT 2025
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-2 lg:items-start lg:gap-0 lg:pt-[10px]">
            {stats.map((stat, index) => (
              <StatCard
                key={stat.value}
                value={stat.value}
                title={stat.title}
                subtitle={stat.subtitle}
                withDivider={index > 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
