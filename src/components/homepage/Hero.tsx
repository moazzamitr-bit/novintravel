"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const slides = [
  {
    id: "wing",
    src: "/images/hero/wing-sunset.jpg",
    alt: "بال هواپیما بالای ابرها در غروب",
    objectPosition: "object-[72%_45%] sm:object-[68%_42%]",
    ken: "motion-safe:animate-hero-ken",
    caption: "پرواز به افق‌های تازه",
  },
  {
    id: "jet",
    src: "/images/hero/jet-islands.jpg",
    alt: "هواپیما بر فراز جزایر استوایی در غروب",
    objectPosition: "object-[55%_40%]",
    ken: "motion-safe:animate-hero-ken-alt",
    caption: "مقصد بعدی، فقط یک جستجو فاصله دارد",
  },
  {
    id: "villa",
    src: "/images/hero/villa-terrace.jpg",
    alt: "تراس لوکس مشرف به دریا در غروب آفتاب",
    objectPosition: "object-[62%_48%] sm:object-[58%_45%]",
    ken: "motion-safe:animate-hero-ken-pan",
    caption: "اقامت‌هایی که خاطره می‌سازند",
  },
  {
    id: "hafez",
    src: "/images/hero/hafez-shiraz.jpg",
    alt: "آرامگاه حافظ در شیراز هنگام غروب",
    objectPosition: "object-[48%_42%]",
    ken: "motion-safe:animate-hero-ken",
    caption: "ایران را از نزدیک کشف کنید",
  },
  {
    id: "coast",
    src: "/images/mood/coastal-resort.jpg",
    alt: "ریزورت ساحلی لوکس در غروب",
    objectPosition: "object-[40%_45%] sm:object-[35%_42%]",
    ken: "motion-safe:animate-hero-ken-alt",
    caption: "از ساحل تا شهر؛ همه در یک پلتفرم",
  },
] as const;

const SLIDE_MS = 7000;

export function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, SLIDE_MS);
    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <section
      className="relative isolate h-[540px] overflow-hidden sm:h-[600px] lg:h-[660px]"
      aria-label="معرفی نوین تراول"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
    >
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
            index === active ? "opacity-100" : "opacity-0",
          )}
          aria-hidden={index !== active}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={index === 0}
            className={cn(
              "object-cover",
              slide.objectPosition,
              index === active && slide.ken,
            )}
            sizes="100vw"
          />
        </div>
      ))}

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_18%_28%,rgba(232,78,24,0.16)_0%,transparent_42%),radial-gradient(ellipse_at_85%_18%,rgba(79,47,124,0.2)_0%,transparent_38%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(108deg,rgba(26,20,36,0.28)_0%,rgba(26,20,36,0.42)_46%,rgba(26,20,36,0.68)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(26,20,36,0.4)_0%,rgba(26,20,36,0.08)_34%,rgba(26,20,36,0.58)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-novin-bg via-novin-bg/55 to-transparent" />

      <div
        className="pointer-events-none absolute inset-0 opacity-35 mix-blend-soft-light motion-safe:animate-hero-sheen"
        aria-hidden
      />

      <div className="container-page relative z-10 flex h-full flex-col justify-between pb-32 pt-11 sm:pb-36 sm:pt-14 lg:pb-40 lg:pt-16">
        <div className="max-w-2xl">
          <p className="eyebrow mb-5 text-white/90 motion-safe:animate-fade-up !text-novin-orange">
            NOVIN TRAVEL
          </p>

          <h1 className="display-title text-white drop-shadow-[0_6px_32px_rgba(12,8,24,0.4)] motion-safe:animate-fade-up motion-safe:[animation-delay:90ms]">
            <span className="block text-[42px] sm:text-[58px] lg:text-[72px]">
              نوین تراول
            </span>
            <span className="mt-3 block max-w-xl text-[21px] font-bold leading-9 text-white/95 sm:mt-4 sm:text-[28px] sm:leading-10 lg:text-[32px]">
              سفر را هوشمندانه تجربه کنید
            </span>
          </h1>

          <p className="mt-5 max-w-md text-[15px] leading-8 text-white/88 motion-safe:animate-fade-up motion-safe:[animation-delay:170ms] sm:text-[16.5px]">
            پرواز، هتل و تور با قیمت شفاف — از اولین جستجو تا رزرو نهایی
          </p>

          <p
            key={slides[active].id}
            className="mt-7 inline-flex items-center gap-2.5 text-[13px] text-white/78 motion-safe:animate-fade-up sm:text-[14px]"
          >
            <span
              className="h-px w-10 bg-gradient-to-l from-novin-orange to-transparent"
              aria-hidden
            />
            {slides[active].caption}
          </p>
        </div>

        <div className="motion-safe:animate-fade-up motion-safe:[animation-delay:240ms]">
          <div className="flex gap-2" role="tablist" aria-label="اسلایدهای هیرو">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                role="tab"
                aria-selected={index === active}
                aria-label={`اسلاید ${index + 1}: ${slide.caption}`}
                onClick={() => setActive(index)}
                className={cn(
                  "relative h-1.5 overflow-hidden rounded-full transition-[width,background-color] duration-500",
                  index === active
                    ? "w-11 bg-white/30"
                    : "w-1.5 bg-white/45 hover:bg-white/70",
                )}
              >
                {index === active && !paused ? (
                  <span
                    className="absolute inset-y-0 right-0 w-full origin-right rounded-full bg-novin-orange motion-safe:animate-hero-progress"
                    style={{ animationDuration: `${SLIDE_MS}ms` }}
                  />
                ) : null}
                {index === active && paused ? (
                  <span className="absolute inset-0 rounded-full bg-novin-orange" />
                ) : null}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
