import { Button } from "@/components/ui/Button";
import { PanelCard } from "@/components/panel/PanelShell";
import { accountInstallments } from "@/data/panels";
import { formatToman } from "@/lib/utils";

export default function AccountInstallmentsPage() {
  return (
    <PanelCard title="اقساط سفر">
      <div className="space-y-4">
        {accountInstallments.map((item) => (
          <article
            key={item.id}
            className="rounded-[18px] border border-novin-border p-5"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="text-[16px] font-bold text-novin-text">{item.title}</h3>
                <p className="mt-1 text-[13px] text-novin-text-secondary">
                  {item.paid.toLocaleString("fa-IR")} از{" "}
                  {item.months.toLocaleString("fa-IR")} قسط پرداخت شده
                </p>
              </div>
              <Button size="sm">پرداخت قسط</Button>
            </div>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-novin-bg-secondary">
              <div
                className="h-full rounded-full bg-[linear-gradient(90deg,#4f2f7c,#f84209)]"
                style={{ width: `${(item.paid / item.months) * 100}%` }}
              />
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-3 text-[13px]">
              <div className="rounded-xl bg-novin-bg-secondary px-3 py-2">
                <p className="text-novin-text-muted">کل مبلغ</p>
                <p className="font-bold text-novin-text">{formatToman(item.total)}</p>
              </div>
              <div className="rounded-xl bg-novin-bg-secondary px-3 py-2">
                <p className="text-novin-text-muted">قسط ماهانه</p>
                <p className="font-bold text-novin-text">{formatToman(item.monthly)}</p>
              </div>
              <div className="rounded-xl bg-novin-bg-secondary px-3 py-2">
                <p className="text-novin-text-muted">سررسید بعدی</p>
                <p className="font-bold text-novin-text">{item.nextDue}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </PanelCard>
  );
}
