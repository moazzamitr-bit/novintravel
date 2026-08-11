import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default async function GenericSearchPage({
  params,
  searchParams,
}: {
  params: Promise<{ type: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { type } = await params;
  const query = await searchParams;

  const titles: Record<string, string> = {
    hotels: "نتایج جستجوی هتل",
    tours: "نتایج جستجوی تور",
    stays: "نتایج جستجوی اقامتگاه",
    trains: "نتایج جستجوی قطار",
    buses: "نتایج جستجوی اتوبوس",
  };

  return (
    <div className="container-page section-spacing">
      <div className="mx-auto max-w-2xl rounded-[22px] border border-novin-border bg-white p-6 shadow-card sm:p-8">
        <h1 className="text-[24px] font-bold text-novin-text sm:text-[28px]">
          {titles[type] ?? "نتایج جستجو"}
        </h1>
        <p className="mt-3 text-[15px] leading-8 text-novin-text-secondary">
          پارامترهای جستجو دریافت شد. اتصال به سرویس واقعی در فاز بعدی انجام می‌شود.
        </p>
        <dl className="mt-6 space-y-2 rounded-2xl bg-novin-bg-secondary p-4 text-[14px]">
          {Object.entries(query).map(([key, value]) => (
            <div key={key} className="flex justify-between gap-4">
              <dt className="text-novin-text-muted">{key}</dt>
              <dd className="font-medium text-novin-text" dir="ltr">
                {Array.isArray(value) ? value.join(", ") : value}
              </dd>
            </div>
          ))}
        </dl>
        <Link href="/" className="mt-6 inline-flex">
          <Button variant="outline">بازگشت به صفحه اصلی</Button>
        </Link>
      </div>
    </div>
  );
}
