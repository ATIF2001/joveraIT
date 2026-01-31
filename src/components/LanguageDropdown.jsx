import { ChevronDown } from "lucide-react";
import UAE from "../assets/UAE.png";
import America from "../assets/American.png";
import { useState } from "react";

const LanguageDropdown = ({ lang, setLang }) => {
  const [open, setOpen] = useState(false);

  const languages = [
    {
      code: "ar",
      label: "AR",
      flag: UAE,
    },
    {
      code: "en",
      label: "EN",
      flag: America,
    },
  ];

  const current = languages.find((l) => l.code === lang);

  return (
    <div className="relative">
      {/* Selected Language */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 bg-[#1A1A1A] text-white px-4 py-2 rounded-full text-sm"
      >
        <img
          src={current.flag}
          alt={current.label}
          className="w-5 h-5 rounded-full"
        />
        <span>{current.label}</span>
        <ChevronDown size={16} />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 bg-[#1A1A1A] rounded-lg shadow-lg overflow-hidden min-w-[120px]">
          {languages.map((item) => (
            <button
              key={item.code}
              onClick={() => {
                setLang(item.code);
                setOpen(false);
              }}
              className={`flex items-center gap-2 px-4 py-2 text-sm w-full text-left hover:bg-[#2A2A2A] ${
                lang === item.code ? "text-yellow-400" : "text-white"
              }`}
            >
              <img
                src={item.flag}
                alt={item.label}
                className="w-5 h-5 rounded-full"
              />
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
