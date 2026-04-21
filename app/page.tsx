"use client";

import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <main className="p-4 m-4 space-y-16 text-center justify-center flex-col h-screen">
      <div className="space-y-4">
        <p className="text-2xl italic text-sec-text">
          Hallo / hello / grüezi, I&apos;m
        </p>
        <TypeAnimation
          sequence={["Yin Chu"]}
          speed={5}
          className="text-8xl font-pixel-line text-orange-500"
        />
      </div>

      <div className="text-2xl text-sec-text space-y-4">
        <p>I&apos;m a software engineer from the Netherlands 🇳🇱</p>
        <p>I create things for the internet.</p>
      </div>

      <p className="text-lg text-sec-text">Based in the Swiss Alps 🇨🇭</p>

      <div className="text-lg text-sec-text space-y-4">
        <p>Let&apos;s get a &#40;digital&#41; cuppa ☕️</p>
        <Link href="/contact">
          <button className="btn btn-outline text-orange-500 text-lg">
            Get in touch!
          </button>
        </Link>
      </div>
    </main>
  );
}
