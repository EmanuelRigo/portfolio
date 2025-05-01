import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col items-start text-center px-4  text-white">
      <h1 className="text-2xl md:text-4xl font-bold ">Emanuel Rigo</h1>
      <h2 className="text-2xl font-semibold text-yellow-400 mb-3">
        Fullstack Developer
      </h2>
      <p className="text-lg md:text-xl text-neutral-300 max-w-xl">
        I build modern web applications using HTML.
      </p>
    </section>
  );
};

export default Hero;
