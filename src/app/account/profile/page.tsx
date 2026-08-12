"use client";

import { useState } from "react";
import { ActionButton } from "@/components/ui/ActionButton";
import { PanelCard } from "@/components/panel/PanelShell";
import { accountUser } from "@/data/panels";

export default function AccountProfilePage() {
  const [name, setName] = useState(accountUser.name);
  const [phone, setPhone] = useState(accountUser.phone);
  const [email, setEmail] = useState(accountUser.email);

  return (
    <PanelCard title="پروفایل کاربری">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-[13px] text-novin-text-secondary">
          <span className="mb-1.5 block font-medium text-novin-text">نام و نام خانوادگی</span>
          <input
            className="h-11 w-full rounded-xl border border-novin-border px-3 text-[14px]"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label className="text-[13px] text-novin-text-secondary">
          <span className="mb-1.5 block font-medium text-novin-text">موبایل</span>
          <input
            className="h-11 w-full rounded-xl border border-novin-border px-3 text-[14px]"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            dir="ltr"
          />
        </label>
        <label className="text-[13px] text-novin-text-secondary sm:col-span-2">
          <span className="mb-1.5 block font-medium text-novin-text">ایمیل</span>
          <input
            className="h-11 w-full rounded-xl border border-novin-border px-3 text-[14px]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            dir="ltr"
          />
        </label>
      </div>
      <ActionButton
        className="mt-5"
        message="پروفایل ذخیره شد"
        successLabel="ذخیره شد"
        onClick={() => {
          if (!name.trim()) {
            window.dispatchEvent(
              new CustomEvent("novin-toast", { detail: "نام را وارد کنید" }),
            );
          }
        }}
      >
        ذخیره تغییرات
      </ActionButton>
    </PanelCard>
  );
}
