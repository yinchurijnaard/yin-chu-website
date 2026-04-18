import Link from "next/link";

const NavbarDesktop = () => {
  return (
    <nav className="border hidden sm:flex w-full text-center text-2xl p-4 justify-around">
      {/* Render each Link component or hardcode it? */}
      <Link href="/" className="">
        Home
      </Link>
      <Link href="/about" className="">
        About
      </Link>
      <Link href="/contact" className="">
        Contact
      </Link>
    </nav>
  );
};

export default NavbarDesktop;
