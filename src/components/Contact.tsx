
"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { FaPhone } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";

interface FormData {
  name: string;
  email: string;
  subject: string;
}

const Contact = () => {
  const t = useTranslations("Contact");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
  });
  const [showPhone, setShowPhone] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await fetch(
        "https://formsubmit.co/ajax/70ce9dbd3ca2531867135cc4f5555cd2",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      setFormData({ name: "", email: "", subject: "" });
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Something went wrong. Try again later.");
    }
  };

  return (
    <div className="md:px-4 text-neutral-200 animate-fadeIn">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-neutral-300 font-semibold mb-2">
            {t("nameLabel")}
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder={t("namePlaceholder")}
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border-2 border-neutral-700 focus:border-yellow-400 outline-none rounded-md bg-neutral-800 transition-colors"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-neutral-300 font-semibold mb-2">
            {t("emailLabel")}
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder={t("emailPlaceholder")}
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border-2 border-neutral-700 focus:border-yellow-400 outline-none rounded-md bg-neutral-800 transition-colors"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="subject" className="block text-neutral-300 font-semibold mb-2">
            {t("messageLabel")}
          </label>
          <textarea
            name="subject"
            id="subject"
            rows={4}
            placeholder={t("messagePlaceholder")}
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-2 border-2 border-neutral-700 focus:border-yellow-400 outline-none rounded-md resize-none bg-neutral-800 transition-colors"
          />
        </div>

        {/* SECCIÓN INFERIOR ALINEADA */}
        <div className="flex justify-between items-center mt-8 h-12">
          <button
            type="submit"
            className="bg-neutral-700 hover:bg-neutral-600 text-white font-bold py-2 px-6 rounded-md transition-all active:scale-95 shadow-lg border border-neutral-600"
          >
            {t("sendButton")}
          </button>

          <div className="flex items-center bg-neutral-800/50 rounded-full p-1 border border-neutral-700 shadow-inner">
            <AnimatePresence mode="wait">
              {showPhone && (
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "auto", opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <p className="text-sm md:text-md text-yellow-400 font-mono px-4 whitespace-nowrap">
                    +54 9 11 6269 9719
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
            
            <button
              type="button"
              onClick={() => setShowPhone(!showPhone)}
              className={`p-3 rounded-full transition-all duration-300 ${
                showPhone 
                ? "bg-yellow-400 text-black rotate-[360deg]" 
                : "bg-neutral-700 text-yellow-400 hover:bg-neutral-600"
              }`}
            >
              <FaPhone size={18} />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;