import Link from "next/link";

// To Do / Check
// Use a <div> or an <ul> to display the navigation links?
// Render each Link component or hardcode it?

interface HandleCloseProp {
  handleClose: () => void;
}

const NavbarMobileMenu = ({ handleClose }: HandleCloseProp) => {
  return (
    // h-screen sets the element to span the entire height of the viewport
    // Padding-4!
    <div className="h-3/4 w-full text-center text-2xl p-4 justify-around flex">
      <Link
        href="/"
        onClick={handleClose}
        className="underline decoration-wavy decoration-sky-500"
      >
        home
      </Link>
      <Link
        href="/projects"
        className="underline decoration-wavy decoration-sky-500"
      >
        projects
      </Link>
      <Link
        href="/about"
        onClick={handleClose}
        className="underline decoration-wavy decoration-sky-500"
      >
        about
      </Link>
      <Link
        href="/contact"
        onClick={handleClose}
        className="underline decoration-wavy decoration-sky-500"
      >
        contact
      </Link>
    </div>
  );
};

export default NavbarMobileMenu;
