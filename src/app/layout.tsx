import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "sonner";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Beaking code since birth...You are welcome :)',
  // icons: {
  //   icon: '/favicon.png',
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "mx-auto min-h-dvh max-w-3xl bg-gray-950 px-4 py-12 font-sans antialiased sm:py-24",
          jetbrainsMono.variable,
        )}
        suppressHydrationWarning
      >
        {children}
        <Analytics />
        <Toaster />
      </body>
    </html>
  );
}
