import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const spots = [
  {
    id: "isfahan",
    title: "اصفهان",
    subtitle: "گنبدهای فیروزه‌ای و غروب‌های طلایی",
    href: "/search/flights?origin=THR&destination=IFN",
    image: "/images/destinations/isfahan-mosque.jpg",
    className: "lg:col-span-7 lg:row-span-2 min-h-[340px] lg:min-h-[520px]",
    object: "object-[62%_40%]",
  },
  {
    id: "mashhad",
    title: "مشهد",
    subtitle: "نور و معماری حرم",
    href: "/search/flights?origin=THR&destination=MHD",
    image: "/images/destinations/mashhad-shrine.jpg",
    className: "lg:col-span-5 min-h-[240px]",
    object: "object-[48%_42%]",
  },
  {
    id: "shiraz",
    title: "شیراز",
    subtitle: "باغ و شعر در غروب",
    href: "/search/flights?origin=THR&destination=SYZ",
    image: "/images/destinations/shiraz-hafez.jpg",
    className: "lg:col-span-5 min-h-[240px]",
    object: "object-[55%_45%]",
  },
] as const;

export function DestinationSpotlight() {
  return (
    <section className="relative overflow-hidden bg-novin-ink text-white" aria-label="مقاصد الهام‌بخش">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(232,78,24,0.18),transparent_45%),radial-gradient(ellipse_at_90%_40%,rgba(31,138,140,0.16),transparent_40%)]"
        aria-hidden
      />

      <div className="container-page relative section-spacing">
        <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2.5 text-[12px] font-semibold tracking-[0.18em] text-novin-orange">
              الهام سفر
            </p>
            <h2 className="text-[28px] font-black tracking-tight sm:text-[36px]">
              ایران را از زاویه‌ای تازه ببینید
            </h2>
            <p className="mt-2.5 max-w-xl text-[15px] leading-8 text-white/75">
              از حرم تا حافظیه و نقش‌جهان — مقصد را با حال‌وهوای واقعی انتخاب کنید.
            </p>
          </div>
          <Link
            href="/tours"
            className="inline-flex items-center gap-2 text-[14px] font-semibold text-white transition-colors duration-200 hover:text-novin-orange"
          >
            مشاهده تورها
            <ArrowLeft className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        <div className="grid gap-3.5 lg:grid-cols-12 lg:grid-rows-2 lg:gap-4">
          {spots.map((spot) => (
            <Link
              key={spot.id}
              href={spot.href}
              className={`group relative overflow-hidden rounded-[24px] outline outline-1 outline-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-novin-orange/50 ${spot.className}`}
            >
              <Image
                src={spot.image}
                alt={spot.title}
                fill
                loading="lazy"
                className={`object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-[1.06] ${spot.object}`}
                sizes="(max-width:1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                <h3 className="text-[24px] font-black tracking-tight text-white sm:text-[30px]">
                  {spot.title}
                </h3>
                <p className="mt-1.5 text-[13px] text-white/80 sm:text-[15px]">
                  {spot.subtitle}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-novin-orange opacity-0 transition-[opacity,transform] duration-300 group-hover:translate-x-[-2px] group-hover:opacity-100">
                  جستجوی پرواز
                  <ArrowLeft className="h-3.5 w-3.5" aria-hidden />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
