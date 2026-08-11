import Image from "next/image";
import { Headphones, Medal, ShieldCheck } from "lucide-react";

const trustItems = [
  { icon: ShieldCheck, label: "پرداخت امن" },
  { icon: Headphones, label: "پشتیبانی ۲۴/۷" },
  { icon: Medal, label: "قیمت واقعی" },
];

export function Hero() {
  return (
    <section className="relative isolate h-[440px] overflow-hidden sm:h-[480px] lg:h-[520px]">
      <Image
        src="/images/hero/airplane-sunset.jpg"
        alt="نمای بال هواپیما در غروب آفتاب بالای ابرها"
        fill
        priority
        className="object-cover object-[72%_center] sm:object-[68%_center] motion-safe:animate-hero-ken"
        sizes="100vw"
      />

      {/* Soft brand wash — keeps photo visible while protecting Persian text contrast */}
      <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(32,26,45,0.18)_0%,rgba(44,26,74,0.42)_42%,rgba(32,26,45,0.55)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(32,26,45,0.2)_0%,rgba(32,26,45,0.08)_38%,rgba(32,26,45,0.45)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white/25 to-transparent" />

      <div className="container-page relative z-10 flex h-full items-start pt-12 sm:pt-14 lg:pt-16">
        <div className="max-w-xl motion-safe:animate-fade-up">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[12px] font-medium text-white/90 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-novin-orange" aria-hidden />
            پلتفرم هوشمند سفر
          </p>

          <h1 className="text-[32px] font-extrabold leading-[1.3] tracking-tight text-white drop-shadow-[0_2px_18px_rgba(20,10,40,0.35)] sm:text-[44px] lg:text-[54px]">
            سفر را
            <br />
            هوشمندانه تجربه کنید
          </h1>

          <p className="mt-4 max-w-md text-[16px] leading-8 text-white/92 sm:text-[18px]">
            بهترین پروازها، هتل‌ها و تورها
            <br />
            با قیمت واقعی و پشتیبانی ۲۴/۷
          </p>

          <ul className="mt-7 flex flex-wrap gap-2.5 sm:gap-3">
            {trustItems.map((item) => {
              const Icon = item.icon;
              return (
                <li
                  key={item.label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/12 px-3.5 py-2 text-[12.5px] text-white backdrop-blur-md sm:text-[13.5px]"
                >
                  <Icon className="h-4 w-4 text-white" aria-hidden />
                  {item.label}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
