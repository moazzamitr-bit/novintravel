"use client";

import { useMemo, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { BusSearchForm, HotelSearchForm, StaySearchForm, TourSearchForm, TrainSearchForm } from "./HotelSearchForm";
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
    switch (state.serviceType) {
      case "hotel":
        return (
          <HotelSearchForm
            state={state}
            errors={errors}
            onChange={(patch) => {
              setErrors({});
              setState((prev) => ({ ...prev, ...patch }));
            }}
          />
        );
      case "tour":
        return (
          <TourSearchForm
            state={state}
            errors={errors}
            onChange={(patch) => {
              setErrors({});
              setState((prev) => ({ ...prev, ...patch }));
            }}
          />
        );
      case "stay":
        return (
          <StaySearchForm
            state={state}
            errors={errors}
            onChange={(patch) => {
              setErrors({});
              setState((prev) => ({ ...prev, ...patch }));
            }}
          />
        );
      case "train":
        return (
          <TrainSearchForm
            state={state}
            errors={errors}
            onChange={(patch) => {
              setErrors({});
              setState((prev) => ({ ...prev, ...patch }));
            }}
          />
        );
      case "bus":
        return (
          <BusSearchForm
            state={state}
            errors={errors}
            onChange={(patch) => {
              setErrors({});
              setState((prev) => ({ ...prev, ...patch }));
            }}
          />
        );
      default:
        return (
          <FlightSearchForm
            state={state}
            errors={errors}
            onChange={(patch) => {
              setErrors({});
              setState((prev) => ({ ...prev, ...patch }));
            }}
          />
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
      className="relative z-20 -mt-16 sm:-mt-20 lg:-mt-24"
    >
      <div className="container-page">
        <form
          onSubmit={handleSubmit}
          className="mx-auto max-w-[1320px] overflow-hidden rounded-[22px] border border-novin-border bg-white shadow-search"
        >
          <SearchTabs
            value={state.serviceType}
            onChange={(serviceType) => {
              setErrors({});
              setState((prev) => ({ ...prev, serviceType }));
            }}
          />

          <div
            className={cn(
              "space-y-4 p-4 transition-opacity duration-200 sm:p-5 lg:p-6",
              isPending && "opacity-70",
            )}
          >
            {form}

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              {state.serviceType === "flight" ? (
                <div className="flex flex-wrap gap-x-5 gap-y-2">
                  <label className="inline-flex items-center gap-2 text-[13px] text-novin-text-secondary">
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
                  <label className="inline-flex items-center gap-2 text-[13px] text-novin-text-secondary">
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
