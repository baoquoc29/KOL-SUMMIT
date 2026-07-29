import { useState, useEffect, useRef } from 'react';
import { speakerTabs, speakers } from '../data/landingData';
import SpeakerCard from './SpeakerCard';

export default function Speakers() {
  const [activeTab, setActiveTab] = useState('tab1');
  const [startIndex, setStartIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerPage(2);
      } else {
        setCardsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const currentSpeakers = speakers[activeTab] || [];
  const maxIndex = Math.max(0, currentSpeakers.length - cardsPerPage);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setStartIndex(0);
  };

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50 && startIndex < maxIndex) {
      handleNext();
    } else if (diff < -50 && startIndex > 0) {
      handlePrev();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  const visibleSpeakers = currentSpeakers.slice(startIndex, startIndex + cardsPerPage);

  const textGradientMain = {
    background: 'linear-gradient(180deg, #FFFFFF 17.59%, #EFD5FF 85.45%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    textFillColor: 'transparent',
  };

  const activeTabStyle = {
    background: 'linear-gradient(0deg, #261187, #261187), linear-gradient(180deg, rgba(0, 6, 15, 0) -12.59%, #0C6DFF 118%), #2D0097',
    backgroundBlendMode: 'hue, normal, normal',
    border: '1px solid #AFAFAF',
  };

  const inactiveTabStyle = {
    background: 'rgba(255, 255, 255, 0.15)',
    border: '1px solid #AFAFAF',
  };

  return (
    <section id="speakers" className="relative flex flex-col items-center py-10 md:pt-[60px] md:pb-[140px] overflow-hidden w-full font-['SVN-Apparat'] px-4 sm:px-6">
      <div className="flex flex-col items-center gap-8 md:gap-[50px] w-full max-w-[1282px] relative z-10">

        {/* Title */}
        <h2
          className="text-[36px] sm:text-[48px] md:text-[64px] font-bold text-center uppercase tracking-[-0.06em] leading-[1.2] py-2 md:py-4 px-2"
          style={textGradientMain}
        >
          Diễn giả
        </h2>

        {/* Tabs - Swipeable horizontally on mobile */}
        <div className="w-full max-w-full sm:max-w-[820px] overflow-x-auto overflow-y-hidden py-3 px-2 no-scrollbar touch-pan-x">
          <div className="flex flex-row items-center justify-start sm:justify-center gap-2 sm:gap-[16px] min-w-max mx-auto">
            {speakerTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => handleTabChange(tab.id)}
                className={`flex flex-row justify-center items-center h-[44px] sm:h-[54px] px-4 sm:px-[22px] rounded-[22px] sm:rounded-[36px] transition-all duration-300 flex-shrink-0 cursor-pointer ${
                  activeTab === tab.id
                    ? 'border-2 border-[#96DFFF] shadow-[0_0_18px_rgba(150,223,255,0.5)] scale-[1.02]'
                    : 'border border-[#AFAFAF] hover:border-[#96DFFF] hover:shadow-[0_0_15px_rgba(150,223,255,0.4)] hover:scale-[1.02]'
                }`}
                style={activeTab === tab.id ? activeTabStyle : inactiveTabStyle}
              >
                <span className={`text-[13px] sm:text-[18px] md:text-[19px] text-center whitespace-nowrap text-[#E1D6FF] ${activeTab === tab.id ? 'font-bold' : 'font-[450]'}`}>
                  {tab.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Cards Grid & Navigation */}
        <div
          className="flex flex-row items-center justify-between sm:justify-center gap-1 sm:gap-6 lg:gap-[63px] w-full mt-2 sm:mt-4"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >

          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            disabled={startIndex === 0}
            aria-label="Previous Speakers"
            className="w-[28px] sm:w-[34px] h-[60px] sm:h-[78px] flex items-center justify-center disabled:opacity-20 cursor-pointer hover:-translate-x-1 sm:hover:-translate-x-2 transition-all flex-shrink-0"
          >
            <svg width="34" height="78" viewBox="0 0 34 78" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path d="M32 2L4 39L32 76" stroke="#D2DED5" strokeWidth="4" strokeLinecap="square" />
            </svg>
          </button>

          {/* Cards */}
          <div className="flex flex-row justify-center gap-4 sm:gap-6 lg:gap-[52px] flex-1 max-w-[980px]">
            {visibleSpeakers.map((speaker, index) => (
              <SpeakerCard
                key={`${activeTab}-${startIndex}-${index}`}
                name={speaker.name}
                position={speaker.position}
                org={speaker.org}
                image={speaker.image}
              />
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            disabled={startIndex >= maxIndex}
            aria-label="Next Speakers"
            className="w-[28px] sm:w-[34px] h-[60px] sm:h-[78px] flex items-center justify-center disabled:opacity-20 cursor-pointer hover:translate-x-1 sm:hover:translate-x-2 transition-all flex-shrink-0"
          >
            <svg width="34" height="78" viewBox="0 0 34 78" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path d="M2 2L30 39L2 76" stroke="#D2DED5" strokeWidth="4" strokeLinecap="square" />
            </svg>
          </button>

        </div>

        {/* Pagination Indicator Dots */}
        {maxIndex > 0 && (
          <div className="flex flex-row justify-center items-center gap-2 mt-2">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setStartIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  startIndex === idx ? 'w-8 bg-[#96DFFF]' : 'w-2.5 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
