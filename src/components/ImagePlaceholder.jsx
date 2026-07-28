import { useState } from 'react';

export default function ImagePlaceholder({ label, src, className = '', aspectRatio }) {
  const [hasError, setHasError] = useState(false);
  const style = aspectRatio ? { aspectRatio } : {};

  if (src && !hasError) {
    return (
      <div className={`overflow-hidden rounded-xl bg-white/5 ${className}`} style={style}>
        <img
          src={src}
          alt={label}
          onError={() => setHasError(true)}
          className="w-full h-full object-cover select-none pointer-events-none"
        />
      </div>
    );
  }

  return (
    <div
      className={`flex items-center justify-center overflow-hidden rounded-xl border border-dashed border-white/30 bg-white/5 text-center text-xs text-white/50 p-2 ${className}`}
      style={style}
    >
      {label}
    </div>
  );
}

