import React from "react";
import arrow from "../../src/assets/landing-pages/Business-Services/services/arrow.png";

export default function ServiceCard({ service, lang }) {
  return (
    <div className="bg-[#141414] rounded-3xl p-5 flex flex-col h-full hover:bg-[#191919] transition">

      {/* Image */}
      <div className="mb-5 overflow-hidden rounded-2xl">
        <img
          src={service.image}
          alt={service.title[lang]}
          className="w-full h-48 object-cover"
        />
      </div>

      {/* Content */}
      <div className={`flex flex-col flex-grow ${lang === "en" ? "text-left" : "text-right"}`}>
        <h3 className="text-lg font-semibold text-white mb-3">
          {service.title[lang]}
        </h3>

        <p className="text-sm text-white/70 leading-relaxed mb-6">
          {service.description[lang]}
        </p>

        {/* CTA */}
       <button
  className={`mt-auto flex items-center gap-2 text-[#D4AF37] text-sm font-medium group ${
    lang === "en" ? "mr-auto" : "ml-auto"
  }`}
>
  <span className={"transform transition group-hover:-translate-x-1 "}>
    <img src={arrow} alt="arrow" />
  </span>
  {lang === "en" ? "Read More" : "اقرأ المزيد"}
</button>

      </div>
    </div>
  );
}