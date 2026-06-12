// "use client";
// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useTranslations, useLocale } from "next-intl";
// import { motion, AnimatePresence } from "framer-motion";

// const TypewriterText = ({ text }: { text: string }) => {
//   return (
//     <motion.span
//       initial={{ width: 0 }}
//       animate={{ width: "auto" }}
//       exit={{ width: 0 }}
//       transition={{ duration: 1.0, ease: "easeInOut" }}
//       className="inline-block overflow-hidden whitespace-nowrap border-r-2 border-neutral-600 pr-1 text-left"
//     >
//       {text}
//     </motion.span>
//   );
// };

// const Header = () => {
//   const t = useTranslations("Header");
//   const pathname = usePathname();
//   const locale = useLocale();

//   const [showExperience, setShowExperience] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setShowExperience((prev) => !prev);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   const words = {
//     es: { res: "Currículum", exp: "Experiencia" },
//     en: { res: "Resume", exp: "Experience" }
//   };

//   const currentWords = words[locale] || words['es'];

//   const navLinks = [
//     { href: "/", label: t("projects") },
//     { href: "/certificates", label: t("certificates") },
//     { href: "/contact-me", label: t("contactMe") },
//     { href: "/resume", isAnimated: true },
//   ];

//   // Clase común para el subrayado que ahora aplicaremos al contenido interno
//   const underlineStyles = `
//     relative
//     after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-black
//     after:transition-transform after:duration-300 after:origin-left after:w-full
//   `;

//   return (
//     <div className="w-full text-black flex justify-start items-center ps-3 md:ps-5 bg-yellow-400 py-2 md:py-4 rounded-s-md md:mb-18">
//       <nav className="flex space-x-2 md:space-x-4">
//         {navLinks.map((link) => {
//           const isActive = pathname === link.href;

//           return (
//             <Link
//               key={link.href}
//               href={`/${locale}${link.href}`}
//               className="text-sm md:text-md flex items-center transition-colors duration-300"
//             >
//               {link.isAnimated ? (
//                 /* Contenedor fijo para estabilidad del menú */
//                 <div className="inline-flex justify-start min-w-[95px] md:min-w-[110px] h-full overflow-hidden">
//                   {/* El subrayado ahora vive en este span interno que envuelve solo el Typewriter */}
//                   <span className={`${underlineStyles} ${isActive ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"}`}>
//                     <AnimatePresence mode="wait">
//                       <TypewriterText
//                         key={showExperience ? "exp" : "res"}
//                         text={showExperience ? currentWords.exp : currentWords.res}
//                       />
//                     </AnimatePresence>
//                   </span>
//                 </div>
//               ) : (
//                 /* El subrayado para links normales */
//                 <span className={`${underlineStyles} pb-1 ${isActive ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"}`}>
//                   {link.label}
//                 </span>
//               )}
//             </Link>
//           );
//         })}
//       </nav>
//     </div>
//   );
// };

// export default Header;
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";

type Locale = "es" | "en";

const TypewriterText = ({ text }: { text: string }) => {
  return (
    <motion.span
      initial={{ width: 0 }}
      animate={{ width: "auto" }}
      exit={{ width: 0 }}
      transition={{ duration: 1.0, ease: "easeInOut" }}
      className="inline-block overflow-hidden whitespace-nowrap border-r-2 border-border-subtle pr-1 text-left text-primary"
    >
      {text}
    </motion.span>
  );
};

const Header = () => {
  const t = useTranslations("Header");
  const pathname = usePathname();
  const router = useRouter();

  // Tipamos correctamente el locale
  const locale = useLocale() as Locale;

  const [showExperience, setShowExperience] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowExperience((prev) => !prev);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Tipado fuerte del objeto
  const words: Record<Locale, { res: string; exp: string }> = {
    es: { res: "Currículum", exp: "Experiencia" },
    en: { res: "Resume", exp: "Experience" },
  };

  const currentWords = words[locale];

  const navLinks = [
    { href: "/", label: t("projects") },
    { href: "/certificates", label: t("certificates") },
    { href: "/contact-me", label: t("contactMe") },
    { href: "/resume", isAnimated: true },
  ];

  const switchLocale = () => {
    const newLocale = locale === "en" ? "es" : "en";
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.replace(newPath);
  };

  const underlineStyles = `
    relative 
    after:content-[''] after:absolute after:left-0 after:bottom-0 
    after:h-[2px] after:bg-primary after:w-full
    after:transition-transform after:duration-300 after:origin-left
  `;

  return (
    <header className="w-full backdrop-blur-md bg-surface-bright/40 border border-border-subtle py-3 px-6 rounded-2xl flex items-center justify-between shadow-lg">
      <nav className="flex items-center gap-4 md:gap-6 text-on-surface">
        {navLinks.map((link) => {
          const isActive = pathname === `/${locale}${link.href}` || (link.href === "/" && pathname === `/${locale}`);

          return (
            <Link
              key={link.href}
              href={`/${locale}${link.href}`}
              className="text-sm font-label-caps text-label-caps transition-all text-on-surface-variant hover:text-on-surface flex items-center h-8"
            >
              {link.isAnimated ? (
                <div className="inline-flex justify-start min-w-[95px] md:min-w-[110px] h-full overflow-hidden">
                  <span
                    className={`${underlineStyles} ${
                      isActive
                        ? "after:scale-x-100 text-primary"
                        : "after:scale-x-0 hover:after:scale-x-100"
                    }`}
                  >
                    <AnimatePresence mode="wait">
                      <TypewriterText
                        key={showExperience ? "exp" : "res"}
                        text={
                          showExperience ? currentWords.exp : currentWords.res
                        }
                      />
                    </AnimatePresence>
                  </span>
                </div>
              ) : (
                <span
                  className={`${underlineStyles} pb-1 ${
                    isActive
                      ? "after:scale-x-100 text-primary"
                      : "after:scale-x-0 hover:after:scale-x-100"
                  }`}
                >
                  {link.label}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Language Switcher Button */}
      <button
        onClick={switchLocale}
        className="px-3 py-1.5 border border-border-subtle rounded-xl text-primary font-label-caps text-label-caps hover:bg-surface-bright/10 active:scale-[0.98] transition-all uppercase tracking-wider cursor-pointer"
      >
        {locale === "en" ? "ESP" : "ENG"}
      </button>
    </header>
  );
};

export default Header;
