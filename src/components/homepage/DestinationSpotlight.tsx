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
    className: "lg:col-span-2 lg:row-span-2 min-h-[320px] lg:min-h-[460px]",
    object: "object-[62%_40%]",
  },
  {
    id: "mashhad",
    title: "مشهد",
    subtitle: "نور و معماری حرم",
    href: "/search/flights?origin=THR&destination=MHD",
    image: "/images/destinations/mashhad-shrine.jpg",
    className: "min-h-[220px]",
    object: "object-[48%_42%]",
  },
  {
    id: "shiraz",
    title: "شیراز",
    subtitle: "باغ و شعر در غروب",
    href: "/search/flights?origin=THR&destination=SYZ",
    image: "/images/destinations/shiraz-hafez.jpg",
    className: "min-h-[220px]",
    object: "object-[55%_45%]",
  },
] as const;

export function DestinationSpotlight() {
  return (
    <section
      className="relative overflow-hidden"
      aria-label="مقاصد الهام‌بخش"
    >
      <div className="container-page section-spacing">
        <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow mb-2.5">الهام سفر</p>
            <h2 className="display-title text-[26px] text-novin-text sm:text-[32px]">
              ایران را از زاویه‌ای تازه ببینید
            </h2>
            <p className="mt-2.5 max-w-xl text-[15px] leading-8 text-novin-text-secondary">
              از حرم تا حافظیه و نقش‌جهان — مقصد را با حال‌وهوای واقعی انتخاب کنید.
            </p>
          </div>
          <Link
            href="/tours"
            className="inline-flex items-center gap-2 text-[14px] font-semibold text-novin-purple transition-colors duration-200 hover:text-novin-orange"
          >
            مشاهده تورها
            <ArrowLeft className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        <div className="grid gap-3.5 lg:grid-cols-3 lg:grid-rows-2 lg:gap-4">
          {spots.map((spot) => (
            <Link
              key={spot.id}
              href={spot.href}
              className={`group relative overflow-hidden rounded-[22px] img-outline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-novin-purple/40 ${spot.className}`}
            >
              <Image
                src={spot.image}
                alt={spot.title}
                fill
                loading="lazy"
                className={`object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-[1.05] ${spot.object}`}
                sizes="(max-width:1024px) 100vw, 55vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-novin-ink/88 via-novin-ink/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <h3 className="display-title text-[22px] text-white sm:text-[26px]">
                  {spot.title}
                </h3>
                <p className="mt-1 text-[13px] text-white/82 sm:text-[14px]">
                  {spot.subtitle}
                </p>
                <span className="mt-3 inline-flex translate-y-1 items-center gap-1.5 text-[13px] font-medium text-white/0 transition-[transform,color,opacity] duration-300 group-hover:translate-y-0 group-hover:text-white/95">
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
