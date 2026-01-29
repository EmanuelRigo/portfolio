
// "use client";

// import { useState, ChangeEvent, FormEvent } from "react";
// import { FaPhone, FaCheckCircle, FaExclamationTriangle, FaTimesCircle } from "react-icons/fa";
// import { useTranslations } from "next-intl"; // Importación correcta igual que en Resume
// import { motion, AnimatePresence } from "framer-motion";

// interface FormData {
//   name: string;
//   email: string;
//   subject: string;
// }

// const Contact = () => {
//   // Usamos los mismos hooks que en tu ResumePage
//   const t = useTranslations("Contact");
//   const tAlert = useTranslations("alert");

//   const [formData, setFormData] = useState<FormData>({
//     name: "",
//     email: "",
//     subject: "",
//   });
  
//   const [showPhone, setShowPhone] = useState(false);
//   const [status, setStatus] = useState<{ type: "success" | "error" | "warning", msg: string } | null>(null);

//   const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const showNotification = (type: "success" | "error" | "warning", msg: string) => {
//     setStatus({ type, msg });
//     setTimeout(() => setStatus(null), 5000);
//   };

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     // VALIDACIÓN: Usamos tAlert igual que usaste t("bullet1") en Resume
//     if (!formData.name || !formData.email || !formData.subject) {
//       showNotification("warning", tAlert("jobTitle")); 
//       return;
//     }

//     try {
//       const response = await fetch("https://formsubmit.co/ajax/70ce9dbd3ca2531867135cc4f5555cd2", {
//         method: "POST",
//         headers: { "Content-Type": "application/json", Accept: "application/json" },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         setFormData({ name: "", email: "", subject: "" });
//         // Si agregas "success" a tu JSON de alert, lo llamas así:
//         showNotification("success", tAlert("success")); 
//       } else {
//         throw new Error();
//       }
//     } catch (error) {
//   const message =
//     error?.message ||
//     error?.response?.data?.message ||
//     "Ocurrió un error inesperado";

//   showNotification("error", tAlert(message));
// }
//   };

//   return (
//     <div className="md:px-4 text-neutral-200 animate-fadeIn relative">
      
//       {/* VENTANA DE NOTIFICACIÓN (Basada en tu JSON "alert") */}
//       <AnimatePresence>
//         {status && (
//           <motion.div
//             key={status.msg} // El cambio de mensaje dispara la animación
//             initial={{ opacity: 0, y: -50, x: "-50%", scale: 0.9 }}
//             animate={{ opacity: 1, y: 0, x: "-50%", scale: 1 }}
//             exit={{ opacity: 0, y: -20, x: "-50%", scale: 0.9 }}
//             className={`fixed top-10 left-1/2 z-[100] flex items-center gap-4 px-8 py-5 rounded-xl border-2 shadow-2xl min-w-[350px] md:min-w-[450px] backdrop-blur-md ${
//               status.type === "success" ? "bg-neutral-900/95 border-green-500" : 
//               status.type === "warning" ? "bg-neutral-900/95 border-yellow-400" : 
//               "bg-neutral-900/95 border-red-500"
//             }`}
//           >
//             <div className="text-3xl">
//               {status.type === "success" && <FaCheckCircle className="text-green-500" />}
//               {status.type === "warning" && <FaExclamationTriangle className="text-yellow-400" />}
//               {status.type === "error" && <FaTimesCircle className="text-red-500" />}
//             </div>
            
//             <div className="flex flex-col text-left">
//               <span className="text-xs uppercase tracking-widest font-bold text-neutral-500 mb-1">
//                 {tAlert("title")}
//               </span>
//               <p className="text-lg font-semibold text-white leading-tight">
//                 {status.msg}
//               </p>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block text-neutral-300 font-semibold mb-2">{t("nameLabel")}</label>
//           <input
//             type="text"
//             name="name"
//             placeholder={t("namePlaceholder")}
//             value={formData.name}
//             onChange={handleChange}
//             className="w-full px-4 py-3 border-2 border-neutral-700 focus:border-yellow-400 outline-none rounded-md bg-neutral-800 transition-all"
//           />
//         </div>

//         <div>
//           <label className="block text-neutral-300 font-semibold mb-2">{t("emailLabel")}</label>
//           <input
//             type="email"
//             name="email"
//             placeholder={t("emailPlaceholder")}
//             value={formData.email}
//             onChange={handleChange}
//             className="w-full px-4 py-3 border-2 border-neutral-700 focus:border-yellow-400 outline-none rounded-md bg-neutral-800 transition-all"
//           />
//         </div>

//         <div>
//           <label className="block text-neutral-300 font-semibold mb-2">{t("messageLabel")}</label>
//           <textarea
//             name="subject"
//             rows={4}
//             placeholder={t("messagePlaceholder")}
//             value={formData.subject}
//             onChange={handleChange}
//             className="w-full px-4 py-3 border-2 border-neutral-700 focus:border-yellow-400 outline-none rounded-md resize-none bg-neutral-800 transition-all"
//           />
//         </div>

//         <div className="flex justify-between items-center mt-8 h-12">
//           <button
//             type="submit"
//             className="bg-neutral-700 hover:bg-neutral-600 text-white font-bold py-2 px-8 rounded-md transition-all active:scale-95 border border-neutral-600 shadow-lg"
//           >
//             {t("sendButton")}
//           </button>

