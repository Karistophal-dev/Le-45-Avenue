import type { Metadata } from "next";
import { Pacifico, Poppins, Bebas_Neue } from "next/font/google";
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

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Le 45 Avenue — Fast-Food · Vernon, Eure",
  description:
    "Kebabs, burgers, tacos — fast-food ancré localement, avec une identité urbaine forte. 45 avenue de Rouen, Vernon (27).",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${pacifico.variable} ${poppins.variable} ${bebasNeue.variable}`}>
      <body>{children}</body>
    </html>
  );
}
