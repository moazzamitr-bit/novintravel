import { Button } from "@/components/ui/Button";
import { PanelCard } from "@/components/panel/PanelShell";
import { accountUser } from "@/data/panels";

export default function AccountProfilePage() {
  return (
    <PanelCard title="پروفایل کاربری">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-[13px] text-novin-text-secondary">
          <span className="mb-1.5 block font-medium text-novin-text">نام و نام خانوادگی</span>
          <input
            className="h-11 w-full rounded-xl border border-novin-border px-3 text-[14px]"
            defaultValue={accountUser.name}
          />
        </label>
        <label className="text-[13px] text-novin-text-secondary">
          <span className="mb-1.5 block font-medium text-novin-text">موبایل</span>
          <input
            className="h-11 w-full rounded-xl border border-novin-border px-3 text-[14px]"
            defaultValue={accountUser.phone}
            dir="ltr"
          />
        </label>
        <label className="text-[13px] text-novin-text-secondary sm:col-span-2">
          <span className="mb-1.5 block font-medium text-novin-text">ایمیل</span>
          <input
            className="h-11 w-full rounded-xl border border-novin-border px-3 text-[14px]"
            defaultValue={accountUser.email}
            dir="ltr"
          />
        </label>
      </div>
      <Button className="mt-5">ذخیره تغییرات</Button>
    </PanelCard>
  );
}
