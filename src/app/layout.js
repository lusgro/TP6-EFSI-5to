import { CitaProvider } from "@/CitaContext";
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
        <link href="https://fonts.googleapis.com/css?family=Staatliches" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css" />
      </head>
      <CitaProvider>
        <body className={inter.className}>
          <Navbar />
          {children}
        </body>
      </CitaProvider>
    </html>
  );
}
