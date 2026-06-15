export default function FeaturesSection() {
  const features = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
      title: "Hotel Premium Strategis",
      desc: "Akomodasi pilihan di area bintang 4–5 dengan jarak tempuh singkat ke Masjidil Haram dan Masjid Nabawi.",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      title: "Jadwal Ibadah Terstruktur",
      desc: "Setiap hari terpandu dengan jadwal yang jelas, sehingga Anda tidak melewatkan satu pun momen berharga.",
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
      desc: "Ustaz dan ustazah kami memiliki sertifikasi resmi Kemenag dan pengalaman membimbing ribuan jamaah.",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.8 13.5a19.79 19.79 0 01-3.07-8.67A2 2 0 012.68 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 9.9a16 16 0 006.17 6.17l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
        </svg>
      ),
      title: "Layanan 24 Jam",
      desc: "Tim kami siap mendampingi Anda selama di Tanah Suci, mulai dari keberangkatan hingga kepulangan ke Indonesia.",
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: "Asuransi Jiwa & Kesehatan",
      desc: "Setiap jamaah dilindungi asuransi perjalanan internasional untuk ketenangan hati Anda dan keluarga.",
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
      desc: "Persiapan ibadah yang matang melalui bimbingan manasik sebelum keberangkatan secara daring dan luring.",
    },
  ];

  return (
    <section id="keunggulan" style={{ padding: "100px 0", background: "var(--cream)" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span style={{
            display: "inline-block",
            background: "rgba(31,77,58,0.08)",
            color: "var(--green-dark)",
            fontSize: 12, fontWeight: 600,
            letterSpacing: "0.1em", textTransform: "uppercase",
            padding: "6px 16px", borderRadius: 100,
            marginBottom: 16,
          }}>
            Mengapa Kami?
          </span>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 700,
            color: "var(--green-dark)",
            lineHeight: 1.2,
            marginBottom: 16,
          }}>
            Keunggulan Yang Kami Tawarkan
          </h2>
          <p style={{ fontSize: 16, color: "var(--text-secondary)", maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>
            Kami berkomitmen memberikan pengalaman ibadah terbaik dengan standar layanan premium yang terjangkau.
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 24,
        }}>
          {features.map((f, i) => (
            <div
              key={i}
              className="feature-card"
              style={{
                background: "#fff",
                borderRadius: 20,
                padding: "32px 28px",
                border: "1px solid rgba(31,77,58,0.06)",
                boxShadow: "var(--shadow-soft)",
                transition: "var(--transition)",
              }}
            >
              <div style={{
                width: 56, height: 56,
                background: "rgba(31,77,58,0.08)",
                borderRadius: 16,
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "var(--green-dark)",
                marginBottom: 20,
                transition: "var(--transition)",
              }}>
                {f.icon}
              </div>
              <h3 style={{
                fontSize: 17, fontWeight: 700,
                color: "var(--text-dark)",
                marginBottom: 10,
              }}>
                {f.title}
              </h3>
              <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.7 }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .feature-card:hover {
          box-shadow: var(--shadow-medium);
          transform: translateY(-4px);
          border-color: rgba(31,77,58,0.12);
        }
        .feature-card:hover > div:first-child {
          background: var(--green-dark);
          color: #fff;
        }
      `}</style>
    </section>
  );
}
