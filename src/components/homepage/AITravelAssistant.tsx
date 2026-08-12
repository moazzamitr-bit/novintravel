"use client";

import { useState } from "react";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function AITravelAssistant() {
  const [prompt, setPrompt] = useState(
    "مثلاً برای ۴ روز سفر به استانبول با بودجه ۵۰ میلیون تومان برنامه بده",
  );

  return (
    <section className="container-page section-spacing !pt-0" aria-labelledby="ai-travel-title">
      <div className="relative overflow-hidden rounded-[24px] border border-novin-border/80 bg-novin-surface px-5 py-9 shadow-card sm:px-8 sm:py-11 lg:px-12">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(31,138,140,0.08),transparent_45%),radial-gradient(ellipse_at_90%_20%,rgba(79,47,124,0.07),transparent_40%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-novin-border bg-novin-bg px-3.5 py-1.5 text-[13px] font-medium text-novin-purple">
            <Sparkles className="h-4 w-4 text-novin-orange" strokeWidth={1.75} />
            دستیار هوشمند سفر
          </div>
          <h2
            id="ai-travel-title"
            className="display-title text-[24px] text-novin-text sm:text-[30px]"
          >
            سفرت را هوشمندانه بساز
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-[15px] leading-8 text-novin-text-secondary">
            بگو کجا می‌روی، چقدر زمان داری و بودجه‌ات چقدر است؛ بهترین ترکیب
            پرواز، هتل و برنامه را پیشنهاد می‌دهیم.
          </p>

          <form
            className="mt-7 space-y-3 text-right"
            onSubmit={(event) => {
              event.preventDefault();
              window.location.href = `/assistant?q=${encodeURIComponent(prompt)}`;
            }}
          >
            <label htmlFor="ai-prompt" className="sr-only">
              درخواست برنامه سفر
            </label>
            <textarea
              id="ai-prompt"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              rows={3}
              className="w-full resize-none rounded-2xl border border-novin-border bg-novin-bg px-4 py-4 text-[15px] leading-7 text-novin-text outline-none transition-[border-color,box-shadow] duration-200 focus:border-novin-purple focus:shadow-[0_0_0_3px_rgba(79,47,124,0.12)]"
            />
            <div className="flex justify-center">
              <Button type="submit" size="lg" className="min-w-[220px]">
                برنامه سفر بساز
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
