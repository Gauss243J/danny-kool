import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Danny Kool Suerte | Professeur de langues",
  description:
    "Cours de langues professionnels (Français, Anglais, Espagnol, Portugais, Allemand, Swahili, Lingala). Formation moderne et personnalisée.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${poppins.className} bg-white text-slate-800`}>
        {children}
      </body>
    </html>
  );
}