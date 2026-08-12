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
  ticket?: boolean;
}

export function TravelSearch({
  initialService = "flight",
  embedded = false,
  ticket = false,
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
        !embedded && !ticket && "-mt-[80px] sm:-mt-[104px] lg:-mt-[120px]",
      )}
    >
      <div className={embedded || ticket ? undefined : "container-page"}>
        <form
          onSubmit={handleSubmit}
          className={cn(
            "relative z-30 mx-auto max-w-[1320px] overflow-visible",
            ticket
              ? "rounded-[22px] border border-white/25 bg-white/95 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl ring-1 ring-black/5"
              : embedded
                ? "rounded-[20px] border border-novin-border bg-novin-surface shadow-card"
                : "rounded-[24px] border border-white/80 bg-novin-surface/95 shadow-search backdrop-blur-xl supports-[backdrop-filter]:bg-novin-surface/92",
          )}
        >
          {ticket ? (
            <>
              <div
                className="pointer-events-none absolute inset-y-5 right-0 w-[4px] rounded-l-full bg-gradient-to-b from-novin-orange via-[#ff7a3d] to-novin-purple"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-x-10 top-0 h-px bg-[repeating-linear-gradient(90deg,transparent,transparent_6px,rgba(227,224,234,0.95)_6px,rgba(227,224,234,0.95)_10px)]"
                aria-hidden
              />
            </>
          ) : null}

          <div className={cn("overflow-hidden", ticket ? "rounded-t-[22px]" : "rounded-t-[24px]")}>
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
              "relative z-40 space-y-3 overflow-visible p-3 transition-opacity duration-200 sm:space-y-4 sm:p-4 lg:p-5",
              isPending && "opacity-70",
            )}
          >
            {form}

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              {state.serviceType === "flight" ? (
                <div className="flex flex-wrap gap-x-5 gap-y-2">
                  <label className="inline-flex min-h-10 cursor-pointer items-center gap-2 text-[13px] text-novin-text-secondary">
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
                  <label className="inline-flex min-h-10 cursor-pointer items-center gap-2 text-[13px] text-novin-text-secondary">
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
