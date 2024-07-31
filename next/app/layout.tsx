import type { Metadata } from "next";

import {
  Cormorant_Garamond,
  Adamina,
  Inter,
  Noto_Sans_KR,
} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import localFont from "next/font/local";
import { Toaster } from "@/components/ui/toaster";
import NextAuthProvider from "@/components/providers/NextAuthProvider";
import { Analytics } from "@vercel/analytics/react";

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

const noto = Noto_Sans_KR({
  variable: "--noto-font",
  subsets: ["latin"],
});

const pretendard = localFont({
  src: [
    {
      path: "../public/fonts/Pretendard-Light.woff2",
      weight: "300",
    },
    {
      path: "../public/fonts/Pretendard-Regular.woff2",
      weight: "400",
    },
    {
      path: "../public/fonts/Pretendard-Medium.woff2",
      weight: "500",
    },
    {
      path: "../public/fonts/Pretendard-SemiBold.woff2",
      weight: "600",
    },
  ],
  variable: "--pre-font",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sumrov",
  description: "site",
  icons: {
    icon: "/sumrov.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning={true}>
      <body
        className={`${cormorant_garamond.variable} ${adamina.variable} ${inter.variable} ${pretendard.variable} ${noto.variable} dark:bg-neutral-900`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="sumrov-theme-1"
        >
          <NextAuthProvider>
            {children} <Analytics />
          </NextAuthProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
