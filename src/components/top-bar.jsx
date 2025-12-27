import {
  Facebook,
  Instagram,
  Youtube,
  Phone,
  Mail,
  Linkedin,
} from "lucide-react";
import { FaTiktok } from "react-icons/fa";

function Topbar({ lang }) {
  return (
    <div className=" bg-[#1B1B1B] py-2 px-4 text-base text-white block max-[750px]:hidden
">
      <div className="mx-auto flex justify-between items-center">
        
        {/* Left Side */}
        <div className="flex gap-4">
          <span className="flex items-center gap-1">
            <Mail size={12} /> info@joveragroup.ae
          </span>
          <span className="flex items-center gap-1">
            <Phone size={12} /> 800-464000
          </span>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <span>
            {lang === "en"
              ? "Free Consultation for All Our Services"
              : "استشارة مجانية لجميع خدماتنا"}
          </span>

          {/* Social Icons */}
          <div className="flex gap-3">
            <a
              href="https://www.facebook.com/joveraa.ae/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-600 cursor-pointer"
            >
              <Facebook size={14} />
            </a>

            <a
              href="https://www.instagram.com/joveraa.ae/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-600 cursor-pointer"
            >
              <Instagram size={14} />
            </a>

            <a
              href="https://www.youtube.com/@joveragroup/null"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-600 cursor-pointer"
            >
              <Youtube size={14} />
            </a>

            <a
              href="https://www.tiktok.com/@jovera.ae"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-600 cursor-pointer"
            >
              <FaTiktok size={14} />
            </a>

            <a
              href="https://www.linkedin.com/company/jovera"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-600 cursor-pointer"
            >
              <Linkedin size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
