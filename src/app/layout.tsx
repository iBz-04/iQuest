import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import cx from "@/utils/cx";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "iQuest",
  description: "iQuest ChatBot",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth antialiased dark">
      <body className={cx(inter.className, "text-sm md:text-base min-h-screen bg-black")}>
        <Header />
        {children}
      </body>
    </html>
  );
}
