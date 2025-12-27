import React from "react";
import Hero from "../assets/about-us/hero.jpg";
import aboutImg from "../assets/about-us/about-us-img.jpg";

import ramyGerguis from "../assets/ramy-gerguis.png";
import abanoubUddin from "../assets/abanoub-uddin.png";
import fadyGerguis from "../assets/fady-gerguis.png";
import gomilUddin from "../assets/gomil-uddin.png";
import hossamMohammad from "../assets/hossam-mohamed.png";
import kamalBadri from "../assets/kamal-badri.png";
import mohammadGamal from "../assets/mohamed-gamal.png";
import osmanMohammad from "../assets/osman-mohamed.png";
import wadeaGerguis from "../assets/wagea-yousif.png";

/* ================= DIRECTORS ================= */

// English version
const directors_en = [
  { name: "RAMY GERGUIS", role: "CEO", image: ramyGerguis },
  { name: "FADY GERGUIS", role: "MANAGING DIRECTOR", image: fadyGerguis },
  { name: "OSMAN MOHAMED", role: "BUSSINESSMEN SERVICES MANAGER", image: osmanMohammad },
  { name: "MOHAMED GAMAL", role: "REAL ESTATE MANAGER", image: mohammadGamal },
  { name: "KAMAL UDDIN", role: "IT MANAGER", image: kamalBadri },
  { name: "Wadea Gerguis", role: "MORTGAGE MANAGER", image: wadeaGerguis },
  { name: "Gamil Uddin", role: "BUSSINESS LOAN MANAGER", image: gomilUddin },
 // { name: "ABANOUB UDDIN", role: "MARKETING MANAGER", image: abanoubUddin },
  { name: "HOSSAM MOHAMED", role: "TOURISM MANAGER", image: hossamMohammad },
 
];

// Arabic version
const directors_ar = [
  { name: "رامي جرجس", role: "المدير التنفيذي", image: ramyGerguis },
  { name: "فادي جرجس", role: "المدير العام", image: fadyGerguis },
  { name: "عثمان محمد", role: "مدير خدمات رجال الأعمال", image: osmanMohammad },
  { name: "محمد جمال", role: "مدير العقارات", image: mohammadGamal },
  { name: "كمال الدين", role: "مدير تكنولوجيا المعلومات", image: kamalBadri },
  { name: "وديع جرجس", role: "مدير القروض العقارية", image: wadeaGerguis },
  { name: "جميل الدين", role: "مدير القروض التجارية", image: gomilUddin },
  //{ name: "أبانوب الدين", role: "مدير التسويق", image: abanoubUddin },
  { name: "حسام محمد", role: "مدير السياحة", image: hossamMohammad },
 
];

/* ================= PAGE CONTENT ================= */

const content = {
  en: {
    purpose: "Our Purpose",
    heroTitle1: "Looking For",
    heroTitle2: "The Future !",
    heroTextHighlight: "We Incubate A Network of",
    heroText:
      "Financial services (Mortgage, Business Finance, Personal Loan), Real Estate, IT Solution, E-Marketing, Business Services, Tourism, Accounting And Auditing.",
    storyTitle: "Our Story",
    storyP1:
      "Jovera Group, established in 2013 in the UAE, swiftly became a key player in real estate and financial services, tourism, advertisement, and accountancy, prioritizing excellence and innovation.",
    storyP2:
      "Offering a comprehensive suite of services, the company forged strong client and partner relationships. Guided by integrity and a customer-centric approach, Jovera Group continues to grow across the UAE.",
    boardTitle: "Our Board of Directors",
  },
  ar: {
    purpose: "رسالتنا",
    heroTitle1: "نبحث عن",
    heroTitle2: "المستقبل",
    heroTextHighlight: "نحن نُنشئ شبكة من",
    heroText:
      "الخدمات المالية (التمويل العقاري، تمويل الأعمال، القروض الشخصية)، العقارات، حلول تقنية المعلومات، التسويق الإلكتروني، خدمات رجال الأعمال، السياحة، المحاسبة والتدقيق.",
    storyTitle: "قصتنا",
    storyP1:
      "تأسست مجموعة جوفيرا عام 2013 في دولة الإمارات العربية المتحدة، وسرعان ما أصبحت لاعبًا رئيسيًا في مجالات العقارات والخدمات المالية والسياحة والإعلان والمحاسبة، مع التركيز على التميز والابتكار.",
    storyP2:
      "ومن خلال تقديم مجموعة متكاملة من الخدمات، نجحت الشركة في بناء علاقات قوية مع العملاء والشركاء، مستندة إلى النزاهة والتركيز على العميل.",
    boardTitle: "مجلس الإدارة",
  },
};

