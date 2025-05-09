"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Projects" },
    { href: "/certificates", label: "Certificates" },
    { href: "/contact-me", label: "ContactMe" },
  ];

  return (
    <div className="w-full text-black flex justify-start items-center ps-5 bg-yellow-400 py-4 rounded-s-lg md:mb-18">
      <nav className="flex space-x-4">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`relative pb-1 transition-colors duration-300
              after:content-['']
              after:absolute
              after:left-0
              after:bottom-0
              after:h-[2px]
              after:bg-black
              after:transition-transform
              after:duration-300
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
