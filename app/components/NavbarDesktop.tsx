import Link from "next/link";

// To Do / Check
// Render each Link component or hardcode it?
// Is it semantically okay to render a React Fragment, then a <nav> tag and afterwards a simple <hr> tag?
// <hr> tag is visible even in mobile, because it lives outside of the <nav> tag

const NavbarDesktop = () => {
  return (
    <>
      <nav className="hidden sm:flex w-full text-center text-2xl p-4 justify-around">
        <Link
          href="/"
          className="hover:underline hover:decoration-wavy hover:decoration-sky-500"
        >
          home
        </Link>
        <Link
          href="/about"
          className="hover:underline hover:decoration-wavy hover:decoration-sky-500"
        >
          about
        </Link>
        <Link
          href="/contact"
          className="hover:underline hover:decoration-wavy hover:decoration-sky-500"
        >
          contact
        </Link>
      </nav>
      <hr className="text-gray-700 p-4" />
    </>
  );
};

export default NavbarDesktop;
