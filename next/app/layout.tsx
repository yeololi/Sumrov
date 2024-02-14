import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Cormorant_Garamond, Adamina, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
const cormorant_garamond = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--nav-font",
  subsets: ["latin"],
});

const adamina = Adamina({
  weight: "400",
  variable: "--num-font",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--body-font",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sumrov",
  description: "site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${cormorant_garamond.variable} ${adamina.variable} ${inter.variable}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="sumrov-theme-1"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
