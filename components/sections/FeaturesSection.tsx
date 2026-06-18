import { ReactNode } from "react";

// ─── Types ───────────────────────────────────────────────────────────────────
interface Feature {
  icon: ReactNode;
  title: string;
  desc: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────
const FEATURES: Feature[] = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: "Hotel Premium Strategis",
    desc:   "Akomodasi pilihan di area bintang 4–5 dengan jarak tempuh singkat ke Masjidil Haram dan Masjid Nabawi.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Jadwal Ibadah Terstruktur",
    desc:   "Setiap hari terpandu dengan jadwal yang jelas, sehingga Anda tidak melewatkan satu pun momen berharga.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "Pembimbing Bersertifikat",
    desc:   "Ustaz dan ustazah kami memiliki sertifikasi resmi Kemenag dan pengalaman membimbing ribuan jamaah.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.8 13.5a19.79 19.79 0 01-3.07-8.67A2 2 0 012.68 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 9.9a16 16 0 006.17 6.17l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
    title: "Layanan 24 Jam",
    desc:   "Tim kami siap mendampingi Anda selama di Tanah Suci, mulai dari keberangkatan hingga kepulangan ke Indonesia.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Asuransi Jiwa & Kesehatan",
    desc:   "Setiap jamaah dilindungi asuransi perjalanan internasional untuk ketenangan hati Anda dan keluarga.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "Manasik Online & Offline",
    desc:   "Persiapan ibadah yang matang melalui bimbingan manasik sebelum keberangkatan secara daring dan luring.",
  },
];

// ─── Sub-components ──────────────────────────────────────────────────────────
function SectionHeader() {
  return (
    <div className="text-center mb-16">
      <span className="inline-block bg-[rgba(31,77,58,0.08)] text-[var(--green-dark)] text-[12px] font-semibold tracking-[0.1em] uppercase px-4 py-1.5 rounded-full mb-4">
        Mengapa Kami?
      </span>
      <h2
        className="text-[clamp(28px,4vw,44px)] font-bold text-[var(--green-dark)] leading-[1.2] mb-4"
        style={{ fontFamily: "var(--font-display)" }}
      >
        Keunggulan Yang Kami Tawarkan
      </h2>
      <p className="text-[16px] text-[var(--text-secondary)] max-w-[560px] mx-auto leading-[1.7]">
        Kami berkomitmen memberikan pengalaman ibadah terbaik dengan standar layanan premium yang terjangkau.
      </p>
    </div>
  );
}

function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <div className="group bg-white rounded-[20px] p-8 border border-[rgba(31,77,58,0.06)] shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-medium)] hover:border-[rgba(31,77,58,0.12)]">
      <div className="w-14 h-14 bg-[rgba(31,77,58,0.08)] rounded-2xl flex items-center justify-center text-[var(--green-dark)] mb-5 transition-all duration-300 group-hover:bg-[var(--green-dark)] group-hover:text-white">
        {feature.icon}
      </div>
      <h3 className="text-[17px] font-bold text-[var(--text-dark)] mb-2.5">
        {feature.title}
      </h3>
      <p className="text-[14px] text-[var(--text-secondary)] leading-[1.7]">
        {feature.desc}
      </p>
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────
export default function FeaturesSection() {
  return (
    <section id="keunggulan" className="py-[100px] bg-[var(--cream)]">
      <div className="max-w-[1180px] mx-auto px-6">
        <SectionHeader />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
