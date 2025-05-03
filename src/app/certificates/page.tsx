import React from "react";

const certificates = [
  {
    title: "Desarrollo Web",
    url: "https://www.coderhouse.com/certificados/64e7d5cce8a30e000f35cb36",
  },
  {
    title: "JavaScript",
    url: "https://www.coderhouse.com/certificados/64f10998db10a8000f5948fa",
  },
  {
    title: "React JS",
    url: "https://www.coderhouse.com/certificados/6505fc9c3b62ed000f041e35",
  },
  {
    title: "Backend",
    url: "https://www.coderhouse.com/certificados/662fb9fd234e20000f41aa2d",
  },
];

const page = () => {
  return (
    <div className="px-6 py-10">
      <h3 className="text-2xl font-bold mb-6 text-white">Certificates</h3>
      <div className="grid md:grid-cols-2 gap-4">
        {certificates.map((cert, idx) => (
          <a
            key={idx}
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-neutral-800 hover:bg-neutral-700 text-white p-4 rounded-lg shadow-md transition-all"
          >
            {cert.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default page;
