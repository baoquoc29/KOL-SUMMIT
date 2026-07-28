export default function ArtistCard({ name, role, gradient, image, figmaBackground, imageStyle, index }) {
  // Loại bỏ tiền tố, ví dụ "Ca sĩ – Soobin" -> "Soobin"
  let cleanName = name.split(' – ')[1] || name;
  if (cleanName === 'Placeholder tên KOL') cleanName = 'Gia Đình Truyền Hình';

  const greenGradient = 'linear-gradient(0deg, #D2DED5 -52.22%, #4CA67C -23.11%, #076531 6%, #00121F 52.75%, #2D006C 64.21%, #2840DB 93.31%, #D65EEE 122.42%, #96DFFF 151.52%), #3E00CE';
  const pinkGradient = 'linear-gradient(0deg, #D2DED5 -183.01%, #4CA67C -135.23%, #076531 -87.45%, #00121F -10.71%, #2D006C 8.1%, #2840DB 55.87%, #D65EEE 103.65%, #96DFFF 151.42%), #3E00CE';

  const defaultGradient = index % 2 === 1 ? pinkGradient : greenGradient;
  const bgToUse = figmaBackground || defaultGradient;

  return (
    <div className="group relative h-[187px] w-[268px] max-w-full shrink-0 transition-transform duration-300 hover:-translate-y-2 mx-auto">

      {/* Background block - Nền màu thật của Card */}
      <div
        className="absolute inset-0 overflow-hidden rounded-[20px] shadow-[0px_4px_24.5px_rgba(0,0,0,0.25)]"
        style={{ background: bgToUse }}
      >
        {/* Exclude Layer */}
        <img
          src="/images/exclude.png"
          alt="Exclude effect"
          className="pointer-events-none absolute mix-blend-plus-lighter"
          style={{
            width: '491px',
            height: '361px',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
          }}
        />
      </div>

      {/* Ảnh nghệ sĩ */}
      {image && (
        <img
          src={image}
          alt={cleanName}
          className="pointer-events-none absolute object-contain object-bottom drop-shadow-2xl origin-bottom"
          style={{
            height: imageStyle?.height || '243px',
            width: imageStyle?.width || '233px',
            left: (imageStyle?.x === 'center' || imageStyle?.x === undefined) ? '50%' : `${imageStyle.x}px`,
            bottom: imageStyle?.y !== undefined ? `${imageStyle.y}px` : '0px',
            transform: `${(imageStyle?.x === 'center' || imageStyle?.x === undefined) ? 'translateX(-50%)' : ''} scale(${imageStyle?.scale || 1})`.trim()
          }}
        />
      )}

      {/* Thông tin Text bên phải card */}
      <div className="absolute right-2.5 top-0 bottom-0 w-[112px] flex flex-col items-center justify-center text-center z-10 pointer-events-none px-1">
        {role && (
          <p className="whitespace-normal text-center text-[13px] sm:text-[15px] font-normal leading-tight text-[#F9F6FF] [text-shadow:0px_0px_16.5px_rgba(45,0,108,0.4)] mb-1">
            {role}
          </p>
        )}
        {cleanName && (
          <h3 className="whitespace-normal text-center text-[17px] sm:text-[20px] font-bold uppercase leading-tight text-[#F9F6FF] [text-shadow:0px_0px_16.5px_rgba(45,0,108,0.4)]">
            {cleanName}
          </h3>
        )}
      </div>
    </div>
  );
}
