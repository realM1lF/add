"use client";

import { useState, useEffect, useLayoutEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Startseite" },
  { href: "/themen", label: "Das Spektrum" },
  { href: "/strategien", label: "Strategien" },
  { href: "/quellen", label: "Quellen" },
];

function getFocusableElements(container: HTMLElement): HTMLElement[] {
  return Array.from(
    container.querySelectorAll<HTMLElement>(
      'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
  ).filter(
    (element) =>
      !element.hasAttribute("disabled") &&
      element.getAttribute("aria-hidden") !== "true" &&
      element.tabIndex >= 0
  );
}

type CloseReason = "toggle" | "escape" | "link";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const dialogRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const closeReasonRef = useRef<CloseReason>("toggle");
  const wasOpenRef = useRef(false);

  useLayoutEffect(() => {
    if (open && dialogRef.current) {
      const focusableElements = getFocusableElements(dialogRef.current);
      focusableElements[0]?.focus({ preventScroll: true });
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeReasonRef.current = "escape";
        setOpen(false);
        return;
      }

      if (event.key === "Tab" && dialogRef.current) {
        const focusableElements = getFocusableElements(dialogRef.current);

        if (focusableElements.length === 0) {
          event.preventDefault();
          return;
        }

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        const activeElement = document.activeElement as HTMLElement | null;

        if (event.shiftKey) {
          if (activeElement === firstElement || !dialogRef.current.contains(activeElement)) {
            event.preventDefault();
            lastElement.focus();
          }
        } else {
          if (activeElement === lastElement || !dialogRef.current.contains(activeElement)) {
            event.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  useEffect(() => {
    if (open) {
      wasOpenRef.current = true;
      return;
    }

    if (wasOpenRef.current && closeReasonRef.current !== "link" && toggleButtonRef.current) {
      toggleButtonRef.current.focus();
    }

    wasOpenRef.current = false;
    closeReasonRef.current = "toggle";
  }, [open]);

  const handleToggleClick = () => {
    closeReasonRef.current = "toggle";
    setOpen((s) => !s);
  };

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (event.metaKey || event.ctrlKey) {
      closeReasonRef.current = "toggle";
    } else {
      closeReasonRef.current = "link";
    }
    setOpen(false);
  };

  return (
    <div className="sm:hidden">
      <button
        ref={toggleButtonRef}
        type="button"
        onClick={handleToggleClick}
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-haspopup="dialog"
        aria-label={open ? "Menü schließen" : "Menü öffnen"}
        className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full text-foreground"
      >
        {open ? (
          <X className="size-6" aria-hidden="true" />
        ) : (
          <Menu className="size-6" aria-hidden="true" />
        )}
      </button>

      {open && (
        <div
          ref={dialogRef}
          id="mobile-nav"
          role="dialog"
          aria-modal="true"
          aria-label="Hauptnavigation"
          tabIndex={-1}
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
                  onClick={handleLinkClick}
                  className={cn(
                    "block py-2 font-heading text-3xl tracking-tight transition-colors",
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
              onClick={handleLinkClick}
              className="inline-flex w-fit items-center rounded-full bg-primary px-6 py-3 text-lg font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Screener starten
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
