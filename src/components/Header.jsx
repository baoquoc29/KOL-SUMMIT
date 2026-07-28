import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { menuItems } from '../data/landingData';
import ImagePlaceholder from './ImagePlaceholder';
import GradientButton from './GradientButton';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-950/90 backdrop-blur-xl shadow-[0_2px_20px_rgba(0,0,0,0.5)]'
          : 'bg-navy-950/50 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex-shrink-0" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <ImagePlaceholder label="Logo KOL Summit" className="w-32 h-10 md:w-40 md:h-12 !rounded-lg" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <button
                key={item.href}
                type="button"
                onClick={() => handleNavClick(item.href)}
                className="px-3 xl:px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <GradientButton href="#register" className="!py-2.5 !px-5 !text-sm">
              Đăng ký tham dự
            </GradientButton>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label={isOpen ? 'Đóng menu' : 'Mở menu'}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-navy-950/95 backdrop-blur-xl border-t border-white/5 px-4 py-3 space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.href}
              type="button"
              onClick={() => handleNavClick(item.href)}
              className="block w-full text-left px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors cursor-pointer"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 pb-1">
            <GradientButton href="#register" className="w-full !text-sm">
              Đăng ký tham dự
            </GradientButton>
          </div>
        </div>
      </div>
    </header>
  );
}
