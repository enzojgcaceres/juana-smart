import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Juana Smart Pasteleria",
  description: "Espacio dedicado a la pasteleria profesional",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Text:ital@0;1&display=swap" rel="stylesheet" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
