import { FaWhatsapp } from "react-icons/fa";
import { useEffect, useState } from "react";
import TourismCarousel from "../../components/TourismCarousel";
import { Home, Briefcase, CreditCard, Phone, Mail } from "lucide-react";
import ContactForm from "../../components/contactForm";
import { PrimaryButton, SecondaryButton, PrimaryButton2 } from "../../components/ButtonPrimary";
import { ContactPill } from "../../components/ContactPill";
import HeroImage from "../../assets/landing-pages/Tourism/TourismHero.png";
import ScrollAnimation from "../../components/scrollAnimation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";


import { Helmet } from "react-helmet";


//Services

import UAEVisas from "../../assets/landing-pages/Tourism/UAEVISAS.png";
import TRIP from "../../assets/landing-pages/Tourism/TRIPS.png";
import Hotels from "../../assets/landing-pages/Tourism/Hotel.png";
import AirlineTickets from "../../assets/landing-pages/Tourism/AirlineTickets.png";
import GlobalVisas from "../../assets/landing-pages/Tourism/GlobalVisas.png";
import UaeTrip from "../../assets/landing-pages/Tourism/UAETRIP.png";

import Arrow from "../../assets/landing-pages/Tourism/Icon.png";


//Visas
import phoneMockup from "../../assets/landing-pages/Tourism/QRCode.png";
import Playstore from "../../assets/landing-pages/Tourism/play-store.png";
import Appstore from "../../assets/landing-pages/Tourism/AppStore.png";
import  useTourismPackages from "../../Apis/fetchTourismPackages";


//Payment
import stripe from "../../assets/landing-pages/Tourism/payments/Stripe.png";
import AmericanExpress from "../../assets/landing-pages/Tourism/payments/american-express.png";
import elisalat from "../../assets/landing-pages/Tourism/payments/e&.png";
import fawry from "../../assets/landing-pages/Tourism/payments/fawry.png";
import googlePay from "../../assets/landing-pages/Tourism/payments/googlePay.png";
import vodafone from "../../assets/landing-pages/Tourism/payments/vodafone.png";

// //Tourism Carousel
// import BahrainFlag from "../../assets/landing-pages/Tourism/packages/Bahrain-flag.png";
// import KawaitFlag from "../../assets/landing-pages/Tourism/packages/Kawait-flag.jpg";
// import OmanFlag from "../../assets/landing-pages/Tourism/packages/oman-flag.png";
// import QatarFlag from "../../assets/landing-pages/Tourism/packages/Qatar-flag.jpg";
// import SaudiFlag from "../../assets/landing-pages/Tourism/packages/saudi-flag.jpg";
// import UAEFlag from "../../assets/landing-pages/Tourism/packages/UAE-flag.png";

// //Tourism pictures
// import KawaitPic from "../../assets/landing-pages/Tourism/packages/Kawait-pic.jpg";
// import BahrainPic from "../../assets/landing-pages/Tourism/packages/Bahrain-pic.jpg";
// import SaudiPic from "../../assets/landing-pages/Tourism/packages/Saudi-pic.jpg";
// import OmanPic from "../../assets/landing-pages/Tourism/packages/oman-pic.jpg";
// import QatarPic from "../../assets/landing-pages/Tourism/packages/Qatar-pic.jpg";
// import UAEPic from "../../assets/landing-pages/Tourism/packages/UAE-pic.jpg";


import { getDeviceType } from "../../utils/device";

const PLAY_STORE =
  "https://play.google.com/store/apps/details?id=com.joveragroup.tourism&hl=en&pli=1";

const APP_STORE =
  "https://apps.apple.com/us/app/jovera-tourism/id6753887774";


