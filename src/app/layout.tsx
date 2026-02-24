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

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase,
  title: "Biswajit Rath – Software Engineer",
  description: "Backend Developer specializing in building scalable APIs, secure systems, and high-performance server-side applications. Explore my work and technical blog.",
  authors: [{ name: "Biswajit Rath" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://www.biswajitrath.com/",
    types: {
      "application/rss+xml": [{ url: "/rss.xml", title: "Beyond your API RSS Feed" }],
    },
  },
  openGraph: {
    title: "Biswajit Rath – Software Engineer",
    description: "Backend Developer specializing in building scalable APIs, secure systems, and high-performance server-side applications. Explore my work and technical blog.",
    url: "https://www.biswajitrath.com",
    siteName: "Biswajit Rath",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Biswajit Rath – Software Engineer",
    description: "Backend Developer specializing in building scalable APIs, secure systems, and high-performance server-side applications. Explore my work and technical blog.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light" style={{ colorScheme: "light" }}>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${syne.variable} font-sans antialiased overflow-x-hidden`}
      >
        <LenisProvider>{children}</LenisProvider>
        <GoogleAnalyticsProvider />
      </body>
    </html>
  );
}
