export default function SpeakerCard({ name, position, org, image }) {
  const bgBase = 'linear-gradient(157.91deg, #D2DED5 -255.25%, #4CA67C -195.96%, #076531 -136.67%, #00121F -77.38%, #110B3C -54.77%, #2D006C -18.09%, #2840DB 41.21%, #D65EEE 100.5%, #96DFFF 159.79%), #3E00CE';
  const bgHover = 'linear-gradient(160.36deg, #D2DED5 16.13%, #4CA67C 35.16%, #076531 54.19%, #00121F 73.22%, #110B3C 80.47%, #2D006C 92.25%, #2840DB 111.28%, #D65EEE 130.31%, #96DFFF 149.34%), #3E00CE';
  
  const bottomGradientBase = 'linear-gradient(180deg, rgba(22, 8, 78, 0) 0%, rgba(76, 166, 124, 0) 55.95%, #4CA67C 83.61%, #0F6C39 99.52%)';
  const bottomGradientHover = 'linear-gradient(180deg, rgba(22, 8, 78, 0) 0%, rgba(76, 166, 124, 0) 60.86%, #4CA67C 87.16%, #076531 100%)';

  return (
    <div className="relative w-[280px] sm:w-[290px] h-[400px] rounded-[20px] overflow-hidden group cursor-pointer transition-all duration-300 mx-auto">
      
      {/* Background Layer Base */}
      <div 
        className="absolute inset-0 transition-opacity duration-300 opacity-100 group-hover:opacity-0 rounded-[20px]"
        style={{ background: bgBase }}
      />
      {/* Background Layer Hover */}
      <div 
        className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100 rounded-[20px]"
        style={{ background: bgHover }}
      />
      
      {/* Exclude Color Dodge Hover Effect (Behind Image) */}
      {/* Exclude Color Dodge Hover Effect (Behind Image) */}
      <img 
        src="/images/exclude.png"
        alt=""
        className="absolute top-1/2 transition-transform duration-300 opacity-0 group-hover:opacity-100 pointer-events-none mix-blend-color-dodge z-0"
        style={{
          width: '328.52px',
          height: '255px',
          left: 'calc(50% - 328.52px/2 + 19.26px)',
          transform: 'translateY(-50%) scale(2)',
          objectFit: 'cover'
        }}
      />
      
      {/* Image Layer */}
      {image && (
        <img 
          src={image} 
          alt={name} 
          className="absolute object-cover pointer-events-none"
          style={{ top: '8px', left: '-9.66%', width: '114.49%', height: '332px' }}
        />
      )}

      {/* Bottom Gradient Overlay Base */}
      <div 
        className="absolute inset-0 transition-opacity duration-300 opacity-100 group-hover:opacity-0 rounded-[20px]"
        style={{ background: bottomGradientBase }}
      />
      {/* Bottom Gradient Overlay Hover */}
      <div 
        className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100 rounded-[20px]"
        style={{ background: bottomGradientHover }}
      />

      {/* Hover Arrow Icon */}
      <div className="absolute top-[24px] right-[21px] w-[30px] h-[30px] bg-white rounded-[5px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10" style={{ filter: 'drop-shadow(0px 3px 4px rgba(214, 94, 238, 0.34))' }}>
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 11L11 4M11 4H4M11 4V11" stroke="#2B0C90" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Text Info */}
      <div className="absolute bottom-[10px] left-[27px] right-[20px] flex flex-col items-start font-['SVN-Apparat'] text-white z-10 gap-0">
        <h3 className="font-bold text-[24px] leading-[28px] uppercase truncate w-full">{name}</h3>
        <p className="font-normal text-[14px] leading-[18px] truncate w-full mt-[2px]">{position}</p>
        <p className="font-medium text-[14px] leading-[18px] truncate w-full">{org}</p>
      </div>
    </div>
  );
}
