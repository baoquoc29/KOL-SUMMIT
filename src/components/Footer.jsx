import { Phone, AtSign, MapPin, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer 
      className="w-full flex justify-center overflow-hidden mt-10"
      style={{
        background: 'linear-gradient(281.64deg, #D2DED5 -78.77%, #4CA67C -50.71%, #076531 -22.65%, #00121F 5.41%, #110B3C 15.89%, #2D006C 33.47%, #2840DB 61.53%, rgba(214, 94, 238, 0.5) 89.59%, #96DFFF 117.65%), #3E00CE'
      }}
    >
      <div className="relative w-full max-w-[1280px] mx-auto min-h-[320px] flex flex-col lg:block overflow-hidden py-10 lg:py-0 px-4 lg:px-0">
        
        {/* Left Image (kol-section.png) - 40% width */}
        <img 
          src="/images/kol-section.png" 
          alt="KOL Section" 
          className="hidden lg:block absolute left-0 top-0 h-full w-[40%] object-cover" 
        />

        {/* Mobile Flex Layout (Hidden on Desktop) */}
        <div className="lg:hidden flex flex-col items-center justify-center text-white space-y-6 w-full">
          <h2 className="font-bold text-[28px] sm:text-[32px] uppercase text-center leading-tight" style={{ fontFamily: "'SVN-Apparat', sans-serif" }}>
            Thông tin liên hệ
          </h2>
          <p className="font-[450] text-[20px] text-center" style={{ fontFamily: "'SVN-Apparat', sans-serif" }}>
            Ban Thư ký Liên minh Niềm tin Số
          </p>

          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-4">
              <Phone className="w-5 h-5 text-white" />
              <p className="text-[16px] m-0" style={{ fontFamily: "'SVN-Apparat', sans-serif" }}>0918218825</p>
            </div>
            <div className="flex items-center gap-4">
              <AtSign className="w-5 h-5 text-white" />
              <p className="text-[16px] m-0" style={{ fontFamily: "'SVN-Apparat', sans-serif" }}>@niemtinso</p>
            </div>
            <div className="flex items-center gap-4">
              <Facebook className="w-5 h-5 text-white" />
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

        {/* Desktop Absolute Layout (Hidden on Mobile) */}
        <div className="hidden lg:block absolute inset-0" style={{ transform: 'translateY(-47px)' }}>
          {/* Headers */}
          <h2 
            className="absolute font-bold text-[36px] leading-[1.2] uppercase text-white text-left m-0"
            style={{ fontFamily: "'SVN-Apparat', sans-serif", width: '451px', height: '58px', left: '619px', top: '65.34px' }}
          >
            Thông tin liên hệ
          </h2>

          <p 
            className="absolute font-[450] text-[24px] leading-[1.2] text-white text-left m-0"
            style={{ fontFamily: "'SVN-Apparat', sans-serif", width: '482px', height: '38px', left: '619px', top: '148.34px' }}
          >
            Ban Thư ký Liên minh Niềm tin Số
          </p>

          {/* Contact Info Items */}
          <Phone className="absolute w-[20px] h-[20px] text-white" style={{ left: '643px', top: '203.34px' }} />
          <p className="absolute font-[450] text-[16px] leading-[1.2] text-white m-0" style={{ fontFamily: "'SVN-Apparat', sans-serif", left: '673px', top: '199.07px' }}>
            0918218825
          </p>

          <AtSign className="absolute w-[20px] h-[20px] text-white" style={{ left: '643px', top: '238.34px' }} />
          <p className="absolute font-[450] text-[16px] leading-[1.2] text-white m-0" style={{ fontFamily: "'SVN-Apparat', sans-serif", left: '673px', top: '236.34px' }}>
            @niemtinso
          </p>

          <Facebook className="absolute w-[20px] h-[20px] text-white" style={{ left: '643px', top: '273.34px' }} />
          <p className="absolute font-[450] text-[16px] leading-[1.2] text-white m-0" style={{ fontFamily: "'SVN-Apparat', sans-serif", left: '673px', top: '273.34px' }}>
            Niềm tin Số
          </p>

          <MapPin className="absolute w-[24px] h-[24px] text-white" style={{ left: '641px', top: '310.34px' }} />
          <p className="absolute font-[450] text-[16px] leading-[1.2] text-white m-0 whitespace-nowrap" style={{ fontFamily: "'SVN-Apparat', sans-serif", left: '673px', top: '310.34px' }}>
            Lô E2 Phố Dương Đình Nghệ, Yên Hòa, Cầu Giấy, Hà Nội
          </p>
        </div>
      </div>
    </footer>
  );
}
