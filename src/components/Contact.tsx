"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { FaPhone } from "react-icons/fa";

import { useTranslations } from "next-intl";

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
    <div className="md:px-4 text-neutral-200 animate-fadeIn relative">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-neutral-300 font-semibold mb-2"
          >
            {t("nameLabel")}
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder={t("namePlaceholder")}
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border-2 border-neutral-700 focus:border-neutral-300 outline-none rounded-md bg-neutral-800"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-neutral-300 font-semibold mb-2"
          >
            {t("emailLabel")}
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder={t("emailPlaceholder")}
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border-2 border-neutral-700 focus:border-neutral-300 outline-none rounded-md bg-neutral-800"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="subject"
            className="block text-neutral-300 font-semibold mb-2"
          >
            {t("messageLabel")}
          </label>
          <textarea
            name="subject"
            id="subject"
            rows={4}
            placeholder={t("messagePlaceholder")}
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-2 border-2 border-neutral-700 focus:border-neutral-300 outline-none rounded-md resize-none bg-neutral-800"
          />
        </div>

        <button
          type="submit"
          className="flex items-center gap-2 bg-neutral-600 cursor-pointer text-white font-semibold py-2 px-4 rounded transition-colors hover:bg-neutral-700"
        >
          <span>{t("sendButton")}</span>
        </button>
      </form>
      <div className="flex p-2 gap-4 mb-8 lg:absolute right-4 -bottom-8 mt-8 lg:flex-row-reverse">
        <button
          onClick={() => setShowPhone(!showPhone)}
          className="flex items-center gap-2 cursor-pointer text-yellow-400 font-semibold rounded transition-colors hover:text-yellow-500"
        >
          <FaPhone size={30} />
        </button>{" "}
        {showPhone && <p className="text-lg text-white">+54 9 11 6269 9719</p>}
      </div>
    </div>
  );
};

export default Contact;
