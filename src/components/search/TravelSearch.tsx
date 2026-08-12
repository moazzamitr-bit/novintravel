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
  type ServiceType,
  type TravelSearchState,
} from "./types";

interface TravelSearchProps {
  initialService?: ServiceType;
  embedded?: boolean;
}

export function TravelSearch({
  initialService = "flight",
  embedded = false,
}: TravelSearchProps) {
  const router = useRouter();
  const [state, setState] = useState<TravelSearchState>({
    ...defaultSearchState,
    serviceType: initialService,
  });
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
      className={cn(
        "relative z-30",
        embedded
          ? "mt-0"
          : "-mt-[80px] sm:-mt-[104px] lg:-mt-[120px]",
      )}
    >
      <div className={embedded ? undefined : "container-page"}>
        <form
          onSubmit={handleSubmit}
          className={cn(
            "relative z-30 mx-auto max-w-[1320px] overflow-visible",
            !embedded &&
              "rounded-[24px] border border-white/80 bg-novin-surface/95 shadow-search backdrop-blur-xl supports-[backdrop-filter]:bg-novin-surface/92",
            embedded &&
              "rounded-[20px] border border-novin-border bg-novin-surface shadow-card",
          )}
        >
          {/* Boarding-pass signature: ember route tab + side notches */}
          {!embedded ? (
            <>
              <div
                className="pointer-events-none absolute inset-y-6 right-0 w-[3px] rounded-l-full bg-gradient-to-b from-novin-orange via-[#ff7a3d] to-novin-purple"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -right-2.5 top-1/2 z-40 hidden h-5 w-5 -translate-y-1/2 rounded-full bg-novin-bg shadow-[inset_0_0_0_1px_rgba(227,224,234,0.9)] lg:block"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -left-2.5 top-1/2 z-40 hidden h-5 w-5 -translate-y-1/2 rounded-full bg-novin-bg shadow-[inset_0_0_0_1px_rgba(227,224,234,0.9)] lg:block"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-y-10 left-0 hidden w-px border-l border-dashed border-novin-border/90 lg:block"
                aria-hidden
              />
            </>
          ) : null}

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
              "relative z-40 space-y-4 overflow-visible p-4 transition-opacity duration-200 sm:p-5 lg:p-6 lg:pr-7",
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
                    پرواز مستقیم
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
                    فقط رفت
                  </label>
                </div>
              ) : (
                <div className="text-[13px] text-novin-text-muted">
                  قیمت شفاف، بدون هزینه پنهان
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
