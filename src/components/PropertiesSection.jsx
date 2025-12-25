import React from "react";
import dubai from "../../src/assets/landing-pages/Real-Estate/properties/dubai.png";
import AbuDhabi from "../../src/assets/landing-pages/Real-Estate/properties/AbuDhabi.png";
import Sharjah from "../../src/assets/landing-pages/Real-Estate/properties/sharjah.png";
import RasAlKhama from "../../src/assets/landing-pages/Real-Estate/properties/rasAlKhama.png";
import Ajman from "../../src/assets/landing-pages/Real-Estate/properties/ajman.png";

import PropertyCard from "./PropertyCard";
import {Link} from "react-router-dom";

import useFetchProperties from '../Apis/fetchProperties';
import usePropertiesPerCity from '../Apis/fetchPropertiesCount';

/* ================== STATIC LOCAL IMAGES MAPPING ================== */
const emiratesImages = {
  Dubai: dubai,
  "Abu Dhabi": AbuDhabi,
  Sharjah: Sharjah,
  "Ras Al Khaimah": RasAlKhama,
  Ajman: Ajman,
};

/* ================== COMPONENT ================== */
export default function PropertiesSection({ lang }) {
  
  
  
  
  const isEn = lang === "en";




  // Fetch featured properties
  const { allProperties: properties, loading: propertiesLoading } = useFetchProperties({
    page: 1,
    lang,
    limit: 6,
    featured: true,
  });

  // Fetch emirates with property counts
  const { cities: emiratesData, loading: emiratesLoading } = usePropertiesPerCity();

  if (propertiesLoading || emiratesLoading) {
    return <p className="text-center text-white py-20">{isEn ? "Loading..." : "جارٍ التحميل..."}</p>;
  }

  if (!properties || properties.length === 0) {
  return null;
}
  // Map API data to the local image structure while keeping counts
  const emirates = emiratesData.map((item) => {
    const cityName = item.name.en;
    return {
      name: item.name.en,
      nameAr: item.name.ar,
      count: `${item.propertyCount} Properties`,
      countAr: `${item.propertyCount} عقارات`,
      image: emiratesImages[cityName] || dubai, // fallback
      large: cityName === "Dubai", // keep Dubai as large
    };
  });

  return (
    <section className="bg-black text-white px-6">
      <div className="max-w-7xl mx-auto space-y-20">

        {/* ================= EMIRATES ================= */}
        <div>
          <h2 className="text-3xl font-semibold text-[#D7AA47] mb-8">
            {isEn ? "Find Properties in These Emirates" : "ابحث عن عقارات في هذه الإمارات"}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {emirates.map((item, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-2xl group
                ${item.large ? "lg:row-span-2" : ""}`}
              >
                <img
                  src={item.image}
                  alt={isEn ? item.name : item.nameAr}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />

                <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md rounded-xl px-4 py-3">
                  <p className="text-sm text-gray-300">{isEn ? item.count : item.countAr}</p>
                  <h3 className="text-lg font-semibold">{isEn ? item.name : item.nameAr}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= FEATURED PROPERTIES ================= */}
        <div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
            <div>
              <h2 className="text-3xl font-semibold text-[#D7AA47] mb-2">
                {isEn ? "Featured Properties" : "العقارات المميزة"}
              </h2>
              <p className="text-gray-400 max-w-xl">
                {isEn
                  ? "Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments."
                  : "استكشف مجموعتنا المختارة من العقارات المميزة. كل قائمة تعرض لمحة عن منازل واستثمارات استثنائية."}
              </p>
            </div>

            {/* <button className="bg-white/10 hover:bg-white/20 transition px-6 py-3 rounded-lg">
              {isEn ? "View All Properties" : "عرض جميع العقارات"}
            </button> */}
            <Link to="/UnderDevelopment">
  <button className="bg-white/10 hover:bg-white/20 transition px-6 py-3 rounded-lg">
    {isEn ? "View All Properties" : "عرض جميع العقارات"}
  </button>
</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property, index) => (
              <PropertyCard
                key={index}
                property={{
                  title: property.title, // API returns dynamic language
                  description: property.description,
                  meta: [
                    `${property.bedrooms.label}`,
                    `${property.bathrooms.label}`,
                    `${property.propertyType}`,
                  ],
                  image: `${property.coverImageUrl}`,
                  currency:`${property.currency}`,
                  price: `${property.price}`,
                }}
                lang={lang}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
