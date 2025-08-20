import React from "react";
import Link from "next/link";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="h-full flex items-center justify-center bg-neutral-900 text-white px-4">
      <div className="text-center max-w-md">
        <FaExclamationTriangle className="text-6xl text-orange-500 mx-auto mb-4" />
        <h1 className="text-5xl font-bold mb-4">404</h1>
        <p className="text-xl mb-6">
          Oops! The page you’re looking for doesn’t exist.
        </p>
        <Link
          href="/"
          className="bg-orange-500 hover:bg-orange-600 text-black px-6 py-3 rounded-md transition"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
