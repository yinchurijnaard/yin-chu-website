"use client";

import NavbarMobile from "./NavbarMobile";
import NavbarDesktop from "./NavbarDesktop";

const Navbar = () => {
  return (
    <>
      {/* Make NavbarMobile shown on mobile aspect rations, the same for NavbarDesktop */}
      {/* Do I implement the logic for mobile/desktop here, or in the component itself? */}
      <NavbarMobile />
      <NavbarDesktop />
    </>
  );
};

export default Navbar;
