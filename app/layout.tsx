import type { Metadata } from "next";
import { Lexend_Zetta, Host_Grotesk, Bacasime_Antique } from "next/font/google";
import "./globals.css";

const heading = Lexend_Zetta({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const sub = Bacasime_Antique({
  variable: "--font-sub",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const body = Host_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zari & Stone Co. | Custom Engagement Rings & Wedding Bands",
  description:
    "Personalized jewelry crafted with intention. Custom engagement rings, wedding bands, and one-of-a-kind pieces. One-on-one consultations, CAD design, and handcrafted quality. Serving clients across the USA, Canada, and worldwide.",
  keywords: [
    "custom engagement rings",
    "custom wedding bands",
    "personalized jewelry",
    "CAD jewelry design",
    "natural diamonds",
    "lab grown diamonds",
    "gemstone rings",
    "Zari and Stone",
  ],
  openGraph: {
    title: "Zari & Stone Co. | Custom Engagement Rings & Wedding Bands",
    description:
      "Where every stone tells your story. Custom engagement rings and wedding bands crafted with a deeply personal touch.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${heading.variable} ${sub.variable} ${body.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
