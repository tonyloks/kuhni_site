import type { Metadata } from "next";
import { DM_Serif_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif-display",
});

const sourceSans3 = Source_Sans_3({
  weight: ["400", "600"],
  subsets: ["latin", "cyrillic"],
  variable: "--font-source-sans-3",
});

export const metadata: Metadata = {
  title: "Ле-манш - Кухни на заказ в Ростове-на-Дону",
  description: "Изготовление кухонь на заказ от производителя. 26 лет опыта, собственное производство, любые нестандартные решения. Ростов-на-Дону.",
  keywords: "кухни на заказ, изготовление кухонь, мебель на заказ, Ростов-на-Дону, неоклассика",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${dmSerifDisplay.variable} ${sourceSans3.variable} font-sans`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
