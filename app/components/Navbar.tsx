// State is only available in Client Components (Server Component by default otherwise)
"use client";

// Imports (Next.js)
import Link from "next/link";

// Imports (React)
import { useState } from "react";

// Imports (Other)
import { Divide as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="bg-sky-200 text-black w-full p-4">
      <Hamburger toggled={isOpen} toggle={setOpen} />

      {/* Find a way to make the code to list all the navigation links better and cleaner */}
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
};

export default Navbar;
