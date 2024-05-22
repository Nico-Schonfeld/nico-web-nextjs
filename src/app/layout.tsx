import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";

/* const inter = Inter({ subsets: ["latin"] }); */
const merri = Merriweather({ weight: "300", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nico Schönfeld | Portfolio",
  description: "...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={merri.className}>{children}</body>
    </html>
  );
}
