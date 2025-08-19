"use client";
import React from "react";
import { useAppContext } from "@/app/context/AppContext";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { hoveredIcon } = useAppContext();
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const nextLang = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(nextLang);
  };

  return (
    <section className="flex flex-col items-start text-center md:px-4 text-white relative">
      {/* Botón de cambio de idioma */}
      <div className="self-end absolute -top-2 lg:top-8 right-2 lg:right-1 ">
        <button
          onClick={toggleLanguage}
          className=" text-yellow-400 px-4 py-2 rounded"
        >
          {i18n.language === "en" ? "Esp" : "Eng"}
        </button>
      </div>

      <h1 className="text-2xl md:text-4xl font-bold">Emanuel Rigo</h1>
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
          {hoveredIcon ? ` with ${hoveredIcon}` : ""}
        </span>
        .
      </p>
    </section>
  );
};

export default Hero;
