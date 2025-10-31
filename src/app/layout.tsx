import type { Metadata } from "next";
import { Bitcount_Grid_Single, Bitcount_Single, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const bitcountGridSingle = Bitcount_Grid_Single({
  variable: "--font-bitcount-grid-single",
  subsets: ["latin"],
});

const bitcountSingle = Bitcount_Single({
  variable: "--font-bitcount-single",
  subsets: ["latin"],
});

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stack Use | The ultimate npm package search engine",
  description: "StackUse is the ultimate npm package search engine. Discover, compare, and analyze libraries using advanced metrics from npm downloads and real-time GitHub repository data (stars, commits, contributors, and more). Find your next dependency with confidence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bitcountGridSingle.className} ${bitcountSingle.className} ${bricolageGrotesque.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
