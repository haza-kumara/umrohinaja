import {FaFacebook, FaInstagram, FaTiktok} from 'react-icons/fa';
import Image from 'next/image';
import {FiMail} from "react-icons/fi";
import { MdLocationPin, MdOutlineLocalPhone, MdAccessTime } from "react-icons/md";
import { IconType } from 'react-icons';

// ─── Constants ──────────────────────────────────────────────────────────────
const WA_NUMBER = "6281234567890";

// ─── Data ────────────────────────────────────────────────────────────────────
const MENU_LINKS = ["Beranda", "Paket Umroh", "Keunggulan", "Testimoni", "FAQ"];

const PACKAGE_LINKS = [
  { label: "Paket Reguler",    href: "#paket" },
  { label: "Paket Business",  href: "#paket" },
  { label: "Paket VIP",        href: "#paket" },
  { label: "Paket Haji Khusus",href: "#paket" },
];

const CONTACT_ITEMS = [
  { icon: MdLocationPin, 
    text: "Jl. Raya Pahlawan Ruko Biru Griya Indah Serpong 1 Blok H4/65, Gn. Sindur, Kec. Gunung Sindur, Kab. Bogor, Jawa Barat 16340", 
    href: "https://maps.app.goo.gl/w5WBwoatpWV1uSUB9"},
  { icon: MdOutlineLocalPhone, 
    text: "+62 812-3456-7890",                   
    // href: ""
    },
  { icon: FiMail, 
    text: "umrohinaja.zellot@gmail.com", 
    href: "mailto:umrohinaja.zellot@gmail.com" },
  { icon: MdAccessTime, 
    text: "Senin – Jumat, 08.00 – 17.00 WIB"   },
];

const SOCIAL_LINKS = [
  { icon: FaFacebook,  label: "Facebook", href: "https://www.facebook.com/umrohinaja.id/", color: "#1877F2"},
  { icon: FaInstagram , label: "Instagram",href: "https://www.instagram.com/umrohinaja.id/", color:"#D62976"},
  { icon: FaTiktok, label: "Tiktok",  href: "https://www.tiktok.com/@umrohinaja.id", color: "#FE2C55"},
  { icon: FiMail, label: "Email", href: "mailto:umrohinaja.zellot@gmail.com", color: "#4F46E5"}
];

// ─── Sub-components ──────────────────────────────────────────────────────────
function SocialButton({
  icon: Icon,
  href,
  color,
}: {
  icon: IconType;
  href: string;
  color: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex h-10 w-10 items-center justify-center rounded-[18px] border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden transition-all duration-300"
    >

      {/* Glow */}
      <div
        className="absolute inset-0 opacity-0 blur-xl transition-all duration-300 group-hover:opacity-100"
        style={{
          background: color,
        }}
      />

      {/* Overlay */}
      <div
        className="absolute inset-0 opacity-0 transition-all duration-300 group-hover:opacity-100"
        style={{
          background: `${color}33`,
        }}
      />

      <Icon className="relative z-10 text-[24px] text-white/75 transition-all duration-300 group-hover:text-white" />

    </a>
  );
}
function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function BrandLogo() {
  return (
    <div
      className="flex items-center gap-2.5 text-[22px] font-bold text-white mb-4"
      style={{ fontFamily: "var(--font-display)" }}
    >
      <span className="w-9 h-9 bg-[var(--green-dark)] rounded-xl flex items-center justify-center shrink-0">
        <Image
          src="/icons/umrohinaja.jpg"
          alt="Umrohinaja logo"
          width={36}
          height={36}
          className="w-full h-full object-cover rounded-sm "
          priority
        />
      </span>
      Umrohinaja
    </div>
  );
}

