import { Phone, AtSign, MapPin, User } from 'lucide-react';
import { menuItems } from '../data/landingData';
import ImagePlaceholder from './ImagePlaceholder';

export default function Footer() {
  const handleNavClick = (href) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Gradient top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-neon-purple to-transparent" />

      <div className="bg-gradient-to-b from-navy-900 via-navy-950 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
            {/* Logo & title */}
            <div className="space-y-4">
              <ImagePlaceholder label="Logo KOL Summit" className="w-40 h-12 !rounded-lg mb-4" />
              <h3 className="font-display text-lg md:text-xl font-extrabold uppercase">
                <span className="bg-gradient-to-r from-neon-purple to-cyan-400 bg-clip-text text-transparent">
                  Thông tin liên hệ
                </span>
              </h3>
              <p className="text-sm text-white/60 font-medium">
                Ban Thư ký Liên minh Niềm tin Số
              </p>
            </div>

            {/* Contact info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span className="text-sm text-white/70">0918218825</span>
              </div>
              <div className="flex items-center gap-3">
                <AtSign className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span className="text-sm text-white/70">@niemtinso</span>
              </div>
              <div className="flex items-center gap-3">
                <User className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span className="text-sm text-white/70">Niềm tin Số</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-white/70 leading-relaxed">
                  Lô E2, Phố Dương Đình Nghệ, Yên Hòa, Cầu Giấy, Hà Nội
                </span>
              </div>
            </div>

            {/* Quick nav */}
            <div>
              <h4 className="text-sm font-bold text-white/80 uppercase tracking-wider mb-4">
                Menu nhanh
              </h4>
              <nav className="grid grid-cols-2 gap-2">
                {menuItems.map((item) => (
                  <button
                    key={item.href}
                    type="button"
                    onClick={() => handleNavClick(item.href)}
                    className="text-sm text-white/50 hover:text-cyan-400 text-left transition-colors cursor-pointer py-1"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-5">
            <p className="text-center text-xs text-white/30">
              © 2026 KOL Summit. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
