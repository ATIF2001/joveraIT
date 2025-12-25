import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import useFetchNews from '../Apis/fetchNews';
import { useNavigate } from "react-router-dom";

export default function MediaHub({ lang }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  /* ================= FEATURED NEWS ================= */
  const {
    allNews: featuredNews = [],
    loading: featuredLoading,
    error: featuredError
  } = useFetchNews({
    page: 1,
    lang,
    limit: 3,
    featured: true
  });

  /* ================= NORMAL NEWS ================= */
  const {
    allNews: normalNews = [],
    loading: normalLoading,
    error: normalError
  } = useFetchNews({
    page: currentPage,
    lang,
    limit: 12,
    featured: false
  });

  const isLoading = featuredLoading || normalLoading;
  const hasError = featuredError || normalError;

  const heroSlides = Array.isArray(featuredNews) ? featuredNews : [];
  const currentArticles = Array.isArray(normalNews) ? normalNews : [];

  /* ================= PAGINATION ================= */
  const totalPages =
    currentArticles.length === 12 ? currentPage + 1 : currentPage;

  /* ================= HERO AUTO SLIDE ================= */
  useEffect(() => {
    if (heroSlides.length > 1) {
      const timer = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % heroSlides.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [heroSlides.length]);

  const nextSlide = () =>
    setCurrentSlide(prev => (prev + 1) % heroSlides.length);

  const prevSlide = () =>
    setCurrentSlide(prev => (prev - 1 + heroSlides.length) % heroSlides.length);

  const goToSlide = (index) => setCurrentSlide(index);

  const goToPage = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const generatePagination = () => {
    const pages = [];
    const maxVisiblePages = 4;

/* ================= LOADER ================= */
  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="flex flex-col items-center gap-6">
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 rounded-full border-4 border-gray-700"></div>
            <div className="absolute inset-0 rounded-full border-4 border-yellow-400 border-t-transparent animate-spin"></div>
          </div>
          <span className="text-white text-sm uppercase tracking-widest">
            Loading Media
          </span>
        </div>
      </div>
    );
  }







    if (totalPages <= maxVisiblePages + 2) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push('...');

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) pages.push(i);

      if (currentPage < totalPages - 2) pages.push('...');
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <div className="bg-[#111111] min-h-screen text-white">

      {/* ================= LOADER ================= */}
      {/* {isLoading && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
        </div>
      )} */}

      <div className="mx-auto px-10 sm:px-6 lg:px-20 py-16 md:py-24">

        {/* ================= HEADER ================= */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-3 tracking-tight mt-20">
            MEDIA HUB
          </h2>
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-400 font-light tracking-wide">
            LATEST NEWS
          </h2>
        </div>

        {/* ================= ERROR ================= */}
        {hasError && (
          <div className="text-center text-red-400 mb-12">
            Failed to load news. Please try again later.
          </div>
        )}

        {/* ================= HERO SLIDER ================= */}
        {heroSlides.length > 0 && (
          <div className="relative mb-20">
            <div
              className="relative overflow-hidden rounded-xl cursor-pointer"
              onClick={() =>
                navigate(`/news/${heroSlides[currentSlide]._id}`, {
                  state: { article: heroSlides[currentSlide] }
                })
              }
            >
              <div className="aspect-[16/9] md:aspect-[21/9]">
                <img
                  src={heroSlides[currentSlide]?.imageUrl}
                  alt={heroSlides[currentSlide]?.title || "N/A"}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>

            {heroSlides.length > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-6 top-1/2 -translate-y-1/2 p-3 shadow-lg hover:scale-110"
                  style={{
                    borderRadius: "12px",
                    background: "linear-gradient(90deg, #D7AA47 0%, #715925 100%)",
                  }}
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-6 top-1/2 -translate-y-1/2 p-3 shadow-lg hover:scale-110"
                  style={{
                    borderRadius: "12px",
                    background: "linear-gradient(90deg, #D7AA47 0%, #715925 100%)",
                  }}
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            <div className="text-center mt-10 px-4">
              <h3
                className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6"
                style={{
                  background: "linear-gradient(90deg, #D7AA47 0%, #715925 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {heroSlides[currentSlide]?.title || "N/A"}
              </h3>

              <p className="text-gray-300 max-w-4xl mx-auto line-clamp-2">
                {heroSlides[currentSlide]?.description || "N/A"}
              </p>
            </div>

            <div className="flex justify-center gap-3 mt-8">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`rounded-full ${
                    currentSlide === index ? 'w-3 h-3' : 'bg-gray-600 w-2.5 h-2.5'
                  }`}
                  style={
                    currentSlide === index
                      ? { background: "linear-gradient(90deg, #D7AA47 0%, #715925 100%)" }
                      : {}
                  }
                />
              ))}
            </div>
          </div>
        )}

        {/* ================= NEWS GRID ================= */}
        {currentArticles.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {currentArticles.map(article => (
              <div
                key={article._id}
                className="bg-[#1a1a1a] rounded-lg overflow-hidden hover:-translate-y-2 transition-all shadow-xl"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={article.imageUrl}
                    alt={article?.title || "N/A"}
                    className="w-full h-full object-cover hover:scale-110 transition-transform"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4  line-clamp-1">
                    {article?.title || "N/A"}
                  </h3>

                  <p className="text-gray-400 mb-6 line-clamp-2">
                    {article?.description || "N/A"}
                  </p>

                  <button
                    onClick={() =>
                      navigate(`/news/${article._id}`, {
                        state: { article }
                      })
                    }
                    className="px-8 py-2.5 rounded-lg font-semibold text-white hover:scale-105"
                    style={{
                      background: "linear-gradient(90deg, #D7AA47 0%, #715925 100%)",
                    }}
                  >
                    Read more
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ================= PAGINATION ================= */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 disabled:opacity-30"
            >
              <ChevronLeft />
            </button>

            {generatePagination().map((page, i) =>
              page === '...' ? (
                <span key={i}>...</span>
              ) : (
                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  className={`w-10 h-10 rounded ${
                    currentPage === page ? 'text-white' : 'bg-[#1a1a1a]'
                  }`}
                  style={
                    currentPage === page
                      ? { background: "linear-gradient(90deg, #D7AA47 0%, #715925 100%)" }
                      : {}
                  }
                >
                  {page}
                </button>
              )
            )}

            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 disabled:opacity-30"
            >
              <ChevronRight />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
