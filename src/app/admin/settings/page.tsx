import { Button } from "@/components/ui/Button";
import { PanelCard } from "@/components/panel/PanelShell";

export default function AdminSettingsPage() {
  return (
    <div className="space-y-6">
      <PanelCard title="تنظیمات عمومی">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="text-[13px]">
            <span className="mb-1.5 block font-medium text-novin-text">نام برند</span>
            <input
              className="h-11 w-full rounded-xl border border-novin-border px-3"
              defaultValue="نوین تراول"
            />
          </label>
          <label className="text-[13px]">
            <span className="mb-1.5 block font-medium text-novin-text">تلفن پشتیبانی</span>
            <input
              className="h-11 w-full rounded-xl border border-novin-border px-3"
              defaultValue="۰۲۱-۴۱۵۶۷"
              dir="ltr"
            />
          </label>
          <label className="text-[13px] sm:col-span-2">
            <span className="mb-1.5 block font-medium text-novin-text">ایمیل پشتیبانی</span>
            <input
              className="h-11 w-full rounded-xl border border-novin-border px-3"
              defaultValue="support@novintravel.ir"
              dir="ltr"
            />
          </label>
        </div>
        <Button className="mt-5">ذخیره تنظیمات</Button>
      </PanelCard>

      <PanelCard title="درگاه و پرداخت">
        <ul className="space-y-3 text-[14px]">
          {[
            ["درگاه بانکی", "فعال"],
            ["کیف پول", "فعال"],
            ["سفر اقساطی", "فعال (دمو)"],
          ].map(([label, status]) => (
            <li
              key={label}
              className="flex items-center justify-between rounded-2xl bg-novin-bg-secondary px-4 py-3"
            >
              <span>{label}</span>
              <span className="font-medium text-novin-purple">{status}</span>
            </li>
          ))}
        </ul>
      </PanelCard>
    </div>
  );
}
