import Link from "next/link";
import React from "react";

const NavbarMobileMenu = () => {
  return (
    // h-screen sets the element to span the entire height of the viewport
    // Padding-4!
    <div className="h-3/4 w-full text-center text-4xl border p-4 justify-around flex">
      {/* Render each Link component or hardcode it? */}
      <Link href="/" className="underline decoration-wavy decoration-pink-400">
        Home
      </Link>
      <Link
        href="/about"
        className="underline decoration-wavy decoration-pink-400"
      >
        About
      </Link>
      <Link
        href="/contact"
        className="underline decoration-wavy decoration-pink-400"
      >
        Contact
      </Link>

      {/* Use a div or an ul for displaying the navigation links? */}
      {/* <ul className="flex flex-col space-y-4">
        <li>
          <Link href="/" className="border-2">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="border-2">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" className="border-2">
            Contact
          </Link>
        </li>
      </ul> */}
    </div>
  );
};

export default NavbarMobileMenu;
