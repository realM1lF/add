"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/themen", label: "Das Spektrum" },
  { href: "/strategien", label: "Strategien" },
  { href: "/quellen", label: "Quellen" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  return (
    <div className="sm:hidden">
      <button
        type="button"
        onClick={() => setOpen((s) => !s)}
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Menü schließen" : "Menü öffnen"}
        className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground"
      >
        {open ? (
          <X className="size-6" aria-hidden="true" />
        ) : (
          <Menu className="size-6" aria-hidden="true" />
        )}
      </button>

      {open && (
        <div
          id="mobile-nav"
          role="dialog"
          aria-modal="true"
          aria-label="Hauptnavigation"
          className="fixed inset-x-0 top-16 z-40 flex h-[calc(100dvh-4rem)] flex-col border-t border-border bg-background px-6 py-10"
        >
          <nav className="flex flex-col gap-6">
            {links.map(({ href, label }) => {
              const active =
                pathname === href || pathname.startsWith(`${href}/`);
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "font-heading text-3xl tracking-tight transition-colors",
                    active
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {label}
                </Link>
              );
            })}
            <div className="my-2 h-px bg-border" />
            <Link
              href="/screener"
              onClick={() => setOpen(false)}
              className="inline-flex w-fit items-center rounded-full bg-primary px-6 py-3 text-lg font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Screener
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
