import { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { menuItems } from '../data/landingData';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('#overview');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = menuItems.map((item) => item.href.replace('#', ''));

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: '-20% 0px -50% 0px',
      threshold: 0.1,
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href) => {
    setIsOpen(false);
    setActiveTab(href);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-950/90 backdrop-blur-xl shadow-[0_2px_20px_rgba(0,0,0,0.45)] border-b border-white/5'
          : 'bg-navy-950/60 backdrop-blur-md border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-[95px] max-w-[1320px] items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-6">
        <a
          href="#"
          className="flex shrink-0 items-center"
          onClick={() => {
            setActiveTab('#overview');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <img
            src="/images/logo_kol_summit.png"
            alt="KOL Summit 2026"
            className="block h-[44px] w-auto select-none md:h-[48px]"
          />
        </a>

        <div className="hidden xl:flex flex-1 items-center justify-end gap-6">
          <nav className="flex items-center gap-2 px-0 py-0">
            {menuItems.map((item) => {
              const isActive = activeTab === item.href;
              return (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => handleNavClick(item.href)}
                  className={`relative flex items-center px-4 py-2 text-base transition-all duration-300 rounded-full cursor-pointer ${
                    isActive
                      ? 'font-bold text-white bg-white/15 border border-white/25 shadow-[0_0_15px_rgba(214,94,238,0.5)] scale-[1.02]'
                      : 'font-medium text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          <a
            href="#register"
            className="group relative inline-flex h-[47px] items-center justify-center overflow-hidden rounded-[42px] bg-[linear-gradient(358deg,#D2DED5_-22.49%,#4CA67C_-3.93%,#076531_14.64%,#2D006C_43.14%,#2840DB_71.95%,#D65EEE_88.9%,#96DFFF_107.46%)] px-5 shadow-[0_0_8.9px_rgba(224,67,255,0.9),inset_0_-5px_4px_rgba(255,255,255,0.25)] transition-transform duration-300 hover:scale-[1.02]"
          >
            <span className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-white/15 blur-[1px]" />
            <span className="relative flex items-center justify-center gap-1 text-white">
              <span className="text-base font-bold uppercase leading-[1.45] tracking-[-0.005em] [text-shadow:0_0_7.7px_#076531]">
                ĐĂNG KÝ NGAY
              </span>
              <span className="flex h-10 w-8 items-center justify-center">
                <ArrowRight size={20} strokeWidth={2.4} />
              </span>
            </span>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={isOpen ? 'Đóng menu' : 'Mở menu'}
          onClick={() => setIsOpen(!isOpen)}
          className="xl:hidden rounded-full border border-white/10 bg-white/5 p-2.5 text-white/80 transition-colors hover:bg-white/10 hover:text-white cursor-pointer"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      <div
        className={`xl:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[520px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="border-t border-white/5 bg-navy-950/95 backdrop-blur-xl px-4 py-3">
          <div className="space-y-1 rounded-2xl bg-white/5 p-2">
            {menuItems.map((item) => {
              const isActive = activeTab === item.href;
              return (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => handleNavClick(item.href)}
                  className={`block w-full rounded-xl px-4 py-3 text-left text-base transition-all duration-200 ${
                    isActive
                      ? 'font-bold text-white bg-white/20 border border-white/25 shadow-[0_0_10px_rgba(214,94,238,0.4)]'
                      : 'font-medium text-white/80 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="pt-3">
            <a
              href="#register"
              className="relative inline-flex h-[47px] w-full items-center justify-center overflow-hidden rounded-[42px] bg-[linear-gradient(358deg,#D2DED5_-22.49%,#4CA67C_-3.93%,#076531_14.64%,#2D006C_43.14%,#2840DB_71.95%,#D65EEE_88.9%,#96DFFF_107.46%)] px-5 shadow-[0_0_8.9px_rgba(224,67,255,0.9),inset_0_-5px_4px_rgba(255,255,255,0.25)]"
            >
              <span className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-white/15 blur-[1px]" />
              <span className="relative flex items-center justify-center gap-1 text-white">
                <span className="text-base font-bold uppercase leading-[1.45] tracking-[-0.005em] [text-shadow:0_0_7.7px_#076531]">
                  ĐĂNG KÝ NGAY
                </span>
                <span className="flex h-10 w-8 items-center justify-center">
                  <ArrowRight size={20} strokeWidth={2.4} />
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
