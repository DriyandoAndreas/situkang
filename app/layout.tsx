import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Si Tukang Jasa Service Belilas — Solusi Cepat, Tepat, Bergaransi",
  description:
    "Jasa service elektronik, layanan IT, serta service handphone di Belilas dan sekitarnya.",
  icons: {
    icon: '/images/logo-white.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
