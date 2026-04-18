import { useState } from "react";
import Hamburger from "hamburger-react";
import NavbarMobileMenu from "./NavbarMobileMenu";

// To Do / Check
// Close menu when clicking/tapping outside of the menu area

const NavbarMobile = () => {
  const [isOpen, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    // Padding-4!
    <nav className="justify-items-end p-4 sm:hidden">
      <Hamburger toggled={isOpen} toggle={setOpen} />
      {isOpen && <NavbarMobileMenu handleClose={handleClose} />}
    </nav>
  );
};

export default NavbarMobile;
