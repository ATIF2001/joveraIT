import React from 'react';
import { useLocation, useNavigate } from "react-router-dom";

export default function NewsDetail({lang}) {
  const navigate = useNavigate();
  const location = useLocation();
  const article = location.state?.article;

  // If someone opens page directly (no state)
  if (!article) {
    return (
      <div className="min-h-screen bg-[#111111] text-white flex items-center justify-center font-bold">
        <h2>No article found</h2>
      </div>
    );
  }

  // ✅ FIX: create paragraphs safely from description
  // const content = article.description
  //   ? article.description.split('\n').filter(p => p.trim() !== '')
  //   : [];

  return (
    <div className="bg-[#111111] min-h-screen text-white">
     <div className="mx-auto px-8 sm:px-12 lg:px-16 py-32 md:py-32">
        
        {/* Article Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
            {article.title}
          </h1>
        
        </div>

        {/* Featured Image */}
        <div className="mb-12 md:mb-16">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-auto object-cover"
              style={{ maxHeight: '600px' }}
              loading="lazy"
            />
          </div>
        </div>

        {/* Article Content */}
        <div className="mx-auto">
            <h2 className={`text-xl md:text-2xl lg:text-3xl text-gray-400 font-light tracking-wide ${lang === 'en' ? 'text-left' : 'text-right'}`}>
            {article.description}
          </h2>
          {/* <div className="space-y-8 text-base md:text-lg leading-relaxed">
            {content.map((paragraph, index) => (
              <p 
                key={index} 
                className="text-gray-300 text-justify tracking-wide"
                style={{ 
                  lineHeight: '1.8',
                  letterSpacing: '0.5px'
                }}
              >
                {paragraph}
              </p>
            ))}
          </div> */}
        </div>

      </div>
    </div>
  );
}
