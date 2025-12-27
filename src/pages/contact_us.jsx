import React from "react";
import {useState} from "react";
import ContactForm from "../components/contactForm";
import { MapPin, Mail, Phone, Smartphone } from "lucide-react";
import hiring from "../assets/contact-us/Job offers-bro 1.png";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

function Contact_us({ lang }) {
  const texts = {
    headquarters: lang === "en" ? "Headquarters" : "المقر الرئيسي",
  branches: [
  {
    title: lang === "en" ? "Abu Dhabi (Head Office)" : "أبو ظبي (المكتب الرئيسي)",
    address:
      lang === "en"
        ? "Al Jazira Club - Tower A, Al Muroor St"
        : "نادي الجزيرة - البرج أ، شارع المروّر",
  },
  {
    title: lang === "en" ? "Dubai" : "دبي",
    address:
      lang === "en"
        ? "Al Muroor Road - Rashid Bin Saeed Al Maktoum St"
        : "طريق المروح - شارع راشد بن سعيد آل مكتوم",
  },
  {
    title: lang === "en" ? "Sharjah" : "الشارقة",
    address:
      lang === "en"
        ? "Al Muroor Road - Rashid Bin Saeed Al Maktoum St"
        : "طريق المروح - شارع راشد بن سعيد آل مكتوم",
  },
  {
    title: lang === "en" ? "Ajman" : "عجمان",
    address:
      lang === "en"
        ? "Flamingo, Villa 30 - Al Zorah"
        : "فلامينغو، فيلا 30 - الزوراء",
  },
]
,
    helpSupport: lang === "en" ? "Help & Support" : "المساعدة والدعم",
    contactItems: [
      { icon: Mail, text: "info@jovera.ae" },
      { icon: Phone, text: "800-664000" },
      { icon: Smartphone, text: "+97126311977" },
      { icon: FaWhatsapp, text: "+97126311977" },
    ],
    whyChooseUsHeading: lang === "en" ? "13 Years Experience" : "13 سنة من الخبرة",
    whyChooseUsText:
      lang === "en"
        ? "Jovera Group Established in 2013 in the UAE, it swiftly became a key player in real estate and financial services tourism, Advertisement, and accountancy, prioritizing excellence and innovation."
        : "تأسست مجموعة جوفيرا في عام 2013 في الإمارات، وسرعان ما أصبحت لاعباً رئيسياً في العقارات والخدمات المالية والسياحة والإعلان والمحاسبة، مع التركيز على التميز والابتكار.",
    whyChooseUsItems:
      lang === "en"
        ? ["Free consultations", "Fast and secure transactions", "Trusted partners", "Professional support team"]
        : ["استشارات مجانية", "معاملات سريعة وآمنة", "شركاء موثوقون", "فريق دعم احترافي"],
    formHeading: lang === "en" ? "Meet Jovera Group" : "تعرف على مجموعة جوفيرا",
    joinUsHeading:
      lang === "en"
        ? "Embrace the Future at Jovera Group"
        : "احتضن المستقبل في مجموعة جوفيرا",
    joinUsText:
      lang === "en"
        ? "By joining Jovera Group, you can become part of a dynamic team that values wisdom, agility, boldness, foresight, and partnership. We provide a positive work environment that fosters substantial growth opportunities for everyone."
        : "من خلال الانضمام إلى مجموعة جوفيرا، يمكنك أن تصبح جزءًا من فريق ديناميكي يقدر الحكمة والمرونة والجرأة والبصيرة والشراكة. نحن نوفر بيئة عمل إيجابية تعزز فرص النمو الكبيرة للجميع.",
    browseVacancies: lang === "en" ? "Careers" :"وظائف",
  };

  const options = [
    { key: "Business Banking", value: { en: "Business Banking", ar: "الخدمات المصرفية للأعمال" } },
    { key: "Personal Loan", value: { en: "Personal Loan", ar: "قرض شخصي" } },
    { key: "Mortgage", value: { en: "Mortgage", ar: "قرض عقاري" } },
    { key: "Real Estate", value: { en: "Real Estate", ar: "العقارات" } },
    { key: "IT Services", value: { en: "IT Services", ar: "خدمات تقنية المعلومات" } },
    { key: "Tourism", value: { en: "Tourism", ar: "السياحة" } },
    { key: "Accounting and Auditing", value: { en: "Accounting and Auditing", ar: "المحاسبة والتدقيق" } },
    { key: "Legal and Business Services", value: { en: "Legal and Business Services", ar: "الخدمات القانونية وخدمات الأعمال" } },
  ];
const [activeBranch, setActiveBranch] = useState("abuDhabi");
  const maps = {
    abuDhabi:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11563.201869038848!2d54.3894629!3d24.4539698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e69246c2e264f%3A0x29be66f81d19a043!2sJovera%20Group!5e0!3m2!1sen!2sae!4v1702213879032!5m2!1sen!2sae",
    ajman:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.5010964530893!2d55.4884969759352!3d25.421505522577796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5754f3ec329f%3A0x9cede73b696a0edb!2sJovera%20Group%20LLC!5e0!3m2!1sen!2sae!4v1766816741071!5m2!1sen!2sae", 
    sharjah:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115408.8775179337!2d55.46387618152094!3d25.32007697035517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5f5fede7964b%3A0x2a830aa19c1f6d89!2sSharjah!5e0!3m2!1sen!2sae!4v1766817806068!5m2!1sen!2sae",
    dubai:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462564.23174555483!2d54.60363676143995!3d25.075340989067737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai!5e0!3m2!1sen!2sae!4v1766817704286!5m2!1sen!2sae",

    };


  return (
    <main className={`bg-[#0D0D0D] text-white min-h-screen px-4 sm:px-16 pt-32 pb-20 mx-auto ${lang !== "en" ? "rtl" : ""} space-y-20`}>
      {/* Page Heading */}
      <div className={`${lang === "en" ? "text-left" : "text-right"}`}>
        <h2 className="text-3xl md:text-4xl lg:text-5xl mb-3 tracking-tight">{lang === "en" ? "Contact" : "اتصل بنا"}</h2>
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-400 font-light tracking-wide">{lang === "en" ? "Find Us" : "اعثر علينا"}</h2>
      </div>

     {/*Map + Contact Info */}
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${lang !== "en" ? "lg:flex-row-reverse" : ""}`}>

  {/* ===================== MAP ===================== */}
  <div className="w-full h-[400px] rounded-lg overflow-hidden">
    <iframe
      src={maps[activeBranch]}
      className="w-full h-full border-0 rounded-lg"
      allowFullScreen
      loading="lazy"
      title="Branch Location"
    />
  </div>

  {/* ===================== CONTACT INFO ===================== */}
  <div>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

      {/* ===================== LEFT COLUMN ===================== */}
      <div className={`${lang === "en" ? "order-2" : "order-1"}`}>

        {/* Dubai */}
        <div
          onClick={() => setActiveBranch("dubai")}
          className={`p-4 mb-5 rounded-xl cursor-pointer flex items-center transition-all duration-300
            ${lang !== "en" ? "flex-row-reverse text-right gap-2" : "gap-4"}
            ${activeBranch === "dubai"
              ? "bg-gradient-to-r from-[#D7AA47] to-[#715925]"
              : "bg-[#1B1B1B] hover:bg-[#242424]"}
          `}
        >
          <MapPin width={28} height={28} />
          <div>
            <h4 className="text-lg font-semibold">{texts.branches[1].title}</h4>
            <p className="text-sm">{texts.branches[1].address}</p>
          </div>
        </div>

        {/* Ajman */}
        <div
          onClick={() => setActiveBranch("ajman")}
          className={`p-4 rounded-xl cursor-pointer flex items-center transition-all duration-300
            ${lang !== "en" ? "flex-row-reverse text-right gap-2" : "gap-4"}
            ${activeBranch === "ajman"
              ? "bg-gradient-to-r from-[#D7AA47] to-[#715925]"
              : "bg-[#1B1B1B] hover:bg-[#242424]"}
          `}
        >
          <MapPin width={28} height={28} />
          <div>
            <h4 className="text-lg font-semibold">{texts.branches[3].title}</h4>
            <p className="text-sm">{texts.branches[3].address}</p>
          </div>
        </div>

      </div>

      {/* ===================== RIGHT COLUMN ===================== */}
      <div className={`${lang === "en" ? "order-1" : "order-2"}`}>

        {/* Abu Dhabi */}
        <div
          onClick={() => setActiveBranch("abuDhabi")}
          className={`p-4 mb-5 rounded-xl cursor-pointer flex items-center transition-all duration-300
            ${lang !== "en" ? "flex-row-reverse text-right gap-2" : "gap-4"}
            ${activeBranch === "abuDhabi"
              ? "bg-gradient-to-r from-[#D7AA47] to-[#715925]"
              : "bg-[#1B1B1B] hover:bg-[#242424]"}
          `}
        >
          <MapPin width={28} height={28} />
          <div>
            <h4 className="text-lg font-semibold">{texts.branches[0].title}</h4>
            <p className="text-sm">{texts.branches[0].address}</p>
          </div>
        </div>

        {/* Sharjah */}
        <div
          onClick={() => setActiveBranch("sharjah")}
          className={`p-4 rounded-xl cursor-pointer flex items-center transition-all duration-300
            ${lang !== "en" ? "flex-row-reverse text-right gap-2" : "gap-4"}
            ${activeBranch === "sharjah"
              ? "bg-gradient-to-r from-[#D7AA47] to-[#715925]"
              : "bg-[#1B1B1B] hover:bg-[#242424]"}
          `}
        >
          <MapPin width={28} height={28} />
          <div>
            <h4 className="text-lg font-semibold">{texts.branches[2].title}</h4>
            <p className="text-sm">{texts.branches[2].address}</p>
          </div>
        </div>

      </div>

    </div>

    {/* ===================== HELP & SUPPORT ===================== */}
    <div className={`${lang !== "en" ? "text-right" : ""} mt-10`}>
      <h2 className="text-xl font-semibold mb-6">{texts.helpSupport}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {texts.contactItems.map((item, idx) => (
          <div
            key={idx}
            className={`flex items-center p-4 bg-[#1B1B1B] rounded-lg
              ${lang !== "en" ? "flex-row-reverse gap-2" : "gap-4"}`}
          >
            <item.icon width={24} height={24} />
            <span className="text-gray-300 text-sm">{item.text}</span>
          </div>
        ))}
      </div>
    </div>

  </div>
</div>

      {/* Row 2: Why Choose Us + Form */}
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${lang !== "en" ? "lg:flex-row-reverse" : ""}`}>
        {/* Why Choose Us */}
        <div className={`${lang === "en" ? "text-left" : "text-right"} space-y-4`}>
          <h1 className="text-2xl mb-10">{lang === "en" ? "Why Choose Us ?" : "لماذا تختارنا؟"}</h1>
          <h3 className="text-2xl font-bold text-[#D7AA47]">{texts.whyChooseUsHeading}</h3>
          <p className="text-gray-300">{texts.whyChooseUsText}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
            {texts.whyChooseUsItems.map((item, idx) => (
              <div key={idx} className="bg-[#1B1B1B] p-2 rounded text-sm transition-all duration-300 ease-out hover:shadow-[0_0_10px_rgba(215,170,47,0.7)] hover:scale-105">
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className={`${lang !== "en" ? "order-first" : ""}`}>
          <ContactForm lang={lang} options={options} />
        </div>
      </div>

      {/* Row 3: Join Us */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className={`flex flex-col ${lang === "en" ? "items-start" : "items-center"}`}>
          {lang === "en" && <h1 className="text-2xl mb-10 text-left w-full">JOIN US</h1>}
          <img src={hiring} alt="We are hiring" className="w-64 rounded-lg" loading="lazy" />
        </div>

        <div className={`${lang === "en" ? "text-left" : "text-right"} space-y-4`}>
          {lang !== "en" && <h1 className="text-2xl mb-10">انضم إلينا</h1>}
          <h3 className="text-2xl text-[#FFFFFF]">{texts.joinUsHeading}</h3>
          <p className="text-gray-300 text-sm mb-10">{texts.joinUsText}</p>
          <Link to="/Career">
            <button className="mt-8 px-5 py-2 rounded-lg font-semibold text-white transition-transform duration-300 ease-out shadow-md hover:scale-105 hover:shadow-xl bg-gradient-to-r from-[#D7AA47] to-[#715925]">
              {texts.browseVacancies}
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Contact_us;
