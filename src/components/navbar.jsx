import React, { useState } from "react";
import { Menu, X, Server, Code2, Megaphone, Laptop } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import UAE from "../assets/UAE.png";
import America from "../assets/American.png"
import LanguageDropdown from "../components/LanguageDropdown";
function Nav({ lang, setLang }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const services = [
    {
      title: lang === "en" ? "IT Infrastructure" : "البنية التحتية لتقنية المعلومات",
      icon: <Server size={22} />,
      link:"/IT"
    },
    {
      title: lang === "en" ? "Web & Mobile Development" : "تطوير الويب وتطبيقات الجوال",
      icon: <Code2 size={22} />,
      link:"/DigitalDevelopment"
    },
    {
      title: lang === "en" ? "Digital Marketing" : "التسويق الرقمي",
      icon: <Megaphone size={22} />,
      link:"/Marketing"
    },
    {
      title: lang === "en" ? "UI/UX & Graphic Design" : "تصميم واجهات وتجربة المستخدم والجرافيك",
      icon: <Laptop size={22} />,
      link:"/Design"
    }
  ];

  return (
    <header className="absolute min-[751px]:top-10 left-0 w-full z-30 bg-black/30 backdrop-blur-sm border-b border-white/20">
      <div className="mx-auto px-4 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link to="/">
          <img src="./logo.webp" alt="logo" width="80" />
        </Link>

        {/* Desktop Menu */}
        <nav
          className={`hidden md:flex items-center gap-8 text-sm text-white ${
            lang !== "en" ? "flex-row-reverse" : ""
          }`}
        >
          <Link
            to="/"
            className={`hover:text-yellow-400 ${
              isActive("/") ? "text-yellow-400" : ""
            }`}
          >
            {lang === "en" ? "Home" : "الرئيسية"}
          </Link>

          {/* Services Dropdown (FIXED) */}
          <div className="relative group">
            <button className="hover:text-yellow-400">
              {lang === "en" ? "Services" : "الخدمات"}
            </button>

            <div
              className={`absolute top-full mt-4 bg-black w-[380px] opacity-0 invisible 
              group-hover:opacity-100 group-hover:visible transition-all duration-200
              ${lang !== "en" ? "right-0 text-right" : "left-0"}`}
            >
              <ul className="flex flex-col px-6 py-4">
                {services.map((service, i) => (
                  
                  <li
                    key={i}
                    className={`flex items-center gap-4 py-5 border-b border-white/20 
                    last:border-b-0 hover:text-yellow-400 cursor-pointer
                    ${lang !== "en" ? "flex-row-reverse" : ""}`}
                  >
                    
                    {service.icon}
                    <Link to={service.link}>
                    <span className="text-xl font-light">
                      {service.title}
                    </span>
                  </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        

          <Link
            to="/ContactUs"
            className={`hover:text-yellow-400 ${
              isActive("/ContactUs") ? "text-yellow-400" : ""
            }`}
          >
            {lang === "en" ? "Contact us" : "تواصل معنا"}
          </Link>
            
            <Link
            to="/AboutUs"
            className={`hover:text-yellow-400 ${
              isActive("/AboutUs") ? "text-yellow-400" : ""
            }`}
          >
            {lang === "en" ? "About us" : "من نحن"}
          </Link>
           <Link
            to="/Blog"
            className={`hover:text-yellow-400 ${
              isActive("/Blog") ? "text-yellow-400" : ""
            }`}
          >
            {lang === "en" ? "Blog" : "المدونة"}
          </Link>



          
        </nav>

        {/* Right Side */}
    <div className="flex items-center gap-4">
  <LanguageDropdown lang={lang} setLang={setLang} />

  <button
    className="md:hidden text-white"
    onClick={() => setIsMenuOpen(!isMenuOpen)}
  >
    {isMenuOpen ? <X /> : <Menu />}
  </button>
</div>

      </div>

      {/* Mobile Menu (unchanged) */}
      {/* {isMenuOpen && (
        <div className="md:hidden bg-black/70 px-4 py-4">
          <nav className="flex flex-col gap-4 text-white">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/AboutUs" onClick={() => setIsMenuOpen(false)}>About us</Link>
            <Link to="/IT" onClick={() => setIsMenuOpen(false)}>IT</Link>
            <Link to="/DigitalDevelopment" onClick={() => setIsMenuOpen(false)}>Digital Development</Link>
            <Link to="/Marketing" onClick={() => setIsMenuOpen(false)}>Marketing</Link>
            <Link to="/Design" onClick={() => setIsMenuOpen(false)}>Design</Link>
            <Link to="/Blog" onClick={() => setIsMenuOpen(false)}>Blog</Link>
            <Link to="/ContactUs" onClick={() => setIsMenuOpen(false)}>Contact us</Link>

          </nav>
        </div>
      )} */}
      {isMenuOpen && (
        <div
          className={`md:hidden bg-black/90 text-white w-full px-4 py-6  transition-all duration-300`}
        >
          <nav
            className={`flex flex-col gap-4 ${
              lang !== "en" ? "text-right" : "text-left"
            }`}
          >
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              {lang === "en" ? "Home" : "الرئيسية"}
            </Link>
            <Link to="/AboutUs" onClick={() => setIsMenuOpen(false)}>
              {lang === "en" ? "About us" : "من نحن"}
            </Link>
            <Link to="/IT" onClick={() => setIsMenuOpen(false)}>
              {lang === "en" ? "IT Infrastructure" : "البنية التحتية لتقنية المعلومات"}
            </Link>
            <Link to="/DigitalDevelopment" onClick={() => setIsMenuOpen(false)}>
              {lang === "en" ? "Web & Mobile Development" : "تطوير الويب وتطبيقات الجوال"}
            </Link>
            <Link to="/Marketing" onClick={() => setIsMenuOpen(false)}>
              {lang === "en" ? "Digital Marketing" : "التسويق الرقمي"}
            </Link>
            <Link to="/Design" onClick={() => setIsMenuOpen(false)}>
              {lang === "en" ? "UI/UX & Graphic Design" : "تصميم واجهات وتجربة المستخدم والجرافيك"}
            </Link>
            <Link to="/Blog" onClick={() => setIsMenuOpen(false)}>
              {lang === "en" ? "Blog" : "المدونة"}
            </Link>
            <Link to="/ContactUs" onClick={() => setIsMenuOpen(false)}>
              {lang === "en" ? "Contact us" : "تواصل معنا"}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Nav;
