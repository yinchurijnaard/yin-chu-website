import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import {
  GeistPixelSquare,
  GeistPixelGrid,
  GeistPixelCircle,
  GeistPixelTriangle,
  GeistPixelLine,
} from "geist/font/pixel";
import { ThemeProvider } from "next-themes";
import Navbar from "./components/Navbar";
import MountainBackground from "./components/MountainBackground";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Yin Chu Rijnaard",
  description: "Yin Chu Rijnaard's Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      style={{ scrollbarGutter: "stable" }}
      className={`${GeistSans.variable} ${GeistMono.variable} ${GeistPixelSquare.variable} ${GeistPixelGrid.variable}${GeistPixelCircle.variable}${GeistPixelTriangle.variable} ${GeistPixelLine.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col">
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem={true}
        >
          <Navbar />
          <hr className="border-main-border p-4" />

          <div className="grow flex flex-col relative">{children}</div>

          <MountainBackground />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
