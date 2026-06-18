// lib/config.ts
// Semua konstanta & env global di sini — JANGAN hardcode di komponen

export const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "6281234567890"
export const SITE_NAME = process.env.NEXT_PUBLIC_BUSINESS_NAME ?? "Umrohinaja"
export const SITE_URL  = process.env.NEXT_PUBLIC_SITE_URL ?? "https://umrohinaja.id"

/** Buat URL WhatsApp dengan pesan otomatis */
export function waUrl(message: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`
}

export const WA_DEFAULT_MSG =
  "Halo Umrohinaja, saya ingin konsultasi paket umroh"