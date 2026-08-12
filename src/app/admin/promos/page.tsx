import { Button } from "@/components/ui/Button";
import { PanelCard } from "@/components/panel/PanelShell";

const promos = [
  { code: "NOVIN1405", off: "۱۰٪", usage: "۱۲۸", status: "فعال" },
  { code: "KISHVIP", off: "۵۰۰٬۰۰۰ تومان", usage: "۴۲", status: "فعال" },
  { code: "SPRING24", off: "۱۵٪", usage: "۸۹۰", status: "منقضی" },
];

export default function AdminPromosPage() {
  return (
    <PanelCard
      title="کدهای تخفیف"
      action={<Button size="sm">کد جدید</Button>}
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[560px] text-right text-[13px]">
          <thead>
            <tr className="border-b border-novin-border text-novin-text-muted">
              <th className="pb-3 font-medium">کد</th>
              <th className="pb-3 font-medium">تخفیف</th>
              <th className="pb-3 font-medium">مصرف</th>
              <th className="pb-3 font-medium">وضعیت</th>
            </tr>
          </thead>
          <tbody>
            {promos.map((promo) => (
              <tr key={promo.code} className="border-b border-novin-border/70">
                <td className="py-3 font-medium text-novin-purple" dir="ltr">
                  {promo.code}
                </td>
                <td className="py-3">{promo.off}</td>
                <td className="py-3">{promo.usage}</td>
                <td className="py-3">{promo.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PanelCard>
  );
}
