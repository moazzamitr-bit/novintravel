"use client";

import {
  Bus,
  Building2,
  Hotel,
  Plane,
  TrainFront,
  TentTree,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { ServiceType } from "./types";

const tabs: {
  id: ServiceType;
  label: string;
  icon: typeof Plane;
}[] = [
  { id: "flight", label: "پرواز", icon: Plane },
  { id: "hotel", label: "هتل", icon: Hotel },
  { id: "tour", label: "تور", icon: TentTree },
  { id: "stay", label: "اقامتگاه", icon: Building2 },
  { id: "train", label: "قطار", icon: TrainFront },
  { id: "bus", label: "اتوبوس", icon: Bus },
];

interface SearchTabsProps {
  value: ServiceType;
  onChange: (value: ServiceType) => void;
}

export function SearchTabs({ value, onChange }: SearchTabsProps) {
  return (
    <div
      role="tablist"
      aria-label="نوع خدمات سفر"
      className="flex h-[64px] items-stretch gap-0.5 overflow-x-auto border-b border-novin-border/90 bg-[linear-gradient(180deg,rgba(247,245,249,0.9)_0%,rgba(255,255,255,0)_100%)] px-2 sm:px-4"
    >
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const selected = value === tab.id;
        return (
          <button
            key={tab.id}
            role="tab"
            type="button"
            aria-selected={selected}
            onClick={() => onChange(tab.id)}
            className={cn(
              "relative flex min-w-[86px] shrink-0 items-center justify-center gap-2 px-3 text-[13.5px] font-medium transition-colors duration-200",
              selected
                ? "text-novin-purple"
                : "text-novin-text-secondary hover:text-novin-purple",
            )}
          >
            <Icon
              className={cn(
                "h-[17px] w-[17px] transition-transform duration-200",
                selected && "-translate-y-px",
              )}
              strokeWidth={selected ? 2 : 1.75}
              aria-hidden
            />
            <span>{tab.label}</span>
            <span
              className={cn(
                "absolute inset-x-3 bottom-0 h-[2.5px] origin-center rounded-full bg-novin-orange transition-transform duration-300 ease-[cubic-bezier(0.2,0,0,1)]",
                selected ? "scale-x-100" : "scale-x-0",
              )}
            />
          </button>
        );
      })}
    </div>
  );
}
