import { useEffect, useState } from 'react';

// Thời gian diễn ra sự kiện
const TARGET_DATE = new Date('2026-08-15T08:00:00+07:00');

function calculateTimeLeft() {
  const now = new Date().getTime();
  const target = TARGET_DATE.getTime();
  const difference = target - now;

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor(
      (difference / (1000 * 60 * 60)) % 24
    ),
    minutes: Math.floor(
      (difference / (1000 * 60)) % 60
    ),
    seconds: Math.floor(
      (difference / 1000) % 60
    ),
  };
}

function CountdownCard({ value, label }) {
  return (
    <div
      className="
        relative flex min-h-[124px] w-full flex-col
        items-center justify-center overflow-hidden
        rounded-[14px] border border-violet-500/30
        bg-gradient-to-br
        from-[#17049b]
        via-[#2103a3]
        to-[#5424f5]
        px-4 py-5
        shadow-[0_0_25px_rgba(78,32,255,0.16)]
        sm:min-h-[130px]
        md:min-h-[124px]
      "
    >
      {/* Ánh sáng trong card */}
      <div className="pointer-events-none absolute -bottom-16 -right-12 h-32 w-32 rounded-full bg-violet-400/35 blur-[45px]" />

      <div className="relative z-10 font-display-wide text-[48px] font-extrabold leading-none tracking-[-0.04em] text-white tabular-nums sm:text-[52px] md:text-[54px]">
        {String(value).padStart(2, '0')}
      </div>

      <p className="relative z-10 mt-3 text-[18px] font-medium uppercase leading-none text-white sm:text-[19px]">
        {label}
      </p>
    </div>
  );
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const countdownItems = [
    {
      value: timeLeft.days,
      label: 'Ngày',
    },
    {
      value: timeLeft.hours,
      label: 'Giờ',
    },
    {
      value: timeLeft.minutes,
      label: 'Phút',
    },
    {
      value: timeLeft.seconds,
      label: 'Giây',
    },
  ];

  return (
    <section className="relative m-0 w-full overflow-hidden bg-[#09090c] px-5 py-16 sm:px-8 md:py-20">
      {/* Nền gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#07152c] via-[#09090c] to-[#17081b]" />

      {/* Ánh tím bên phải */}
      <div className="pointer-events-none absolute -right-40 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-fuchsia-700/20 blur-[130px]" />

      {/* Ánh xanh bên trái */}
      <div className="pointer-events-none absolute -left-48 top-1/2 h-[380px] w-[380px] -translate-y-1/2 rounded-full bg-blue-700/15 blur-[130px]" />

      <div className="relative z-10 mx-auto w-full max-w-[980px] text-center">
        <h2 className="font-display-wide text-[30px] font-extrabold uppercase leading-tight tracking-[-0.025em] text-white sm:text-4xl md:text-[40px] lg:text-[42px]">
          Sự kiện đang đến rất gần!
        </h2>

        <div className="mx-auto mt-8 grid w-full max-w-[730px] grid-cols-2 gap-4 sm:mt-9 sm:gap-5 md:grid-cols-4 md:gap-7">
          {countdownItems.map((item) => (
            <CountdownCard
              key={item.label}
              value={item.value}
              label={item.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}