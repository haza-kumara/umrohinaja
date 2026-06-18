"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

// ─── Types ───────────────────────────────────────────────────────────────────
interface FaqItem {
  question: string;
  answer: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────
const FAQS: FaqItem[] = [
  {
    question: "Apa saja yang termasuk dalam paket umroh Umrohinaja?",
    answer:
      "Setiap paket kami sudah mencakup tiket pesawat PP, akomodasi hotel sesuai paket, transportasi selama di Arab Saudi, konsumsi 3x sehari, visa umroh dan biaya handling, perlengkapan umroh, pembimbing ibadah bersertifikat, dan asuransi perjalanan. Detail lengkap tersedia di halaman paket masing-masing.",
  },
  {
    question: "Bagaimana cara mendaftar paket umroh?",
    answer:
      "Proses pendaftaran sangat mudah: (1) Pilih paket yang sesuai, (2) Hubungi kami via WhatsApp atau datang ke kantor, (3) Lengkapi dokumen persyaratan, (4) Bayar DP minimal 30%, (5) Ikuti manasik umroh yang kami selenggarakan. Tim kami akan memandu Anda di setiap langkah.",
  },
  {
    question: "Berapa lama proses pengurusan visa umroh?",
    answer:
      "Proses pengurusan visa umroh biasanya membutuhkan waktu 7–14 hari kerja setelah dokumen lengkap diterima. Kami sarankan mendaftar minimal 2 bulan sebelum jadwal keberangkatan untuk memastikan semua persiapan berjalan lancar.",
  },
  {
    question: "Apakah ada layanan khusus untuk jamaah lansia atau berkebutuhan khusus?",
    answer:
      "Ya, kami menyediakan layanan pendampingan khusus untuk jamaah lansia dan berkebutuhan khusus. Silakan informasikan kondisi kesehatan dan kebutuhan spesifik saat mendaftar agar kami dapat menyiapkan akomodasi dan pendampingan yang tepat.",
  },
  {
    question: "Bagaimana sistem pembayaran dan cicilan?",
    answer:
      "Kami menyediakan kemudahan pembayaran: DP minimal 30% saat pendaftaran, pelunasan H-30 sebelum keberangkatan. Untuk paket tertentu, tersedia program cicilan tanpa bunga hingga 12 bulan bekerja sama dengan mitra bank. Hubungi kami untuk informasi lebih lanjut.",
  },
  {
    question: "Apa yang harus dilakukan jika ada keadaan darurat saat di Tanah Suci?",
    answer:
      "Tim kami selalu siap 24 jam di lokasi selama keberangkatan. Setiap jamaah akan mendapatkan nomor kontak darurat pembimbing dan koordinator lokal. Kami juga memiliki kontak dengan RS Indonesia di Makkah dan Madinah, serta koordinasi dengan KJRI Jeddah.",
  },
];

// ─── Sub-components ──────────────────────────────────────────────────────────
function AccordionItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: FaqItem;
  index: number;
  isOpen: boolean;
  onToggle: (index: number) => void;
}) {
  return (
    <div
      className={cn(
        "bg-white rounded-2xl border overflow-hidden transition-all duration-300",
        isOpen
          ? "border-[rgba(31,77,58,0.2)] shadow-[var(--shadow-soft)]"
          : "border-[rgba(31,77,58,0.07)]"
      )}
    >
      {/* Question trigger */}
      <button
        onClick={() => onToggle(index)}
        className="w-full text-left flex items-center justify-between gap-4 px-6 py-5 bg-transparent border-none cursor-pointer"
        aria-expanded={isOpen}
      >
        <span
          className={cn(
            "text-[15px] font-semibold leading-[1.5] flex-1",
            isOpen ? "text-[var(--green-dark)]" : "text-[var(--text-dark)]"
          )}
        >
          {faq.question}
        </span>

        {/* Chevron */}
        <div
          className={cn(
            "w-7 h-7 rounded-full shrink-0 flex items-center justify-center transition-all duration-300",
            isOpen
              ? "bg-[var(--green-dark)] rotate-180"
              : "bg-[rgba(31,77,58,0.07)]"
          )}
        >
          <svg
            width="14" height="14" viewBox="0 0 24 24"
            fill="none" strokeWidth="2.5"
            stroke={isOpen ? "#fff" : "var(--green-dark)"}
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </button>

      {/* Answer panel */}
      {isOpen && (
        <div className="px-6 pt-4 pb-5 text-[14px] text-[var(--text-secondary)] leading-[1.8] border-t border-[rgba(31,77,58,0.06)]">
          {faq.answer}
        </div>
      )}
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────
export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) =>
    setOpenIndex((prev) => (prev === index ? null : index));

  return (
    <section id="faq" className="py-[100px] bg-[var(--warm-white)]">
      <div className="max-w-[800px] mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-[rgba(31,77,58,0.08)] text-[var(--green-dark)] text-[12px] font-semibold tracking-[0.1em] uppercase px-4 py-1.5 rounded-full mb-4">
            FAQ
          </span>
          <h2
            className="text-[clamp(28px,4vw,44px)] font-bold text-[var(--green-dark)] leading-[1.2] mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Pertanyaan Umum
          </h2>
          <p className="text-[16px] text-[var(--text-secondary)] leading-[1.7]">
            Belum menemukan jawaban yang Anda cari? Hubungi kami langsung via WhatsApp.
          </p>
        </div>

        {/* Accordion list */}
        <div className="flex flex-col gap-3">
          {FAQS.map((faq, i) => (
            <AccordionItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={handleToggle}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
