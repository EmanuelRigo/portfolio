
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";

const TypewriterText = ({ text }) => {
  return (
    <motion.span
      initial={{ width: 0 }}
      animate={{ width: "auto" }}
      exit={{ width: 0 }}
      transition={{ duration: 1.0, ease: "easeInOut" }}
      className="inline-block overflow-hidden whitespace-nowrap border-r-2 border-neutral-600 pr-1 text-left"
    >
      {text}
    </motion.span>
  );
};

const Header = () => {
  const t = useTranslations("Header");
  const pathname = usePathname();
  const locale = useLocale();
  
  const [showExperience, setShowExperience] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowExperience((prev) => !prev);
    }, 4000); 
    return () => clearInterval(interval);
  }, []);

  const words = {
    es: { res: "Currículum", exp: "Experiencia" },
    en: { res: "Resume", exp: "Experience" }
  };

  const currentWords = words[locale] || words['es'];

  const navLinks = [
    { href: "/", label: t("projects") },
    { href: "/certificates", label: t("certificates") },
    { href: "/contact-me", label: t("contactMe") },
    { href: "/resume", isAnimated: true },
  ];

  // Clase común para el subrayado que ahora aplicaremos al contenido interno
  const underlineStyles = `
    relative 
    after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-black 
    after:transition-transform after:duration-300 after:origin-left after:w-full
  `;

  return (
    <div className="w-full text-black flex justify-start items-center ps-3 md:ps-5 bg-yellow-400 py-2 md:py-4 rounded-s-md md:mb-18">
      <nav className="flex space-x-2 md:space-x-4">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          
          return (
            <Link
              key={link.href}
              href={`/${locale}${link.href}`}
              className="text-sm md:text-md flex items-center transition-colors duration-300"
            >
              {link.isAnimated ? (
                /* Contenedor fijo para estabilidad del menú */
                <div className="inline-flex justify-start min-w-[95px] md:min-w-[110px] h-full overflow-hidden">
                  {/* El subrayado ahora vive en este span interno que envuelve solo el Typewriter */}
                  <span className={`${underlineStyles} ${isActive ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"}`}>
                    <AnimatePresence mode="wait">
                      <TypewriterText 
                        key={showExperience ? "exp" : "res"}
                        text={showExperience ? currentWords.exp : currentWords.res}
                      />
                    </AnimatePresence>
                  </span>
                </div>
              ) : (
                /* El subrayado para links normales */
                <span className={`${underlineStyles} pb-1 ${isActive ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"}`}>
                  {link.label}
                </span>
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Header;