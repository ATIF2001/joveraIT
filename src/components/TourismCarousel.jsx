import { useEffect, useRef, useState } from "react";
import TourismPackageCard from "./TravelCard";

const CARD_WIDTH = 320;
const GAP = 20;
const STEP = CARD_WIDTH + GAP;

const TourismCarousel = ({ packages, autoSwap = true, delay = 3000, lang }) => {
  const total = packages.length;

  const startIndex = total;
  const [index, setIndex] = useState(startIndex);
  const intervalRef = useRef(null);
  const isHovered = useRef(false);

  const cloned =
    total > 1 ? [...packages, ...packages, ...packages] : packages;

  /* ---------------- AUTO PLAY ---------------- */
  const startAuto = () => {
    if (!autoSwap || total <= 1) return;

    stopAuto();
    intervalRef.current = setInterval(() => {
      if (!isHovered.current) {
        moveNext();
      }
    }, delay);
  };

  const stopAuto = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAuto();
    return stopAuto;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [delay, autoSwap, total]);

  /* ---------------- SAFE MOVE ---------------- */
  const moveNext = () => {
    setIndex((prev) =>
      prev + 1 >= total * 2 ? startIndex : prev + 1
    );
  };

  const movePrev = () => {
    setIndex((prev) =>
      prev - 1 < total ? startIndex + total - 1 : prev - 1
    );
  };

  if (total === 0) return null;

  return (
    <div className="relative w-full flex justify-center overflow-hidden">
      <div className="w-full relative">

        {/* LEFT ARROW */}
        <button
          onClick={movePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20
                     bg-black/70 hover:bg-black text-white
                     w-10 h-10 rounded-full flex items-center justify-center"
        >
          ‹
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={moveNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20
                     bg-black/70 hover:bg-black text-white
                     w-10 h-10 rounded-full flex items-center justify-center"
        >
          ›
        </button>

        {/* TRACK */}
        <div
          className="flex gap-5 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${index * STEP}px)` }}
          onMouseEnter={() => {
            isHovered.current = true;
            stopAuto();
          }}
          onMouseLeave={() => {
            isHovered.current = false;
            startAuto();
          }}
        >
          {cloned.map((pkg, i) => (
            <TourismPackageCard
              key={`${pkg?.id}-${i}`}
              pkg={pkg}
              lang={lang}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TourismCarousel;
