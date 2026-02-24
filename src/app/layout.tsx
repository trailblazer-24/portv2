import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Syne } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/providers/LenisProvider";
import { GoogleAnalyticsProvider } from "@/providers/GoogleAnalyticsProvider";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const metadataBase = new URL(
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
);

export const metadata: Metadata = {
  metadataBase,
  title: "Biswajit Rath '2026",
  description: "Building systems that scale. Backend architecture, API design, and production-ready systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light" style={{ colorScheme: "light" }}>
      <head>
        <GoogleAnalyticsProvider />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${syne.variable} font-sans antialiased overflow-x-hidden`}
      >
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
