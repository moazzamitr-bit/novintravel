import { Button } from "@/components/ui/Button";
import { PanelCard } from "@/components/panel/PanelShell";
import {
  adminOrders,
  orderStatusClass,
  orderStatusLabel,
} from "@/data/panels";
import { formatToman } from "@/lib/utils";

export default function AdminOrdersPage() {
  return (
    <PanelCard title="مدیریت سفارش‌ها">
      <div className="mb-4 flex flex-wrap gap-2">
        {["همه", "صادر شده", "در انتظار", "استرداد"].map((item, index) => (
          <button
            key={item}
            type="button"
            className={`rounded-full px-3 py-1.5 text-[12px] font-medium ${
              index === 0
                ? "bg-novin-purple text-white"
                : "bg-novin-bg-secondary text-novin-text-secondary"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px] text-right text-[13px]">
          <thead>
            <tr className="border-b border-novin-border text-novin-text-muted">
              <th className="pb-3 font-medium">شماره</th>
              <th className="pb-3 font-medium">نوع</th>
              <th className="pb-3 font-medium">عنوان</th>
              <th className="pb-3 font-medium">تاریخ</th>
              <th className="pb-3 font-medium">مبلغ</th>
              <th className="pb-3 font-medium">وضعیت</th>
              <th className="pb-3 font-medium">اقدام</th>
            </tr>
          </thead>
          <tbody>
            {adminOrders.map((order) => (
              <tr key={order.id} className="border-b border-novin-border/70">
                <td className="py-3 font-medium text-novin-purple" dir="ltr">
                  {order.id}
                </td>
                <td className="py-3">{order.type}</td>
                <td className="py-3">{order.title}</td>
                <td className="py-3 text-novin-text-secondary">{order.date}</td>
                <td className="py-3">{formatToman(order.amount)}</td>
                <td className="py-3">
                  <span
                    className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${orderStatusClass[order.status]}`}
                  >
                    {orderStatusLabel[order.status]}
                  </span>
                </td>
                <td className="py-3">
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      مشاهده
                    </Button>
                    <Button size="sm" variant="ghost">
                      استرداد
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PanelCard>
  );
}
