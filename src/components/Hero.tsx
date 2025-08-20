"use client";
import React from "react";
import { useAppContext } from "@/app/[locale]/context/AppContext";

import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("hero");
  const { hoveredIcon } = useAppContext();
  return (
    <section className="flex flex-col items-start text-center md:px-4  text-white">
      <h1 className="text-2xl md:text-4xl font-bold ">Emanuel Rigo</h1>
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
