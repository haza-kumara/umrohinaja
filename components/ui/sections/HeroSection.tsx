"use client";

const WA_NUMBER = "6281234567890";

export default function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(160deg, var(--green-dark) 0%, var(--green-secondary) 50%, var(--green-light) 100%)",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: 70,
      }}
    >
      {/* Decorative circles */}
      <div style={{
        position: "absolute", top: "-10%", right: "-5%",
        width: 500, height: 500, borderRadius: "50%",
        background: "rgba(255,255,255,0.04)", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "-15%", left: "-8%",
        width: 400, height: 400, borderRadius: "50%",
        background: "rgba(248,233,161,0.06)", pointerEvents: "none",
      }} />

      {/* Arabic pattern overlay */}
      <div style={{
        position: "absolute", inset: 0, opacity: 0.03,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "80px 24px", width: "100%", position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}
          className="hero-grid">
          {/* Left: text */}
          <div>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(248,233,161,0.15)", border: "1px solid rgba(248,233,161,0.3)",
              borderRadius: 100, padding: "6px 16px", marginBottom: 24,
            }}>
              <span style={{ fontSize: 12, color: "var(--yellow)", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                ✦ Terpercaya Sejak 2018
              </span>
            </div>

            <h1 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(38px, 5vw, 62px)",
              fontWeight: 700,
              lineHeight: 1.1,
              color: "#fff",
              marginBottom: 24,
            }}>
              Wujudkan Umroh <span style={{ color: "var(--yellow)", fontStyle: "italic" }}>Impian</span>{" "}
              Anda Bersama Kami
            </h1>

            <p style={{
              fontSize: 17,
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.75,
              marginBottom: 40,
              maxWidth: 480,
            }}>
              Pendampingan penuh, hotel nyaman, pembimbing berpengalaman, dan pelayanan terbaik untuk perjalanan ibadah yang lebih tenang dan bermakna.
            </p>

            {/* Stats row */}
            <div style={{ display: "flex", gap: 32, marginBottom: 40, flexWrap: "wrap" }}>
              {[
                { value: "5.000+", label: "Jamaah Puas" },
                { value: "6 Tahun", label: "Pengalaman" },
                { value: "98%", label: "Kepuasan" },
              ].map((s) => (
                <div key={s.label}>
                  <div style={{ fontSize: 26, fontFamily: "var(--font-display)", fontWeight: 700, color: "var(--yellow)", lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a
                href={`https://wa.me/${WA_NUMBER}?text=Halo%2C+saya+ingin+konsultasi+paket+umroh`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 10,
                  background: "#25D366", color: "#fff",
                  fontSize: 15, fontWeight: 700,
                  padding: "14px 28px", borderRadius: 100,
                  boxShadow: "0 6px 24px rgba(37,211,102,0.4)",
                  transition: "var(--transition)",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Konsultasi Gratis
              </a>
              <a
                href="#paket"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "rgba(255,255,255,0.12)", color: "#fff",
                  fontSize: 15, fontWeight: 600,
                  padding: "14px 28px", borderRadius: 100,
                  border: "1px solid rgba(255,255,255,0.2)",
                  backdropFilter: "blur(8px)",
                  transition: "var(--transition)",
                }}
              >
                Lihat Paket
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: feature card */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }} className="hero-cards">
            {[
              { icon: "🕌", title: "Pembimbing Ibadah Bersertifikat", desc: "Dipandu ustaz berpengalaman agar ibadah Anda sah dan bermakna" },
              { icon: "🏨", title: "Hotel Dekat Masjidil Haram", desc: "Jarak walking distance ke Masjidil Haram & Masjid Nabawi" },
              { icon: "✈️", title: "Full Visa & Dokumen", desc: "Kami urus semua dokumen, Anda fokus persiapan spiritual" },
              { icon: "🛡️", title: "Asuransi Perjalanan", desc: "Perlindungan lengkap selama perjalanan umroh Anda" },
            ].map((f, i) => (
              <div
                key={i}
                style={{
                  display: "flex", alignItems: "center", gap: 16,
                  background: "rgba(255,255,255,0.08)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: 16, padding: "16px 20px",
                  transition: "var(--transition)",
                }}
              >
                <div style={{
                  width: 48, height: 48, flexShrink: 0,
                  background: "rgba(248,233,161,0.15)",
                  borderRadius: 12,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 22,
                }}>
                  {f.icon}
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#fff", marginBottom: 2 }}>{f.title}</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", lineHeight: 1.5 }}>{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: "absolute", bottom: 32, left: "50%",
          transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
          color: "rgba(255,255,255,0.4)", fontSize: 11, letterSpacing: "0.1em",
          animation: "bounce 2s infinite",
        }}>
          <span>SCROLL</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 10l5 5 5-5" />
          </svg>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .hero-cards { display: none !important; }
        }
      `}</style>
    </section>
  );
}
