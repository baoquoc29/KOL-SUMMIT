import { partners } from '../data/landingData';
import LogoPlaceholder from './LogoPlaceholder';

export default function Partners() {
  return (
    <section id="partners" className="relative py-16 md:py-24 overflow-hidden bg-[#07080C] font-['SVN-Apparat']">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric-blue/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Title */}
        <h2
          className="text-[32px] sm:text-[44px] md:text-[56px] font-bold text-center uppercase tracking-[-0.04em] leading-[1.2] mb-12 md:mb-16 text-white"
          style={{
            background: 'linear-gradient(180deg, #FFFFFF 17.59%, #EFD5FF 85.45%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textFillColor: 'transparent',
            filter: 'drop-shadow(0px 0px 12px rgba(214, 94, 238, 0.6))'
          }}
        >
          Đơn vị đồng hành
        </h2>

        {/* Row 1: Tổ chức, Bảo trợ, Đồng tổ chức - ALL IN 1 ROW on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-start mb-12 md:mb-16">
          
          {/* Đơn vị tổ chức */}
          <div className="flex flex-col items-center">
            <h3 className="text-white text-[20px] md:text-[24px] font-bold uppercase tracking-wider mb-6 text-center drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
              Đơn vị tổ chức
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {partners.organizer.map((logo, index) => (
                <LogoPlaceholder key={index} label={logo.label} image={logo.image} size="lg" />
              ))}
            </div>
          </div>

          {/* Đơn vị bảo trợ */}
          <div className="flex flex-col items-center">
            <h3 className="text-white text-[20px] md:text-[24px] font-bold uppercase tracking-wider mb-6 text-center drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
              Đơn vị bảo trợ
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {partners.sponsors.map((logo, index) => (
                <LogoPlaceholder key={index} label={logo.label} image={logo.image} size="lg" />
              ))}
            </div>
          </div>

          {/* Đơn vị đồng tổ chức */}
          <div className="flex flex-col items-center">
            <h3 className="text-white text-[20px] md:text-[24px] font-bold uppercase tracking-wider mb-6 text-center drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
              Đơn vị đồng tổ chức
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {partners.coOrganizers.map((logo, index) => (
                <LogoPlaceholder key={index} label={logo.label} image={logo.image} size="lg" />
              ))}
            </div>
          </div>

        </div>

        {/* Row 2: Các đơn vị đồng hành */}
        <div className="flex flex-col items-center pt-4">
          <h3 className="text-white text-[20px] md:text-[24px] font-bold uppercase tracking-wider mb-6 text-center drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
            Các đơn vị đồng hành
          </h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-[1060px]">
            {partners.companions.map((logo, index) => (
              <LogoPlaceholder key={index} label={logo.label} image={logo.image} size="md" />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
