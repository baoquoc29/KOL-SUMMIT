

export default function Alliance() {
  return (
    <section className="relative pt-12 md:pt-20 pb-16 overflow-hidden m-0">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div 
          className="relative mx-auto flex items-center justify-center w-full max-w-[1142px]"
          style={{
            minHeight: '453px',
            background: 'linear-gradient(282.68deg, #D2DED5 -5.39%, #4CA67C 10.83%, #076531 27.06%, #2D006C 59.5%, #2840DB 75.73%, #D65EEE 91.95%, #96DFFF 108.18%), #3E00CE',
            border: '1px solid #FFFFFF',
            boxShadow: '0px -4px 4px #96DFFF',
            borderRadius: '36.2384px'
          }}
        >
          {/* Rectangle 229 / Inner Box */}
          <div 
            className="absolute inset-0 m-auto"
            style={{
              width: '100%',
              height: '100%',
              background: 'rgba(217, 217, 217, 0.05)',
              borderRadius: '24.1589px',
              zIndex: 0
            }}
          />

          <div className="relative z-10 w-full p-6 sm:p-8 md:p-10 lg:px-12 flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8">
            {/* Left: Thông tin Liên minh */}
            <div className="flex flex-col justify-center items-start p-0 gap-[25px] w-full lg:max-w-[616px]">
              
              {/* Logo */}
              <img 
                src="/images/logo_dta.png" 
                alt="DTA Logo" 
                className="w-[218px] h-auto object-contain"
                style={{ filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))' }}
              />

              {/* Title */}
              <h2 
                className="font-bold text-[36px] leading-[1.2] uppercase text-white m-0"
                style={{ 
                  fontFamily: "'SVN-Apparat', sans-serif",
                  textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' 
                }}
              >
                LIÊN MINH NIỀM TIN SỐ
              </h2>

              {/* Subtitle Row */}
              <div className="flex flex-row items-center p-0 gap-[10px] w-full">
                {/* Icon box */}
                <div className="relative flex-shrink-0 w-[77.14px] h-[57.66px]">
                  <img 
                    src="/images/kol-section.png" 
                    alt="Icon" 
                    className="absolute inset-0 w-full h-full object-contain"
                    style={{ WebkitMaskImage: 'linear-gradient(to right, rgba(255,255,255,0.9), rgba(255,255,255,0.2))' }}
                  />
                </div>
                {/* Text */}
                <p 
                  className="font-medium text-[20px] md:text-[24px] leading-[1.25] text-white m-0"
                  style={{ fontFamily: "'SVN-Apparat', sans-serif" }}
                >
                  Đơn vị Tổ chức KOL Summit và<br className="hidden sm:block" /> Chương trình Tín nhiệm Người có ảnh hưởng
                </p>
              </div>

              {/* Mission Text */}
              <p 
                className="font-normal text-[16px] md:text-[19px] leading-[1.2] text-white m-0 max-w-[614px]"
                style={{ fontFamily: "'SVN-Apparat', sans-serif" }}
              >
                Được thành lập với sứ mệnh kết nối các lực lượng xã hội nhằm thúc đẩy niềm tin, an toàn và trách nhiệm trên không gian mạng.
              </p>

              {/* Buttons Row */}
              <div className="flex flex-col sm:flex-row flex-wrap justify-start items-center p-0 gap-4 sm:gap-[20px] w-full max-w-[614px]">
                
                {/* Button 1: Tím */}
                <a 
                  href="https://niemtinso.vn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex flex-row justify-center items-center py-0 px-[5px] w-full sm:w-auto h-[52px] cursor-pointer hover:opacity-90 transition-opacity flex-grow"
                  style={{
                    background: 'radial-gradient(100% 100% at 50% 100%, #0C6DFF 0%, rgba(12, 109, 255, 0) 100%), linear-gradient(180deg, #261187 0%, #2D0097 100%)',
                    boxShadow: '0px 0px 23.3px rgba(241, 51, 255, 0.84), inset 0px -3px 4px rgba(255, 255, 255, 0.51)',
                    borderRadius: '40px'
                  }}
                >
                  <span 
                    className="font-semibold text-[18px] md:text-[22px] leading-[1.2] text-center whitespace-nowrap px-2"
                    style={{
                      fontFamily: "'SF Pro Display', sans-serif",
                      background: 'linear-gradient(180deg, #FFFFFF 17.59%, #EFD5FF 85.45%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      textFillColor: 'transparent',
                    }}
                  >
                    Tìm hiểu thêm về Liên minh
                  </span>
                  <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1 flex-shrink-0">
                    <path d="M22.5 13.5L29 20L22.5 26.5" stroke="url(#paint0_linear_all1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M11 20H29" stroke="url(#paint0_linear_all1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <defs>
                      <linearGradient id="paint0_linear_all1" x1="20" y1="13.5" x2="20" y2="26.5" gradientUnits="userSpaceOnUse">
                        <stop offset="0.1759" stopColor="#FFFFFF"/>
                        <stop offset="0.8545" stopColor="#EFD5FF"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </a>

                {/* Button 2: Trắng bạc */}
                <a 
                  href="https://niemtinso.vn/dang-ky"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex flex-row justify-center items-center py-0 px-[5px] w-full sm:w-auto h-[52px] cursor-pointer hover:opacity-90 transition-opacity flex-grow"
                  style={{
                    background: 'linear-gradient(360deg, #6E6CDF 0%, #FFFFFF 77.42%)',
                    boxShadow: '0px 0px 23.3px rgba(241, 51, 255, 0.84), inset 0px -3px 4px rgba(255, 255, 255, 0.51)',
                    borderRadius: '40px'
                  }}
                >
                  <span 
                    className="font-medium text-[18px] md:text-[22px] leading-[1.45] text-center whitespace-nowrap px-2"
                    style={{
                      fontFamily: "'SVN-Apparat', sans-serif",
                      background: 'radial-gradient(100% 100% at 50% 100%, #0C6DFF 0%, rgba(12, 109, 255, 0) 100%), linear-gradient(180deg, #261187 0%, #2D0097 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      textFillColor: 'transparent',
                    }}
                  >
                    Đăng ký thành viên
                  </span>
                  <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1 flex-shrink-0">
                    <path d="M22.5 13.5L29 20L22.5 26.5" stroke="url(#paint0_linear_all2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M11 20H29" stroke="url(#paint0_linear_all2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <defs>
                      <linearGradient id="paint0_linear_all2" x1="20" y1="13.5" x2="20" y2="26.5" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#261187"/>
                        <stop offset="1" stopColor="#2D0097"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </a>

              </div>
            </div>

            {/* Right: Quy mô thành viên */}
            <div className="flex flex-col items-center lg:items-start p-0 gap-[30px] w-full lg:w-[400px] flex-shrink-0">
              {/* Header */}
              <h3 
                className="font-bold text-[28px] md:text-[32px] leading-[1.2] text-center text-white m-0"
                style={{ fontFamily: "'SVN-Apparat', sans-serif" }}
              >
                QUY MÔ THÀNH VIÊN
              </h3>

              {/* List Container */}
              <div className="flex flex-col items-start p-0 gap-[20px] w-full lg:w-[400px]">
                
                {/* Item 1 */}
                <div className="flex flex-row items-center p-0 gap-[20px] w-full">
                  <div className="relative flex-shrink-0 w-[108.79px] h-[81.31px] rounded-lg overflow-hidden flex items-center justify-center">
                    <img src="/images/kol-section.png" alt="Icon" className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col items-start p-0 gap-[5px] flex-grow">
                    <span className="font-bold text-[56px] leading-[1.2] text-white font-sans">34</span>
                    <span 
                      className="font-[450] text-[16px] md:text-[18px] leading-[1.2] text-white w-full"
                      style={{ fontFamily: "'SVN-Apparat', sans-serif" }}
                    >
                      CLB Niềm tin Số trên toàn quốc
                    </span>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex flex-row items-center p-0 gap-[20px] w-full">
                  <div className="relative flex-shrink-0 w-[108.79px] h-[81.31px] rounded-lg overflow-hidden flex items-center justify-center">
                    <img src="/images/kol-section.png" alt="Icon" className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col items-start p-0 gap-[5px] flex-grow">
                    <span className="font-bold text-[48px] leading-[1.2] text-white font-sans">250+</span>
                    <span 
                      className="font-[450] text-[16px] md:text-[18px] leading-[1.2] text-white w-full"
                      style={{ fontFamily: "'SVN-Apparat', sans-serif" }}
                    >
                      Cơ quan, doanh nghiệp, tổ chức được xét duyệt tham gia
                    </span>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex flex-row items-center p-0 gap-[20px] w-full">
                  <div className="relative flex-shrink-0 w-[108.79px] h-[81.31px] rounded-lg overflow-hidden flex items-center justify-center">
                    <img src="/images/kol-section.png" alt="Icon" className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col items-start p-0 gap-[5px] flex-grow">
                    <span className="font-bold text-[48px] leading-[1.2] text-white font-sans">150+</span>
                    <span 
                      className="font-[450] text-[16px] md:text-[18px] leading-[1.25] text-white w-full"
                      style={{ fontFamily: "'SVN-Apparat', sans-serif" }}
                    >
                      Nghệ sĩ, KOL, nhà sáng tạo nội dung và chuyên gia có&nbsp;ảnh&nbsp;hưởng
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
