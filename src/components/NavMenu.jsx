"use client";
import navLinks from "@/constants/navlink";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavMenu = () => {
  const path = usePathname();

  return (
    <nav className="hidden md:flex gap-5">
      {navLinks.map((navlink, index) => {
        const isActive =
          path === navlink.route ||
          (navlink.route != "/" && path.startsWith(navlink.route));

        return (
          <Link
            key={index}
            href={navlink.route}
            className={`text-md font-medium hover:text-primary ${
              isActive ? "text-secondary" : ""
            }`}
          >
            {navlink.label}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavMenu;
