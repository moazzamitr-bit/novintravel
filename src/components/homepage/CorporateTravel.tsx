import Link from "next/link";
import { BriefcaseBusiness, ChartColumn, CreditCard, ShieldCheck, Users, WalletCards } from "lucide-react";
import { corporateFeatures } from "@/data/homepage";
import { Button } from "@/components/ui/Button";

const featureIcons = [Users, ShieldCheck, ChartColumn, WalletCards, BriefcaseBusiness, CreditCard];

export function CorporateTravel() {
  return (
    <section className="bg-novin-bg-secondary" aria-labelledby="corporate-title">
      <div className="container-page section-spacing">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <h2
              id="corporate-title"
              className="text-[24px] font-bold text-novin-text sm:text-[30px] lg:text-[32px]"
            >
              سفرهای سازمانی، بدون دردسر
            </h2>
            <p className="mt-3 max-w-xl text-[15px] leading-8 text-novin-text-secondary">
              مدیریت متمرکز سفر کارکنان، کنترل هزینه و گزارش‌گیری در یک پنل.
            </p>

            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {corporateFeatures.map((feature, index) => {
                const Icon = featureIcons[index % featureIcons.length];
                return (
                  <li
                    key={feature}
                    className="flex items-center gap-3 rounded-2xl border border-novin-border bg-white px-4 py-3"
                  >
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[color-mix(in_srgb,var(--color-novin-purple)_8%,white)] text-novin-purple">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="text-[14px] font-medium text-novin-text">
                      {feature}
                    </span>
                  </li>
                );
              })}
            </ul>

            <Link href="/corporate/request" className="mt-8 inline-flex">
              <Button variant="secondary" size="lg">
                درخواست پنل سازمانی
              </Button>
            </Link>
          </div>

          <div className="relative">
            <div className="rounded-[24px] border border-novin-border bg-white p-4 shadow-card sm:p-5">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-[13px] text-novin-text-muted">پنل سازمانی</p>
                  <p className="text-[18px] font-bold text-novin-text">
                    داشبورد سفر شرکت
                  </p>
                </div>
                <span className="rounded-full bg-novin-purple/10 px-3 py-1 text-[12px] font-medium text-novin-purple">
                  Live Preview
                </span>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  { label: "هزینه ماه", value: "۲۴۸ م" },
                  { label: "سفر فعال", value: "۳۷" },
                  { label: "صرفه‌جویی", value: "۱۸٪" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl bg-novin-bg-secondary p-4"
                  >
                    <p className="text-[12px] text-novin-text-muted">{item.label}</p>
                    <p className="mt-1 text-[22px] font-bold text-novin-purple">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-4 space-y-2">
                {["تهران → دبی · بیزینس", "اصفهان → تهران · اکونومی", "تهران → استانبول · تور"].map(
                  (row) => (
                    <div
                      key={row}
                      className="flex items-center justify-between rounded-xl border border-novin-border px-3 py-3 text-[13px]"
                    >
                      <span className="text-novin-text">{row}</span>
                      <span className="text-novin-text-muted">تأیید شده</span>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
