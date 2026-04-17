import Link from "next/link";
import React from "react";

const NavbarDesktop = () => {
  return (
    <nav className="text-black">
      {/* Render each Link component or hardcode it? */}
      <Link href="/" className="border-2">
        Home
      </Link>
      <Link href="/about" className="border-2">
        About
      </Link>
      <Link href="/contact" className="border-2">
        Contact
      </Link>
    </nav>
  );
};

export default NavbarDesktop;
