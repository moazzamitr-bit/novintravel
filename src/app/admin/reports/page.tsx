import { PanelCard, StatCard } from "@/components/panel/PanelShell";

export default function AdminReportsPage() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard label="نرخ تبدیل جستجو→خرید" value="۴٫۸٪" />
        <StatCard label="میانگین مبلغ سفارش" value="۶٫۲M" />
        <StatCard label="NPS پشتیبانی" value="۶۸" />
      </div>
      <PanelCard title="گزارش‌های آماده دانلود (دمو)">
        <ul className="space-y-3">
          {[
            "فروش روزانه پرواز",
            "عملکرد هتل‌ها",
            "اقساط معوق",
            "تیکت‌های حل‌نشده",
          ].map((item) => (
            <li
              key={item}
              className="flex items-center justify-between rounded-2xl bg-novin-bg-secondary px-4 py-3 text-[14px]"
            >
              <span className="text-novin-text">{item}</span>
              <button
                type="button"
                className="text-[13px] font-medium text-novin-purple hover:underline"
              >
                دانلود CSV
              </button>
            </li>
          ))}
        </ul>
      </PanelCard>
    </div>
  );
}
