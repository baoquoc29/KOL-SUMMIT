import { Phone, MapPin, Facebook, Globe } from 'lucide-react';

const TiktokIcon = ({ className = "w-5 h-5", style }) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 1 1-2.896-2.896c.244 0 .484.03.714.086V9.387a6.326 6.326 0 0 0-.714-.041 6.34 6.34 0 1 0 6.34 6.34V8.508a8.21 8.21 0 0 0 4.771 1.517V6.58a4.77 4.77 0 0 1-1.000-.106z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer 
      className="w-full flex justify-center overflow-hidden mt-10"
      style={{
        background: 'linear-gradient(281.64deg, #D2DED5 -78.77%, #4CA67C -50.71%, #076531 -22.65%, #00121F 5.41%, #110B3C 15.89%, #2D006C 33.47%, #2840DB 61.53%, rgba(214, 94, 238, 0.5) 89.59%, #96DFFF 117.65%), #3E00CE'
      }}
    >
      <div className="relative w-full max-w-[1280px] mx-auto min-h-[340px] flex flex-col lg:block overflow-hidden py-10 lg:py-0 px-4 lg:px-0">
        
        {/* Left Image (kol-section.png) - 40% width */}
        <img 
          src="/images/kol-section.png" 
          alt="KOL Section" 
          className="hidden lg:block absolute left-0 top-0 h-full w-[40%] object-cover pointer-events-none" 
        />

        {/* Mobile Flex Layout (Hidden on Desktop) */}
        <div className="lg:hidden flex flex-col items-center justify-center text-white space-y-6 w-full">
          <h2 className="font-bold text-[28px] sm:text-[32px] uppercase text-center leading-tight mt-2" style={{ fontFamily: "'SVN-Apparat', sans-serif" }}>
            Thông tin liên hệ
          </h2>
          <p className="font-[450] text-[20px] text-center" style={{ fontFamily: "'SVN-Apparat', sans-serif" }}>
            Ban Thư ký Liên minh Niềm tin Số
          </p>

          <div className="flex flex-col items-start gap-3.5">
            <div className="flex items-center gap-4">
              <Phone className="w-5 h-5 text-white flex-shrink-0" />
              <p className="text-[16px] m-0" style={{ fontFamily: "'SVN-Apparat', sans-serif" }}>0918218825</p>
            </div>
            <div className="flex items-center gap-4">
              <Globe className="w-5 h-5 text-white flex-shrink-0" />
              <a href="https://niemtinso.vn" target="_blank" rel="noopener noreferrer" className="text-[16px] m-0 hover:underline" style={{ fontFamily: "'SVN-Apparat', sans-serif" }}>
                niemtinso.vn
              </a>
            </div>
            <div className="flex items-center gap-4">
              <TiktokIcon className="w-5 h-5 text-white flex-shrink-0" />
              <p className="text-[16px] m-0" style={{ fontFamily: "'SVN-Apparat', sans-serif" }}>@niemtinso</p>
            </div>
            <div className="flex items-center gap-4">
              <Facebook className="w-5 h-5 text-white flex-shrink-0" />
              <p className="text-[16px] m-0" style={{ fontFamily: "'SVN-Apparat', sans-serif" }}>Niềm tin Số</p>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-6 h-6 text-white flex-shrink-0" />
              <p className="text-[16px] m-0" style={{ fontFamily: "'SVN-Apparat', sans-serif" }}>
                Lô E2 Phố Dương Đình Nghệ, Yên Hòa, Cầu Giấy, Hà Nội
              </p>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Pushed Down & Clean Spacing */}
        <div className="hidden lg:flex absolute inset-y-0 left-[44%] right-8 flex-col justify-center items-start text-white pt-6 pb-4 space-y-3">
          <h2 
            className="font-bold text-[34px] xl:text-[36px] leading-[1.2] uppercase text-white m-0"
            style={{ fontFamily: "'SVN-Apparat', sans-serif" }}
          >
            Thông tin liên hệ
          </h2>

          <p 
            className="font-[450] text-[22px] xl:text-[24px] leading-[1.2] text-white m-0 pb-1"
            style={{ fontFamily: "'SVN-Apparat', sans-serif" }}
          >
            Ban Thư ký Liên minh Niềm tin Số
          </p>

          <div className="flex flex-col gap-2.5">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-white flex-shrink-0" />
              <span className="font-[450] text-[16px] text-white" style={{ fontFamily: "'SVN-Apparat', sans-serif" }}>
                0918218825
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-white flex-shrink-0" />
              <a 
                href="https://niemtinso.vn" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-[450] text-[16px] text-white hover:underline" 
                style={{ fontFamily: "'SVN-Apparat', sans-serif" }}
              >
                niemtinso.vn
              </a>
            </div>

            <div className="flex items-center gap-3">
              <TiktokIcon className="w-5 h-5 text-white flex-shrink-0" />
              <span className="font-[450] text-[16px] text-white" style={{ fontFamily: "'SVN-Apparat', sans-serif" }}>
                @niemtinso
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Facebook className="w-5 h-5 text-white flex-shrink-0" />
              <span className="font-[450] text-[16px] text-white" style={{ fontFamily: "'SVN-Apparat', sans-serif" }}>
                Niềm tin Số
              </span>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-white flex-shrink-0" />
              <span className="font-[450] text-[16px] text-white whitespace-nowrap" style={{ fontFamily: "'SVN-Apparat', sans-serif" }}>
                Lô E2 Phố Dương Đình Nghệ, Yên Hòa, Cầu Giấy, Hà Nội
              </span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
