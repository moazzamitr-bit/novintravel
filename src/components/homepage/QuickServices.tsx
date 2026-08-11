import Link from "next/link";
import {
  Building2,
  CalendarRange,
  RefreshCcw,
  Shield,
  Star,
  Wallet,
} from "lucide-react";
import { quickServices } from "@/data/homepage";
import { Card } from "@/components/ui/Card";
import { IconBox } from "@/components/ui/IconBox";

const icons = {
  club: Star,
  wallet: Wallet,
  refund: RefreshCcw,
  insurance: Shield,
  hotel: Building2,
  installment: CalendarRange,
};

export function QuickServices() {
  return (
    <section className="container-page pt-10 sm:pt-14 lg:pt-16" aria-label="خدمات سریع">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 lg:gap-4">
        {quickServices.map((service) => {
          const Icon = icons[service.icon];
          return (
            <Link key={service.id} href={service.href} className="group">
              <Card
                interactive
                className="flex h-full flex-col items-start gap-3 p-4 sm:p-5"
              >
                <IconBox size="sm" className="transition-transform duration-200 group-hover:scale-105">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </IconBox>
                <div>
                  <h3 className="text-[15px] font-bold text-novin-text">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-[12.5px] leading-6 text-novin-text-secondary">
                    {service.description}
                  </p>
                </div>
              </Card>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
