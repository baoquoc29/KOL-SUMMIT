import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { speakerTabs, speakers } from '../data/landingData';
import SectionTitle from './SectionTitle';
import SpeakerCard from './SpeakerCard';

export default function Speakers() {
  const [activeTab, setActiveTab] = useState('tab1');
  const [startIndex, setStartIndex] = useState(0);

  const currentSpeakers = speakers[activeTab] || [];

  // Responsive: show different count based on window (we use a simple approach)
  const getVisibleCount = () => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const visibleCount = getVisibleCount();
  const maxIndex = Math.max(0, currentSpeakers.length - visibleCount);

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

  const visibleSpeakers = currentSpeakers.slice(startIndex, startIndex + visibleCount);

  return (
    <section id="speakers" className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-950 to-navy-900" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-purple/8 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Diễn giả" />

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10 md:mb-14">
          {speakerTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => handleTabChange(tab.id)}
              className={`px-4 md:px-6 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-neon-purple to-electric-blue text-white shadow-[0_0_20px_rgba(168,85,247,0.3)]'
                  : 'border border-white/20 text-white/60 hover:text-white hover:border-white/40 hover:bg-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation arrows */}
          <button
            type="button"
            onClick={handlePrev}
            disabled={startIndex === 0}
            aria-label="Diễn giả trước"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-navy-800/80 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-neon-purple/50 hover:bg-navy-700/80 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            type="button"
            onClick={handleNext}
            disabled={startIndex >= maxIndex}
            aria-label="Diễn giả tiếp theo"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-navy-800/80 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-neon-purple/50 hover:bg-navy-700/80 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
          >
            <ChevronRight size={20} />
          </button>

          {/* Cards */}
          <div className="mx-8 md:mx-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
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
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setStartIndex(i)}
                aria-label={`Trang ${i + 1}`}
                className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  i === startIndex
                    ? 'w-6 bg-gradient-to-r from-neon-purple to-cyan-400'
                    : 'bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
