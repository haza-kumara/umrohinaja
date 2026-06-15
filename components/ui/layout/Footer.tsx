const WA_NUMBER = "6281234567890";

export default function Footer() {
  return (
    <>
      {/* CTA Banner */}
      <section style={{
        padding: "80px 24px",
        background: "linear-gradient(135deg, var(--green-dark) 0%, var(--green-secondary) 100%)",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: "-20%", right: "-5%",
          width: 360, height: 360, borderRadius: "50%",
          background: "rgba(248,233,161,0.08)", pointerEvents: "none",
        }} />
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <h2 style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(26px, 4vw, 42px)", fontWeight: 700,
            color: "#fff", lineHeight: 1.2, marginBottom: 16,
          }}>
            Siap Wujudkan Perjalanan <span style={{ color: "var(--yellow)", fontStyle: "italic" }}>Ibadah Impian</span> Anda?
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.75)", lineHeight: 1.7, marginBottom: 36 }}>
            Konsultasikan kebutuhan umroh Anda dengan tim kami sekarang. Gratis, tanpa biaya, tanpa komitmen.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href={`https://wa.me/${WA_NUMBER}?text=Halo+Umrohinaja%2C+saya+ingin+konsultasi+paket+umroh`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                background: "#25D366", color: "#fff",
                fontSize: 15, fontWeight: 700,
                padding: "14px 28px", borderRadius: 100,
                boxShadow: "0 6px 24px rgba(37,211,102,0.4)",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat WhatsApp Sekarang
            </a>
            <a
              href="#paket"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "rgba(255,255,255,0.12)", color: "#fff",
                fontSize: 15, fontWeight: 600,
                padding: "14px 28px", borderRadius: 100,
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              Lihat Paket Kami
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "#111a16", padding: "60px 24px 0" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 40, marginBottom: 48,
          }}>
            {/* Brand */}
            <div style={{ gridColumn: "span 1" }}>
              <div style={{
                display: "flex", alignItems: "center", gap: 10,
                fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700,
                color: "#fff", marginBottom: 16,
              }}>
                <span style={{
                  width: 36, height: 36, background: "var(--green-dark)",
                  borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--yellow)">
                    <path d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </span>
                Umrohinaja
              </div>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.75, marginBottom: 20 }}>
                Mewujudkan perjalanan ibadah umroh dan haji yang berkesan, bermakna, dan penuh keberkahan.
              </p>
              <div style={{ display: "flex", gap: 10 }}>
                {["📘", "📸", "▶️"].map((ic, i) => (
                  <a key={i} href="#" style={{
                    width: 36, height: 36, borderRadius: 10,
                    background: "rgba(255,255,255,0.06)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 16, transition: "var(--transition)",
                  }}>
                    {ic}
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 style={{ fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.7)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 16 }}>
                Menu
              </h4>
              {["Beranda", "Paket Umroh", "Keunggulan", "Testimoni", "FAQ"].map((link) => (
                <a key={link} href="#" style={{ display: "block", fontSize: 14, color: "rgba(255,255,255,0.45)", marginBottom: 10, transition: "var(--transition)" }}>
                  {link}
                </a>
              ))}
            </div>

            {/* Paket */}
            <div>
              <h4 style={{ fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.7)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 16 }}>
                Paket
              </h4>
              {["Paket Reguler", "Paket Bussiness", "Paket VIP", "Paket Haji Khusus"].map((p) => (
                <a key={p} href="#paket" style={{ display: "block", fontSize: 14, color: "rgba(255,255,255,0.45)", marginBottom: 10 }}>
                  {p}
                </a>
              ))}
            </div>

            {/* Contact */}
            <div>
              <h4 style={{ fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.7)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 16 }}>
                Kontak
              </h4>
              {[
                { icon: "📍", text: "Jl. Contoh No. 123, Jakarta Selatan" },
                { icon: "📞", text: "+62 812-3456-7890" },
                { icon: "✉️", text: "info@umrohinaja.id" },
                { icon: "⏰", text: "Senin – Jumat, 08.00 – 17.00 WIB" },
              ].map((c, i) => (
                <div key={i} style={{ display: "flex", gap: 10, marginBottom: 12, alignItems: "flex-start" }}>
                  <span style={{ fontSize: 14, flexShrink: 0 }}>{c.icon}</span>
                  <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>{c.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom bar */}
          <div style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            padding: "20px 0", textAlign: "center",
          }}>
            <p style={{ fontSize: 12, color: "rgba(255,255,255,0.3)" }}>
              © {new Date().getFullYear()} Umrohinaja. All rights reserved. | @umrohinaja.id
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${WA_NUMBER}?text=Halo+Umrohinaja%2C+saya+ingin+konsultasi`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed", bottom: 28, right: 28, zIndex: 999,
          display: "flex", alignItems: "center", gap: 10,
          background: "#25D366", color: "#fff",
          fontSize: 13, fontWeight: 700,
          padding: "12px 20px", borderRadius: 100,
          boxShadow: "0 4px 20px rgba(37,211,102,0.5)",
          animation: "pulse-wa 2.5s infinite",
          textDecoration: "none",
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        Chat Kami
      </a>
    </>
  );
}
