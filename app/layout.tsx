import type { Metadata } from "next";
import { Inter, Open_Sans, Noto_Nastaliq_Urdu } from "next/font/google";
import { LanguageProvider } from "@/i18n/LanguageContext";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

const notoNastaliq = Noto_Nastaliq_Urdu({
  subsets: ["arabic"],
  variable: "--font-urdu",
  display: "swap",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Sohail Hanif Abbasi – Pakistan Army Veteran | Radar Technician | Business Support Specialist",
  description:
    "Professional profile of Sohail Hanif Abbasi, Pakistan Army veteran with 25 years service, radar technician, IT skilled professional and welfare activist based in Madinah, Saudi Arabia.",
  keywords: [
    "Pakistan Army Veteran",
    "Radar Technician",
    "Abbottabad",
    "Madinah",
    "Business Support",
    "Stock Management",
    "Sohail Hanif Abbasi",
    "EME Department",
    "Tamgha e Khidmat",
    "Roshan Ayubia",
  ],
  authors: [{ name: "Sohail Hanif Abbasi" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Sohail Hanif Abbasi – Pakistan Army Veteran | Radar Technician",
    description:
      "Professional profile of Sohail Hanif Abbasi, Pakistan Army veteran with 25 years service, radar technician, IT skilled professional and welfare activist.",
    siteName: "Sohail Hanif Abbasi",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" className={`${inter.variable} ${openSans.variable} ${notoNastaliq.variable}`}>
      <body className="antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
