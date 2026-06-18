import { FaMosque, FaHotel, FaPlane, FaShieldAlt} from "react-icons/fa";

// ─── Constants ──────────────────────────────────────────────────────────────
const WA_NUMBER = "6281234567890";

const HERO_STATS = [
  { value: "5.000+", label: "Jamaah Puas" },
  { value: "6 Tahun", label: "Pengalaman"  },
  { value: "98%",    label: "Kepuasan"    },
];

const FEATURE_CARDS = [
  {
    icon: FaMosque,
    title: "Pembimbing Ibadah Bersertifikat",
    desc:  "Dipandu ustaz berpengalaman agar ibadah Anda sah dan bermakna",
  },
  {
    icon: FaHotel,
    title: "Hotel Dekat Masjidil Haram",
    desc:  "Jarak walking distance ke Masjidil Haram & Masjid Nabawi",
  },
  {
    icon: FaPlane,
    title: "Full Visa & Dokumen",
    desc:  "Kami urus semua dokumen, Anda fokus persiapan spiritual",
  },
  {
    icon: FaShieldAlt,
    title: "Asuransi Perjalanan",
    desc:  "Perlindungan lengkap selama perjalanan umroh Anda",
  },
];

// ─── Sub-components ──────────────────────────────────────────────────────────
function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function ArrowIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────
export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-[70px]"
      style={{
        background:
          "linear-gradient(160deg, var(--green-dark) 0%, var(--green-secondary) 50%, var(--green-light) 100%)",
      }}
    >
      {/* Decorative blobs */}
      <div className="absolute -top-[10%] -right-[5%] w-[500px] h-[500px] rounded-full bg-white/[0.04] pointer-events-none" />
      <div className="absolute -bottom-[15%] -left-[8%] w-[400px] h-[400px] rounded-full bg-[rgba(248,233,161,0.06)] pointer-events-none" />

      {/* Arabic geometric pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="max-w-[1180px] mx-auto px-6 py-20 w-full relative z-[1]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* ── Left column: copy ── */}
          <div>
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 bg-[rgba(248,233,161,0.15)] border border-[rgba(248,233,161,0.3)] rounded-full px-4 py-1.5 mb-6">
              <span className="text-[12px] text-[var(--yellow)] font-semibold tracking-[0.08em] uppercase">
                ✦ Terpercaya Sejak 2018
              </span>
            </div>

            {/* Heading */}
            <h1
              className="text-[clamp(38px,5vw,62px)] font-bold leading-[1.1] text-white mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Wujudkan Umroh{" "}
              <span className="text-[var(--yellow)] italic">Impian</span>{" "}
              Anda Bersama Kami
            </h1>

            {/* Sub-copy */}
            <p className="text-[17px] text-white/75 leading-[1.75] mb-10 max-w-[480px]">
              Pendampingan penuh, hotel nyaman, pembimbing berpengalaman, dan
              pelayanan terbaik untuk perjalanan ibadah yang lebih tenang dan
              bermakna.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8 mb-10">
              {HERO_STATS.map((stat) => (
                <div key={stat.label}>
                  <div
                    className="text-[26px] font-bold text-[var(--yellow)] leading-none"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-[13px] text-white/60 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3.5">
              <a
                href={`https://wa.me/${WA_NUMBER}?text=Halo%2C+saya+ingin+konsultasi+paket+umroh`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#25D366] text-white text-[15px] font-bold px-7 py-3.5 rounded-full shadow-[0_6px_24px_rgba(37,211,102,0.4)] transition-all hover:scale-105 hover:shadow-[0_6px_30px_rgba(37,211,102,0.6)]"
              >
                <WhatsAppIcon size={18} />
                Konsultasi Gratis
              </a>

              <a
                href="#paket"
                className="inline-flex items-center gap-2 bg-white/[0.12] text-white text-[15px] font-semibold px-7 py-3.5 rounded-full border border-white/20 backdrop-blur-sm transition-all hover:bg-white/20"
              >
                Lihat Paket
                <ArrowIcon size={16} />
              </a>
            </div>
          </div>

          {/* ── Right column: feature cards ── */}
          <div className="hidden md:flex flex-col gap-4">
  {FEATURE_CARDS.map((card) => {
    const Icon = card.icon;

    return (
      <div
        key={card.title}
        className="flex items-center gap-4 bg-white/[0.08] backdrop-blur-xl border border-white/[0.12] rounded-2xl px-5 py-4 transition-all hover:bg-white/[0.12]"
      >
        <div className="w-12 h-12 shrink-0 bg-[rgba(248,233,161,0.15)] rounded-xl flex items-center justify-center">
          <Icon className="text-[22px] text-[var(--yellow)]" />
        </div>

        <div>
          <div className="text-[14px] font-semibold text-white mb-0.5">
            
            {card.title}
          </div>

          <div className="text-[12px] text-white/60 leading-[1.5]">
            {card.desc}
          </div>
        </div>
      </div>
        );
          })}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/40 text-[11px] tracking-[0.1em] animate-bounce">
          <span>SCROLL</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 10l5 5 5-5" />
          </svg>
        </div>
      </div>
    </section>
  );
}
