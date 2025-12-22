import React, { useState } from 'react';
import { Link } from "react-router-dom";

import ScrollAnimation from '../components/scrollAnimation';
import { Menu, X, Facebook, Instagram, Twitter, Youtube, Phone, Mail, MapPin} from 'lucide-react';
import { CreditCard, Home, ServerCog, Plane, FileText, Briefcase } from 'lucide-react';
import { Swiper, SwiperSlide } from "swiper/react";
import ContactForm from '../components/contactForm';
import "swiper/css";
import "swiper/css/autoplay";


import { Autoplay } from "swiper/modules";
import ramyGerguis from "../assets/ramy-gerguis.png";
import abanoubUddin from "../assets/abanoub-uddin.png";
import fadyGerguis from "../assets/fady-gerguis.png";
import gomilUddin from "../assets/gomil-uddin.png";
import hossamMohammad from "../assets/hossam-mohamed.png";
import kamalBadri from "../assets/kamal-badri.png";
import mohammadGamal from "../assets/mohamed-gamal.png";
import osmanMohammad from "../assets/osman-mohamed.png";
import wadeaGerguis from "../assets/wagea-yousif.png";

// importing Partner images
import adcb from "../assets/partners/Adcb.png";
import adib from "../assets/partners/ADIB.png";
import aldar from "../assets/partners/Aldar.png";
import eithad from "../assets/partners/eithad.png";
import emaar from "../assets/partners/Emaar.png";
import emiratesislamic from "../assets/partners/Emirates_Islamic.png";
import emiratesnbd from "../assets/partners/emirates-nbd.png";
import emirates from "../assets/partners/emirates.png";
import fab from "../assets/partners/FAB.png";
import mashreq from "../assets/partners/mashreq.png";

