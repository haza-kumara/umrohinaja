import type { Metadata } from "next";
import { Cormorant_Garamond, Poppins } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

const poppins = Poppins({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Umrohinaja – Wujudkan Umroh Impian Anda",
  description:
    "Pendampingan penuh, hotel nyaman, pembimbing berpengalaman, dan pelayanan terbaik untuk perjalanan ibadah yang lebih tenang dan bermakna.",
  keywords: "umroh, haji, travel umroh, paket umroh, umrohinaja",
  icons: {
    icon: "/icons/umrohinaja.jpg",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${cormorant.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
