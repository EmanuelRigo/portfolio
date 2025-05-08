"use client";

import { useState } from "react";
import { FiMail } from "react-icons/fi";
import { FaMapMarkerAlt, FaLinkedin, FaFileAlt } from "react-icons/fa";
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
    <div className="w-44 h-full bg-neutral-800 text-white rounded-lg p-4 flex flex-col items-start space-y-6 text-sm">
      {/* Ubicación */}
      <div className="flex items-center space-x-2">
        <FaMapMarkerAlt />
        <span>Buenos Aires - Arg</span>
      </div>

      {/* CV */}
      <a
        href="/cv/C.V. Emanuel Rigo.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 hover:text-green-400 transition-colors"
      >
        <FaFileAlt />
        <span>Download CV</span>
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/emanuelrigo"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 hover:text-blue-400 transition-colors"
      >
        <FaLinkedin />
        <span>LinkedIn</span>
      </a>

      {/* Email */}
      <div className="flex flex-col space-y-1">
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
              className="hover:text-lime-400 transition-colors"
              title="Copiar al portapapeles"
            >
              <IoCopyOutline />
            </button>
            {copied && <span className="text-green-400 text-xs">Copiado</span>}
          </div>
        )}
      </div>
    </div>
  );
};

export default InfoColumn;