const TourismLandingPage = ({ lang }) => {
  
  const isArabic = lang !== "en";

  /* ===================== CONTENT ===================== */


 const { packages, loading, error } = useTourismPackages(lang);

const PaymentMethods = [
stripe,
AmericanExpress,
elisalat,
fawry,
googlePay,
vodafone
]
const loopedPaymentMethods =
  PaymentMethods.length < 8
    ? [...PaymentMethods, ...PaymentMethods, ...PaymentMethods]
    : PaymentMethods;
  
const services = [
  {
    id: 1,
    title: {
      en: "UAE Visas",
      ar: "تأشيرات الإمارات",
    },
    description: {
      en: "Fast and reliable UAE visa services including tourist, visit, and residence visas with complete support.",
      ar: "خدمات تأشيرات الإمارات بسرعة وموثوقية، تشمل التأشيرات السياحية والزيارة والإقامة مع دعم كامل.",
    },
    image: UAEVisas,
  },
  {
    id: 2,
    title: {
      en: "Global Visas",
      ar: "تأشيرات عالمية",
    },
    description: {
      en: "Worldwide visa assistance for multiple countries with expert guidance and documentation support.",
      ar: "خدمات تأشيرات لجميع دول العالم مع إرشاد احترافي ودعم كامل في المستندات.",
    },
    image: GlobalVisas,
  },
  {
    id: 3,
    title: {
      en: "Hotels",
      ar: "الفنادق",
    },
    description: {
      en: "Book hotels worldwide at the best prices, from budget stays to luxury accommodations.",
      ar: "حجز الفنادق حول العالم بأفضل الأسعار، من الإقامات الاقتصادية إلى الفنادق الفاخرة.",
    },
    image: Hotels,
  },
  {
    id: 4,
    title: {
      en: "Airline Tickets",
      ar: "تذاكر الطيران",
    },
    description: {
      en: "Affordable airline ticket booking for domestic and international flights with flexible options.",
      ar: "حجز تذاكر طيران بأسعار تنافسية للرحلات الداخلية والدولية مع خيارات مرنة.",
    },
    image: AirlineTickets,
  },
  {
    id: 5,
    title: {
      en: "Trips",
      ar: "الرحلات السياحية",
    },
    description: {
      en: "Customized travel trips and holiday packages designed to suit your preferences and budget.",
      ar: "رحلات سياحية وباقات سفر مخصصة تناسب اهتماماتك وميزانيتك.",
    },
    image: TRIP,
  },
  {
    id: 6,
    title: {
      en: "UAE Trips",
      ar: "رحلات داخل الإمارات",
    },
    description: {
      en: "Explore the UAE with exclusive local tours, desert safaris, city tours, and adventure trips.",
      ar: "اكتشف الإمارات من خلال جولات محلية مميزة، سفاري الصحراء، الجولات السياحية والمغامرات.",
    },
    image: UaeTrip,
  },
];

const options = [
  
  {
    key: "UAE Visas",
    value: { en: "UAE Visas", ar: "تأشيرات الإمارات" }
  },
  {
    key: "Global Visas",
    value: { en: "Global Visas", ar: "التأشيرات العالمية" }
  },
  {
    key: "Hotels",
    value: { en: "Hotels", ar: "الفنادق" }
  },
  {
    key: "Airline Tickets",
    value: { en: "Airline Tickets", ar: "تذاكر الطيران" }
  },
  {
    key: "Trips",
    value: { en: "Trips", ar: "الرحلات" }
  },
  {
    key: "UAE Trips",
    value: { en: "UAE Trips", ar: "رحلات داخل الإمارات" }
  }
];


// const [packages, setPackages] = useState([]);

// useEffect(() => {
//   const apiData = [
//     {
//       id: 1,
//       title: {
//         en: "Dubai",
//         ar: "دبي",
//       },
//       description: {
//         en: "30 days visa, hassle-free tourist visas for 30 or 60 days with processing times ranging from 24 to 72 working hours. All you need is a valid passport and personal photo with a white background — we’ll take care of the rest.",
//         ar: "تأشيرة لمدة 30 يوماً بدون تعقيد، تشمل تأشيرات سياحية لمدة 30 أو 60 يوماً مع وقت معالجة يتراوح بين 24 إلى 72 ساعة عمل. كل ما تحتاجه هو جواز سفر ساري المفعول وصورة شخصية بخلفية بيضاء — وسنتولى نحن الباقي.",
//       },
//       country: {
//         en: "United Arab Emirates",
//         ar: "الإمارات العربية المتحدة",
//       },
//       image: UAEPic,
//       flag: UAEFlag,
//       days: 30,
//       people: 7,
//       rating: 5,
//       price: 1200,
//       oldPrice: 1400,
//     },
//     {
//       id: 2,
//       title: {
//         en: "Makka",
//         ar: "مكة",
//       },
//       description: {
//         en: "30 days visa, hassle-free tourist visas for 30 or 60 days with processing times ranging from 24 to 72 working hours. All you need is a valid passport and personal photo with a white background — we’ll take care of the rest.",
//         ar: "تأشيرة سياحية لمدة 30 يوماً بدون تعقيد، مع سرعة في المعالجة خلال 24 إلى 72 ساعة عمل. فقط جواز سفر ساري وصورة شخصية، والباقي علينا.",
//       },
//       country: {
//         en: "Saudi Arabia",
//         ar: "المملكة العربية السعودية",
//       },
//       image: SaudiPic,
//       flag: SaudiFlag,
//       days: 30,
//       people: 7,
//       rating: 5,
//       price: 1200,
//     },
//     {
//       id: 3,
//       title: {
//         en: "Doha",
//         ar: "الدوحة",
//       },
//       description: {
//         en: "30 days visa, hassle-free tourist visas with fast processing.",
//         ar: "تأشيرة سياحية لمدة 30 يوماً مع معالجة سريعة وبدون تعقيد.",
//       },
//       country: {
//         en: "Qatar",
//         ar: "قطر",
//       },
//       image: QatarPic,
//       flag: QatarFlag,
//       days: 30,
//       people: 7,
//       rating: 5,
//       price: 1200,
//     },
//     {
//       id: 4,
//       title: {
//         en: "Manama",
//         ar: "المنامة",
//       },
//       description: {
//         en: "Fast and reliable tourist visa services.",
//         ar: "خدمات تأشيرة سياحية سريعة وموثوقة.",
//       },
//       country: {
//         en: "Bahrain",
//         ar: "البحرين",
//       },
//       image: BahrainPic,
//       flag: BahrainFlag,
//       days: 30,
//       people: 7,
//       rating: 5,
//       price: 1200,
//     },
//     {
//       id: 5,
//       title: {
//         en: "Kuwait",
//         ar: "الكويت",
//       },
//       description: {
//         en: "Tourist visa with quick approval.",
//         ar: "تأشيرة سياحية مع موافقة سريعة.",
//       },
//       country: {
//         en: "Kuwait",
//         ar: "الكويت",
//       },
//       image: KawaitPic,
//       flag: KawaitFlag,
//       days: 30,
//       people: 7,
//       rating: 5,
//       price: 1200,
//     },
//     {
//       id: 6,
//       title: {
//         en: "Oman",
//         ar: "عُمان",
//       },
//       description: {
//         en: "Easy tourist visa with fast processing.",
//         ar: "تأشيرة سياحية سهلة مع سرعة في المعالجة.",
//       },
//       country: {
//         en: "Oman",
//         ar: "سلطنة عمان",
//       },
//       image: OmanPic,
//       flag: OmanFlag,
//       days: 30,
//       people: 7,
//       rating: 5,
//       price: 1200,
//     },
//   ];

//   setPackages(apiData);
// }, []);
const handleServiceClick = () => {
  const device = getDeviceType();

  if (device === "android") {
    window.location.href = PLAY_STORE;
    return;
  }

  if (device === "ios") {
    window.location.href = APP_STORE;
    return;
  }

  // Desktop fallback
  window.location.href = PLAY_STORE;
};


const content = {
  en: {
    hero: {
      title: "Jovera Tourism Services",
      description:
        "Jovera Tourism is a global travel booking portal where you can effortlessly book day tours, fixed group departures, holidays, and vacation packages in 130+ countries around the world",
      goWebsite: "Go to Website",
      contact: "Contact Us",
    },

    success: {
      label: "OUR SUCCESS",
      title: "We have helped more than 700+ clients in the UAE",
      description:
      "Building trust, innovation, and measurable results for our clients Delivering trust, innovation, and measurable results. Our clients' success is the true proof of our work.",

    },

    uaeVisa: {
      title: "Get UAE VISA",
      features: [
        "Book a UAE Tourist Visa Online",
        "Easily Upload Documents",
        "Arabic Support",
        "Application Status Notifications",
        "Live Customer Service",
      ],
    },
  },

  ar: {
    hero: {
      title: "جوفيرا لخدمات رجال الأعمال",
      description:
        "بوابة جوفيرا للسياحة هي منصة عالمية لحجز السفر تتيح لك بكل سهولة حجز الجولات اليومية، والرحلات الجماعية ذات المواعيد الثابتة، والعطلات، وباقات الإجازات في أكثر من 130 دولة حول العالم.",
      goWebsite: "اذهب إلى الموقع",
      contact: "اتصل بنا",
    },

    success: {
      label: "نجاحنا",
      title: "لقد ساعدنا أكثر من 700 عميل في الإمارات",
      description:
        "نبني الثقة والابتكار ونحقق نتائج ملموسة لعملائنا.",
    },

    uaeVisa: {
      title: "احصل على تأشيرة الإمارات",
      features: [
        "حجز تأشيرة سياحية للإمارات عبر الإنترنت",
        "رفع المستندات بسهولة",
        "دعم باللغة العربية",
        "إشعارات بحالة الطلب",
        "خدمة عملاء مباشرة",
      ],
    },
  },
};


        
  const t = content[isArabic ? "ar" : "en"];

  /* ===================== RENDER ===================== */

  return (
    <>
<Helmet>
        <title>
          {isArabic
            ? "السياحة - مجموعة جوفيرا"
            : "Tourism - Jovera Group"}
        </title>
        <meta name="description" content={content.description} />

        {/* Open Graph */}
        <meta property="og:title" content={content.title} />
        <meta property="og:description" content={content.description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={content.image} />
        <meta property="og:url" content={content.url} />

        {/* Twitter Card */}

        <meta name="twitter:title" content={content.title} />
        <meta name="twitter:description" content={content.description} />
        <meta name="twitter:image" content={HeroImage} />
      </Helmet>


<main>

    <div
      
      className="min-h-screen bg-black text-white"
    >
      {/* ================= HERO ================= */}
       {/* Hero Section */}
<ScrollAnimation>
  <section className="container mx-auto px-4 pt-32 md:pt-24 lg:pt-32 max-w-7xl">
  <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
  {/* LEFT DIV (Text) */}
  <div className={`h-full flex flex-col justify-center ${isArabic ? 'order-2 text-right' : 'order-1'} `}>
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 leading-tight">
      {t.hero.title}
    </h1>
    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
      {t.hero.subtitle}
    </h2>
    <p className="text-gray-300 mb-8 text-sm md:text-base leading-relaxed">
      {t.hero.description}
    </p>
   <div className={`flex flex-wrap gap-4  ${isArabic ? ' flex-row-reverse' : ''} `}>
          <PrimaryButton2 children={
        <span className={`flex items-center gap-2  ${isArabic ? 'flex-row-reverse' : ''}`}>
          {t.hero.goWebsite}
          <span>{isArabic ? '←' : '→'}</span>
        </span>
      } link={"/UnderDevelopment"} />
          <SecondaryButton children={t.hero.contact}  onClick={() => {
  document.getElementById("contact")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}} />
        </div>
  </div>

  {/* RIGHT DIV (Image) */}
  <div className={`relative flex justify-center lg:justify-end ${isArabic ? 'order-1' : 'order-2'}`}>
    <div className="relative w-full aspect-square">
      <div className="rounded-lg ">
        <img 
          src={HeroImage} 
          alt="Hero"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</div>

</section>

</ScrollAnimation>

<ScrollAnimation>
 
 {/* ================= Services ================= */}

<section className="relative py-24 md:py-32">
  {/* Background */}
  <div className="absolute inset-0 bg-black" />

  <div className="relative mx-auto max-w-screen-2xl px-4">
    <h2 className="text-center text-3xl md:text-4xl font-semibold text-[#D7AA47] mb-16">
      {lang === "en" ? "Our Services" : "خدماتنا"}
    </h2>

    <div
      className="
        border-[10px] border-[#1B1B1B] p-5
        grid grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-6
        gap-6
      "
      dir={lang === "en" ? "ltr" : "rtl"}
    >
      {services.map((service) => (
        <div
          key={service.id}
          onClick={handleServiceClick}
          className="
            relative group rounded-2xl h-[260px]
            flex flex-col items-center justify-center
            transition-all duration-300 cursor-pointer
            bg-[#1B1B1B]
            hover:bg-gradient-to-br hover:from-[#D7AA47] hover:to-[#8f6c1f]
          "
        >
          {/* Arrow icon */}
          <span className="absolute top-4 right-4 text-white opacity-60 group-hover:opacity-100 transition">
            <img src={Arrow} alt="↗" />
          </span>

          {/* Image */}
          <img
            src={service.image}
            alt={service.title[lang]}
            className="
              h-24 object-contain mb-6
              transition-all duration-300
              group-hover:brightness-110
            "
            loading="lazy"
          />

          {/* Title */}
          <h3 className="text-lg font-medium text-white">
            {service.title[lang]}
          </h3>
        </div>
      ))}
    </div>
  </div>
</section>




</ScrollAnimation>
<ScrollAnimation>

  {/* ================= Get UAE Visas ================= */}
<section
  className="relative bg-black py-20 md:py-28 overflow-hidden"
  dir={lang === "en" ? "ltr" : "rtl"}
>
  <div className=" relative mx-auto max-w-screen-2xl px-4">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      
      {/* LEFT CONTENT */}
      <div className="text-white">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#D7AA47] mb-8">
          {content[lang].uaeVisa.title}
        </h2>

        <ul className="space-y-4 mb-10">
          {content[lang].uaeVisa.features.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-3 text-lg"
            >
              <span className="text-[#2f2f2f] font-bold text-2xl">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Store Buttons */}
        <div className="flex flex-wrap gap-4">
          <a href="https://play.google.com/store/apps/details?id=com.joveragroup.tourism&hl=en&pli=1">
          <img
            src={Playstore}
            alt="Google Play"
            className="h-12 cursor-pointer hover:opacity-80 transition"
            loading="lazy"
          />
          </a>
          <a href="https://apps.apple.com/us/app/jovera-tourism/id6753887774">
          <img
            src={Appstore}
            alt="App Store"
            className="h-12 cursor-pointer hover:opacity-80 transition"
            loading="lazy"
          />
          </a>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="flex justify-center lg:justify-end">
        <img
          src={phoneMockup}
          alt="UAE Visa App"
          className="max-w-[280px] md:max-w-[340px] lg:max-w-[380px]"
          loading="lazy"
        />
      </div>

    </div>
   <div className="max-w-screen-2xl mx-auto mt-[150px]">

  <h2
    className={`text-2xl mb-20 ${lang === "en" ? "text-left" : "text-right"}`}
    dir={lang === "en" ? "ltr" : "rtl"}
  >
    {lang === "en" ? "We Accept" : "شركاؤنا"}
  </h2>

  <Swiper
  modules={[Autoplay, FreeMode]}
  loop={true}
  freeMode={true}
  allowTouchMove={false}
  speed={6000}
  autoplay={{
    delay: 0,
    disableOnInteraction: false,
    reverseDirection: lang !== "en", // <-- Reverse direction for RTL
  }}
  slidesPerView={2.5}
  spaceBetween={30}
  breakpoints={{
    640: { slidesPerView: 3.2 },
    768: { slidesPerView: 4.2 },
    1024: { slidesPerView: 5.2 },
    1280: { slidesPerView: 6.2 },
  }}
  dir={lang === "en" ? "ltr" : "rtl"} // <-- Make Swiper RTL-aware
>
  {loopedPaymentMethods.map((method, index) => (
    <SwiperSlide key={index}>
      <div className="flex items-center justify-center">
        <div className="w-32 h-20 flex items-center justify-center">
          <img
            src={method}
            alt="Payment Method"
            className="max-w-full max-h-full object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

</div>

  </div>
</section>
</ScrollAnimation>


      {/* ================= Packages ================= */}
     
<ScrollAnimation>
<section className="relative bg-black py-20 md:py-28 overflow-hidden">
  <div className="relative mx-auto max-w-screen-2xl px-4">
    <TourismCarousel packages={packages} lang={lang} />
  </div>
</section>
</ScrollAnimation>




      {/* ================= CONTACT ================= */}
      {/* Contact Form & Success Section */}
          <section className="container mx-auto px-4 py-16 max-w-7xl ">
            <div className="sm:bg-[#171717] sm:p-20  grid lg:grid-cols-2 gap-12 rounded-xl">
              {/* Form Placeholder */}
                <ContactForm lang={lang} options={options} />
    
              {/* Success Section */}
              <div className="flex flex-col justify-center ">
                {/* our success text */}
                <div className={`${isArabic ? 'text-right' : ''}`}>
                <p className="text-[#D7AA47] font-semibold mb-2 text-sm uppercase tracking-wider">{t.success.label}</p>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                  {t.success.title}
                </h2>
                <p className="text-gray-300 mb-8 text-sm">
                  {t.success.description}
                </p>
                </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 max-w-5xl mx-auto">
          
          <ContactPill
            icon={Phone}
            text="800-664000"
            link="tel:800664000"
          />
    
          <ContactPill
            icon={Mail}
            text="info@joveratourism.ae"
            link="mailto:info@joveratourism.ae"
          />
    
          <ContactPill
            icon={Phone}
            text="+97126311977"
            link="tel:026311977"
          />
    
          <ContactPill
            icon={FaWhatsapp}
            text="+97126311977"
            link="https://wa.me/97126311977"
          />
    
        </div>
              </div>
            </div>
          </section>
       
    </div>
    </main>
    </>
  );
};

export default TourismLandingPage;
