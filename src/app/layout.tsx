import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Head from 'next/head';
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Get It",
  description: "Get it",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/icons/star_icon.png" />
        {/* You can include other meta tags here as well */}
      </Head>
      <body className={inter.className}>
        <Header />
          <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
