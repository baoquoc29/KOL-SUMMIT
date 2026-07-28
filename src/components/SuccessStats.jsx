export default function SuccessStats() {
  return (
    <section className="relative w-full overflow-hidden bg-navy-950">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />
      <div className="geo-grid absolute inset-0 -z-10 opacity-20" />

      {/* Full-width banner */}
      <div className="relative w-full overflow-hidden border-y border-white/10 bg-navy-950/40 shadow-2xl backdrop-blur-sm neon-glow">
        {/* Background image */}
        <div
          className="absolute inset-0 scale-105 bg-cover bg-center bg-no-repeat opacity-30 mix-blend-luminosity transition-transform duration-[10000ms] hover:scale-100"
          style={{
            backgroundImage:
              "url('/images/Banner/event_banner_bg.png')",
          }}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 via-blue-950/70 to-emerald-950/50" />

        {/* Glowing borders */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/55 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-500/25 to-transparent" />

        {/* Content */}
        <div className="relative z-10 mx-auto grid w-full grid-cols-1 items-center gap-8 px-6 py-10 sm:px-10 md:grid-cols-12 md:gap-0 md:px-14 md:py-12 lg:px-20 lg:py-14 xl:px-28 2xl:px-36">
          {/* Left column */}
          <div className="flex flex-col justify-center border-white/15 pb-6 text-center md:col-span-4 md:border-r md:pb-0 md:pr-10 md:text-left">
            <span className="text-base font-light leading-tight tracking-[0.25em] text-white/90 sm:text-lg">
              TIẾP NỐI
            </span>

            <span className="mt-1 text-xl font-bold leading-tight tracking-[0.2em] text-white sm:text-2xl">
              THÀNH CÔNG
            </span>

            <span className="mt-3 font-display text-2xl font-extrabold uppercase tracking-wide text-white sm:text-3xl lg:text-4xl">
              KOL SUMMIT 2025
            </span>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 items-stretch gap-8 sm:grid-cols-3 sm:gap-0 md:col-span-8">
            {/* Stat 1 */}
            <div className="flex flex-col justify-center text-center sm:pl-8 sm:text-left md:pl-10 lg:pl-14">
              <div className="select-none bg-gradient-to-b from-white via-purple-200 to-purple-400 bg-clip-text font-display text-4xl font-extrabold tracking-tight text-transparent drop-shadow-md animate-pulse-slow sm:text-5xl lg:text-6xl">
                19M+
              </div>

              <div className="mt-3 text-xs font-bold uppercase tracking-wider text-white sm:text-[11px] lg:text-sm">
                LƯỢT TƯƠNG TÁC
              </div>

              <div className="mt-1 text-xs font-light text-white/60">
                trên mạng xã hội
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col justify-center border-white/15 text-center sm:border-l sm:pl-8 sm:text-left md:pl-10 lg:pl-14">
              <div className="select-none bg-gradient-to-b from-white via-purple-200 to-purple-400 bg-clip-text font-display text-4xl font-extrabold tracking-tight text-transparent drop-shadow-md sm:text-5xl lg:text-6xl">
                124K+
              </div>

              <div className="mt-3 text-xs font-bold uppercase tracking-wider text-white sm:text-[11px] lg:text-sm">
                LƯỢT THẢO LUẬN
              </div>

              <div
                aria-hidden="true"
                className="mt-1 hidden text-xs sm:block"
              >
                &nbsp;
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col justify-center border-white/15 text-center sm:border-l sm:pl-8 sm:text-left md:pl-10 lg:pl-14">
              <div className="select-none bg-gradient-to-b from-white via-purple-200 to-purple-400 bg-clip-text font-display text-4xl font-extrabold tracking-tight text-transparent drop-shadow-md sm:text-5xl lg:text-6xl">
                700+
              </div>

              <div className="mt-3 text-xs font-bold uppercase tracking-wider text-white sm:text-[11px] lg:text-sm">
                ĐẠI BIỂU VÀ KOLS
              </div>

              <div className="mt-1 max-w-xs text-xs font-light leading-relaxed text-white/60">
                Nghệ sĩ, KOL, nhà sáng tạo nội dung và chuyên gia
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}