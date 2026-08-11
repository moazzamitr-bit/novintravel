"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { popularDestinations } from "@/data/homepage";
import { Badge } from "@/components/ui/Badge";
import { Price } from "@/components/ui/Price";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function PopularDestinations() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  function scrollByCard(direction: "next" | "prev") {
    const node = scrollerRef.current;
    if (!node) return;
    const amount = 280;
    // In RTL, scrollLeft behavior can be negative depending on browser.
    node.scrollBy({
      left: direction === "next" ? -amount : amount,
      behavior: "smooth",
    });
  }

  return (
    <section className="container-page section-spacing" aria-label="مقاصد محبوب پرواز">
      <SectionHeader
        title="مقاصد محبوب پرواز"
        actionLabel="مشاهده همه"
        actionHref="/flights"
      />

      <div className="relative">
        <button
          type="button"
          aria-label="مقاصد بعدی"
          onClick={() => scrollByCard("next")}
          className="absolute right-0 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-novin-border bg-white text-novin-purple shadow-soft transition hover:-translate-y-[calc(50%+2px)] md:inline-flex"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label="مقاصد قبلی"
          onClick={() => scrollByCard("prev")}
          className="absolute left-0 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-novin-border bg-white text-novin-purple shadow-soft transition hover:-translate-y-[calc(50%+2px)] md:inline-flex"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div
          ref={scrollerRef}
          className="flex gap-4 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] md:px-12 [&::-webkit-scrollbar]:hidden"
        >
          {popularDestinations.map((destination) => (
            <Link
              key={destination.id}
              href={destination.href}
              className="group w-[250px] shrink-0 sm:w-[270px]"
            >
              <article className="overflow-hidden rounded-[16px] border border-novin-border bg-white transition-all duration-200 hover:-translate-y-[3px] hover:shadow-card">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={destination.image}
                    alt={destination.city}
                    fill
                    loading="lazy"
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    sizes="270px"
                  />
                  <Badge
                    tone={destination.type === "domestic" ? "purple" : "sky"}
                    className="absolute right-3 top-3"
                  >
                    {destination.type === "domestic" ? "داخلی" : "خارجی"}
                  </Badge>
                </div>
                <div className="p-4">
                  <h3 className="text-[18px] font-bold text-novin-text">
                    {destination.city}
                  </h3>
                  <p className="mt-1 text-[13px] text-novin-text-secondary">
                    {destination.origin}
                  </p>
                  <Price amount={destination.priceFrom} className="mt-3" />
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
