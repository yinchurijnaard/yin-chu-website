import Link from "next/link";
import { usePathname } from "next/navigation";
import { links } from "../constants/navigation";

const NavbarDesktop = () => {
  const pathname = usePathname();

  return (
    <nav className="hidden sm:flex w-full text-center text-2xl p-4 justify-end space-x-12">
      {links.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.name}
            href={link.href}
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
    </nav>
  );
};

export default NavbarDesktop;
