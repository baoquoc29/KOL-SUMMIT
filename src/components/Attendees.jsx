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
    <div
      className="relative flex h-auto w-full flex-col items-center gap-5 overflow-hidden rounded-[17px] px-5 py-[22px] md:h-[121px] md:flex-row lg:w-[566px]"
      style={{
        background: 'linear-gradient(313.88deg, #D2DED5 -87.24%, #4CA67C -38.17%, #076531 -19.67%, #00121F 2.93%, #2D006C 26.01%, #2840DB 55.41%, #D65EEE 84.82%, #96DFFF 114.22%), #3E00CE',
        boxShadow: '0px 0px 6.73631px #5EB1FF, inset 0px 0px 26.1115px #C7C4FF',
        backdropFilter: 'blur(27.3495px)',
      }}
    >
      <div className="shrink-0 min-w-[156px] text-[48px] font-bold leading-[1.2] text-white md:text-center md:text-[64px]">
        {value}
      </div>

      <p className="flex-1 text-center text-lg font-medium leading-[1.2] text-white md:text-left md:text-[22px]">
        {label}
      </p>
    </div>
  );
}

function AttendeeGroupCard({ children }) {
  return (
    <div
      className="relative flex h-auto min-h-[87px] w-full items-center justify-center overflow-hidden rounded-[17px] px-5 py-4 text-center lg:w-[505px]"
      style={{
        background: 'linear-gradient(184.05deg, rgba(232, 223, 248, 0) 83.76%, rgba(170, 118, 234, 0.4) 120.64%, rgba(144, 101, 214, 0.7) 155.28%, #6B57A6 188.8%, #39504B 226.79%), radial-gradient(88.41% 116.31% at 46.39% 20.86%, #F1F1F1 27%, #E7B7F8 56%, #9F42E1 80.5%, #5A1798 100%), #FFFFFF',
        boxShadow: '0px 0px 6.73631px #5EB1FF, inset 0px 0px 26.1115px #C7C4FF',
        backdropFilter: 'blur(27.3495px)',
      }}
    >
      <p className="relative z-10 w-full text-base font-medium leading-[1.2] text-black md:text-[22px]">
        {children}
      </p>
    </div>
  );
}

export default function Attendees() {
  return (
    <section
      id="attendees"
      className="relative m-0 w-full overflow-hidden bg-[#09090c]"
    >
      {/* Nền chính */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#09090c] via-[#09090c] to-[#091615]" />

      {/* Glow tím góc trên phải */}
      <div className="pointer-events-none absolute -right-36 -top-40 h-[430px] w-[430px] rounded-full bg-fuchsia-700/30 blur-[135px]" />

      {/* Glow tím góc dưới trái */}
      <div className="pointer-events-none absolute -bottom-48 -left-44 h-[430px] w-[430px] rounded-full bg-violet-700/35 blur-[140px]" />

      {/* Glow xanh góc dưới phải */}
      <div className="pointer-events-none absolute -bottom-52 -right-32 h-[480px] w-[480px] rounded-full bg-cyan-300/45 blur-[145px]" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1152px] flex-col items-center gap-[58px] px-5 py-14 lg:py-[60px]">
        {/* Tiêu đề */}
        <h2 className="text-center text-[32px] font-bold uppercase leading-none text-[#F9F6FF] sm:text-4xl md:text-[48px] lg:text-[64px]">
          Thành phần tham dự
        </h2>

        <div className="flex w-full max-w-[1088px] flex-col items-center gap-[30px]">
          {/* Hai ô thống kê */}
          <div className="flex w-full flex-col items-center justify-center gap-5 lg:flex-row lg:gap-[20px]">
            {attendeeStats.map((stat) => (
              <MainStatCard
                key={stat.value}
                value={stat.value}
                label={stat.label}
              />
            ))}
          </div>

          {/* Các nhóm tham dự */}
          <div className="grid w-full max-w-[1030px] grid-cols-1 justify-items-center gap-[20px] lg:grid-cols-2">
            {attendeeGroups.map((group, index) => (
              <AttendeeGroupCard key={index}>
                {group.title}
              </AttendeeGroupCard>
            ))}
          </div>
        </div>

        {/* Thông điệp cuối */}
        <div className="w-full max-w-[912px] text-center">
          <p className="text-lg font-medium leading-[1.2] text-[#F9F6FF] md:text-[24px]">
            Khẳng định vai trò của người có ảnh hưởng như một chủ thể quan
            trọng, đồng hành cùng Nhà nước, doanh nghiệp và xã hội trong việc
            kiến tạo niềm tin số!
          </p>
        </div>
      </div>
    </section>
  );
}