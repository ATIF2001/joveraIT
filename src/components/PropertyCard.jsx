import React, { useState } from "react";
import { Link } from "react-router-dom";


export default function PropertyCard({ property, lang }) {
  const [expanded, setExpanded] = useState(false);
  const isEn = lang === "en";

  return (
    <div className="bg-[#111] rounded-2xl overflow-hidden shadow-lg border border-white/5">
      
      {/* Image */}
      <img
        src={property.image}
        alt={property.title}
        className="h-60 w-full object-cover"
      />

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <h3
          className={`text-lg font-semibold tracking-wide ${
            isEn ? "text-left" : "text-right"
          }`}
        >
          {property.title}
        </h3>

        {/* Description */}
        <p
          className={`line-clamp-4 text-gray-400 text-sm ${
            expanded ? "" : "h-[80px] overflow-hidden"
          } ${isEn ? "text-left" : "text-right"}`}
        >
          {property.description}
          <span
            onClick={() => setExpanded(!expanded)}
            className={`ml-1 cursor-pointer hover:underline ${
              isEn ? "text-white" : "text-white"
            }`}
          >
            {expanded ? (isEn ? "Read Less" : "اقرأ أقل") : (isEn ? "Read More" : "اقرأ المزيد")}
          </span>
        </p>

        {/* Meta */}
        <div className="flex flex-wrap gap-2 text-xs">
          {property.meta.map((tag, index) => (
            <span
              key={index}
              className="flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 text-gray-200"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wide">
              {isEn ? "Price" : "السعر"}
            </p>
            <p className="text-lg font-semibold">{property.price}</p>
          </div>
        <Link
  to="/UnderDevelopment"
  className="inline-block bg-gradient-to-r from-[#D7AA47] to-[#b8933d] text-black px-5 py-2 rounded-lg font-medium hover:opacity-90 transition"
>
  {isEn ? "View Property Details" : "عرض تفاصيل العقار"}
</Link>

          {/* <button className="bg-gradient-to-r from-[#D7AA47] to-[#b8933d] text-black px-5 py-2 rounded-lg font-medium hover:opacity-90 transition">
            {isEn ? "View Property Details" : "عرض تفاصيل العقار"}
          </button> */}
          
        </div>
      </div>
    </div>
  );
}
