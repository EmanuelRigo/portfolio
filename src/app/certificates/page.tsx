import React from "react";
import { HiOutlineDocumentCheck } from "react-icons/hi2";
import { GiTrophyCup } from "react-icons/gi"; // 🏆 importamos el ícono
import { FaMedal } from "react-icons/fa";

const certificates = [
  {
    title: "JavaScript",
    url: "https://pub.coderhouse.com/legacy-certificates/661c2588aae6b16333e0066d?lang=es",
    topTen: true,
  },
  {
    title: "ReactJs",
    url: "https://pub.coderhouse.com/legacy-certificates/6400e53c5da0b8000e3d3cf9?lang=es",
  },
  {
    title: "SQL",
    url: "https://pub.coderhouse.com/legacy-certificates/66d1dc8a97c1b739a017b773?lang=es",
    topTen: true,
  },
  {
    title: "Programación Backend I",
    url: "https://pub.coderhouse.com/legacy-certificates/6735069133356916d876914d?lang=es",
    topTen: true,
  },
  {
    title: "Programación Backend II",
    url: "https://pub.coderhouse.com/legacy-certificates/6785d66c9f7020f017195d1e?lang=es",
    topTen: true,
  },
  {
    title: "Programación Backend III",
    url: "https://pub.coderhouse.com/legacy-certificates/67e492cf7744fbc9a11a712d?lang=es",
    topTen: true,
  },
];

const page = () => {
  return (
    <div className="flex h-full w-full px-4 gap-4">
      <div className="h-full flex-grow scroll-y-auto">
        <div className="flex flex-col gap-4">
          {certificates.map((cert, idx) => (
            <a
              key={idx}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-neutral-800 hover:bg-neutral-700 text-white p-4 rounded-lg shadow-md transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <HiOutlineDocumentCheck className="text-green-400 text-2xl" />
                <span>{cert.title}</span>
              </div>
              {cert.topTen && (
                <FaMedal className="text-yellow-400 text-2xl" title="Top 10" />
              )}
            </a>
          ))}
        </div>
      </div>
      <div className="h-full w-[300px] flex items-center">
        <div className="h-full w-full bg-amber-200"></div>
      </div>
    </div>
  );
};

export default page;
