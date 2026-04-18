"use client";

// To Do / Check
// Make NavbarMobile show on mobile aspect ratios, the same for NavbarDesktop
// Do I implement the logic for mobile/desktop here, or in the component itself?

import NavbarMobile from "./NavbarMobile";
import NavbarDesktop from "./NavbarDesktop";

const Navbar = () => {
  return (
    <>
      <NavbarMobile />
      <NavbarDesktop />
    </>
  );
};

export default Navbar;
