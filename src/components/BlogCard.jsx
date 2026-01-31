import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ image, title, description, slug, lang }) => {
  const isArabic = lang === "ar";
  return (
    <div className="bg-[#1B1B1B] rounded-xl overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
      {/* Blog Image */}
      <div className="w-full h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Blog Content */}
      <div dir={isArabic ? "rtl" : "ltr"} className="p-6">
        <h3 className="text-[#C99E18] text-xl font-bold mb-3 line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-400 text-sm mb-6 line-clamp-3">
          {description}
        </p>
        <Link to={`/blog/${slug}`}>
          <button className="bg-[#C99E18] text-black px-6 py-2 rounded-full font-medium hover:bg-[#b08e15] transition-colors">
          {isArabic ? "اقرأ المقال" : "Read Article"}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;