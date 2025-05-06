"use client";

import React from "react";
import { HiOutlineDocumentCheck } from "react-icons/hi2";
import { FaMedal } from "react-icons/fa";
import Image from "next/image";

type Props = {
  title: string;
  url: string;
  image: string;
  topTen?: boolean;
};

const CertificateCard = ({ title, url, image, topTen = false }: Props) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-neutral-950  text-white p-3 rounded-lg transition-[height] duration-700 group relative h-12 hover:h-64"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <HiOutlineDocumentCheck className="text-green-400 text-2xl" />
          <span>{title}</span>
        </div>
        <FaMedal
          className={`text-xl z-20 ${
            topTen ? "text-yellow-400" : "text-neutral-400"
          }`}
          title="Top 10"
        />
      </div>

      <div className="w-3/4 h-full overflow-hidden right-0 top-0 rounded-md  absolute">
        <Image
          src={`/images/${image}`}
          alt="Certificado"
          height={800}
          width={800}
          className="opacity-0  group-hover:opacity-100 transition-opacity duration-500 mask-l-from-60% mask-r-from-60%"
        />
      </div>
    </a>
  );
};

export default CertificateCard;
