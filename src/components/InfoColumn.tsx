"use client";

import { useState } from "react";
import { FiMail } from "react-icons/fi";
import {
  FaMapMarkerAlt,
  FaLinkedin,
  FaFileAlt,
  FaGithub,
} from "react-icons/fa";
import { IoCopyOutline } from "react-icons/io5";

const InfoColumn = () => {
  const [showEmail, setShowEmail] = useState(false);
  const [copied, setCopied] = useState(false);
  const email = "emanuel.rigo@email.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="w-full md:w-44  md:h-full  md:bg-neutral-800 text-white rounded-lg pe-5 md:p-4 flex md:flex-col space-y-6 text-sm order-2 md:order-1 items-center md:items-start  justify-between md:justify-start ">
      {/* Ubicación */}
      <div className="flex items-center space-x-2 mb-0 md:mb-4">
        <FaMapMarkerAlt />
        <span>Buenos Aires - Arg</span>
      </div>

      {/* CV */}
      <a
        href="/cv/C.V. Emanuel Rigo.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 hover:text-green-400 transition-colors mb-0 md:mb-4"
      >
        <FaFileAlt />
        <span>CV</span>
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/emanuelrigo"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 hover:text-blue-400 transition-colors mb-0 md:mb-4"
      >
        <FaLinkedin />
        <span>LinkedIn</span>
      </a>

      {/* Email */}
      <div className="md:flex flex-col space-y-1 mb-0 md:mb-4 hidden ">
        <button
          onClick={() => setShowEmail(!showEmail)}
          className="flex items-center space-x-2 hover:text-cyan-400 transition-colors"
        >
          <FiMail />
          <span>Email</span>
        </button>
        {showEmail && (
          <div className="flex items-center space-x-2">
            <p className="text-neutral-300 text-xs">{email}</p>
            <button
              onClick={handleCopy}
              className="hover:text-lime-400 transition-colors md:mb-4"
              title="Copiar al portapapeles"
            >
              <IoCopyOutline />
            </button>
            {copied && <span className="text-green-400 text-xs">Copiado</span>}
          </div>
        )}
      </div>
      <a
        href="https://github.com/EmanuelRigo"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 hover:text-black transition-colors mb-0 md:mb-4"
      >
        <FaGithub />
        <span className="hidden lg:block">GitHub</span>
      </a>
    </div>
  );
};

export default InfoColumn;
