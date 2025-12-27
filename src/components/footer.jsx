import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer({ lang }) {
  const t = {
    en: {
      company: "Company",
      home: "Home",
      about: "About us",
      portfolio: "Portfolio",
      Media: "Media Hub",
      Contact: "Contact us",
      Careers:"Careers",
      services: "Services",
      servicesList: [
        { name: "Financial Services", link: "/Finance" },
        { name: "Real Estate", link: "/RealEstate" },
        { name: "IT Solution", link: "/IT" },
        { name: "Accounting & Auditing", link: "/Accounting" },
        { name: "Business of Service Men", link: "/Business" },
        { name: "Tourism", link: "/Tourism" },
      ],
      branches: "Branches",
      branchesList: ["Abu Dhabi", "Dubai", "Sharjah", "Ajman"],
      terms: "Terms & Conditions",
      copyright: "©2025 Jovera Group. All Rights Reserved.",
    },
    ar: {
      company: "الشركة",
      home: "الرئيسية",
      about: "من نحن",
      portfolio: "أعمالنا",
      Media: "محور وسائل الإعلام",
      Contact: "اتصل بنا",
      Careers:"وظائف",
      services: "خدمات",
      servicesList: [
        { name: "الخدمات المالية", link: "/Finance" },
        { name: "العقارات", link: "/RealEstate" },
        { name: "حلول تقنية المعلومات", link: "/IT" },
        { name: "التسويق الإلكتروني", link: "/IT" },
        { name: "المحاسبة والتدقيق", link: "/Accounting" },
        { name: "خدمات رجال الأعمال", link: "/Business" },
        { name: "السياحة", link: "/Tourism" },
      ],
      branches: "الفروع",
      branchesList: ["أبوظبي", "دبي", "الشارقة", "عجمان"],
      terms: "الشروط والأحكام",
      copyright: "©2025 مجموعة جوفيرا. جميع الحقوق محفوظة.",
    },
  };

  const text = lang === "en" ? t.en : t.ar;

  return (
    <footer className=" bg-[#1A1A1A] text-white">
      {/* Top Section */}
      <div className="mx-auto px-5 py-10 md:px-[50px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">

          {/* Logo */}
          <div className="flex justify-center md:justify-start mb-6 md:mb-0">
            <img
              src="/logo.png"
              alt="logo"
              className="w-[160px] h-[60px] object-contain"
            />
          </div>

          {/* Company */}
          <div>
            <h3 className="text-base font-semibold mb-3">{text.company}</h3>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li>
                <Link to="/" className="hover:text-yellow-600 cursor-pointer">
                  {text.home}
                </Link>
              </li>
                <li>
                <Link to="/about-us" className="hover:text-yellow-600 cursor-pointer">
                  {text.about}
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-yellow-600 cursor-pointer">
                  {text.portfolio}
                </Link>
              </li>
              <li>
                <Link to="/media-hub" className="hover:text-yellow-600 cursor-pointer">
                  {text.Media}
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="hover:text-yellow-600 cursor-pointer">
                  {text.Contact}
                </Link>
                
              </li>
              <li>
                <Link to="/Career" className="hover:text-yellow-600 cursor-pointer">
                  {text.Careers}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base font-semibold mb-3">{text.services}</h3>
            <ul className="space-y-1 text-gray-300 text-sm">
              {text.servicesList.map((service, idx) => (
                <li key={idx}>
                  <Link
                    to={service.link}
                    className="hover:text-yellow-600 cursor-pointer"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Branches */}
          <div>
            <h3 className="text-base font-semibold mb-3">{text.branches}</h3>
            <ul className="space-y-1 text-gray-300 text-sm">
              {text.branchesList.map((branch, idx) => (
                <li key={idx}>
                  {branch}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-white/10 mt-4">
        <div className="max-w-screen-xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-center md:justify-between items-center gap-4">

          <p className="text-gray-400 text-sm hover:text-yellow-600 cursor-pointer">
           <Link to="/Terms_and_Conditions"> {text.terms}
           </Link>
          </p>

          <p className="text-gray-400 text-sm">{text.copyright}</p>

          {/* Social Icons */}
          <div className="flex gap-3">
            <a href="https://www.facebook.com/joveraa.ae/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-600 cursor-pointer">
              <Facebook size={18} />
            </a>
            <a href="https://www.instagram.com/joveraa.ae/?hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-600 cursor-pointer">
              <Instagram size={18} />
            </a>
            <a href="https://www.youtube.com/@joveragroup/null" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-600 cursor-pointer">
              <Youtube size={18} />
            </a>
            <a href="https://www.tiktok.com/@jovera.ae" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-600 cursor-pointer">
              <FaTiktok size={18} />
            </a>
            <a href="https://www.linkedin.com/company/jovera" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-600 cursor-pointer">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
