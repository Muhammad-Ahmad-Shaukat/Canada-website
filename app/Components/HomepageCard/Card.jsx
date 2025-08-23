import React from "react";
import { ArrowRight } from "lucide-react";

export default function Card({ image, title }) {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Image */}
      <div className="w-full h-56 overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Button-style Title */}
      <button className="mt-4 w-full flex items-center justify-between bg-[#0f3b52] text-white font-bold px-6 py-3 rounded-full shadow-md hover:bg-[#134a65] transition">
        {title}
        <ArrowRight size={20} />
      </button>
    </div>
  );
}
