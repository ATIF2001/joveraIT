import {
  CalendarDays,
  Users,
  MapPin,
  Star,
} from "lucide-react";

import { PrimaryButton2 } from "./button-primary";

// components/travel-card.jsx
const TourismPackageCard = ({ pkg, lang }) => {
  const isEnglish = lang === "en";

  return (
    <div className="min-w-[300px] max-w-[300px] bg-[#0B0B0B] rounded-xl overflow-hidden text-white border border-[#1E1E1E]">
      
      {/* IMAGE */}
      <div className="relative h-[180px]">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-full object-cover"
        />

        {/* FLAG */}
        <div className="absolute bottom-3 left-3 w-10 h-10 rounded-full overflow-hidden border-[3px] border-white bg-black">
          <img
            src={pkg.flag}
            alt="flag"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-4 space-y-2">
        
        {/* META */}
        <div className="flex items-center gap-4 text-xs text-gray-400">
          <span className="flex items-center gap-1">
            <CalendarDays size={14} />
            {pkg.days} {isEnglish ? "Days" : "أيام"}
          </span>

          <span className="flex items-center gap-1">
            <Users size={14} />
            {pkg.people} {isEnglish ? "People Going" : "عدد الأشخاص"}
          </span>
        </div>

        <div className="flex items-start justify-between gap-4">

          {/* LEFT: Title + Location */}
          <div>
            <h3 className="text-2xl font-semibold leading-tight">
              {pkg.title}
            </h3>

            <p className="text-sm text-gray-400 flex items-center gap-1">
              <MapPin size={14} />
              {pkg.country}
            </p>
          </div>

          {/* RIGHT: Rating */}
          <div className="flex text-[#D7AA47] text-sm">
            {"★★★★★".slice(0, pkg.rating)}
          </div>

        </div>

        {/* PRICE */}
        <div className="flex items-end gap-2">
          {/* NEW PRICE */}
          <span
            className="
              text-xl
              font-semibold
              bg-gradient-to-b from-[#D7AA47] to-[#715925]
              bg-clip-text
              text-transparent
            "
          >
            {pkg.price} $
          </span>

          {/* OLD PRICE */}
          {pkg.oldPrice && (
            <span className="text-sm text-white/70 line-through">
              {pkg.oldPrice} $
            </span>
          )}
        </div>

        {/* DESCRIPTION */}
      <p className="h-[60px] text-xs text-gray-400 leading-relaxed overflow-hidden line-clamp-3">
  {pkg.description}
</p>

        {/* BUTTON */}
        <PrimaryButton2  
          children={isEnglish ? "Explore Now" : "استكشف الآن"} 
          link={"/underDevelopment"}  
        />
      </div>
    </div>
  );
};

export default TourismPackageCard;
