import { Button } from "@/components/ui/Button";
import { PanelCard } from "@/components/panel/PanelShell";
import { accountPassengers } from "@/data/panels";

export default function AccountPassengersPage() {
  return (
    <PanelCard
      title="مسافران ذخیره‌شده"
      action={<Button size="sm">افزودن مسافر</Button>}
    >
      <div className="grid gap-3 md:grid-cols-2">
        {accountPassengers.map((passenger) => (
          <article
            key={passenger.id}
            className="rounded-2xl border border-novin-border bg-novin-bg-secondary p-4"
          >
            <h3 className="text-[15px] font-bold text-novin-text">{passenger.name}</h3>
            <dl className="mt-3 space-y-1 text-[13px] text-novin-text-secondary">
              <div className="flex justify-between gap-3">
                <dt>کد ملی</dt>
                <dd dir="ltr">{passenger.nationalId}</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt>جنسیت</dt>
                <dd>{passenger.gender}</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt>تاریخ تولد</dt>
                <dd>{passenger.birthDate}</dd>
              </div>
            </dl>
            <div className="mt-4 flex gap-2">
              <Button size="sm" variant="outline">
                ویرایش
              </Button>
              <Button size="sm" variant="ghost">
                حذف
              </Button>
            </div>
          </article>
        ))}
      </div>
    </PanelCard>
  );
}
