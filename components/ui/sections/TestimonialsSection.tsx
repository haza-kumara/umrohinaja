"use client";

import { useState } from "react";

const testimonials = [
  {
    name: "Hj. Fatimah Zahra",
    location: "Jakarta Selatan",
    rating: 5,
    text: "Alhamdulillah, perjalanan umroh bersama Umrohinaja sangat berkesan. Pelayanan prima dari awal hingga akhir. Pembimbing kami, Ustaz Ahmad, sangat sabar dan berpengetahuan luas.",
    package: "Paket Bussiness",
    initials: "FZ",
    bg: "#1F4D3A",
  },
  {
    name: "Bpk. Muhammad Rizky",
    location: "Surabaya",
    rating: 5,
    text: "Ini umroh kedua saya, dan pertama kalinya bersama Umrohinaja. Perbedaannya sangat terasa! Hotel lebih dekat, makanan lebih baik, dan pembimbing lebih profesional.",
    package: "Paket VIP",
    initials: "MR",
    bg: "#2F6B52",
  },
  {
    name: "Ibu Siti Rahayu",
    location: "Bandung",
    rating: 5,
    text: "Sebagai ibu yang pertama kali umroh, saya sangat terbantu dengan pelayanan Umrohinaja yang detail dan penuh perhatian. Terima kasih telah membuat ibadah saya begitu lancar.",
    package: "Paket Reguler",
    initials: "SR",
    bg: "#3A8464",
  },
  {
    name: "Ust. Ahmad Fauzi",
    location: "Yogyakarta",
    rating: 5,
    text: "Saya rekomendasikan Umrohinaja kepada seluruh jamaah di masjid kami. Amanah, profesional, dan harga sesuai kualitas. Sudah 3 keluarga dari masjid kami bergabung.",
    package: "Paket Bussiness",
    initials: "AF",
    bg: "#1F4D3A",
  },
  {
    name: "Keluarga Santoso",
    location: "Semarang",
    rating: 5,
    text: "Kami berangkat sekeluarga 5 orang, dan semuanya terlayani dengan sangat baik. Koordinasi antara tim di Indonesia dan pemandu di Makkah sangat solid.",
    package: "Paket VIP",
    initials: "KS",
    bg: "#2F6B52",
  },
  {
    name: "Ibu Dewi Lestari",
    location: "Medan",
    rating: 5,
    text: "Proses pendaftaran mudah, dokumen diurus semua, manasik lengkap. Saat di Tanah Suci, tim selalu siap 24 jam. Insya Allah ingin kembali lagi bersama Umrohinaja.",
    package: "Paket Reguler",
    initials: "DL",
    bg: "#3A8464",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const visible = testimonials.slice(active, active + 3);

  const prev = () => setActive((a) => Math.max(0, a - 1));
  const next = () => setActive((a) => Math.min(testimonials.length - 3, a + 1));

  return (
    <section id="testimoni" style={{ padding: "100px 0", background: "var(--cream)" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 56, flexWrap: "wrap", gap: 20 }}>
          <div>
            <span style={{
              display: "inline-block",
              background: "rgba(31,77,58,0.08)", color: "var(--green-dark)",
              fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase",
              padding: "6px 16px", borderRadius: 100, marginBottom: 16,
            }}>
              Testimoni Jamaah
            </span>
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700,
              color: "var(--green-dark)", lineHeight: 1.2,
            }}>
              Apa Kata Jamaah Kami?
            </h2>
          </div>

          {/* Rating summary */}
          <div style={{
            background: "var(--green-dark)", borderRadius: 20,
            padding: "20px 28px", textAlign: "center",
          }}>
            <div style={{ fontSize: 40, fontWeight: 800, color: "var(--yellow)", lineHeight: 1 }}>4.9</div>
            <div style={{ display: "flex", gap: 2, justifyContent: "center", margin: "6px 0" }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#F8E9A1">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.6)" }}>5.000+ Ulasan</div>
          </div>
        </div>

        {/* Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 20,
          marginBottom: 36,
        }}>
          {visible.map((t, i) => (
            <div
              key={active + i}
              style={{
                background: "#fff",
                borderRadius: 20, padding: "28px 24px",
                border: "1px solid rgba(31,77,58,0.06)",
                boxShadow: "var(--shadow-soft)",
                display: "flex", flexDirection: "column", gap: 16,
              }}
            >
              {/* Stars */}
              <div style={{ display: "flex", gap: 3 }}>
                {Array.from({ length: t.rating }).map((_, j) => (
                  <svg key={j} width="14" height="14" viewBox="0 0 24 24" fill="var(--yellow-deep)">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p style={{ fontSize: 14, color: "var(--text-mid)", lineHeight: 1.75, flex: 1, fontStyle: "italic" }}>
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Package tag */}
              <span style={{
                display: "inline-block",
                background: "rgba(31,77,58,0.07)", color: "var(--green-dark)",
                fontSize: 11, fontWeight: 600, padding: "4px 12px", borderRadius: 100,
                alignSelf: "flex-start",
              }}>
                {t.package}
              </span>

              {/* Author */}
              <div style={{ display: "flex", alignItems: "center", gap: 12, borderTop: "1px solid rgba(31,77,58,0.06)", paddingTop: 16 }}>
                <div style={{
                  width: 42, height: 42, borderRadius: "50%",
                  background: t.bg, color: "#fff",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 13, fontWeight: 700, flexShrink: 0,
                }}>
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "var(--text-dark)" }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: "var(--text-light)" }}>{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}>
          <button onClick={prev} disabled={active === 0} style={{
            width: 44, height: 44, borderRadius: "50%",
            border: "1px solid rgba(31,77,58,0.15)",
            background: active === 0 ? "#f5f5f5" : "#fff",
            cursor: active === 0 ? "not-allowed" : "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: active === 0 ? "#ccc" : "var(--green-dark)",
            transition: "var(--transition)",
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(Math.min(i, testimonials.length - 3))}
              style={{
                width: i === active ? 24 : 8, height: 8,
                borderRadius: 100,
                background: i >= active && i < active + 3 ? "var(--green-dark)" : "rgba(31,77,58,0.15)",
                border: "none", cursor: "pointer",
                transition: "var(--transition)",
                padding: 0,
              }}
            />
          ))}
          <button onClick={next} disabled={active >= testimonials.length - 3} style={{
            width: 44, height: 44, borderRadius: "50%",
            border: "1px solid rgba(31,77,58,0.15)",
            background: active >= testimonials.length - 3 ? "#f5f5f5" : "#fff",
            cursor: active >= testimonials.length - 3 ? "not-allowed" : "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: active >= testimonials.length - 3 ? "#ccc" : "var(--green-dark)",
            transition: "var(--transition)",
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
