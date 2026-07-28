import { trustProgramCards } from '../data/landingData';

export default function TrustProgram() {
  return (
    <section id="trust-program" className="relative py-0 overflow-hidden m-0">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-neon-purple/6 rounded-full blur-[150px]" />

      {/* Header Banner - Full Width */}
      <div className="relative flex flex-col items-center mb-0 w-full z-10">
        <div className="relative flex flex-col items-center justify-center w-full min-h-[179px] overflow-hidden">
          <img 
            src="/images/img.png" 
            alt="Trust Program Background" 
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none" 
          />

          <div
            className="relative flex flex-col items-center justify-center gap-[10px] w-full z-10 py-6"
            style={{ filter: 'drop-shadow(0px 0px 16.5px rgba(45, 0, 108, 0.4))' }}
          >
            <p className="font-['SVN-Apparat'] font-[450] text-[32px] leading-[1.2] text-white text-center m-0">
              Chính thức khởi động chương trình
            </p>
            <h2
              className="font-['SVN-Apparat'] font-bold text-[64px] leading-[1.2] text-center uppercase m-0"
              style={{
                background: 'linear-gradient(180deg, #FFFFFF 17.59%, #EFD5FF 85.45%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textFillColor: 'transparent',
              }}
            >
              TÍN NHIỆM NGƯỜI CÓ ẢNH HƯỞNG
            </h2>
          </div>
        </div>
      </div>

      {/* Main Content Container (Paragraph + 3 Hoạt động chính) */}
      <div className="relative flex flex-col items-center w-full gap-10 z-10 py-6 pb-16 px-4 lg:px-8 overflow-hidden">

        <p
          className="relative z-10 w-full max-w-[1142px] px-4 mx-auto flex items-center justify-center text-center text-[18px] md:text-[24px] text-white my-4 leading-relaxed"
          style={{
            fontFamily: "'SVN-Apparat', sans-serif",
            fontWeight: 450,
            textShadow: '0px 0px 16.5px rgba(45, 0, 108, 0.4)'
          }}
        >
          Chương trình Tín nhiệm Người có ảnh hưởng hướng tới nâng cao hiểu biết pháp lý, năng lực quản trị rủi ro và hành động có trách nhiệm trên không gian số dành cho các KOLs, nhà sáng tạo nội dung và influencers, đặc biệt ưu tiên nhóm người trẻ hoạt động tích cực trên các nền tảng số.
        </p>

        {/* Header 3 Hoạt động chính */}
        <h3
          className="relative z-10 text-[40px] md:text-[64px] font-bold text-center uppercase tracking-[-0.06em] leading-[1.2] mb-6 md:mb-10 px-2"
          style={{
            fontFamily: "'SVN-Apparat', sans-serif",
            background: 'linear-gradient(180deg, #FFFFFF 17.59%, #EFD5FF 85.45%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textFillColor: 'transparent',
          }}
        >
          3 hoạt động chính
        </h3>

        {/* Cards container */}
        <div className="relative z-10 flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8 lg:gap-[40px] w-full">
          {trustProgramCards.map((card, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 hover:-translate-y-1 transition-all duration-300 w-full max-w-[354px]"
              style={{
                height: '392px',
                background: 'linear-gradient(184.05deg, rgba(232, 223, 248, 0) 83.76%, rgba(170, 118, 234, 0.4) 120.64%, rgba(144, 101, 214, 0.7) 155.28%, #6B57A6 188.8%, #39504B 226.79%), radial-gradient(88.41% 116.31% at 46.39% 20.86%, #F1F1F1 27%, #E7B7F8 56%, #9F42E1 80.5%, #5A1798 100%), #FFFFFF',
                border: '1px solid #595959',
                borderRadius: '30px'
              }}
            >
              <div className="flex flex-col items-start gap-[20px] absolute left-[25px] right-[25px] top-[30px]">
                {/* Icon (Vector) */}
                <div className="flex flex-row items-center h-[37px]">
                  <img src="/images/green_logo.png" alt="Logo" className="h-[37px] w-auto object-contain" />
                </div>

                {/* Title */}
                <h4
                  className="font-bold text-[18px] md:text-[20px] leading-[1.2] uppercase text-[#2D006C] m-0 text-left"
                  style={{ fontFamily: "'SVN-Apparat', sans-serif" }}
                >
                  {card.title}
                </h4>

                {/* Description */}
                <p
                  className="font-normal text-[15px] md:text-[16px] leading-[1.2] text-[#2D006C] m-0 text-left"
                  style={{ fontFamily: "'Roobert TRIAL', sans-serif" }}
                >
                  {card.description}
                </p>
              </div>

              {/* Button */}
              <div
                className="absolute flex flex-row justify-center items-center cursor-pointer hover:opacity-90 transition-opacity overflow-hidden"
                style={{
                  height: '51px',
                  left: '25px',
                  right: '25px',
                  bottom: '29px',
                  background: 'radial-gradient(100% 100% at 50% 100%, #0C6DFF 0%, rgba(12, 109, 255, 0) 100%), linear-gradient(180deg, #261187 0%, #2D0097 100%)',
                  boxShadow: '0px 0px 23.3px rgba(241, 51, 255, 0.84), inset 0px -3px 4px rgba(255, 255, 255, 0.51)',
                  borderRadius: '40px'
                }}
              >
                <span
                  className="font-semibold text-[14px] md:text-[16px] leading-[1.2] text-center whitespace-nowrap overflow-hidden text-ellipsis px-2"
                  style={{
                    fontFamily: "'SF Pro Display', sans-serif",
                    background: 'linear-gradient(180deg, #FFFFFF 17.59%, #EFD5FF 85.45%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    textFillColor: 'transparent',
                  }}
                >
                  {card.cta}
                </span>

                {/* Arrow Icon */}
                <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                  <path d="M22.5 13.5L29 20L22.5 26.5" stroke="url(#paint0_linear_trust)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M11 20H29" stroke="url(#paint0_linear_trust)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <defs>
                    <linearGradient id="paint0_linear_trust" x1="20" y1="13.5" x2="20" y2="26.5" gradientUnits="userSpaceOnUse">
                      <stop offset="0.1759" stopColor="#FFFFFF" />
                      <stop offset="0.8545" stopColor="#EFD5FF" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
