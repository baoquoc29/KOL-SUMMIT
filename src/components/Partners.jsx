import { partners } from '../data/landingData';
import LogoPlaceholder from './LogoPlaceholder';

function PartnerGroup({ title, logos, logoSize = 'md' }) {
  return (
    <div className="mb-10 md:mb-14">
      <h3 className="text-center text-sm md:text-base font-bold text-white/80 uppercase tracking-wider mb-6 md:mb-8">
        <span className="bg-gradient-to-r from-neon-purple/60 to-cyan-400/60 bg-clip-text text-transparent">
          {title}
        </span>
      </h3>
      <div className="flex flex-wrap justify-center gap-3 md:gap-4">
        {logos.map((logo, index) => (
          <LogoPlaceholder key={index} label={logo.label} size={logoSize} />
        ))}
      </div>
    </div>
  );
}

export default function Partners() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-navy-950" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-electric-blue/5 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PartnerGroup title="Tổ chức" logos={partners.organizer} logoSize="xl" />
        <PartnerGroup title="Bảo trợ" logos={partners.sponsors} logoSize="lg" />
        <PartnerGroup title="Đồng tổ chức" logos={partners.coOrganizers} logoSize="lg" />
        <PartnerGroup title="Các đơn vị đồng hành" logos={partners.companions} logoSize="md" />
      </div>
    </section>
  );
}