function FooterColumnTitle({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="text-[13px] font-bold text-white/70 uppercase tracking-[0.08em] mb-4">
      {children}
    </h4>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* ── CTA Banner ── */}
      <section className="relative py-20 px-6 overflow-hidden" style={{
        background: "linear-gradient(135deg, var(--green-dark) 0%, var(--green-secondary) 100%)",
      }}>
        {/* Decorative blob */}
        <div className="absolute -top-[20%] -right-[5%] w-[360px] h-[360px] rounded-full bg-[rgba(248,233,161,0.08)] pointer-events-none" />

        <div className="max-w-[700px] mx-auto text-center relative z-[1]">
          <h2
            className="text-[clamp(26px,4vw,42px)] font-bold text-white leading-[1.2] mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Siap Wujudkan Perjalanan{" "}
            <span className="text-[var(--yellow)] italic">Ibadah Impian</span> Anda?
          </h2>
          <p className="text-[16px] text-white/75 leading-[1.7] mb-9">
            Konsultasikan kebutuhan umroh Anda dengan tim kami sekarang. Gratis, tanpa biaya, tanpa komitmen.
          </p>

          <div className="flex flex-wrap gap-3.5 justify-center">
            <a
              href={`https://wa.me/${WA_NUMBER}?text=Halo+Umrohinaja%2C+saya+ingin+konsultasi+paket+umroh`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#25D366] text-white text-[15px] font-bold px-7 py-3.5 rounded-full shadow-[0_6px_24px_rgba(37,211,102,0.4)] transition-all hover:scale-105"
            >
              <WhatsAppIcon size={18} />
              Chat WhatsApp Sekarang
            </a>
            <a
              href="#paket"
              className="inline-flex items-center gap-2 bg-white/[0.12] text-white text-[15px] font-semibold px-7 py-3.5 rounded-full border border-white/20 transition-all hover:bg-white/20"
            >
              Lihat Paket Kami
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-[#111a16] pt-[60px] px-6">
        <div className="max-w-[1180px] mx-auto">

          {/* Footer grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

            {/* Brand column */}
            <div>
              <BrandLogo />
              <p className="text-[13px] text-white/45 leading-[1.75] mb-5">
                Mewujudkan perjalanan ibadah umroh dan haji yang berkesan, bermakna, dan penuh keberkahan.
              </p>
              <div className="flex gap-4">
                {SOCIAL_LINKS.map((item, i) => (
                  <SocialButton
                    key={i}
                    icon={item.icon}
                    href={item.href}
                    color={item.color}
                  />
                ))}
              </div>
            </div>

            {/* Menu column */}
            <div>
              <FooterColumnTitle>Menu</FooterColumnTitle>
              <nav className="flex flex-col gap-2.5">
                {MENU_LINKS.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-[14px] text-white/45 hover:text-white/80 transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </nav>
            </div>

            {/* Packages column */}
            <div>
              <FooterColumnTitle>Paket</FooterColumnTitle>
              <nav className="flex flex-col gap-2.5">
                {PACKAGE_LINKS.map((p) => (
                  <a
                    key={p.label}
                    href={p.href}
                    className="text-[14px] text-white/45 hover:text-white/80 transition-colors"
                  >
                    {p.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact column */}
            <div>
              <FooterColumnTitle>Kontak</FooterColumnTitle>
              <div className="flex flex-col gap-3">
                {CONTACT_ITEMS.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.text} className="flex items-start gap-3">
                      <Icon className="mt-0.5 text-lg text-[var(--green-secondary)] shrink-0" />

                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="text-[13px] text-white/45 hover:text-white transition-colors"
                        >
                          {item.text}
                          </a>
                      ) : (
                        <span className="text-[13px] text-white/45">
                          {item.text}
                        </span>
                      )}
                      </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/[0.06] py-5 text-center">
            <p className="text-[12px] text-white/30">
              © {currentYear} Umrohinaja. All rights reserved. | @umrohinaja.id
            </p>
          </div>
        </div>
      </footer>

      {/* ── Floating WhatsApp button ── */}
      <a
        href={`https://wa.me/${WA_NUMBER}?text=Halo+Umrohinaja%2C+saya+ingin+konsultasi`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat WhatsApp"
        className="fixed bottom-7 right-7 z-[999] flex items-center gap-2.5 bg-[#25D366] text-white text-[13px] font-bold px-5 py-3 rounded-full no-underline"
        style={{ animation: "pulse-wa 2.5s infinite" }}
      >
        <WhatsAppIcon size={20} />
        Chat Kami
      </a>
    </>
  );
}
