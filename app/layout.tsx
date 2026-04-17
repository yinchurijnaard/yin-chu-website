import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "material-symbols";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

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
      // className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      {/* So the reason why: body is for the whole 'body'. The {children}'s background is only affected in page.tsx (the main page???) */}
      {/* And the reason why the NavbarDesktop bg is the same as below (<body className="bg-amber-400"></body> is because I haven't specified a background colour) */}
      <body className="min-h-full flex flex-col bg-amber-400">
        <Navbar />
        {/* Find out why the text is offset to the right, compared to the Navbar and the Footer */}
        <div className="flex-grow container mx-auto">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
