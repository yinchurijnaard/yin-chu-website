import Link from "next/link";
import { usePathname } from "next/navigation";
import { links } from "../constants/navigation";

interface HandleCloseProp {
  handleClose: () => void;
}

const NavbarMobileMenu = ({ handleClose }: HandleCloseProp) => {
  const pathname = usePathname();

  return (
    <div className="h-3/4 w-full text-center text-2xl p-4 justify-around flex">
      {links.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.name}
            href={link.href}
            onClick={handleClose}
            className={
              isActive
                ? "underline hover:underline hover:decoration-orange-500"
                : "hover:underline hover:decoration-orange-500"
            }
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
};

export default NavbarMobileMenu;
