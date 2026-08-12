"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Headphones, Menu, X } from "lucide-react";
import { mainNav, siteConfig } from "@/data/homepage";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparent = isHome && !scrolled && !open;

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-300",
        transparent
          ? "border-b border-transparent bg-transparent"
          : "border-b border-novin-border/60 bg-novin-surface/90 shadow-[0_1px_0_rgba(26,20,36,0.03)] backdrop-blur-xl supports-[backdrop-filter]:bg-novin-surface/80",
      )}
    >
      <div className="container-page">
        <div className="flex h-[72px] items-center justify-between gap-4 lg:h-[76px]">
          <div className="flex min-w-0 items-center gap-6 xl:gap-8">
            <Link
              href="/"
              className={cn(
                "relative flex h-11 w-[158px] shrink-0 items-center sm:h-[48px] sm:w-[180px]",
                transparent && "brightness-0 invert",
              )}
              aria-label={siteConfig.name}
            >
              <Image
                src="/brand/logo-horizontal.png"
                alt={siteConfig.name}
                fill
                priority
                className="object-contain object-right"
                sizes="180px"
              />
            </Link>

            <nav
              aria-label="منوی اصلی"
              className="hidden items-center gap-0.5 xl:flex"
            >
              {mainNav.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    className={cn(
                      "relative whitespace-nowrap px-2.5 py-2 text-[13px] font-medium transition-colors duration-200",
                      transparent
                        ? active
                          ? "text-novin-orange"
                          : "text-white/85 hover:text-white"
                        : active
                          ? "text-novin-orange"
                          : "text-novin-text-secondary hover:text-novin-purple",
                    )}
                  >
                    {item.label}
                    {active ? (
                      <span className="absolute inset-x-2.5 -bottom-[1px] h-[2px] rounded-full bg-novin-orange" />
                    ) : null}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={siteConfig.phoneHref}
              className={cn(
                "hidden items-center gap-2 rounded-xl px-2 py-2 transition-colors md:inline-flex",
                transparent
                  ? "text-white hover:bg-white/10"
                  : "text-novin-purple hover:bg-novin-bg-secondary",
              )}
            >
              <Headphones className="h-[18px] w-[18px]" aria-hidden />
              <span className="text-[14px] font-semibold tracking-wide" dir="ltr">
                {siteConfig.phone}
              </span>
            </a>

            <div className="hidden items-center gap-2 sm:flex">
              <Button
                href="/account"
                variant={transparent ? "white" : "outline"}
                size="sm"
              >
                ورود / ثبت‌نام
              </Button>
              <Button
                href="/admin"
                variant="ghost"
                size="sm"
                className={cn(
                  transparent ? "text-white/75 hover:bg-white/10 hover:text-white" : "text-novin-text-muted",
                )}
              >
                ادمین
              </Button>
            </div>

            <button
              type="button"
              className={cn(
                "inline-flex h-10 w-10 items-center justify-center rounded-xl border xl:hidden",
                transparent
                  ? "border-white/25 text-white"
                  : "border-novin-border text-novin-purple",
              )}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "بستن منو" : "باز کردن منو"}
              onClick={() => setOpen((prev) => !prev)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-novin-border bg-white xl:hidden"
        >
          <nav
            className="container-page flex flex-col gap-1 py-4"
            aria-label="منوی موبایل"
          >
            {mainNav.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-xl px-3 py-3 text-[15px] font-medium",
                  isActive(item.href)
                    ? "bg-novin-bg-secondary text-novin-orange"
                    : "text-novin-text-secondary hover:bg-novin-bg-secondary hover:text-novin-purple",
                )}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-2 border-t border-novin-border pt-3">
              <a
                href={siteConfig.phoneHref}
                className="inline-flex items-center gap-2 px-3 py-2 text-novin-purple"
              >
                <Headphones className="h-4 w-4" />
                <span dir="ltr">{siteConfig.phone}</span>
              </a>
              <Button
                href="/account"
                variant="outline"
                className="w-full"
                onClick={() => setOpen(false)}
              >
                ورود / ثبت‌نام
              </Button>
              <Button
                href="/admin"
                variant="ghost"
                className="w-full"
                onClick={() => setOpen(false)}
              >
                پنل ادمین (دمو)
              </Button>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
