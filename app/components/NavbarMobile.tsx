import React, { useEffect, useState } from "react";
import Hamburger from "hamburger-react";
import NavbarMobileMenu from "./NavbarMobileMenu";

const NavbarMobile = () => {
  const [isOpen, setOpen] = useState(false);

  // Continue building the logic to make the body no-scrollable when the menu is open
  useEffect(() => {}, [isOpen]);

  return (
    // Padding-4!
    <nav className="bg-sky-200 text-black justify-items-end p-4">
      <Hamburger toggled={isOpen} toggle={setOpen} />
      {isOpen && <NavbarMobileMenu />}
    </nav>
  );
};

export default NavbarMobile;
