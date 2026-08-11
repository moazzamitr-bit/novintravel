import Image from "next/image";
import { Headphones, Medal, ShieldCheck } from "lucide-react";

const trustItems = [
  { icon: ShieldCheck, label: "پرداخت امن" },
  { icon: Headphones, label: "پشتیبانی ۲۴/۷" },
  { icon: Medal, label: "قیمت واقعی" },
];

export function Hero() {
  return (
    <section className="relative isolate h-[420px] overflow-hidden sm:h-[460px] lg:h-[490px]">
      <Image
        src="/images/hero/airplane.jpg"
        alt="نمای بال هواپیما در غروب آفتاب"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-l from-[#2c1a4a99] via-[#3d246066] to-[#201a2d33]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(32,26,45,0.1)_0%,rgba(32,26,45,0.35)_100%)]" />

      <div className="container-page relative z-10 flex h-full items-start pt-14 sm:pt-16 lg:pt-[72px]">
        <div className="max-w-xl text-white">
          <h1 className="text-[30px] font-extrabold leading-[1.35] sm:text-[42px] lg:text-[52px]">
            سفر را
            <br />
            هوشمندانه تجربه کنید
          </h1>
          <p className="mt-4 max-w-md text-[16px] leading-8 text-white/90 sm:text-[18px]">
            بهترین پروازها، هتل‌ها و تورها
            <br />
            با قیمت واقعی و پشتیبانی ۲۴/۷
          </p>

          <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
            {trustItems.map((item) => {
              const Icon = item.icon;
              return (
                <li
                  key={item.label}
                  className="inline-flex items-center gap-2 text-[13px] text-white/95 sm:text-[14px]"
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
