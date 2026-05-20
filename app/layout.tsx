import type { Metadata } from "next";
import { Pacifico, Poppins } from "next/font/google";
import "./globals.css";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pacifico",
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pacy Palace — Kebabs & Burgers · Pacy-sur-Eure",
  description:
    "Kebabs, burgers, tacos — le meilleur fast-food de Pacy-sur-Eure. Ouvert 7j/7, midi et soir.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${pacifico.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}
