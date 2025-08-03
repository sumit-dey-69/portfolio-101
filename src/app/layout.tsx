import TrailEffect from "@/components/trail-effect";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const pangaiaSans = localFont({
  src: "./fonts/pangaia.woff2",
  variable: "--font-pangaia",
});

export const metadata: Metadata = {
  title: "Portfolio - Sumit Dey",
  description: "Showcase",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${pangaiaSans.variable} overflow-hidden antialiased`}
      >
        <TrailEffect />
        {children}
      </body>
    </html>
  );
}
