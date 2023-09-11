import { Roboto } from "next/font/google";

import { FacebookPixelEvents } from "@/components/facebookPixelEvents";
import "./globals.css";
import type { Metadata } from "next";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "ETAWALIN OFFICIAL",
  description: "Website Resmi ETAWALIN OFFICIAL",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={` ${roboto.variable} `}>
      <body>
        <FacebookPixelEvents />
        {children}
      </body>
    </html>
  );
}
