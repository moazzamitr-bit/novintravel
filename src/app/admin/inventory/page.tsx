import { Button } from "@/components/ui/Button";
import { PanelCard } from "@/components/panel/PanelShell";
import { adminInventory } from "@/data/panels";
import { formatToman } from "@/lib/utils";

export default function AdminInventoryPage() {
  return (
    <PanelCard
      title="موجودی پرواز، هتل و تور"
      action={<Button size="sm">افزودن آیتم</Button>}
    >
      <div className="grid gap-3">
        {adminInventory.map((item) => (
          <article
            key={item.id}
            className="flex flex-col gap-3 rounded-2xl border border-novin-border p-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <p className="text-[12px] font-medium text-novin-orange">{item.type}</p>
              <h3 className="mt-1 text-[15px] font-bold text-novin-text">
                {item.title}
              </h3>
              <p className="mt-1 text-[13px] text-novin-text-secondary">
                موجودی: {item.stock}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <p className="text-[16px] font-bold text-novin-purple">
                {formatToman(item.price)}
              </p>
              <Button size="sm" variant="outline">
                ویرایش
              </Button>
            </div>
          </article>
        ))}
      </div>
    </PanelCard>
  );
}
