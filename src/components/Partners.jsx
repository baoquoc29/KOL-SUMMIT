export default function Partners() {
  const textGradientMain = {
    background: 'linear-gradient(180deg, #FFFFFF 17.59%, #EFD5FF 85.45%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    textFillColor: 'transparent',
  };

  const glassBoxClass = "relative flex items-center justify-center rounded-[10px] bg-[#D9D9D9]/20 hover:bg-[#D9D9D9]/30 transition-colors";

  return (
    <section id="partners" className="relative py-16 md:py-[100px] overflow-hidden flex justify-center w-full">
      {/* Background Decorators */}
      <div 
        className="absolute -bottom-[150px] -right-[150px] w-[602px] h-[492px] rounded-full pointer-events-none z-0" 
        style={{ background: '#59189A', filter: 'blur(145.4px)' }} 
      />
      <div 
        className="absolute top-[250px] -left-[150px] w-[602px] h-[492px] rounded-full pointer-events-none z-0" 
        style={{ background: '#59189A', filter: 'blur(145.4px)' }} 
      />
      
      <div className="flex flex-col items-center xl:items-start gap-10 xl:gap-[38px] w-full max-w-[1147px] px-4 xl:px-0 z-10">
        
        {/* Top Row: Tổ chức, Bảo trợ, Đồng tổ chức */}
        <div className="flex flex-row flex-wrap justify-center xl:justify-start items-center xl:items-end gap-10 xl:gap-[75px] w-full">
          
          {/* Tổ chức */}
          <div className="flex flex-col items-center gap-[16px]">
            <h3 className="font-['SVN-Apparat'] font-bold text-[24px] uppercase tracking-[0.1em]" style={textGradientMain}>
              Tổ chức
            </h3>
            <div className="flex flex-col sm:flex-row justify-between items-center gap-[26px]">
              {/* Box DTA */}
              <div className={`${glassBoxClass} w-[236px] h-[153px]`}>
                <img src="/images/logo_dta.png" alt="DTA Logo" className="w-[153px] h-auto object-contain" />
              </div>
              {/* Box NCA */}
              <div className={`${glassBoxClass} w-[236px] h-[153px]`}>
                <img src="https://lh3.googleusercontent.com/d/1rJdGpmRx8Yfzejvje_mSJ3u44mFoLenC" alt="NCA Logo" className="w-[153px] h-auto object-contain" />
              </div>
            </div>
          </div>

          {/* Bảo trợ */}
          <div className="flex flex-col items-center gap-[19px]">
            <h3 className="font-['SVN-Apparat'] font-bold text-[24px] uppercase tracking-[0.1em]" style={textGradientMain}>
              Bảo trợ
            </h3>
            <div className={`${glassBoxClass} w-[236px] h-[153px]`}>
               <img src="https://lh3.googleusercontent.com/d/1hFxgG54qPjG2jWQWRsltOJdwWtlGAzCd" alt="Bảo trợ Logo" className="w-[153px] h-auto object-contain" />
            </div>
          </div>

          {/* Đồng tổ chức */}
          <div className="flex flex-col items-center gap-[19px]">
            <h3 className="font-['SVN-Apparat'] font-bold text-[24px] uppercase tracking-[0.1em]" style={textGradientMain}>
              Đồng tổ chức
            </h3>
            <div className={`${glassBoxClass} w-[236px] h-[153px]`}>
               <img src="https://lh3.googleusercontent.com/d/1sX4H3ikUb3lHUYEx6-eSdCPrUbtd3-2i" alt="Đồng tổ chức Logo" className="w-[153px] h-auto object-contain" />
            </div>
          </div>
        </div>

        {/* Bottom Row: Các đơn vị đồng hành */}
        <div className="flex flex-col items-center gap-[16px] w-full mt-10 xl:mt-0">
          <h3 className="font-['SVN-Apparat'] font-bold text-[24px] uppercase tracking-[0.1em] mb-4 xl:mb-0" style={textGradientMain}>
            Các đơn vị đồng hành
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-[34px] w-full">
            {Array.from({ length: 12 }).map((_, index) => (
              <div key={index} className={`${glassBoxClass} w-full h-[112px] sm:max-w-[261px] mx-auto`}>
                 <span className="text-white/30 text-sm">Logo {index + 1}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
