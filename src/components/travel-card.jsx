import {
  CalendarDays,
  Users,
  MapPin,
  Star,
} from "lucide-react";
import {getDeviceType} from "../utils/device";

import { PrimaryButton } from "./button-primary";

const PLAY_STORE =
  "https://play.google.com/store/apps/details?id=com.joveragroup.tourism&hl=en&pli=1";

const APP_STORE =
  "https://apps.apple.com/us/app/jovera-tourism/id6753887774";


const TourismPackageCard = ({ pkg, lang }) => {
  const isEnglish = lang === "en";

 const handleExplore = () => {
    const device = getDeviceType();

    if (device === "android") {
      window.location.href = PLAY_STORE;
      return;
    }

    if (device === "ios") {
      window.location.href = APP_STORE;
      return;
    }

    // Desktop fallback
    //window.location.href = "/underDevelopment";
    window.location.href = PLAY_STORE;
  
  };




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
            className="w-full h-full "
          />
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-4 space-y-2">

        {/* META
        <div className="flex items-center gap-4 text-xs text-gray-400">
          <span className="flex items-center gap-1">
            <CalendarDays size={14} />
            {pkg.days}
          </span>

          <span className="flex items-center gap-1">
            <Users size={14} />
            {pkg.people}
          </span>
        </div> */}

        <div className="flex items-start justify-between gap-4">

          {/* LEFT */}
          <div>
            <h3 className="text-2xl font-semibold leading-tight line-clamp-1">
              {pkg?.title}
            </h3>

            <p className="text-sm text-gray-400 flex items-center gap-1">
              <MapPin size={14} />
              {pkg?.country}
            </p>
          </div>

          {/* RIGHT: Rating */}
          <div className="flex text-[#D7AA47] p-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={14}
                fill={i < pkg.rating ? "#D7AA47" : "none"}
                stroke="#D7AA47"
              />
            ))}
          </div>
        </div>

        {/* PRICE */}
        <div className="flex items-end gap-2">
          <span
            className="
              text-xl font-semibold
              bg-gradient-to-b from-[#D7AA47] to-[#715925]
              bg-clip-text text-transparent
            "
          >
            {pkg?.price} $
          </span>

          {pkg?.oldPrice && (
            <span className="text-sm text-white/70 line-through">
              {pkg?.oldPrice} $
            </span>
          )}
        </div>

        {/* DESCRIPTION */}
        <p className="h-[60px] text-xs text-gray-400 leading-relaxed overflow-hidden line-clamp-3">
          {pkg?.description}
        </p>

        {/* BUTTON */}
        <PrimaryButton
          children={isEnglish ? "Explore Now" : "استكشف الآن"}
          onClick={handleExplore}
        />
      </div>
    </div>
  );
};

export default TourismPackageCard;
