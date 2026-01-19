import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const metaData: Metadata = {};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "mx-auto min-h-screen max-w-3xl bg-gray-950 px-6 py-12 font-sans antialiased sm:py-24",
          jetbrainsMono.variable,
        )}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
