import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer({ lang }) {
  const t = {
    en: {
      company: "Company",
      home: "Home",
      about: "About us",
      Contact: "Contact us",
      Careers: "Careers",
      servicesList: [
        { name: "IT", link: "/IT" },
        { name: "Digital Development", link: "/DigitalDevelopment" },
        { name: "Digital Marketing", link: "/Marketing" },
        { name: "UIUX Design", link: "/Design" },
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
      Contact: "اتصل بنا",
      Careers: "وظائف",
      servicesList: [
        { name: "تقنية المعلومات", link: "/IT" },
        { name: "التطوير الرقمي", link: "/DigitalDevelopment" },
        { name: "التسويق الرقمي", link: "/Marketing" },
        { name: "تصميم واجهة وتجربة المستخدم", link: "/Design" },
      ],
      branches: "الفروع",
      branchesList: ["أبوظبي", "دبي", "الشارقة", "عجمان"],
      terms: "الشروط والأحكام",
      copyright: "©2025 مجموعة جوفيرا. جميع الحقوق محفوظة.",
    },
  };

  const text = lang === "en" ? t.en : t.ar;

  return (
    <footer className="bg-[#1A1A1A] text-white w-full">
      {/* Top Section */}
      <div className="max-w-screen-xl mx-auto px-5 py-10 md:px-16 w-full">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-16">
          {/* Logo */}
          <div className="flex justify-center md:justify-start w-full md:w-auto">
            <img src="/logo.webp" alt="logo" className="w-[160px] h-[60px] object-contain" />
          </div>

          {/* Columns */}
          <div className="flex flex-col md:flex-row gap-10 md:gap-16 w-full justify-center md:justify-end items-center md:items-start">
            {/* Company */}
            <div className={`flex flex-col w-full md:w-40 ${lang !== "en" ? "text-center md:text-right" : "text-center md:text-left"}`}>
              <h3 className="text-base font-semibold mb-3">{text.company}</h3>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li><Link to="/" className="hover:text-yellow-600 cursor-pointer">{text.home}</Link></li>
                <li><Link to="/AboutUs" className="hover:text-yellow-600 cursor-pointer">{text.about}</Link></li>
                <li><Link to="/ContactUs" className="hover:text-yellow-600 cursor-pointer">{text.Contact}</Link></li>
                <li><Link to="/Career" className="hover:text-yellow-600 cursor-pointer">{text.Careers}</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div className={`flex flex-col w-full md:w-40 ${lang !== "en" ? "text-center md:text-right" : "text-center md:text-left"}`}>
              <h3 className="text-base font-semibold mb-3">Services</h3>
              <ul className="space-y-1 text-gray-300 text-sm">
                {text.servicesList.map((service, idx) => (
                  <li key={idx}>
                    <Link to={service.link} className="hover:text-yellow-600 cursor-pointer">{service.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Branches */}
            <div className={`flex flex-col w-full md:w-40 ${lang !== "en" ? "text-center md:text-right" : "text-center md:text-left"}`}>
              <h3 className="text-base font-semibold mb-3">{text.branches}</h3>
              <ul className="space-y-1 text-gray-300 text-sm">
                {text.branchesList.map((branch, idx) => (
                  <li key={idx}>{branch}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-white/10 mt-4 w-full">
        <div className="max-w-screen-xl mx-auto px-5 py-4 flex flex-col md:flex-row items-center justify-center md:justify-between gap-4">
          <p className="text-gray-400 text-sm hover:text-yellow-600 cursor-pointer text-center md:text-left">
            <Link to="/TermsAndConditions">{text.terms}</Link>
          </p>
          <p className="text-gray-400 text-sm text-center md:text-left">{text.copyright}</p>
          <div className="flex gap-3 justify-center">
            <a href="https://www.facebook.com/joveraa.ae/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-600 cursor-pointer"><Facebook size={18} /></a>
            <a href="https://www.instagram.com/joveraa.ae/?hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-600 cursor-pointer"><Instagram size={18} /></a>
            <a href="https://www.youtube.com/@joveragroup/null" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-600 cursor-pointer"><Youtube size={18} /></a>
            <a href="https://www.tiktok.com/@jovera.ae" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-600 cursor-pointer"><FaTiktok size={18} /></a>
            <a href="https://www.linkedin.com/company/jovera" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-600 cursor-pointer"><Linkedin size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
