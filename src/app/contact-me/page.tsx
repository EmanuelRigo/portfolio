import React from "react";
import Contact from "@/components/Contact";

// ✅ Metadata para esta página
export const metadata = {
  title: "Emanuel R. | Contacto",
  description: "Página de contacto para que puedas comunicarte conmigo.",
};

const Page = () => {
  return (
    <div>
      <Contact />
    </div>
  );
};

export default Page;
