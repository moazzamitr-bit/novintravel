"use client";

import { useMemo, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import {
  BusSearchForm,
  HotelSearchForm,
  StaySearchForm,
  TourSearchForm,
  TrainSearchForm,
} from "./HotelSearchForm";
import { FlightSearchForm } from "./FlightSearchForm";
import { SearchTabs } from "./SearchTabs";
import {
  buildSearchUrl,
  defaultSearchState,
  validateSearch,
  type SearchErrors,
  type TravelSearchState,
} from "./types";

export function TravelSearch() {
  const router = useRouter();
  const [state, setState] = useState<TravelSearchState>(defaultSearchState);
  const [errors, setErrors] = useState<SearchErrors>({});
  const [isPending, startTransition] = useTransition();

  const form = useMemo(() => {
    const onChange = (patch: Partial<TravelSearchState>) => {
      setErrors({});
      setState((prev) => ({ ...prev, ...patch }));
    };

    switch (state.serviceType) {
      case "hotel":
        return (
          <HotelSearchForm state={state} errors={errors} onChange={onChange} />
        );
      case "tour":
        return (
          <TourSearchForm state={state} errors={errors} onChange={onChange} />
        );
      case "stay":
        return (
          <StaySearchForm state={state} errors={errors} onChange={onChange} />
        );
      case "train":
        return (
          <TrainSearchForm state={state} errors={errors} onChange={onChange} />
        );
      case "bus":
        return (
          <BusSearchForm state={state} errors={errors} onChange={onChange} />
        );
      default:
        return (
          <FlightSearchForm state={state} errors={errors} onChange={onChange} />
        );
    }
  }, [state, errors]);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const nextErrors = validateSearch(state);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    startTransition(() => {
      router.push(buildSearchUrl(state));
    });
  }

  return (
    <section
      aria-label="جستجوی سفر"
      className="relative z-30 -mt-[72px] sm:-mt-24 lg:-mt-[108px]"
    >
      <div className="container-page">
        <form
          onSubmit={handleSubmit}
          className="relative z-30 mx-auto max-w-[1320px] overflow-visible rounded-[24px] border border-white/70 bg-white/95 shadow-search ring-1 ring-[color-mix(in_srgb,var(--color-novin-purple)_8%,transparent)] backdrop-blur-sm"
        >
          <div className="overflow-hidden rounded-t-[24px]">
            <SearchTabs
              value={state.serviceType}
              onChange={(serviceType) => {
                setErrors({});
                setState((prev) => ({ ...prev, serviceType }));
              }}
            />
          </div>

          <div
            className={cn(
              "relative z-40 space-y-4 overflow-visible p-4 transition-opacity duration-200 sm:p-5 lg:p-6",
              isPending && "opacity-70",
            )}
          >
            {form}

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              {state.serviceType === "flight" ? (
                <div className="flex flex-wrap gap-x-5 gap-y-2">
                  <label className="inline-flex min-h-11 cursor-pointer items-center gap-2 text-[13px] text-novin-text-secondary">
                    <input
                      type="checkbox"
                      checked={state.directOnly}
                      onChange={(e) =>
                        setState((prev) => ({
                          ...prev,
                          directOnly: e.target.checked,
                        }))
                      }
                      className="h-4 w-4 rounded border-novin-border text-novin-purple focus:ring-novin-purple"
                    />
                    جستجوی پرواز مستقیم
                  </label>
                  <label className="inline-flex min-h-11 cursor-pointer items-center gap-2 text-[13px] text-novin-text-secondary">
                    <input
                      type="checkbox"
                      checked={state.oneWayTicketOnly}
                      onChange={(e) =>
                        setState((prev) => ({
                          ...prev,
                          oneWayTicketOnly: e.target.checked,
                          tripType: e.target.checked ? "oneway" : "roundtrip",
                          returnDate: e.target.checked
                            ? ""
                            : prev.returnDate || "۱۴۰۵/۰۳/۱۵",
                        }))
                      }
                      className="h-4 w-4 rounded border-novin-border text-novin-purple focus:ring-novin-purple"
                    />
                    بلیط فقط رفت
                  </label>
                </div>
              ) : (
                <div className="text-[13px] text-novin-text-muted">
                  جستجوی سریع و شفاف با قیمت واقعی
                </div>
              )}

              <Button
                type="submit"
                size="lg"
                disabled={isPending}
                className="w-full sm:w-[200px]"
              >
                {isPending ? "در حال جستجو..." : "جستجو"}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
