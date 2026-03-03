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
  metadataBase: new URL("https://zariandstone.com"),
  icons: {
    icon: "/logo.svg",
  },
  title: "Zari & Stone Co. | Custom Engagement Rings & Wedding Bands",
  description:
    "Handcrafted, personalized jewelry for life's most important moments. Custom engagement rings and wedding bands serving clients across the USA and Canada.",
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
      "Handcrafted, personalized jewelry for life's most important moments. Custom engagement rings and wedding bands serving clients across the USA and Canada.",
    type: "website",
    images: ["https://zariandstone.com/social-share.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zari & Stone Co. | Custom Engagement Rings & Wedding Bands",
    description:
      "Handcrafted, personalized jewelry for life's most important moments. Custom engagement rings and wedding bands serving clients across the USA and Canada.",
    images: ["https://zariandstone.com/social-share.jpg"],
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
