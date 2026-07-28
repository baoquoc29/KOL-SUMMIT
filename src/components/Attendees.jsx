const attendeeStats = [
  {
    value: '100+',
    label: 'Cơ quan, doanh nghiệp, tổ chức được xét duyệt tham gia',
  },
  {
    value: '1000+',
    label: 'Nghệ sĩ, KOL, nhà sáng tạo nội dung và chuyên gia',
  },
];

const attendeeGroups = [
  {
    title: (
      <>
        Đại diện các Bộ, ban, ngành
        <br />
        Cơ quan Quản lý Nhà nước
      </>
    ),
  },
  {
    title: 'Tổ chức quốc tế, Tổ chức xã hội',
  },
  {
    title: 'Các nền tảng số và doanh nghiệp đa lĩnh vực',
  },
  {
    title: 'Cơ quan báo chí, truyền thông, MCNs,...',
  },
];

function MainStatCard({ value, label }) {
  return (
    <div className="relative min-h-[84px] overflow-hidden rounded-[13px] border border-cyan-200/55 bg-gradient-to-r from-[#583aff] via-[#230399] to-[#090047] shadow-[0_0_8px_rgba(123,217,255,0.9),0_0_24px_rgba(102,54,255,0.45)]">
      {/* Highlight phía trên */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-white/25 to-transparent" />

      {/* Glow tím */}
      <div className="pointer-events-none absolute -bottom-10 left-5 h-24 w-36 rounded-full bg-violet-500/35 blur-[35px]" />

      {/* Glow xanh */}
      <div className="pointer-events-none absolute -right-10 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full bg-cyan-300/20 blur-[30px]" />

      <div className="relative z-10 flex min-h-[84px] items-center gap-4 px-4 py-3 sm:px-5">
        <div className="shrink-0 font-display-wide text-[43px] font-black leading-none tracking-[-0.06em] text-white drop-shadow-[0_2px_8px_rgba(255,255,255,0.25)] sm:text-[47px] lg:text-[50px]">
          {value}
        </div>

        <p className="max-w-[230px] text-left text-[13px] font-medium leading-[1.25] text-white sm:text-sm">
          {label}
        </p>
      </div>
    </div>
  );
}

function AttendeeGroupCard({ children }) {
  return (
    <div className="relative flex min-h-[61px] items-center justify-center overflow-hidden rounded-[11px] border border-cyan-200/60 bg-gradient-to-b from-[#ead5ff] via-[#e7c9ff] to-[#be78ef] px-5 py-3 text-center shadow-[0_0_7px_rgba(120,218,255,0.8),0_0_18px_rgba(158,91,255,0.3)]">
      {/* Ánh sáng phía trên */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/45 to-transparent" />

      {/* Glow tím dưới */}
      <div className="pointer-events-none absolute -bottom-8 left-1/2 h-16 w-40 -translate-x-1/2 rounded-full bg-violet-500/30 blur-[24px]" />

      <p className="relative z-10 text-[13px] font-medium leading-[1.25] text-black sm:text-sm">
        {children}
      </p>
    </div>
  );
}

export default function Attendees() {
  return (
    <section
      id="attendees"
      className="relative m-0 w-full overflow-hidden bg-[#09090c] px-5 py-14 sm:px-8 md:py-16 lg:py-20"
    >
      {/* Nền chính */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#09090c] via-[#09090c] to-[#091615]" />

      {/* Glow tím góc trên phải */}
      <div className="pointer-events-none absolute -right-36 -top-40 h-[430px] w-[430px] rounded-full bg-fuchsia-700/30 blur-[135px]" />

      {/* Glow tím góc dưới trái */}
      <div className="pointer-events-none absolute -bottom-48 -left-44 h-[430px] w-[430px] rounded-full bg-violet-700/35 blur-[140px]" />

      {/* Glow xanh góc dưới phải */}
      <div className="pointer-events-none absolute -bottom-52 -right-32 h-[480px] w-[480px] rounded-full bg-cyan-300/45 blur-[145px]" />

      <div className="relative z-10 mx-auto w-full max-w-[820px]">
        {/* Tiêu đề */}
        <h2 className="text-center font-display-wide text-[30px] font-extrabold uppercase leading-tight tracking-[-0.035em] text-white sm:text-4xl md:text-[40px] lg:text-[42px]">
          Thành phần tham dự
        </h2>

        {/* Hai ô thống kê */}
        <div className="mt-9 grid grid-cols-1 gap-4 sm:mt-10 md:grid-cols-2 md:gap-4">
          {attendeeStats.map((stat) => (
            <MainStatCard
              key={stat.value}
              value={stat.value}
              label={stat.label}
            />
          ))}
        </div>

        {/* Các nhóm tham dự */}
        <div className="mx-auto mt-5 grid w-full max-w-[704px] grid-cols-1 gap-3 md:grid-cols-2 md:gap-x-4 md:gap-y-3">
          {attendeeGroups.map((group, index) => (
            <AttendeeGroupCard key={index}>
              {group.title}
            </AttendeeGroupCard>
          ))}
        </div>

        {/* Thông điệp cuối */}
        <div className="mx-auto mt-9 max-w-[670px] text-center md:mt-10">
          <p className="text-[14px] font-normal leading-[1.45] text-white/95 sm:text-[15px] md:text-base">
            Khẳng định vai trò của người có ảnh hưởng như một chủ thể quan
            trọng, đồng hành
            <br className="hidden md:block" />
            cùng Nhà nước, doanh nghiệp và xã hội trong việc kiến tạo niềm tin
            số!
          </p>
        </div>
      </div>
    </section>
  );
}