const  AboutUsOld = ({ lang = "en" }) => {
  const isAr = lang === "ar";
  const t = content[lang];
  const directors = isAr ? directors_ar : directors_en;

  return (
    <div className="bg-black text-white" dir={isAr ? "rtl" : "ltr"}>

{/* ================= HERO ================= */}
<section className="relative h-[900px] flex items-center">
  <div className="absolute inset-0">
    <img
      src={Hero}
      alt="About Hero"
      className="w-full h-full object-cover opacity-50"
    />
  </div>

  <div className="relative z-10 max-w-6xl px-4 sm:px-8 md:px-16">
    {/* PURPOSE */}
    <h2 className="uppercase tracking-[0.3em] text-sm sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-10">
      {t.purpose}
    </h2>

    {/* DESCRIPTION */}
    <p className="max-w-4xl text-gray-300 leading-relaxed text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-12">
      <span className="text-[#D7AA47] font-semibold">
        {t.heroTextHighlight}
      </span>{" "}
      {t.heroText}
    </p>

    {/* MAIN TITLE */}
    <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-light uppercase leading-snug sm:leading-tight md:leading-tight lg:leading-tight">
      {t.heroTitle1} <br />
      <span className="font-semibold">{t.heroTitle2}</span>
    </h1>
  </div>
</section>



      {/* ================= OUR STORY ================= */}
<section className="py-20 px-6 bg-[#1B1B1B]">
  <div className=" px-16 grid gap-12 lg:grid-cols-2 items-center">
    {/* Text */}
    <div className={`${lang === 'en' ? 'text-left' : 'text-right'}  text-white}`}>
      <h2 className="text-2xl sm:text-3xl mb-6 uppercase text-white">{t.storyTitle}</h2>
      <p className="text-gray-300 leading-relaxed mb-4">{t.storyP1}</p>
      <p className="text-gray-300 leading-relaxed">{t.storyP2}</p>
    </div>

    {/* Image */}
    <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
      <div className="bg-white p-4 rounded-xl border border-white">
        <img
          src={aboutImg}
          alt="Our Story"
          className="rounded-lg w-[200px] sm:w-[240px] md:w-[280px] h-[240px] sm:h-[300px] md:h-[340px] object-cover"
        />
      </div>
    </div>
  </div>
</section>


{/* ================= BOARD ================= */}
<section className="py-20 px-6 bg-black">
  <div className="px-4 md:px-16">
    <h2 className="text-2xl sm:text-3xl mb-10 uppercase text-white">{t.boardTitle}</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {directors.map((d, i) => (
        <div
          key={i}
          className="relative border-[6px] border-[#D7AA47] rounded-xl overflow-hidden bg-[#111] flex flex-col items-center"
        >
          <div className="w-full pt-[130%] relative">
            {/* Image fills the frame */}
            <img
              src={d.image}
              alt={d.name}
              className="absolute top-0 left-0 w-full h-full object-cover object-top rounded-t-xl"
            />
          </div>

          <div className="text-center p-2">
            <h4
              className="font-extrabold italic text-lg md:text-xl"
              style={{ WebkitTextStroke: "0.5px #facc15", color: "white" }}
            >
              {d.name}
            </h4>
            <p className="text-sm md:text-base font-semibold">{d.role}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


    </div>
  );
};

export default AboutUsOld;
