import CertificateCard from "@/components/CertificateCard";
import React from "react";

export const metadata = {
  title: "Emanuel R. | Cortificados",
  description: "Página de contacto para que puedas comunicarte conmigo.",
};

const certificates = [
  {
    title: "JavaScript",
    url: "https://pub.coderhouse.com/legacy-certificates/661c2588aae6b16333e0066d?lang=es",
    topTen: true,
    image: "661c2588aae6b16333e0066d.png",
  },
  {
    title: "ReactJs",
    url: "https://pub.coderhouse.com/legacy-certificates/6400e53c5da0b8000e3d3cf9?lang=es",
    image: "6400e53c5da0b8000e3d3cf9.png",
  },
  {
    title: "SQL",
    url: "https://pub.coderhouse.com/legacy-certificates/66d1dc8a97c1b739a017b773?lang=es",
    topTen: true,
    image: "66d1dc8a97c1b739a017b773.png",
  },
  {
    title: "Programación Backend I",
    url: "https://pub.coderhouse.com/legacy-certificates/6735069133356916d876914d?lang=es",
    topTen: true,
    image: "6735069133356916d876914d.png",
  },
  {
    title: "Programación Backend II",
    url: "https://pub.coderhouse.com/legacy-certificates/6785d66c9f7020f017195d1e?lang=es",
    topTen: true,
    image: "6785d66c9f7020f017195d1e.png",
  },
  {
    title: "Programación Backend III",
    url: "https://pub.coderhouse.com/legacy-certificates/67e492cf7744fbc9a11a712d?lang=es",
    topTen: true,
    image: "67e492cf7744fbc9a11a712d.png",
  },
];

const Page = () => {
  return (
    <div className="flex flex-col  w-full md:px-4 gap-4 animate-fadeIn">
      {certificates.map((cert, idx) => (
        <CertificateCard
          key={idx}
          title={cert.title}
          url={cert.url}
          image={cert.image}
          topTen={cert.topTen}
        />
      ))}
    </div>
  );
};

export default Page;
