"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// ─── Constants ──────────────────────────────────────────────────────────────
const WA_NUMBER = "6281234567890";

const NAV_LINKS = [
  { href: "#hero",     label: "Beranda"  },
  { href: "#paket",    label: "Paket"    },
  { href: "#testimoni",label: "Testimoni"},
  { href: "#faq",      label: "FAQ"      },
] as const;

// ─── Sub-components ──────────────────────────────────────────────────────────
function Logo({ scrolled }: { scrolled: boolean }) {
  return (
    <a
      href="#"
      className={cn(
        "flex items-center gap-2.5 shrink-0 font-bold text-xl transition-colors duration-300",
        scrolled ? "text-[var(--green-dark)]" : "text-white"
      )}
      style={{ fontFamily: "var(--font-display)" }}
    >
      <span className="w-9 h-9 rounded-[9px] overflow-hidden shrink-0">
        <Image
          src="/icons/umrohinaja.jpg"
          alt="Umrohinaja logo"
          width={36}
          height={36}
          className="w-full h-full object-cover"
          priority
        />
      </span>
      Umrohinaja
    </a>
  );
}


function WhatsAppIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function ConsultButton() {
  return (
    <a
      href={`https://wa.me/${WA_NUMBER}?text=Konsultasi+Umroh`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 bg-[#25D366] text-white text-[13px] font-semibold px-[18px] py-[9px] rounded-full whitespace-nowrap transition-all duration-300 shadow-[0_3px_12px_rgba(37,211,102,0.35)] hover:scale-105 hover:shadow-[0_0_25px_rgba(37,211,102,0.7)]"
    >
      <WhatsAppIcon />
      Konsultasi
    </a>
  );
}

function HamburgerButton({
  open,
  scrolled,
  onToggle,
}: {
  open: boolean;
  scrolled: boolean;
  onToggle: () => void;
}) {
  const barColor = scrolled ? "bg-[var(--green-dark)]" : "bg-white";

  return (
    <button
      onClick={onToggle}
      aria-label="Toggle menu"
      className="md:hidden flex flex-col gap-[5px] p-1.5 cursor-pointer border-none bg-transparent"
    >
      {([0, 1, 2] as const).map((i) => (
        <span
          key={i}
          className={cn(
            "block w-6 h-0.5 rounded transition-all duration-300",
            barColor,
            open && i === 0 && "translate-y-[7px] rotate-45",
            open && i === 2 && "-translate-y-[7px] -rotate-45",
            open && i === 1 && "opacity-0"
          )}
        />
      ))}
    </button>
  );
}

function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <div className="md:hidden bg-[rgba(255,253,245,0.98)] backdrop-blur-lg px-5 pb-5 pt-3 border-b border-[rgba(31,77,58,0.08)] shadow-[0_12px_40px_rgba(31,77,58,0.1)]">
      <nav className="flex flex-col">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="text-[15px] font-medium text-[var(--text-mid)] px-4 py-3 rounded-xl hover:bg-[rgba(31,77,58,0.05)] transition-colors"
          >
            {link.label}
          </a>
        ))}

        <a
          href={`https://wa.me/${WA_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
          className="mt-2.5 flex items-center justify-center gap-2 bg-[#25D366] text-white text-[14px] font-semibold px-5 py-3 rounded-full"
        >
          <WhatsAppIcon />
          Konsultasi WhatsApp
        </a>
      </nav>
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-[1000] transition-all duration-300",
          scrolled && "bg-[rgba(255,253,245,0.97)] backdrop-blur-xl shadow-[0_2px_20px_rgba(31,77,58,0.1)]"
        )}
      >
        <div className="max-w-[1180px] mx-auto px-5">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Logo scrolled={scrolled} />

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-0.5">
              {NAV_LINKS.map((link) => (
                <Button
                  key={link.href}
                  variant="ghost"
                  size="sm"
                  asChild
                  className={cn(
                    "font-medium text-[15px] px-3.5 bg-transparent",
                    scrolled
                      ? "text-[var(--text-mid)] hover:bg-[rgba(31,77,58,0.06)] hover:text-[#1F4D3A]"
                      : "text-white/85 hover:bg-white/10 hover:text-white"
                  )}
                >
                  <a href={link.href}>{link.label}</a>
                </Button>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex">
              <ConsultButton />
            </div>

            {/* Mobile hamburger */}
            <HamburgerButton
              open={menuOpen}
              scrolled={scrolled}
              onToggle={() => setMenuOpen((prev) => !prev)}
            />
          </div>
        </div>

        {/* Mobile menu */}
        <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      </nav>
    </>
  );
}
