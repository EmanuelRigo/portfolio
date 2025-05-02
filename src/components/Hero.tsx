"use client";
import React from "react";
import { useAppContext } from "@/app/context/AppContext";

const Hero = () => {
  const { hoveredIcon } = useAppContext();
  return (
    <section className="flex flex-col items-start text-center px-4  text-white">
      <h1 className="text-2xl md:text-4xl font-bold ">Emanuel Rigo</h1>
      <h2 className="text-2xl font-semibold text-yellow-400 mb-3">
        Fullstack Developer
      </h2>
      <p className="text-neutral-300 text-start">
        Transforming ideas into seamless web experiences
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
