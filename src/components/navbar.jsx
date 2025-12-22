import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

function Nav({ lang, setLang }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="absolute sm:top-10 left-0 w-full z-30 bg-black/30 backdrop-blur-sm border-b border-white/20">
      <div className="mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-sm">
            <Link to="/">
              <img src="./logo.png" alt="logo" width="190px" />
            </Link>
          </div>
        </div>

        {/* Desktop Menu (ONLY CHANGE IS HERE) */}
        <nav
          className={`hidden md:flex gap-8 text-sm text-white ${
            lang !== "en" ? "flex-row-reverse" : "flex-row"
          }`}
        >
          <Link
            to="/"
            className={`hover:text-yellow-400 ${
              isActive("/") ? "text-yellow-400" : "text-white"
            }`}
          >
            {lang === "en" ? "Home" : "الرئيسية"}
          </Link>

          <Link
            to="/portfolio"
            className={`hover:text-yellow-400 ${
              isActive("/portfolio") ? "text-yellow-400" : "text-white"
            }`}
          >
            {lang === "en" ? "Portfolio" : "الأعمال"}
          </Link>

          <Link
            to="/media-hub"
            className={`hover:text-yellow-400 ${
              isActive("/media-hub") ? "text-yellow-400" : "text-white"
            }`}
          >
            {lang === "en" ? "Media Hub" : "المركز الإعلامي"}
          </Link>

          <Link
            to="/contact-us"
            className={`hover:text-yellow-400 ${
              isActive("/contact-us") ? "text-yellow-400" : "text-white"
            }`}
          >
            {lang === "en" ? "Contact Us" : "تواصل معنا"}
          </Link>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4 nav-right">
          {/* Language Switch */}
          <div className="lang-switch flex items-center gap-2">
            <button
              className={`lang-btn ${
                lang === "en" ? "text-yellow-400" : "text-white"
              }`}
              onClick={() => setLang("en")}
            >
              EN
            </button>
            <span className="divider text-white">|</span>
            <button
              className={`lang-btn ${
                lang === "ar" ? "text-yellow-400" : "text-white"
              }`}
              onClick={() => setLang("ar")}
            >
              عربي
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (UNCHANGED) */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/70 px-4 py-4">
          <nav className="flex flex-col gap-4 text-white">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={`hover:text-yellow-400 ${
                isActive("/") ? "text-yellow-400" : "text-white"
              }`}
            >
              {lang === "en" ? "Home" : "الرئيسية"}
            </Link>

            <Link
              to="/portfolio"
              onClick={() => setIsMenuOpen(false)}
              className={`hover:text-yellow-400 ${
                isActive("/portfolio") ? "text-yellow-400" : "text-white"
              }`}
            >
              {lang === "en" ? "Portfolio" : "الأعمال"}
            </Link>

            <Link
              to="/media-hub"
              onClick={() => setIsMenuOpen(false)}
              className={`hover:text-yellow-400 ${
                isActive("/media-hub") ? "text-yellow-400" : "text-white"
              }`}
            >
              {lang === "en" ? "Media Hub" : "المركز الإعلامي"}
            </Link>

            <Link
              to="/contact-us"
              onClick={() => setIsMenuOpen(false)}
              className={`hover:text-yellow-400 ${
                isActive("/contact-us") ? "text-yellow-400" : "text-white"
              }`}
            >
              {lang === "en" ? "Contact Us" : "تواصل معنا"}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Nav;
