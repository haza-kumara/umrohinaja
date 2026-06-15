"use client";

const WA_NUMBER = "6281234567890";

const packages = [
  {
    name: "Paket Reguler",
    duration: "9 Hari",
    price: "Rp 25.900.000",
    badge: null,
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
    name: "Paket Bussiness",
    duration: "12 Hari",
    price: "Rp 35.500.000",
    badge: "Paling Populer",
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
    name: "Paket VIP",
    duration: "15 Hari",
    price: "Rp 55.000.000",
    badge: "Eksklusif",
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

export default function PackagesSection() {
  return (
    <section id="paket" style={{ padding: "100px 0", background: "var(--warm-white)" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span style={{
            display: "inline-block",
            background: "rgba(31,77,58,0.08)",
            color: "var(--green-dark)",
            fontSize: 12, fontWeight: 600,
            letterSpacing: "0.1em", textTransform: "uppercase",
            padding: "6px 16px", borderRadius: 100, marginBottom: 16,
          }}>
            Pilihan Paket
          </span>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 700, color: "var(--green-dark)",
            lineHeight: 1.2, marginBottom: 16,
          }}>
            Paket Umroh Terbaik
          </h2>
          <p style={{ fontSize: 16, color: "var(--text-secondary)", maxWidth: 520, margin: "0 auto", lineHeight: 1.7 }}>
            Pilih paket yang sesuai dengan kebutuhan dan anggaran Anda. Semua paket sudah termasuk pembimbing ibadah bersertifikat.
          </p>
        </div>

        {/* Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 24,
          alignItems: "start",
        }}>
          {packages.map((pkg, i) => (
            <div
              key={i}
              style={{
                background: pkg.highlight ? "var(--green-dark)" : "#fff",
                borderRadius: 24,
                padding: "36px 28px",
                position: "relative",
                border: pkg.highlight ? "none" : "1px solid rgba(31,77,58,0.08)",
                boxShadow: pkg.highlight ? "var(--shadow-strong)" : "var(--shadow-soft)",
                transform: pkg.highlight ? "scale(1.03)" : "none",
                transition: "var(--transition)",
              }}
              className="pkg-card"
            >
              {/* Badge */}
              {pkg.badge && (
                <div style={{
                  position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)",
                  background: pkg.highlight ? "var(--yellow)" : "var(--green-dark)",
                  color: pkg.highlight ? "var(--green-dark)" : "#fff",
                  fontSize: 12, fontWeight: 700,
                  padding: "5px 18px", borderRadius: 100,
                  whiteSpace: "nowrap",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                }}>
                  ✦ {pkg.badge}
                </div>
              )}

              <div style={{ marginBottom: 8 }}>
                <span style={{
                  fontSize: 12, fontWeight: 600, letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: pkg.highlight ? "rgba(248,233,161,0.7)" : "var(--text-light)",
                }}>
                  {pkg.duration}
                </span>
              </div>

              <h3 style={{
                fontFamily: "var(--font-display)",
                fontSize: 26, fontWeight: 700,
                color: pkg.highlight ? "#fff" : "var(--green-dark)",
                marginBottom: 6,
              }}>
                {pkg.name}
              </h3>

              <div style={{
                fontSize: "clamp(22px, 3vw, 30px)",
                fontWeight: 800,
                color: pkg.highlight ? "var(--yellow)" : "var(--green-dark)",
                marginBottom: 28,
              }}>
                {pkg.price}
                <span style={{
                  fontSize: 13, fontWeight: 400,
                  color: pkg.highlight ? "rgba(255,255,255,0.5)" : "var(--text-light)",
                  marginLeft: 6,
                }}>
                  / orang
                </span>
              </div>

              {/* Divider */}
              <div style={{
                height: 1,
                background: pkg.highlight ? "rgba(255,255,255,0.12)" : "rgba(31,77,58,0.08)",
                marginBottom: 24,
              }} />

              {/* Includes */}
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px 0", display: "flex", flexDirection: "column", gap: 12 }}>
                {pkg.includes.map((item, j) => (
                  <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <svg
                      width="16" height="16" viewBox="0 0 24 24"
                      fill="none" stroke="currentColor" strokeWidth="2.5"
                      style={{
                        color: pkg.highlight ? "var(--yellow)" : "var(--green-light)",
                        flexShrink: 0, marginTop: 2,
                      }}
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span style={{
                      fontSize: 13, lineHeight: 1.6,
                      color: pkg.highlight ? "rgba(255,255,255,0.8)" : "var(--text-mid)",
                    }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={`https://wa.me/${WA_NUMBER}?text=Halo%2C+saya+tertarik+dengan+${encodeURIComponent(pkg.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                  width: "100%",
                  background: pkg.highlight ? "var(--yellow)" : "var(--green-dark)",
                  color: pkg.highlight ? "var(--green-dark)" : "#fff",
                  fontSize: 14, fontWeight: 700,
                  padding: "14px 0", borderRadius: 100,
                  transition: "var(--transition)",
                }}
              >
                Pesan Sekarang
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Note */}
        <p style={{ textAlign: "center", fontSize: 13, color: "var(--text-light)", marginTop: 32 }}>
          * Harga dapat berubah sewaktu-waktu. Hubungi kami untuk info terbaru dan promo spesial.
        </p>
      </div>

      <style>{`
        .pkg-card:hover {
          transform: translateY(-6px) !important;
          box-shadow: var(--shadow-strong) !important;
        }
      `}</style>
    </section>
  );
}
