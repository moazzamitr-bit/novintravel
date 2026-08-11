import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function PromoBanners() {
  return (
    <section
      className="container-page section-spacing !pb-0"
      aria-label="پیشنهادهای ویژه"
    >
      <div className="grid gap-4 lg:grid-cols-2 lg:gap-5">
        <article className="group relative min-h-[240px] overflow-hidden rounded-[22px] bg-[linear-gradient(135deg,#4f2f7c_0%,#3d2460_55%,#2c1a4a_100%)] px-6 py-8 text-white sm:px-8 sm:py-10 transition-transform duration-300 hover:-translate-y-1">
          <div className="pointer-events-none absolute -left-8 top-1/2 h-52 w-52 -translate-y-1/2 rounded-full bg-novin-orange/25 blur-3xl transition-opacity duration-300 group-hover:opacity-90" />
          <div className="relative z-10 flex h-full flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <p className="mb-2 text-[13px] text-white/75">محصول مالی سفر</p>
              <h3 className="text-[24px] font-bold leading-9 sm:text-[28px]">
                سفر اقساطی نوین تراول
              </h3>
              <p className="mt-2 text-[15px] text-white/85">
                تا ۱۲ ماه بدون پیش پرداخت
              </p>
              <Link href="/installment" className="mt-5 inline-flex">
                <Button variant="white" size="md">
                  اطلاعات بیشتر
                </Button>
              </Link>
            </div>
            <div className="relative mx-auto flex h-28 w-28 items-center justify-center sm:mx-0 sm:h-36 sm:w-36">
              <div className="absolute inset-0 rotate-12 rounded-[28px] bg-gradient-to-br from-novin-orange to-[#ff7a3d] shadow-[0_20px_40px_rgba(0,0,0,0.25)] transition-transform duration-300 group-hover:rotate-[16deg]" />
              <div className="relative z-10 text-center">
                <span className="block text-[42px] font-black leading-none text-white sm:text-[52px]">
                  ٪۰
                </span>
                <span className="text-[12px] font-medium text-white/90">
                  پیش‌پرداخت
                </span>
              </div>
            </div>
          </div>
        </article>

        <article className="group relative min-h-[240px] overflow-hidden rounded-[22px] transition-transform duration-300 hover:-translate-y-1">
          <Image
            src="/images/promo/tours.jpg"
            alt="تورهای داخلی و خارجی"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            sizes="(max-width:1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-[#201a2ded] via-[#3d2460bb] to-transparent" />
          <div className="relative z-10 flex h-full flex-col justify-center px-6 py-8 text-white sm:px-8">
            <h3 className="text-[24px] font-bold leading-9 sm:text-[28px]">
              تورهای داخلی و خارجی
            </h3>
            <p className="mt-2 max-w-sm text-[15px] text-white/85">
              با بهترین خدمات و قیمت
            </p>
            <Link href="/tours" className="mt-5 inline-flex">
              <Button
                variant="white"
                size="md"
                className="border border-white/80 bg-white/95"
              >
                مشاهده تورها
              </Button>
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
