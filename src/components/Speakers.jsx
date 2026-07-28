import { useState } from 'react';
import { speakerTabs, speakers } from '../data/landingData';
import SpeakerCard from './SpeakerCard';

export default function Speakers() {
  const [activeTab, setActiveTab] = useState('tab1');
  const [startIndex, setStartIndex] = useState(0);

  const currentSpeakers = speakers[activeTab] || [];
  const maxIndex = Math.max(0, currentSpeakers.length - 3);

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

  const visibleSpeakers = currentSpeakers.slice(startIndex, startIndex + 3);

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
    <section id="speakers" className="relative flex flex-col items-center pt-[60px] pb-[140px] overflow-hidden w-full font-['SVN-Apparat']">
      <div className="flex flex-col items-center gap-[50px] w-full max-w-[1282px] relative z-10">
        
        {/* Title */}
        <h2 
          className="text-[64px] font-bold text-center uppercase tracking-[-0.06em] leading-[1.2] py-4 px-2"
          style={textGradientMain}
        >
          Diễn giả
        </h2>

        {/* Tabs */}
        <div className="flex flex-row items-center justify-center gap-[20px] w-full max-w-[752px]">
          {speakerTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => handleTabChange(tab.id)}
              className="flex flex-row justify-center items-center h-[65px] px-[30px] rounded-[40px] transition-all duration-300 hover:scale-105"
              style={activeTab === tab.id ? activeTabStyle : inactiveTabStyle}
            >
              <span className={`text-[22px] text-center whitespace-nowrap text-[#E1D6FF] ${activeTab === tab.id ? 'font-bold' : 'font-[450]'}`}>
                {tab.label}
              </span>
            </button>
          ))}
        </div>

        {/* Cards Grid & Navigation */}
        <div className="flex flex-row items-center justify-center gap-[63px] w-full mt-4">
          
          {/* Left Arrow (Polygon 2) */}
          <button 
            onClick={handlePrev}
            disabled={startIndex === 0}
            className="w-[34px] h-[78px] flex items-center justify-center disabled:opacity-30 cursor-pointer hover:-translate-x-2 transition-transform"
          >
            <svg width="34" height="78" viewBox="0 0 34 78" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M32 2L4 39L32 76" stroke="#D2DED5" strokeWidth="4" strokeLinecap="square"/>
            </svg>
          </button>

          {/* Cards */}
          <div className="flex flex-row flex-wrap justify-center gap-[52px]">
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

          {/* Right Arrow (Polygon 1) */}
          <button 
            onClick={handleNext}
            disabled={startIndex >= maxIndex}
            className="w-[34px] h-[78px] flex items-center justify-center disabled:opacity-30 cursor-pointer hover:translate-x-2 transition-transform"
          >
            <svg width="34" height="78" viewBox="0 0 34 78" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 2L30 39L2 76" stroke="#D2DED5" strokeWidth="4" strokeLinecap="square"/>
            </svg>
          </button>

        </div>
      </div>
    </section>
  );
}
