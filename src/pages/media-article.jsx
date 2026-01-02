// pages/NewsDetail.jsx
import React, { useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function NewsDetail({ lang }) {
  const navigate = useNavigate();
  const location = useLocation();
  const article = location.state?.article;
  const isRTL = lang === 'ar';

  const [currentImage, setCurrentImage] = useState(0);

  // Combine main image + gallery URLs
  const gallery = article
    ? [article.imageUrl, ...(article.galleryUrls || [])]
    : [];

  if (!article) {
    return (
      <div className="min-h-screen bg-[#111111] text-white flex items-center justify-center font-bold">
        <h2>No article found</h2>
      </div>
    );
  }

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % gallery.length);
  const prevImage = () => setCurrentImage((prev) => (prev - 1 + gallery.length) % gallery.length);

  const display = (field) => field || (isRTL ? "غير محدد" : "N/A");

  return (
    <div className="bg-[#111111] min-h-screen text-white pt-32" dir={isRTL ? "rtl" : "ltr"}>
       <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
            {display(article.title)}
          </h1>
        </div>
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16  pb-20 sm:py-20 md:py-20">

        {/* Article Header */}
       

        {/* Gallery Slider */}
        {gallery.length > 0 && (
          <div className="relative mb-12 md:mb-16">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
  <img
    src={gallery[currentImage]}
    alt={`${article.title} - ${currentImage + 1}`}
    className="w-full h-auto object-cover max-h-[600px]"
    loading="lazy"
  />

  {gallery.length > 1 && (
    <>
      <button
        onClick={prevImage}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-1 sm:p-2 bg-black/50 rounded-full hover:scale-110 transition-transform"
      >
        <ChevronLeft className="w-4 sm:w-6 h-4 sm:h-6 text-white" />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-1 sm:p-2 bg-black/50 rounded-full hover:scale-110 transition-transform"
      >
        <ChevronRight className="w-4 sm:w-6 h-4 sm:h-6 text-white" />
      </button>
    </>
  )}
</div>


            {/* Gallery Dots */}
            {gallery.length > 1 && (
              <div className="flex justify-center mt-4 gap-2">
                {gallery.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImage(idx)}
                    className={`rounded-full transition-all ${
                      idx === currentImage ? "w-3 h-3 bg-yellow-500" : "w-2 h-2 bg-gray-600"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Article Content */}
        <div className="mx-auto">
          <h2 className={`text-xl md:text-2xl lg:text-3xl text-gray-400 font-light tracking-wide ${isRTL ? 'text-right' : 'text-left'}`}>
            {display(article.description)}
          </h2>
        </div>

      </div>
    </div>
  );
}