//           {/* CÁPSULA DEL TELÉFONO */}
//           <div className="flex items-center bg-neutral-800/80 rounded-full p-1 border border-neutral-700 shadow-xl">
//             <AnimatePresence mode="wait">
//               {showPhone && (
//                 <motion.div
//                   initial={{ width: 0, opacity: 0 }}
//                   animate={{ width: "auto", opacity: 1 }}
//                   exit={{ width: 0, opacity: 0 }}
//                   className="overflow-hidden"
//                 >
//                   <p className="text-md text-yellow-400 font-mono px-5 whitespace-nowrap tracking-wider">
//                     +54 9 11 6269 9719
//                   </p>
//                 </motion.div>
//               )}
//             </AnimatePresence>
            
//             <button
//               type="button"
//               onClick={() => setShowPhone(!showPhone)}
//               className={`p-3 rounded-full transition-all duration-500 ${
//                 showPhone ? "bg-yellow-400 text-black rotate-[360deg]" : "bg-neutral-700 text-yellow-400 hover:bg-neutral-600"
//               }`}
//             >
//               <FaPhone size={18} />
//             </button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Contact;
"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import {
  FaPhone,
  FaCheckCircle,
  FaExclamationTriangle,
  FaTimesCircle,
} from "react-icons/fa";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";

interface FormData {
  name: string;
  email: string;
  subject: string;
}

type StatusType = "success" | "error" | "warning";

const Contact = () => {
  const t = useTranslations("Contact");
  const tAlert = useTranslations("alert");

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
  });

  const [showPhone, setShowPhone] = useState(false);
  const [status, setStatus] = useState<{
    type: StatusType;
    msg: string;
  } | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const showNotification = (type: StatusType, msg: string) => {
    setStatus({ type, msg });
    setTimeout(() => setStatus(null), 5000);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validación
    if (!formData.name || !formData.email || !formData.subject) {
      showNotification("warning", tAlert("jobTitle"));
      return;
    }

    try {
      const response = await fetch(
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

      if (!response.ok) {
        throw new Error("error");
      }

      setFormData({ name: "", email: "", subject: "" });
      showNotification("success", tAlert("success"));
    } catch (error: unknown) {
      let message = "unexpected";

      if (error instanceof Error) {
        message = error.message;
      }

      showNotification("error", tAlert(message));
    }
  };

  return (
    <div className="md:px-4 text-neutral-200 animate-fadeIn relative">
      {/* NOTIFICACIÓN */}
      <AnimatePresence>
        {status && (
          <motion.div
            key={status.msg}
            initial={{ opacity: 0, y: -50, x: "-50%", scale: 0.9 }}
            animate={{ opacity: 1, y: 0, x: "-50%", scale: 1 }}
            exit={{ opacity: 0, y: -20, x: "-50%", scale: 0.9 }}
            className={`fixed top-10 left-1/2 z-[100] flex items-center gap-4 px-8 py-5 rounded-xl border-2 shadow-2xl min-w-[350px] md:min-w-[450px] backdrop-blur-md ${
              status.type === "success"
                ? "bg-neutral-900/95 border-green-500"
                : status.type === "warning"
                ? "bg-neutral-900/95 border-yellow-400"
                : "bg-neutral-900/95 border-red-500"
            }`}
          >
            <div className="text-3xl">
              {status.type === "success" && (
                <FaCheckCircle className="text-green-500" />
              )}
              {status.type === "warning" && (
                <FaExclamationTriangle className="text-yellow-400" />
              )}
              {status.type === "error" && (
                <FaTimesCircle className="text-red-500" />
              )}
            </div>

            <div className="flex flex-col text-left">
              <span className="text-xs uppercase tracking-widest font-bold text-neutral-500 mb-1">
                {tAlert("title")}
              </span>
              <p className="text-lg font-semibold text-white leading-tight">
                {status.msg}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-neutral-300 font-semibold mb-2">
            {t("nameLabel")}
          </label>
          <input
            type="text"
            name="name"
            placeholder={t("namePlaceholder")}
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-neutral-700 focus:border-yellow-400 outline-none rounded-md bg-neutral-800 transition-all"
          />
        </div>

        <div>
          <label className="block text-neutral-300 font-semibold mb-2">
            {t("emailLabel")}
          </label>
          <input
            type="email"
            name="email"
            placeholder={t("emailPlaceholder")}
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-neutral-700 focus:border-yellow-400 outline-none rounded-md bg-neutral-800 transition-all"
          />
        </div>

        <div>
          <label className="block text-neutral-300 font-semibold mb-2">
            {t("messageLabel")}
          </label>
          <textarea
            name="subject"
            rows={4}
            placeholder={t("messagePlaceholder")}
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 border-2 border-neutral-700 focus:border-yellow-400 outline-none rounded-md resize-none bg-neutral-800 transition-all"
          />
        </div>

        <div className="flex justify-between items-center mt-8 h-12">
          <button
            type="submit"
            className="bg-neutral-700 hover:bg-neutral-600 text-white font-bold py-2 px-8 rounded-md transition-all active:scale-95 border border-neutral-600 shadow-lg"
          >
            {t("sendButton")}
          </button>

          {/* TELÉFONO */}
          <div className="flex items-center bg-neutral-800/80 rounded-full p-1 border border-neutral-700 shadow-xl">
            <AnimatePresence mode="wait">
              {showPhone && (
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "auto", opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <p className="text-md text-yellow-400 font-mono px-5 whitespace-nowrap tracking-wider">
                    +54 9 11 6269 9719
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              type="button"
              onClick={() => setShowPhone(!showPhone)}
              className={`p-3 rounded-full transition-all duration-500 ${
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
