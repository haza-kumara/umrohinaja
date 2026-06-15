"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Apa saja yang termasuk dalam paket umroh Umrohinaja?",
    a: "Setiap paket kami sudah mencakup tiket pesawat PP, akomodasi hotel sesuai paket, transportasi selama di Arab Saudi, konsumsi 3x sehari, visa umroh dan biaya handling, perlengkapan umroh, pembimbing ibadah bersertifikat, dan asuransi perjalanan. Detail lengkap tersedia di halaman paket masing-masing.",
  },
  {
    q: "Bagaimana cara mendaftar paket umroh?",
    a: "Proses pendaftaran sangat mudah: (1) Pilih paket yang sesuai, (2) Hubungi kami via WhatsApp atau datang ke kantor, (3) Lengkapi dokumen persyaratan, (4) Bayar DP minimal 30%, (5) Ikuti manasik umroh yang kami selenggarakan. Tim kami akan memandu Anda di setiap langkah.",
  },
  {
    q: "Berapa lama proses pengurusan visa umroh?",
    a: "Proses pengurusan visa umroh biasanya membutuhkan waktu 7–14 hari kerja setelah dokumen lengkap diterima. Kami sarankan mendaftar minimal 2 bulan sebelum jadwal keberangkatan untuk memastikan semua persiapan berjalan lancar.",
  },
  {
    q: "Apakah ada layanan khusus untuk jamaah lansia atau berkebutuhan khusus?",
    a: "Ya, kami menyediakan layanan pendampingan khusus untuk jamaah lansia dan berkebutuhan khusus. Silakan informasikan kondisi kesehatan dan kebutuhan spesifik saat mendaftar agar kami dapat menyiapkan akomodasi dan pendampingan yang tepat.",
  },
  {
    q: "Bagaimana sistem pembayaran dan cicilan?",
    a: "Kami menyediakan kemudahan pembayaran: DP minimal 30% saat pendaftaran, pelunasan H-30 sebelum keberangkatan. Untuk paket tertentu, tersedia program cicilan tanpa bunga hingga 12 bulan bekerja sama dengan mitra bank. Hubungi kami untuk informasi lebih lanjut.",
  },
  {
    q: "Apa yang harus dilakukan jika ada keadaan darurat saat di Tanah Suci?",
    a: "Tim kami selalu siap 24 jam di lokasi selama keberangkatan. Setiap jamaah akan mendapatkan nomor kontak darurat pembimbing dan koordinator lokal. Kami juga memiliki kontak dengan RS Indonesia di Makkah dan Madinah, serta koordinasi dengan KJRI Jeddah.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" style={{ padding: "100px 0", background: "var(--warm-white)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span style={{
            display: "inline-block",
            background: "rgba(31,77,58,0.08)", color: "var(--green-dark)",
            fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase",
            padding: "6px 16px", borderRadius: 100, marginBottom: 16,
          }}>
            FAQ
          </span>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700,
            color: "var(--green-dark)", lineHeight: 1.2, marginBottom: 16,
          }}>
            Pertanyaan Umum
          </h2>
          <p style={{ fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.7 }}>
            Belum menemukan jawaban yang Anda cari? Hubungi kami langsung via WhatsApp.
          </p>
        </div>

        {/* Accordion */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                borderRadius: 16,
                border: `1px solid ${open === i ? "rgba(31,77,58,0.2)" : "rgba(31,77,58,0.07)"}`,
                boxShadow: open === i ? "var(--shadow-soft)" : "none",
                overflow: "hidden",
                transition: "var(--transition)",
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%", textAlign: "left",
                  padding: "20px 24px",
                  display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16,
                  background: "none", border: "none", cursor: "pointer",
                }}
              >
                <span style={{
                  fontSize: 15, fontWeight: 600,
                  color: open === i ? "var(--green-dark)" : "var(--text-dark)",
                  lineHeight: 1.5, flex: 1,
                }}>
                  {faq.q}
                </span>
                <div style={{
                  width: 28, height: 28, borderRadius: "50%", flexShrink: 0,
                  background: open === i ? "var(--green-dark)" : "rgba(31,77,58,0.07)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "var(--transition)",
                  transform: open === i ? "rotate(180deg)" : "none",
                }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke={open === i ? "#fff" : "var(--green-dark)"} strokeWidth="2.5">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </div>
              </button>

              {open === i && (
                <div style={{
                  padding: "0 24px 20px",
                  fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.8,
                  borderTop: "1px solid rgba(31,77,58,0.06)",
                  paddingTop: 16,
                }}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
