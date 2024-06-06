import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TP6",
  description: "ReservORT",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="stylesheet" href={inter.url} />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        </body>
    </html>
  );
}
