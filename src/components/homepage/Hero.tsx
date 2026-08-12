"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { TravelSearch } from "@/components/search/TravelSearch";
import { cn } from "@/lib/utils";

const slides = [
  {
    id: "wing",
    src: "/images/hero/wing-sunset.jpg",
    alt: "بال هواپیما بالای ابرها در غروب",
    objectPosition: "object-[70%_42%]",
    ken: "motion-safe:animate-hero-ken",
    caption: "پرواز به افق‌های تازه",
  },
  {
    id: "jet",
    src: "/images/hero/jet-islands.jpg",
    alt: "هواپیما بر فراز جزایر استوایی در غروب",
    objectPosition: "object-[55%_38%]",
    ken: "motion-safe:animate-hero-ken-alt",
    caption: "مقصد بعدی، فقط یک جستجو فاصله دارد",
  },
  {
    id: "villa",
    src: "/images/hero/villa-terrace.jpg",
    alt: "تراس لوکس مشرف به دریا در غروب آفتاب",
    objectPosition: "object-[60%_45%]",
    ken: "motion-safe:animate-hero-ken-pan",
    caption: "اقامت‌هایی که خاطره می‌سازند",
  },
  {
    id: "hafez",
    src: "/images/hero/hafez-shiraz.jpg",
    alt: "آرامگاه حافظ در شیراز هنگام غروب",
    objectPosition: "object-[48%_40%]",
    ken: "motion-safe:animate-hero-ken",
    caption: "ایران را از نزدیک کشف کنید",
  },
  {
    id: "coast",
    src: "/images/mood/coastal-resort.jpg",
    alt: "ریزورت ساحلی لوکس در غروب",
    objectPosition: "object-[38%_42%]",
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
      className="relative isolate min-h-[100svh] overflow-hidden pb-8 pt-[72px] sm:pb-10 lg:min-h-[920px] lg:pb-12"
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

      {/* Strong readable stage for brand — still shows photo on left/top */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_75%_20%,rgba(232,78,24,0.22)_0%,transparent_42%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(14,10,20,0.25)_0%,rgba(14,10,20,0.45)_38%,rgba(14,10,20,0.78)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,10,20,0.55)_0%,rgba(14,10,20,0.12)_28%,rgba(14,10,20,0.35)_62%,rgba(14,10,20,0.88)_100%)]" />

      <div
        className="pointer-events-none absolute inset-0 opacity-30 mix-blend-soft-light motion-safe:animate-hero-sheen"
        aria-hidden
      />

      <div className="container-page relative z-10 flex min-h-[calc(100svh-72px)] flex-col justify-between gap-10 py-8 sm:gap-12 sm:py-10 lg:min-h-[calc(920px-72px)] lg:py-12">
        <div className="max-w-3xl pt-2 sm:pt-6">
          <div className="mb-5 inline-flex items-center gap-3 motion-safe:animate-fade-up">
            <span className="h-px w-8 bg-novin-orange sm:w-12" aria-hidden />
            <p className="text-[12px] font-semibold tracking-[0.22em] text-novin-orange sm:text-[13px]">
              NOVIN TRAVEL
            </p>
          </div>

          <h1 className="motion-safe:animate-fade-up motion-safe:[animation-delay:90ms]">
            <span className="block text-[48px] font-black leading-[1.05] tracking-tight text-white drop-shadow-[0_8px_40px_rgba(0,0,0,0.45)] sm:text-[68px] lg:text-[84px]">
              نوین تراول
            </span>
            <span className="mt-4 block max-w-2xl text-[22px] font-bold leading-10 text-white sm:mt-5 sm:text-[32px] sm:leading-[1.35] lg:text-[36px]">
              سفر را هوشمندانه تجربه کنید
            </span>
          </h1>

          <p className="mt-5 max-w-lg text-[15px] leading-8 text-white/90 motion-safe:animate-fade-up motion-safe:[animation-delay:160ms] sm:mt-6 sm:text-[17px] sm:leading-9">
            پرواز، هتل و تور با قیمت شفاف — از اولین جستجو تا رزرو نهایی
          </p>

          <p
            key={slides[active].id}
            className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-[13px] text-white/90 backdrop-blur-md motion-safe:animate-fade-up sm:text-[14px]"
          >
            {slides[active].caption}
          </p>
        </div>

        <div className="space-y-4 motion-safe:animate-fade-up motion-safe:[animation-delay:220ms]">
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
                    ? "w-12 bg-white/35"
                    : "w-2 bg-white/45 hover:bg-white/75",
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

          {/* Signature boarding-pass search docked in the cinematic stage */}
          <div className="relative">
            <div
              className="pointer-events-none absolute -top-3 right-8 hidden h-6 w-6 rounded-full bg-[rgba(14,10,20,0.9)] ring-1 ring-white/10 sm:block"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -top-3 left-8 hidden h-6 w-6 rounded-full bg-[rgba(14,10,20,0.9)] ring-1 ring-white/10 sm:block"
              aria-hidden
            />
            <TravelSearch embedded ticket />
          </div>
        </div>
      </div>
    </section>
  );
}
