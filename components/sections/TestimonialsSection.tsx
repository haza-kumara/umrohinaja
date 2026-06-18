"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

// ─── Types ───────────────────────────────────────────────────────────────────
interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
  package: string;
  initials: string;
  avatarBg: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────
const TESTIMONIALS: Testimonial[] = [
  {
    name:     "Hj. Fatimah Zahra",
    location: "Jakarta Selatan",
    rating:   5,
    text:     "Alhamdulillah, perjalanan umroh bersama Umrohinaja sangat berkesan. Pelayanan prima dari awal hingga akhir. Pembimbing kami, Ustaz Ahmad, sangat sabar dan berpengetahuan luas.",
    package:  "Paket Business",
    initials: "FZ",
    avatarBg: "#1F4D3A",
  },
  {
    name:     "Bpk. Muhammad Rizky",
    location: "Surabaya",
    rating:   5,
    text:     "Ini umroh kedua saya, dan pertama kalinya bersama Umrohinaja. Perbedaannya sangat terasa! Hotel lebih dekat, makanan lebih baik, dan pembimbing lebih profesional.",
    package:  "Paket VIP",
    initials: "MR",
    avatarBg: "#2F6B52",
  },
  {
    name:     "Ibu Siti Rahayu",
    location: "Bandung",
    rating:   5,
    text:     "Sebagai ibu yang pertama kali umroh, saya sangat terbantu dengan pelayanan Umrohinaja yang detail dan penuh perhatian. Terima kasih telah membuat ibadah saya begitu lancar.",
    package:  "Paket Reguler",
    initials: "SR",
    avatarBg: "#3A8464",
  },
  {
    name:     "Ust. Ahmad Fauzi",
    location: "Yogyakarta",
    rating:   5,
    text:     "Saya rekomendasikan Umrohinaja kepada seluruh jamaah di masjid kami. Amanah, profesional, dan harga sesuai kualitas. Sudah 3 keluarga dari masjid kami bergabung.",
    package:  "Paket Business",
    initials: "AF",
    avatarBg: "#1F4D3A",
  },
  {
    name:     "Keluarga Santoso",
    location: "Semarang",
    rating:   5,
    text:     "Kami berangkat sekeluarga 5 orang, dan semuanya terlayani dengan sangat baik. Koordinasi antara tim di Indonesia dan pemandu di Makkah sangat solid.",
    package:  "Paket VIP",
    initials: "KS",
    avatarBg: "#2F6B52",
  },
  {
    name:     "Ibu Dewi Lestari",
    location: "Medan",
    rating:   5,
    text:     "Proses pendaftaran mudah, dokumen diurus semua, manasik lengkap. Saat di Tanah Suci, tim selalu siap 24 jam. Insya Allah ingin kembali lagi bersama Umrohinaja.",
    package:  "Paket Reguler",
    initials: "DL",
    avatarBg: "#3A8464",
  },
];

const CARDS_PER_PAGE = 3;

// ─── Sub-components ──────────────────────────────────────────────────────────
function StarIcon({ filled = true }: { filled?: boolean }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill={filled ? "var(--yellow-deep)" : "none"}>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function RatingSummary() {
  return (
    <div className="bg-[var(--green-dark)] rounded-[20px] px-7 py-5 text-center">
      <div className="text-[40px] font-extrabold text-[var(--yellow)] leading-none">4.9</div>
      <div className="flex justify-center gap-0.5 my-1.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon key={i} />
        ))}
      </div>
      <div className="text-[11px] text-white/60">5.000+ Ulasan</div>
    </div>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-white rounded-[20px] p-7 border border-[rgba(31,77,58,0.06)] shadow-[var(--shadow-soft)] flex flex-col gap-4">
      {/* Stars */}
      <div className="flex gap-0.5">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <StarIcon key={i} />
        ))}
      </div>

      {/* Quote */}
      <p className="text-[14px] text-[var(--text-mid)] leading-[1.75] italic flex-1">
        &ldquo;{testimonial.text}&rdquo;
      </p>

      {/* Package tag */}
      <span className="self-start inline-block bg-[rgba(31,77,58,0.07)] text-[var(--green-dark)] text-[11px] font-semibold px-3 py-1 rounded-full">
        {testimonial.package}
      </span>

      {/* Author */}
      <div className="flex items-center gap-3 border-t border-[rgba(31,77,58,0.06)] pt-4">
        <div
          className="w-[42px] h-[42px] rounded-full flex items-center justify-center text-[13px] font-bold text-white shrink-0"
          style={{ background: testimonial.avatarBg }}
        >
          {testimonial.initials}
        </div>
        <div>
          <div className="text-[14px] font-bold text-[var(--text-dark)]">{testimonial.name}</div>
          <div className="text-[12px] text-[var(--text-light)]">{testimonial.location}</div>
        </div>
      </div>
    </div>
  );
}

function NavButton({
  onClick,
  disabled,
  children,
}: {
  onClick: () => void;
  disabled: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "w-11 h-11 rounded-full border flex items-center justify-center transition-all",
        disabled
          ? "border-transparent bg-gray-100 text-gray-300 cursor-not-allowed"
          : "border-[rgba(31,77,58,0.15)] bg-white text-[var(--green-dark)] hover:bg-[rgba(31,77,58,0.06)]"
      )}
    >
      {children}
    </button>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────
export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const maxIndex = TESTIMONIALS.length - CARDS_PER_PAGE;
  const visibleItems = TESTIMONIALS.slice(activeIndex, activeIndex + CARDS_PER_PAGE);

  const handlePrev = () => setActiveIndex((i) => Math.max(0, i - 1));
  const handleNext = () => setActiveIndex((i) => Math.min(maxIndex, i + 1));

  return (
    <section id="testimoni" className="py-[100px] bg-[var(--cream)]">
      <div className="max-w-[1180px] mx-auto px-6">

        {/* Header row */}
        <div className="flex items-end justify-between flex-wrap gap-5 mb-14">
          <div>
            <span className="inline-block bg-[rgba(31,77,58,0.08)] text-[var(--green-dark)] text-[12px] font-semibold tracking-[0.1em] uppercase px-4 py-1.5 rounded-full mb-4">
              Testimoni Jamaah
            </span>
            <h2
              className="text-[clamp(28px,4vw,44px)] font-bold text-[var(--green-dark)] leading-[1.2]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Apa Kata Jamaah Kami?
            </h2>
          </div>
          <RatingSummary />
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-9">
          {visibleItems.map((t, i) => (
            <TestimonialCard key={activeIndex + i} testimonial={t} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-3">
          <NavButton onClick={handlePrev} disabled={activeIndex === 0}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </NavButton>

          {/* Dot indicators */}
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(Math.min(i, maxIndex))}
                className={cn(
                  "h-2 rounded-full border-none cursor-pointer transition-all duration-300",
                  i >= activeIndex && i < activeIndex + CARDS_PER_PAGE
                    ? "w-6 bg-[var(--green-dark)]"
                    : "w-2 bg-[rgba(31,77,58,0.15)]"
                )}
              />
            ))}
          </div>

          <NavButton onClick={handleNext} disabled={activeIndex >= maxIndex}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </NavButton>
        </div>
      </div>
    </section>
  );
}
