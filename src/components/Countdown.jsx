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
        relative flex aspect-[234/181] w-full max-w-[234px] flex-col
        items-center justify-center overflow-hidden
        rounded-[20px] border border-[#383838]
        mx-auto md:h-[181px]
      "
      style={{
        background:
          'linear-gradient(0deg, #261187, #261187), url(/image.png), linear-gradient(180deg, rgba(0, 6, 15, 0) -12.59%, #0C6DFF 118%), #2D0097',
        backgroundBlendMode: 'hue, soft-light, normal, normal',
      }}
    >
      <div className="relative z-10 text-[56px] font-semibold leading-[1.2] tracking-[-0.005em] text-white tabular-nums md:text-[80px] md:leading-[1.1]">
        {String(value).padStart(2, '0')}
      </div>

      <p className="relative z-10 text-[20px] font-medium uppercase leading-[1.2] tracking-[-0.005em] text-white md:text-[32px] md:leading-[1.1]">
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
    <section className="relative m-0 w-full overflow-hidden bg-[#09090c]">
      {/* Nền gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#07152c] via-[#09090c] to-[#17081b]" />

      {/* Ánh tím bên phải */}
      <div className="pointer-events-none absolute -right-40 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-fuchsia-700/20 blur-[130px]" />

      {/* Ánh xanh bên trái */}
      <div className="pointer-events-none absolute -left-48 top-1/2 h-[380px] w-[380px] -translate-y-1/2 rounded-full bg-blue-700/15 blur-[130px]" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col items-center gap-[30px] px-5 pt-[60px] pb-[40px] lg:pt-[100px] lg:pb-[70px]">
        <h2 className="bg-gradient-to-b from-[#FFFFFF] to-[#EFD5FF] bg-clip-text text-center text-[32px] font-bold uppercase leading-[1.45] text-transparent sm:text-4xl md:text-[48px] lg:text-[60px]">
          Sự kiện đang đến rất gần!
        </h2>

        <div className="mx-auto grid w-full max-w-[1065px] grid-cols-2 gap-4 md:grid-cols-4 lg:gap-[43px]">
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