const JoveraHomepage = ({ lang }) => {
  
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   phone: '',
  //   service: '',
  //   branch: '',
  //   message: ''
  // });
// const [lang, setLang] = useState('en');
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('Form submitted:', formData);
  //   // Handle form submission
  // };

  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value
  //   });
  // };

const services = [
  {
    title: "Financial services",
    description: "We offer you integrated Banking",
    cta: "Read more",
    link: "/Finance",
    icon: <CreditCard size={28} />,
  },
  {
    title: "Real Estate",
    description: "It's time to own a new home for a better lifestyle",
    cta: "Read more",
    link: "/RealEstate",
    icon: <Home size={28} />,
  },
  {
    title: "IT Solution & Marketing",
    description: "It's time to own a new home for a better lifestyle",
    cta: "Read more", 
    link: "/IT",
    icon: <ServerCog size={28} />,
  },
  {
    title: "Tourism",
    description: "The Perfect Travel Plan For You & Your Family",
    cta: "Read more",
     link: "/Tourism",
    icon: <Plane size={28} />,
  },
  {
    title: "Accountancy And Auditing",
    description: "Accountancy Services and Audits Keeping Legal Correct",
    cta: "Read more",
     link: "/Accounting",
    icon: <FileText size={28} />,
  },
  {
    title: "Service of Businessmen",
    description: "our Tourism manages For All Business Needs",
    cta: "Read more",
      link: "/Business",
    icon: <Briefcase size={28} />,
  }
];


const translatedServices = [
  {
    title: "الخدمات المالية",
    description: "نقدّم لك خدمات مصرفية متكاملة",
    cta: "اقرأ المزيد",
    icon: <CreditCard size={28} />,
  },
  {
    title: "العقارات",
    description: "لقد حان الوقت لامتلاك منزل جديد لحياة أفضل",
    cta: "اقرأ المزيد",
    icon: <Home size={28} />,
  },
  {
    title: "حلول تقنية المعلومات والتسويق",
    description: "لقد حان الوقت لامتلاك منزل جديد لحياة أفضل",
    cta: "اقرأ المزيد",
    icon: <ServerCog size={28} />,
  },
  {
    title: "السياحة",
    description: "الخطة السياحية المثالية لك ولعائلتك",
    cta: "اقرأ المزيد",
    icon: <Plane size={28} />,
  },
  {
    title: "المحاسبة والتدقيق",
    description: "خدمات المحاسبة والتدقيق للحفاظ على الامتثال القانوني",
    cta: "اقرأ المزيد",
    icon: <FileText size={28} />,
  },
  {
    title: "خدمات رجال الأعمال",
    description: "خدماتنا تدعم جميع احتياجات رجال الأعمال",
    cta: "اقرأ المزيد",
    icon: <Briefcase size={28} />,
  }
];

// English version
const directors_en = [
  { name: "RAMY GERGUIS", role: "CEO", image: ramyGerguis },
  { name: "FADY GERGUIS", role: "MANAGING DIRECTOR", image: fadyGerguis },
  { name: "KAMAL UDDIN", role: "IT MANAGER", image: kamalBadri },
  { name: "MOHAMED GAMAL", role: "REAL ESTATE MANAGER", image: mohammadGamal },
  { name: "Wadea Gerguis", role: "MORTGAGE MANAGER", image: wadeaGerguis },
  { name: "Gamil Uddin", role: "BUSSINESS LOAN MANAGER", image: gomilUddin },
  { name: "ABANOUB UDDIN", role: "MARKETING MANAGER", image: abanoubUddin },
  { name: "HOSSAM MOHAMED", role: "TOURISM MANAGER", image: hossamMohammad },
  { name: "OSMAN MOHAMED", role: "BUSSINESSMEN SERVICES MANAGER", image: osmanMohammad },
];

// Arabic version
const directors_ar = [
  { name: "رامي جرجس", role: "المدير التنفيذي", image: ramyGerguis },
  { name: "فادي جرجس", role: "المدير العام", image: fadyGerguis },
  { name: "كمال الدين", role: "مدير تكنولوجيا المعلومات", image: kamalBadri },
  { name: "محمد جمال", role: "مدير العقارات", image: mohammadGamal },
  { name: "وديع جرجس", role: "مدير القروض العقارية", image: wadeaGerguis },
  { name: "جميل الدين", role: "مدير القروض التجارية", image: gomilUddin },
  { name: "أبانوب الدين", role: "مدير التسويق", image: abanoubUddin },
  { name: "حسام محمد", role: "مدير السياحة", image: hossamMohammad },
  { name: "عثمان محمد", role: "مدير خدمات رجال الأعمال", image: osmanMohammad },
];

// Choose array based on language
const directors = lang === "en" ? directors_en : directors_ar;

  const partners = [
    adcb,
    adib,
    aldar,
    eithad,
    emaar,
    emiratesislamic,
    emiratesnbd,
    emirates,
    fab,
    mashreq
  ];

  const branches = [
    { city: "Abu Dhabi", address: "Abu Dhabi ( Head office )", details: "Hamdan St - City center - 10th floor" },
    { city: "Dubai", address: "Dubai", details: "Al garhoud Road - Beirut fish Saeed Al Maktoum St" },
    { city: "Sharjah", address: "Sharjah", details: "Al Taawun - Ajman Bus Stand Al Ittihad Rd" },
    { city: "Ajman", address: "Ajman", details: "Al Bustan - Behind Bin Saeed Al Maktoum St" }
  ];
  const translatedBranches = [
  { 
    city: "أبوظبي", 
    address: "أبوظبي (المقر الرئيسي)", 
    details: "شارع حمدان - مركز المدينة - الطابق العاشر" 
  },
  { 
    city: "دبي", 
    address: "دبي", 
    details: "طريق القرهود - بيروت فيش - شارع سعيد بن مكتوم" 
  },
  { 
    city: "الشارقة", 
    address: "الشارقة", 
    details: "التعاون - موقف حافلات عجمان - شارع الاتحاد" 
  },
  { 
    city: "عجمان", 
    address: "عجمان", 
    details: "البستان - خلف شارع سعيد بن مكتوم" 
  }
];



const options = [
  { key: "Business Loan", value: { en: "Business Loan", ar: "قرض تجاري" } },
  { key: "Mortgage Loan", value: { en: "Mortgage Loan", ar: "قرض عقاري" } },
  { key: "Personal Loan", value: { en: "Personal Loan", ar: "قرض شخصي" } },
  { key: "Real Estate", value: { en: "Real Estate", ar: "العقارات" } },
  { key: "Legal Service", value: { en: "Legal Service", ar: "خدمة قانونية" } },
  { key: "Auditing & Accounting", value: { en: "Auditing & Accounting", ar: "التدقيق والمحاسبة" } },
];








  return (
    <div className="bg-black text-white min-h-screen">

{/* Hero Section with Video Background */}
<section className="relative h-[500px] flex items-center">
  <video
    className="absolute inset-0 w-full h-full object-cover z-0"
    src="/Hero-Video.mp4"
    autoPlay
    loop
    muted
    playsInline
    preload="none"
  />
  <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/70 to-transparent z-10"></div>
  
  <div className="relative z-20 mx-auto px-4">
    <div className={`hero-text flex flex-col justify-center h-full w-[100%] md:w-[55%] ${lang === "en" ? "text-left mr-auto" : "text-right ml-auto"}`}
>
      
      {/* Main Heading */}
      <h1 className={`text-[3rem] font-normal uppercase mb-4 ${lang === "en" ? "text-left" : "text-right"}`} dir={lang === "en" ? "ltr" : "rtl"}>
        {lang === 'en' ? 'LOOKING FOR\nTHE FUTURE !' : 'نبحث عن المستقبل!'}
      </h1>

      {/* Subheading with styled text */}
      <p className={`text-[1rem] font-normal leading-relaxed ${lang === "en" ? "text-left" : "text-right"}`} dir={lang === "en" ? "ltr" : "rtl"}>
        {lang === 'en' 
          ? (
            <>
              <span className="text-[#D7AA47] font-bold">We Incubate A Network of </span>
              <span className="text-white italic">
                Financial services (Mortgage, Bussiness Finance, Personal Loan) Real Estate, IT Solution, E-Marketing, Service Of BusinessMen, Tourism, Accounting And Auditing
              </span>
            </>
          )
          : (
            <>
              <span className="text-[#D7AA47] font-bold">نحن نحتضن شبكة من </span>
              <span className="text-white italic">
                الخدمات المالية (الرهون العقارية، تمويل الأعمال، القروض الشخصية)، العقارات، حلول تكنولوجيا المعلومات، التسويق الإلكتروني، خدمات رجال الأعمال، السياحة، المحاسبة والتدقيق
              </span>
            </>
          )
        }
      </p>
    </div>
  </div>
</section>

 <section className="py-16 px-16 bg-black">
  <div className="max-w-7xl mx-auto">
    <h2
      className={`text-3xl mb-12 ${lang === "en" ? "text-left" : "text-right"}`}
      dir={lang === "en" ? "ltr" : "rtl"}
    >
      {lang === "en" ? "Our Company" : "شركتنا"}
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
      {(lang === "en" ? services : translatedServices).map((service, index) => (
        <Link key={index} to={service.link} className="block">
          <div
            className="p-6 rounded-lg text-center cursor-pointer transform transition-transform hover:scale-105 
              hover:bg-gradient-to-b from-[#D7AA47] to-[#715925] 
              bg-[#1B1B1B] text-white h-full flex flex-col justify-between"
          >
            {/* Icon */}
            <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl mb-3">{service.title}</h3>

            {/* Description */}
            <p className="text-sm mb-4 opacity-90">{service.description}</p>

            {/* CTA Button (visual only) */}
            <span className="text-[#D7AA47] text-sm font-semibold hover:text-yellow-400">
              {service.cta} {lang === "en" ? "→" : "←"}
            </span>
          </div>
        </Link>
      ))}
    </div>
  </div>
</section>



{/* Our Story */}
<section className="py-16 px-16 bg-black">
  <div className="max-w-7xl mx-auto">
    {lang === "en" ? (
      <h2 className="text-3xl mb-12 text-left">Our Story – In Brief</h2>
    ) : (
      <h2 className="text-3xl mb-12 text-right">قصتنا – باختصار</h2>
    )}

    <div
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 ${
        lang !== "en" ? "lg:grid-flow-dense" : ""
      }`}
    >
      {/* Content Div */}
      <div className={lang !== "en" ? "lg:col-start-2" : ""}>
        {lang === "en" ? (
          <>
            <div className="text-left mb-8">
              <div className="text-5xl text-yellow-600 mb-2">13 Years</div>
              <div className="text-5xl text-yellow-600 mb-2">Experience</div>
            </div>

            <p className="text-left text-gray-300 mb-4 leading-relaxed">
              Founded in 2013 in Abu Dhabi, Jovera Group began as a vision to simplify
              real estate and financial solutions in the UAE. Over time, we evolved into
              a diversified conglomerate, expanding our expertise across multiple
              sectors: Financial Services, Real Estate, E-Marketing, Advertising,
              Software & App Development, Business Support, Accountancy & Auditing, and
              Tourism & Hospitality.
            </p>

            <p className="text-left text-gray-300 leading-relaxed">
              Driven by innovation, integrity, and a client-first mindset, we've helped
              individuals and businesses achieve their goals and succeed across sectors.
              With a strong presence in Abu Dhabi, Dubai, Ajman, and Sharjah, we remain
              committed to empowering clients with a personal touch—helping clients
              achieve more, every step of the way.
            </p>
          </>
        ) : (
          <>
            <div className="text-right mb-8">
              <div className="text-5xl text-yellow-600 mb-2">13 سنة</div>
              <div className="text-5xl text-yellow-600 mb-2">خبرة</div>
            </div>

            <p className="text-right text-gray-300 mb-4 leading-relaxed" dir="rtl">
              تأسست مجموعة جوفيرا في عام 2013 في أبوظبي، حيث بدأت برؤية تهدف إلى
              تبسيط حلول العقارات والخدمات المالية في دولة الإمارات. ومع مرور الوقت،
              تطورنا لنصبح مجموعة متنوعة تمارس نشاطها في عدة قطاعات تشمل: الخدمات
              المالية، العقارات، التسويق الإلكتروني، الإعلان، تطوير البرمجيات
              والتطبيقات، دعم الأعمال، المحاسبة والتدقيق، والسياحة والضيافة.
            </p>

            <p className="text-right text-gray-300 leading-relaxed" dir="rtl">
              مدفوعين بالابتكار والنزاهة ونهج يضع العميل أولاً، ساعدنا الأفراد
              والشركات على تحقيق أهدافهم والنجاح في مختلف القطاعات. ومع حضور قوي
              في أبوظبي ودبي وعجمان والشارقة، نلتزم دائماً بتمكين عملائنا بلمسة
              شخصية—لنساعدهم على تحقيق المزيد في كل خطوة.
            </p>
          </>
        )}
      </div>

      {/* Contact Form */}
      <div className={lang !== "en" ? "lg:col-start-1" : ""}>
        <ContactForm lang={lang} options={options}/>
      </div>
    </div>
  </div>
</section>


      {/* Mission & Vision */}
<section className="py-16 px-4 bg-[#1B1B1B]">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
    
    {lang === "en" ? (
      /* ------------------- ENGLISH CONTENT ------------------- */
      <div>
        <h3 className="text-left text-3xl mb-4">
          OUR<br />Mission
        </h3>
        <p className="text-left text-gray-300 leading-relaxed">
          To deliver seamless, end-to-end business solutions across real estate,
          finance, technology, and tourism—empowering individuals and organizations
          to achieve sustainable growth, trust, excellence, and professionalism.
        </p>

        <h3 className="mt-5 text-left text-3xl mb-4">
          OUR<br />Vision
        </h3>
        <p className="text-left text-gray-300 leading-relaxed max-w-3xl">
          To be a leading, diversified service group in the UAE and beyond—recognized
          for transforming challenges into opportunities and building long-term
          value for our clients, partners, and communities.
        </p>
      </div>

    ) : (
      /* ------------------- ARABIC CONTENT ------------------- */
      <div dir="rtl">
        <h3 className="text-right text-3xl mb-4">
          مهمتنا
        </h3>
        <p className="text-right text-gray-300 leading-relaxed">
          تقديم حلول أعمال متكاملة وسلسة في مجالات العقارات، والتمويل،
          والتكنولوجيا، والسياحة—لتمكين الأفراد والمؤسسات من تحقيق نمو مستدام،
          وبناء الثقة، والتميز، والاحترافية.
        </p>

        <h3 className="mt-5 text-right text-3xl mb-4">
          رؤيتنا
        </h3>
        <p className="text-right text-gray-300 leading-relaxed max-w-3xl">
          أن نكون مجموعة خدمات رائدة ومتنوعة في دولة الإمارات وخارجها—معروفة
          بقدرتها على تحويل التحديات إلى فرص وبناء قيمة طويلة الأمد لعملائنا
          وشركائنا ومجتمعاتنا.
        </p>
      </div>
    )}

    {/* IMAGE SECTION */}
    <div className="flex items-start justify-center">
      <img 
        src="./our-mission-picture.jpg" 
        alt="Team collaboration" 
        className="rounded-lg w-full max-w-sm lg:max-w-md max-h-80 object-cover"
        loading='lazy'
      />
    </div>

  </div>
</section>

{/* 
  Board of directors */}

<section className="py-20 px-4 bg-black">
  <div className="max-w-7xl mx-auto">

<h2 className={`text-3xl mb-12 ${lang === "en" ? "text-left" : "text-right"}`} dir={lang === "en" ? "ltr" : "rtl"}>
  {lang === "en" ? "OUR BOARD OF \n DIRECTORS" : "مجلس الإدارة \n الخاص بنا"}
</h2>


    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 3000, disableOnInteraction: false }}   // slower (3 seconds)
      speed={900}                                               // smoother slide animation
      loop={true}
      slidesPerView={1.5}
      spaceBetween={20}
      breakpoints={{
        640: { slidesPerView: 2.2 },
        768: { slidesPerView: 3.2 },
        1024: { slidesPerView: 4.2 },
        1280: { slidesPerView: 5.2 },
      }}
    >
      {directors.map((director, index) => (
        <SwiperSlide key={index}>
          <div className="relative border-[10px] border-yellow-500 rounded-xl overflow-hidden bg-black">

            {/* Profile Image */}
            <img
              src={director.image}
              alt={director.name}
              className="w-full h-72 object-cover"
              loading="lazy"
            />

            {/* Text Overlay */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
              <h4
                className="font-extrabold italic text-2xl text-white leading-tight 
                drop-shadow-lg"
                style={{
                  WebkitTextStroke: "0.2px #facc15",   // yellow outline
                  color: "white",
                }}
              >
                {director.name}
              </h4>

              <p className="text-sm text-white font-semibold mt-1">
                {director.role}
              </p>
            </div>

          </div>
        </SwiperSlide>
      ))}

    </Swiper>

  </div>
</section>

      {/* Partners */}
      <section className="py-16 px-4 bg-black">
  <div className="max-w-7xl mx-auto">

 <h2 className={`text-3xl mb-12 ${lang === "en" ? "text-left" : "text-right"}`} dir={lang === "en" ? "ltr" : "rtl"}>
  {lang === "en" ? "Our Partners" : "شركاؤنا"}
</h2>


    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 3000,                 
        reverseDirection: true,     
        disableOnInteraction: false
      }}
      speed={900}                    // smooth animation
      loop={true}
      slidesPerView={2.5}
      spaceBetween={30}
      breakpoints={{
        640: { slidesPerView: 3.2 },
        768: { slidesPerView: 4.2 },
        1024: { slidesPerView: 5.2 },
        1280: { slidesPerView: 6.2 },
      }}
    >
      {partners.map((partner, index) => (
        <SwiperSlide key={index}>
          <div className="flex items-center justify-center">

            {/* FIXED SIZE IMAGE WRAPPER */}
            <div className="w-32 h-20 flex items-center justify-center">
              <img
                src={partner}
                alt="partner"
                className="max-w-full max-h-full object-contain"
                loading="lazy"
              />
            </div>

          </div>
        </SwiperSlide>
      ))}
    </Swiper>

  </div>
</section>

 {/* Branches */}
<section className="py-12 px-4 bg-black">
  <div className="max-w-7xl mx-auto">

    <h2 className={`text-3xl mb-8 text-white ${lang === "en" ? "text-left" : "text-right"}`} dir={lang === "en" ? "ltr" : "rtl"}>
  {lang === "en" ? "BRANCHES OF JOVERA GROUP" : "فروع مجموعة جوفيرا"}
</h2>

<div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {(lang === "en" ? branches : translatedBranches).map((branch, index) => (
    <div
      key={index}
      className={`
        p-4 rounded-xl text-white flex items-center gap-4
        ${index === 0 
          ? "bg-gradient-to-r from-[#D7AA47] to-[#715925]"
          : "bg-[#1A1A1A]"}
      `}
    >
      {/* Icon Column */}
      <div className="flex items-center justify-center w-14 h-14">
        <MapPin size={36} />
      </div>

      {/* Text Column */}
      <div className={`flex flex-col gap-1 ${lang === "en" ? "text-left" : "text-right"}`}>
        <h4 className="font-bold text-md">
          {branch.address}
        </h4>
        <p className="text-sm opacity-90 leading-snug">
          {branch.details}
        </p>
      </div>
    </div>
  ))}
</div>
  </div>
</section>      
    </div>
  );
};

export default JoveraHomepage;