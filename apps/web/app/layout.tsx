import type { Metadata } from "next";
import {Inter} from "next/font/google";
import "./globals.css";

const inter_font = Inter({
  subsets: ["latin"],
  weight:["100","200","300","400","500","600","700","800"]
})
export const metadata: Metadata = {
  title: "Club.sh",
  description: "NextJS URL Shortener",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter_font.className}>
        {children}
      </body>
    </html>
  );
}
