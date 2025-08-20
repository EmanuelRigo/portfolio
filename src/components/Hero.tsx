"use client";
import React from "react";
import { useAppContext } from "@/app/[locale]/context/AppContext";
import { useTranslations, useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

const Hero = () => {
  const t = useTranslations("hero");
  const { hoveredIcon } = useAppContext();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = () => {
    const newLocale = locale === "en" ? "es" : "en";
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.replace(newPath);
  };

  return (
    <section className="flex flex-col items-start text-center md:px-4 text-white relative">
      <div className="flex justify-between w-full items-center">
        <h1 className="text-2xl md:text-4xl font-bold ">Emanuel Rigo</h1>
        <button
          onClick={switchLocale}
          className=" text-yellow-400  text-sm absolute p-4 right-0 lg:right-6 -top-4 lg:top-6 transition-colors hover:text-yellow-300"
        >
          {locale === "en" ? "ESP" : "ENG"}
        </button>
      </div>
      <h2 className="text-2xl font-semibold text-yellow-400 mb-3">
        {t("heroSubtitle")}
      </h2>
      <p className="text-neutral-300 text-start">
        {t("heroDescription")}
        <span
          className={`transition-opacity duration-700 ${
            hoveredIcon ? "opacity-100" : "opacity-0"
          }`}
        >
          {hoveredIcon ? ` ${t("with")} ${hoveredIcon}` : ""}
        </span>
        .
      </p>
    </section>
  );
};

export default Hero;
