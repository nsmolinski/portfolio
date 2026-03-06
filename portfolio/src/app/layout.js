import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Inter, Poppins } from 'next/font/google'
import Link from "next/link";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const inter = Inter({ subsets: ['latin'], weight: ['400','600','700'], variable: '--font-sans' })
const poppins = Poppins({ subsets: ['latin'], weight: ['500','700'], variable: '--font-heading' })
export const metadata = {
  title: "Portfolio Nikodem Smoliński",
  description: "portfolio-nsmolinski",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="flex justify-around items-center font-semibold p-5 bg-blue-800 text-white shadow-lg shadow-blue-800/60 sticky top-0 z-50">
          <Link href="/" className="transform-gpu transition ease-in-out duration-300 hover:text-blue-100 hover:scale-105">Projekty</Link>
          <Link href="/kontakt" className="transform-gpu transition ease-in-out duration-300 hover:text-blue-50 hover:scale-105">Kontakt</Link>
        </header>
        {children}
      </body>
    </html>
  );
}
