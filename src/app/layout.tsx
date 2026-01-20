import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "sonner";
import Footer from "@/components/footer";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Beaking code since birth...You are welcome :)",
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
          "min-h-dvh bg-gray-950 font-sans antialiased",
          jetbrainsMono.variable,
        )}
        suppressHydrationWarning
      >
        <div className="mx-auto max-w-3xl px-4 py-12 sm:py-24">{children}</div>
        <Footer />
        <Analytics />
        <Toaster />
      </body>
    </html>
  );
}
