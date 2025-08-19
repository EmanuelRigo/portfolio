"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";

const Header = () => {
  const pathname = usePathname();
  const { t } = useTranslation();

  const navLinks = [
    { href: "/", label: t("nav.projects") },
    { href: "/certificates", label: t("nav.certificates") },
    { href: "/contact-me", label: t("nav.contactMe") },
    { href: "/resume", label: t("nav.resume") },
  ];

  return (
    <div className="w-full text-black flex justify-between items-center ps-3 md:ps-5 bg-yellow-400 py-2 md:py-4 rounded-s-md md:mb-18">
      <nav className="flex space-x-2 md:space-x-4">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`relative pb-1 transition-colors duration-300 text-sm md:text-md
              after:content-['']
              after:absolute
              after:left-0
              after:bottom-0
              after:h-[2px]
              after:bg-black
              after:transition-transform
              after:duration-200
              after:w-full
              ${
                pathname === link.href
                  ? "after:scale-x-100"
                  : "after:scale-x-0 hover:after:scale-x-100"
              }
              after:origin-left
            `}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Header;
