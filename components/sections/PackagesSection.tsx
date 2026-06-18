"use client";

import { cn } from "@/lib/utils";

// ─── Constants ──────────────────────────────────────────────────────────────
const WA_NUMBER = "6281234567890";

// ─── Types ───────────────────────────────────────────────────────────────────
interface Package {
  name: string;
  duration: string;
  price: string;
  badge: string | null;
  highlight: boolean;
  includes: string[];
}

// ─── Data ────────────────────────────────────────────────────────────────────
const PACKAGES: Package[] = [
  {
    name:      "Paket Reguler",
    duration:  "9 Hari",
    price:     "Rp 25.900.000",
    badge:     null,
    highlight: false,
    includes: [
      "Tiket PP Garuda Indonesia",
      "Hotel Bintang 4 (Makkah & Madinah)",
      "Visa Umroh & Handling",
      "Makan 3x Sehari",
      "Pembimbing Umroh Bersertifikat",
      "Perlengkapan Umroh Lengkap",
      "Asuransi Perjalanan",
      "Manasik Online & Offline",
    ],
  },
  {
    name:      "Paket Business",
    duration:  "12 Hari",
    price:     "Rp 35.500.000",
    badge:     "Paling Populer",
    highlight: true,
    includes: [
      "Tiket PP Saudia Airlines",
      "Hotel Bintang 5 (Makkah & Madinah)",
      "Visa Umroh & Handling",
      "Makan 3x Sehari (Prasmanan)",
      "Pembimbing Umroh Senior",
      "Perlengkapan Umroh Premium",
      "Asuransi Jiwa & Kesehatan",
      "Manasik Eksklusif + Modul",
      "Ziarah Lengkap Makkah–Madinah",
      "Airport Fast Track Service",
    ],
  },
  {
    name:      "Paket VIP",
    duration:  "15 Hari",
    price:     "Rp 55.000.000",
    badge:     "Eksklusif",
    highlight: false,
    includes: [
      "Tiket Business Class",
      "Hotel Bintang 5 (View Kabah)",
      "Visa Umroh & Handling",
      "Makan 3x Sehari + Snack",
      "Pembimbing Pribadi Dedicated",
      "Koper Eksklusif & Hamper",
      "Asuransi Komprehensif",
      "Manasik Private Session",
      "Ziarah Lengkap + Tour Thaif",
      "Concierge Service 24 Jam",
      "Group Size Maks 25 Orang",
    ],
  },
];

// ─── Sub-components ──────────────────────────────────────────────────────────
function CheckIcon({ highlight }: { highlight: boolean }) {
  return (
    <svg
      width="16" height="16" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2.5"
      className={cn(
        "shrink-0 mt-0.5",
        highlight ? "text-[var(--yellow)]" : "text-[var(--green-light)]"
      )}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function PackageCard({ pkg }: { pkg: Package }) {
  const waText = `Halo%2C+saya+tertarik+dengan+${encodeURIComponent(pkg.name)}`;

  return (
    <div
      className={cn(
        "relative rounded-[24px] p-9 transition-all duration-300 hover:-translate-y-1.5",
        pkg.highlight
          ? "bg-[var(--green-dark)] shadow-[var(--shadow-strong)] scale-[1.03] hover:shadow-[0_20px_70px_rgba(31,77,58,0.25)]"
          : "bg-white border border-[rgba(31,77,58,0.08)] shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-strong)]"
      )}
    >
      {/* Popular badge */}
      {pkg.badge && (
        <div
          className={cn(
            "absolute -top-3.5 left-1/2 -translate-x-1/2 text-[12px] font-bold px-[18px] py-1.5 rounded-full whitespace-nowrap shadow-[0_4px_12px_rgba(0,0,0,0.1)]",
            pkg.highlight
              ? "bg-[var(--yellow)] text-[var(--green-dark)]"
              : "bg-[var(--green-dark)] text-white"
          )}
        >
          ✦ {pkg.badge}
        </div>
      )}

      {/* Duration */}
      <p className={cn(
        "text-[12px] font-semibold tracking-[0.08em] uppercase mb-2",
        pkg.highlight ? "text-[rgba(248,233,161,0.7)]" : "text-[var(--text-light)]"
      )}>
        {pkg.duration}
      </p>

      {/* Name */}
      <h3
        className={cn(
          "text-[26px] font-bold mb-1.5",
          pkg.highlight ? "text-white" : "text-[var(--green-dark)]"
        )}
        style={{ fontFamily: "var(--font-display)" }}
      >
        {pkg.name}
      </h3>

      {/* Price */}
      <div className={cn(
        "text-[clamp(22px,3vw,30px)] font-extrabold mb-7",
        pkg.highlight ? "text-[var(--yellow)]" : "text-[var(--green-dark)]"
      )}>
        {pkg.price}
        <span className={cn(
          "text-[13px] font-normal ml-1.5",
          pkg.highlight ? "text-white/50" : "text-[var(--text-light)]"
        )}>
          / orang
        </span>
      </div>

      {/* Divider */}
      <div className={cn(
        "h-px mb-6",
        pkg.highlight ? "bg-white/[0.12]" : "bg-[rgba(31,77,58,0.08)]"
      )} />

      {/* Includes list */}
      <ul className="flex flex-col gap-3 mb-8 p-0 list-none">
        {pkg.includes.map((item) => (
          <li key={item} className="flex items-start gap-2.5">
            <CheckIcon highlight={pkg.highlight} />
            <span className={cn(
              "text-[13px] leading-[1.6]",
              pkg.highlight ? "text-white/80" : "text-[var(--text-mid)]"
            )}>
              {item}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href={`https://wa.me/${WA_NUMBER}?text=${waText}`}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "flex items-center justify-center gap-2 w-full text-[14px] font-bold py-3.5 rounded-full transition-all hover:opacity-90 hover:scale-[1.02]",
          pkg.highlight
            ? "bg-[var(--yellow)] text-[var(--green-dark)]"
            : "bg-[var(--green-dark)] text-white"
        )}
      >
        Pesan Sekarang
        <ArrowIcon />
      </a>
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────
export default function PackagesSection() {
  return (
    <section id="paket" className="py-[100px] bg-[var(--warm-white)]">
      <div className="max-w-[1180px] mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-[rgba(31,77,58,0.08)] text-[var(--green-dark)] text-[12px] font-semibold tracking-[0.1em] uppercase px-4 py-1.5 rounded-full mb-4">
            Pilihan Paket
          </span>
          <h2
            className="text-[clamp(28px,4vw,44px)] font-bold text-[var(--green-dark)] leading-[1.2] mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Paket Umroh Terbaik
          </h2>
          <p className="text-[16px] text-[var(--text-secondary)] max-w-[520px] mx-auto leading-[1.7]">
            Pilih paket yang sesuai dengan kebutuhan dan anggaran Anda. Semua paket sudah termasuk pembimbing ibadah bersertifikat.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {PACKAGES.map((pkg) => (
            <PackageCard key={pkg.name} pkg={pkg} />
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-[13px] text-[var(--text-light)] mt-8">
          * Harga dapat berubah sewaktu-waktu. Hubungi kami untuk info terbaru dan promo spesial.
        </p>
      </div>
    </section>
  );
}
