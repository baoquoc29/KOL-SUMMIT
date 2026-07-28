export default function Schedule() {
  const textGradientMain = {
    background: 'linear-gradient(180deg, #FFFFFF 17.59%, #EFD5FF 85.45%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    textFillColor: 'transparent',
  };

  const textGradientDark = {
    background: 'linear-gradient(0deg, #261187, #261187), linear-gradient(180deg, rgba(0, 6, 15, 0) -12.59%, #0C6DFF 118%), #2D0097',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    textFillColor: 'transparent',
  };

  const glassBoxStyle = {
    background: 'linear-gradient(184.05deg, rgba(232, 223, 248, 0) 83.76%, rgba(170, 118, 234, 0.4) 120.64%, rgba(144, 101, 214, 0.7) 155.28%, #6B57A6 188.8%, #39504B 226.79%), radial-gradient(88.41% 116.31% at 46.39% 20.86%, #F1F1F1 27%, #E7B7F8 56%, #9F42E1 80.5%, #5A1798 100%), #FFFFFF',
    boxShadow: 'inset 0px 0px 26.1115px #7AFF8E',
    backdropFilter: 'blur(27.3495px)',
    borderRadius: '10px',
  };

  const dotStylePurple = {
    background: 'linear-gradient(0deg, #8A63FF, #8A63FF), radial-gradient(64.31% 64.31% at 50.11% 49.23%, #0D1133 0%, #0D0D2E 26.04%, #275488 50%, #3788AA 66.15%, #9EB4B7 77.08%, #D2DDDE 97.4%), linear-gradient(180deg, #D9D9D9 0%, #737373 100%)',
    backgroundBlendMode: 'color, normal, normal',
    boxShadow: '-1px 0px 18.6px #B030EC',
  };
  
  const dotStyleGreen = {
    background: 'linear-gradient(0deg, #288360, #288360), radial-gradient(64.31% 64.31% at 50.11% 49.23%, #0D1133 0%, #0D0D2E 26.04%, #275488 50%, #3788AA 66.15%, #9EB4B7 77.08%, #D2DDDE 97.4%), linear-gradient(180deg, #D9D9D9 0%, #737373 100%)',
    backgroundBlendMode: 'color, normal, normal',
    boxShadow: '-1px 0px 18.6px #4FFFC1',
  };

  const ongoingBoxStyle = (shadowColor, borderColor) => ({
    background: 'linear-gradient(0deg, #004739, #004739), linear-gradient(180deg, #0CFF10 -12.88%, #00060F 100.42%)',
    backgroundBlendMode: 'hue, normal',
    border: `1px solid ${borderColor}`,
    boxShadow: `0px 0px 6.34924px ${shadowColor}`,
    backdropFilter: 'blur(31.3704px)',
    borderRadius: '14.1279px',
  });

  const btnShadow = '0px 0px 23.3px rgba(241, 51, 255, 0.84), inset 0px -3px 4px rgba(255, 255, 255, 0.51)';

  return (
    <section id="schedule" className="relative flex flex-col items-center py-[100px] overflow-hidden w-full font-['SVN-Apparat']">
      {/* Floating Animation Styles */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-30px); }
            100% { transform: translateY(0px); }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          .animate-float-delayed {
            animation: float 7s ease-in-out 3s infinite;
          }
        `}
      </style>

      {/* Background Triangles */}
      <img src="/images/triangle_1.png" alt="" className="absolute top-10 left-0 w-[180px] h-auto pointer-events-none z-0 animate-float" />
      <img src="/images/triangle_2.png" alt="" className="absolute bottom-10 right-0 w-[240px] h-auto pointer-events-none z-0 animate-float-delayed" />

      <div className="flex flex-col items-center gap-[50px] w-full max-w-[938px] relative z-10">
        {/* Title */}
        <h2 
          className="text-[64px] font-bold text-center uppercase leading-[1.2]"
          style={textGradientMain}
        >
          Lịch trình sự kiện
        </h2>

        {/* Mobile Layout (Hidden on Desktop) */}
        <div className="flex lg:hidden flex-col gap-10 w-full px-4">
          {/* 8:00 - 11:00 */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[22px] font-bold uppercase" style={textGradientMain}>8:00 - 11:00</h3>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col justify-center items-center text-center p-5 w-full rounded-2xl" style={glassBoxStyle}>
                <h4 className="text-[20px] font-bold text-[#200935] uppercase mb-1">Hội nghị chuyên đề</h4>
                <p className="text-[16px] text-[#200935]">AI, thông tin sai lệch và khủng hoảng niềm tin</p>
              </div>
              <div className="flex flex-col justify-center items-center text-center p-5 w-full rounded-2xl" style={glassBoxStyle}>
                <h4 className="text-[20px] font-bold text-[#200935] uppercase mb-1">Hội nghị chuyên đề</h4>
                <p className="text-[16px] text-[#200935]">Ảnh hưởng số và tương lai sáng tạo</p>
              </div>
            </div>
          </div>

          {/* 13:30 - 14:00 */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[22px] font-bold uppercase" style={textGradientMain}>13:30 - 14:00</h3>
            <div className="flex flex-col justify-center items-center text-center p-5 w-full rounded-2xl" style={glassBoxStyle}>
              <h4 className="text-[20px] font-bold text-[#1D0132] uppercase">Thảm đỏ đón tiếp khách mời & VIP Expo Tour</h4>
            </div>
          </div>

          {/* 14:00 - 17:30 */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[22px] font-bold uppercase" style={textGradientMain}>14:00 - 17:30</h3>
            <div className="flex flex-col justify-center items-center text-center p-5 w-full rounded-2xl" style={glassBoxStyle}>
              <h4 className="text-[20px] font-bold text-[#1D0132] uppercase mb-1">Hội nghị toàn thể</h4>
              <p className="text-[16px] text-[#1D0132]">Chủ đề: KOL với hành trình kiến tạo niềm tin số</p>
            </div>
          </div>

          {/* 18:30 - 21:00 */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[22px] font-bold uppercase" style={textGradientMain}>18:30 - 21:00</h3>
            <div className="flex flex-col justify-center items-center text-center p-5 w-full rounded-2xl" style={glassBoxStyle}>
              <h4 className="text-[20px] font-bold text-[#1D0132] uppercase">Tiệc tối Networking</h4>
            </div>
          </div>

          {/* Hoạt động xuyên suốt */}
          <div className="flex flex-col gap-4">
            <h3 className="text-[22px] font-bold uppercase leading-tight" style={textGradientMain}>Hoạt động xuyên suốt sự kiện</h3>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col justify-center items-center p-5 w-full rounded-2xl" style={ongoingBoxStyle('#77FFA4', '#FFFFFF')}>
                <span className="text-[18px] font-bold text-white uppercase text-center">Bức tường niềm tin số</span>
              </div>
              <div className="flex flex-col justify-center items-center p-5 w-full rounded-2xl" style={ongoingBoxStyle('#77FFA4', '#CFD0F6')}>
                <span className="text-[18px] font-bold text-white uppercase text-center">Digital trust zone</span>
              </div>
              <div className="flex flex-col justify-center items-center p-5 w-full rounded-2xl" style={ongoingBoxStyle('#77FF82', '#CFD0F6')}>
                <span className="text-[18px] font-bold text-white uppercase text-center">Các hoạt động triển lãm/gian hàng doanh nghiệp vòng ngoài</span>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Timeline Group */}
        <div className="hidden lg:flex relative w-[938px] h-[739px]">
          {/* Vertical Line */}
          <div 
            className="absolute left-[18.5px] top-[17px] w-0 h-[587px]"
            style={{ borderLeft: '1.06px solid #F6E2CF' }}
          />

          {/* Dots */}
          <div className="absolute left-0 top-[0px] w-[37.14px] h-[38.25px] rounded-full" style={dotStylePurple} />
          <div className="absolute left-0 top-[151px] w-[37.14px] h-[38.25px] rounded-full" style={dotStylePurple} />
          <div className="absolute left-0 top-[295px] w-[37.14px] h-[38.25px] rounded-full" style={dotStylePurple} />
          <div className="absolute left-0 top-[439px] w-[37.14px] h-[38.25px] rounded-full" style={dotStylePurple} />
          <div className="absolute left-0 top-[585px] w-[37.14px] h-[38.25px] rounded-full" style={dotStyleGreen} />

          {/* Content Rows */}
          <div className="absolute left-[55px] top-0 flex flex-col gap-[30px] w-[883px]">
            
            {/* 8:00 - 11:00 */}
            <div className="flex flex-col gap-[10px] w-full">
              <h3 className="text-[24px] uppercase leading-none font-sans" style={textGradientMain}>8:00 - 11:00</h3>
              <div className="flex flex-row gap-[20px] w-full">
                <div className="flex flex-col justify-center items-center gap-[10px] w-[432px] h-[95px]" style={glassBoxStyle}>
                  <div className="flex flex-col items-center">
                    <h4 className="text-[24px] font-bold text-[#200935] uppercase leading-[1.2]">hội nghị chuyên đề</h4>
                    <p className="text-[20px] font-sans text-[#200935] leading-[1.2]">AI, thông tin sai lệch và khủng hoảng niềm tin</p>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-[10px] w-[432px] h-[95px]" style={glassBoxStyle}>
                  <div className="flex flex-col items-center">
                    <h4 className="text-[24px] font-bold text-[#200935] uppercase leading-[1.2]">hội nghị chuyên đề</h4>
                    <p className="text-[20px] font-sans text-[#200935] leading-[1.2]">Ảnh hưởng số và tương lai sáng tạo</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 13:30 - 14:00 */}
            <div className="flex flex-col gap-[10px] w-full">
              <h3 className="text-[24px] uppercase leading-none font-sans" style={textGradientMain}>13:30 - 14:00</h3>
              <div className="flex flex-col justify-center items-center w-full h-[80px]" style={glassBoxStyle}>
                <h4 className="text-[24px] font-bold text-[rgba(29,1,50,0.88)] uppercase leading-[1.2]">
                  thảm đỏ đón tiếp khách mời & vip expo tour
                </h4>
              </div>
            </div>

            {/* 14:00 - 17:30 */}
            <div className="flex flex-col gap-[10px] w-full">
              <h3 className="text-[24px] uppercase leading-none font-sans" style={textGradientMain}>14:00 - 17:30</h3>
              <div className="flex flex-col justify-center items-center gap-1 w-full h-[80px]" style={glassBoxStyle}>
                <h4 className="text-[24px] font-bold text-[#1D0132] uppercase leading-[1.2]">hội nghị toàn thể</h4>
                <p className="text-[20px] font-sans text-[#1D0132] leading-[1.2]">Chủ đề: KOL với hành trình kiến tạo niềm tin số</p>
              </div>
            </div>

            {/* 18:30 - 21:00 */}
            <div className="flex flex-col gap-[10px] w-full">
              <h3 className="text-[24px] uppercase leading-none font-sans" style={textGradientMain}>18:30 - 21:00</h3>
              <div className="flex flex-col justify-center items-center w-full h-[80px]" style={glassBoxStyle}>
                <h4 className="text-[24px] font-bold text-[#1D0132] uppercase leading-[1.2]">tiệc tối networking</h4>
              </div>
            </div>

            {/* Hoạt động xuyên suốt */}
            <div className="flex flex-col gap-[10px] w-full">
              <h3 className="text-[28px] font-bold uppercase leading-none" style={textGradientMain}>
                Hoạt động xuyên suốt sự kiện
              </h3>
              <div className="flex flex-row items-stretch gap-[20px] w-full h-[111px]">
                {/* Card 1 */}
                <div className="flex flex-col justify-center items-center w-[210px] px-[18px] py-[26px]" style={ongoingBoxStyle('#77FFA4', '#FFFFFF')}>
                  <span className="text-[24px] font-bold text-white text-center uppercase leading-[1.2]">Bức tường niềm tin số</span>
                </div>
                {/* Card 2 */}
                <div className="flex flex-col justify-center items-center w-[225px] px-[18px] py-[26px]" style={ongoingBoxStyle('#77FFA4', '#CFD0F6')}>
                  <span className="text-[24px] font-bold text-white text-center uppercase leading-[1.2]">Digital trust zone</span>
                </div>
                {/* Card 3 */}
                <div className="flex flex-col justify-center items-center w-[408px] px-[18px] py-[26px]" style={ongoingBoxStyle('#77FF82', '#CFD0F6')}>
                  <span className="text-[24px] font-bold text-white text-center uppercase leading-[1.2]">Các hoạt động triển lãm/gian hàng doanh nghiệp vòng ngoài</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom CTA Block */}
        <div className="flex flex-col items-center gap-6 lg:gap-[24px] w-full mt-10 lg:mt-0 px-4 lg:px-0">
          <p className="text-[18px] lg:text-[24px] font-[450] text-center text-[#F9F6FF] leading-[1.2] max-w-[838px]">
            Tham gia để cùng thảo luận, định hình và thúc đẩy các định hướng phát triển của hệ sinh thái ảnh hưởng số trong kỷ nguyên AI
          </p>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-[20px] w-full">
            <button 
              className="flex items-center justify-center h-[65px] px-[20px] rounded-[40px] hover:scale-105 transition-transform w-full max-w-[320px] lg:w-[289px]"
              style={{
                background: 'linear-gradient(360deg, #6E6CDF 0%, #FFFFFF 77.42%)',
                boxShadow: btnShadow,
              }}
            >
              <span className="text-[20px] lg:text-[24px] font-medium uppercase text-center whitespace-nowrap" style={textGradientDark}>điểm nhấn hội thảo</span>
            </button>

            <button 
              className="flex items-center justify-center h-[65px] px-[20px] rounded-[40px] hover:scale-105 transition-transform w-full max-w-[320px] lg:w-[298px]"
              style={{
                background: 'linear-gradient(359.06deg, #D2DED5 -19.18%, #4CA67C -2.28%, #076531 14.63%, #2D006C 48.44%, #2840DB 65.34%, #D65EEE 82.25%, #96DFFF 99.15%), #3E00CE',
                boxShadow: btnShadow,
              }}
            >
              <span className="text-[20px] lg:text-[24px] font-bold uppercase text-center whitespace-nowrap" style={textGradientMain}>
                đăng ký tham dự
              </span>
            </button>

            <button 
              className="flex items-center justify-center h-[65px] px-[20px] rounded-[40px] hover:scale-105 transition-transform w-full max-w-[320px] lg:w-[311px]"
              style={{
                background: 'linear-gradient(360deg, #6E6CDF 0%, #FFFFFF 77.42%)',
                boxShadow: btnShadow,
              }}
            >
              <span className="text-[18px] lg:text-[24px] font-medium uppercase text-center whitespace-nowrap" style={textGradientDark}>các hoạt động nổi bật</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
