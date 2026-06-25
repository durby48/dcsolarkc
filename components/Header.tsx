"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { MenuIcon, CloseIcon, PhoneIcon } from "@/components/icons";
import { navLinks, siteConfig } from "@/lib/site";

const telHref = `tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-md backdrop-blur"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="container-px flex h-16 items-center justify-between sm:h-20">
        <a href="#top" className="flex items-center" aria-label={`${siteConfig.name} home`}>
          <Logo priority className="h-9 w-auto sm:h-11" />
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-navy/80 transition-colors hover:text-ocean"
            >
              {link.label}
            </a>
          ))}
          <a href={telHref} className="inline-flex items-center gap-2 text-sm font-semibold text-navy-deep">
            <PhoneIcon className="h-4 w-4 text-ocean" />
            {siteConfig.phone}
          </a>
          <a href="#contact" className="btn-primary">
            Free Quote
          </a>
        </nav>

        <button
          type="button"
          className="text-navy-deep lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon className="h-7 w-7" /> : <MenuIcon className="h-7 w-7" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden ${open ? "block" : "hidden"} border-t border-navy/10 bg-white`}>
        <nav className="container-px flex flex-col gap-1 py-4" aria-label="Mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium text-navy/90 transition-colors hover:bg-cream hover:text-ocean"
            >
              {link.label}
            </a>
          ))}
          <a
            href={telHref}
            className="rounded-lg px-3 py-3 text-base font-semibold text-navy-deep"
          >
            Call {siteConfig.phone}
          </a>
          <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-2 w-full">
            Free Quote
          </a>
        </nav>
      </div>
    </header>
  );
}
