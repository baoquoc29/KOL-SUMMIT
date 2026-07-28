export default function MarkerSection() {
    return (
        <section className="relative m-0 w-full overflow-hidden bg-[#090a0f] p-0">
            <div className="relative w-full overflow-hidden">
                {/* Background image */}
                <img
                    src="/images/Banner/marker.png"
                    alt="KOL Summit 2026"
                    className="absolute inset-0 h-full w-full object-cover object-center"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-950/10 via-purple-950/5 to-blue-950/10" />

                {/* Content */}
                <div className="relative z-10 flex min-h-[135px] w-full flex-col items-center justify-center px-5 py-5 text-center sm:min-h-[150px] sm:px-10 md:min-h-[170px]">
                    <h2 className="font-display text-[28px] font-extrabold uppercase leading-none tracking-[-0.04em] text-white drop-shadow-lg sm:text-4xl md:text-[42px] lg:text-[46px]">
                        KOL SUMMIT 2026
                    </h2>

                    <p className="mt-2 max-w-[1100px] text-base font-normal leading-[1.4] text-white drop-shadow-md sm:text-lg md:text-xl lg:text-[24px]">
                        Diễn đàn quốc gia quy tụ toàn hệ sinh thái ảnh hưởng số nhằm cùng
                        <br className="hidden md:block" />
                        định hình và thúc đẩy các định hướng phát triển trong kỷ nguyên AI.
                    </p>
                </div>
            </div>
        </section>
    );
}