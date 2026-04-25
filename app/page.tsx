"use client";

import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    // IMPORTANT: THE BELOW TAILWIND CLASSES FROM NOW ON ARE DEFAULT FOR THE OTHER PAGES. UPDATE THE OTHER PAGES ACCORDINGLINGY (E.G., PADDING, MARGIN, ETC)

    // BASIC STYLING RULES
    // - <main> :  className="min-h-full flex flex-col sm:flex-row sm:justify-between sm:items-center gap-12 mx-4 sm:mx-8"
    // - flex flex-col gap-12 for <main>
    // - flex flex-col gap-2 or gap-4 for children <div>
    // - 'Normal' text should always be text-base, only from sm: should it be text-lg
    // - On other pages, the subtitle should be sm:text-2xl

    <main className="min-h-full flex flex-col gap-12 mx-4">
      {/* DIV 1 */}
      {/* HERO SECTION */}
      <div className="flex flex-col gap-2 text-center">
        <p className="text-2xl italic text-sec-text">
          Hallo / hello / grüezi, I&apos;m
        </p>
        <TypeAnimation
          sequence={["Yin Chu"]}
          speed={5}
          className="text-6xl sm:text-8xl font-pixel-line text-orange-500"
        />
      </div>

      {/* DIV 2 */}
      {/* INTRODUCTION */}
      <div className="flex flex-col gap-2 items-center text-sec-text sm:text-xl">
        <p>I&apos;m a software engineer from the Netherlands 🇳🇱</p>
        <p>I create things for the internet.</p>
      </div>

      {/* DIV 3 */}
      {/* INTRODUCTION */}
      <div className="text-sec-text text-center sm:text-xl">
        <p>Based in the Swiss Alps 🇨🇭</p>
      </div>

      {/* DIV 4 */}
      {/* CTA BUTTON */}
      <div className="flex flex-col gap-2 items-center sm:text-xl">
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
