import { Button } from "@/components/ui/Button";
import { PanelCard } from "@/components/panel/PanelShell";
import { accountTickets } from "@/data/panels";

const statusMap: Record<string, string> = {
  open: "باز",
  answered: "پاسخ داده شده",
};

export default function AccountTicketsPage() {
  return (
    <div className="space-y-6">
      <PanelCard
        title="تیکت‌های پشتیبانی"
        action={<Button size="sm">تیکت جدید</Button>}
      >
        <div className="space-y-3">
          {accountTickets.map((ticket) => (
            <article
              key={ticket.id}
              className="flex flex-col gap-3 rounded-2xl border border-novin-border p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="text-[12px] text-novin-text-muted" dir="ltr">
                  {ticket.id}
                </p>
                <h3 className="mt-1 text-[15px] font-bold text-novin-text">
                  {ticket.subject}
                </h3>
                <p className="mt-1 text-[12px] text-novin-text-secondary">
                  آخرین بروزرسانی: {ticket.updatedAt}
                </p>
              </div>
              <span className="rounded-full bg-novin-bg-secondary px-3 py-1 text-[12px] font-medium text-novin-purple">
                {statusMap[ticket.status] ?? ticket.status}
              </span>
            </article>
          ))}
        </div>
      </PanelCard>

      <PanelCard title="ثبت تیکت جدید (دمو)">
        <div className="grid gap-3">
          <input
            className="h-11 rounded-xl border border-novin-border px-3 text-[14px]"
            placeholder="موضوع"
          />
          <textarea
            className="min-h-[120px] rounded-xl border border-novin-border px-3 py-3 text-[14px]"
            placeholder="توضیحات"
          />
          <Button className="w-fit">ارسال</Button>
        </div>
      </PanelCard>
    </div>
  );
}
