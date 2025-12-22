import { FaWhatsapp } from "react-icons/fa";
import { Home, Briefcase, CreditCard, Phone, Mail } from "lucide-react";
import ContactForm from "../../components/contactForm";
import { PrimaryButton, SecondaryButton, PrimaryButton2 } from "../../components/button-primary";
import { ContactPill } from "../../components/contact-pill";
import FeaturedCategories from "../../components/featured-categories";
import HeroImage from "../../assets/landing-pages/Business-Services/HeroImg.png";
import PropertiesSection from "../../components/PropertiesSection";
import ServiceCard from "../../components/ServiceCard";
import PricingCard from "../../components/pricing-card";
import ScrollAnimation from "../../components/scrollAnimation";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";

// Partners
import judicialDepartment from "../../assets/landing-pages/Business-Services/Abu-Dhabi-Judicial-Department.png";
import police from "../../assets/landing-pages/Business-Services/abu-dhabi-police-force.png";
import taxAuthority from "../../assets/landing-pages/Business-Services/federal-tax-authority.png";
import LandDepartment from "../../assets/landing-pages/Business-Services/Land-Department 1.png";
import ChamberOfCommerce from "../../assets/landing-pages/Business-Services/dubai-chamber-of-commerce.png";
import MOHRE from  "../../assets/landing-pages/Business-Services/Ministry-of-Human-Resources-&-Emiratisation-1 1.png";

//Services

import DebtCollection from "../../assets/landing-pages/Business-Services/services/Debt-collection.png";
import EstablishingCompanies from "../../assets/landing-pages/Business-Services/services/Establishing-companies.jpg";
import Police from "../../assets/landing-pages/Business-Services/services/police.png";
import CompaniesRepresentation from "../../assets/landing-pages/Business-Services/services/Representing-companies.png";
import Transaction from "../../assets/landing-pages/Business-Services/services/Transaction-clearing-service.png";
import legal from "../../assets/landing-pages/Business-Services/services/Legal-consultations.png";
import Mofa from "../../assets/landing-pages/Business-Services/services/MOFA.jpg";
import JusticeBook from "../../assets/landing-pages/Business-Services/services/justice-book.jpg";


const BusinessLandingPage = ({ lang }) => {
  
  const isArabic = lang !== "en";

  // const handleFormSubmit = (data) => {
  //   console.log("Form data:", data);
  // };

  /* ===================== CONTENT ===================== */





const partners = [
    { id: 1, name: "Ministry of Human Resources", src:MOHRE },
    { id: 2, name: "Land Department", src:LandDepartment },
    { id: 3, name: "Federal Tax Authority", src:taxAuthority },
    { id: 4, name: "Dubai Chamber", src:ChamberOfCommerce },
    { id: 5, name: "Abu Dhabi Police", src:police },
    { id: 6, name: "Judicial Department", src:judicialDepartment},
  ];
  
const services = [
  {
    id: 1,
    title: {
      en: "Company Representation",
      ar: "تمثيل الشركات",
    },
    description: {
      en: "Company formation services for investors and business owners of all nationalities, from start to finish.",
      ar: "خدمات تأسيس الشركات للمستثمرين وأصحاب الأعمال من جميع الجنسيات من البداية إلى النهاية.",
    },
    image: CompaniesRepresentation,
  },
  {
    id: 2,
    title: {
      en: "Transaction Clearance Services",
      ar: "خدمات تخليص المعاملات",
    },
    description: {
      en: "End-to-end transaction clearance services for investors and business owners of all nationalities.",
      ar: "خدمات تخليص المعاملات من البداية إلى النهاية للمستثمرين وأصحاب الأعمال من جميع الجنسيات.",
    },
    image: Transaction,
  },
  {
    id: 3,
    title: {
      en: "Company Formation",
      ar: "تأسيس الشركات",
    },
    description: {
      en: "Complete company setup solutions for investors and entrepreneurs of all nationalities.",
      ar: "حلول كاملة لتأسيس الشركات للمستثمرين ورواد الأعمال من جميع الجنسيات.",
    },
    image: EstablishingCompanies,
  },
  {
    id: 4,
    title: {
      en: "Notary Public Services",
      ar: "خدمات الكاتب العدل",
    },
    description: {
      en: "Professional notary public services for investors and business owners of all nationalities.",
      ar: "خدمات الكاتب العدل المهنية للمستثمرين وأصحاب الأعمال من جميع الجنسيات.",
    },
    image: JusticeBook,
  },
  {
    id: 5,
    title: {
      en: "Traffic Fine Reduction in Abu Dhabi",
      ar: "تخفيض المخالفات المرورية في أبوظبي",
    },
    description: {
      en: "Assistance in reducing traffic fines for investors and business owners in Abu Dhabi.",
      ar: "المساعدة في تخفيض المخالفات المرورية للمستثمرين وأصحاب الأعمال في أبوظبي.",
    },
    image: Police,
  },
  {
    id: 6,
    title: {
      en: "Legal Consultancy",
      ar: "الاستشارات القانونية",
    },
    description: {
      en: "Expert legal consultation services for investors and business owners of all nationalities.",
      ar: "خدمات استشارات قانونية متخصصة للمستثمرين وأصحاب الأعمال من جميع الجنسيات.",
    },
    image: legal,
  },
  {
    id: 7,
    title: {
      en: "Debt Collection",
      ar: "تحصيل الديون",
    },
    description: {
      en: "Professional debt collection services for investors and companies of all nationalities.",
      ar: "خدمات تحصيل الديون المهنية للمستثمرين والشركات من جميع الجنسيات.",
    },
    image: DebtCollection,
  },
  {
    id: 8,
    title: {
      en: "Ministry of Foreign Affairs Attestation",
      ar: "تصديق وزارة الخارجية",
    },
    description: {
      en: "Document attestation services from the Ministry of Foreign Affairs.",
      ar: "خدمات تصديق الوثائق من وزارة الخارجية.",
    },
    image: Mofa,
  },
];


const PricingPackages = [
  {
    "id": 1,
    "title": "رخصة فورية",
    "title_en": "Instant License",
    "category": "خدمات إدارة المشاريع",
    "category_en": "Project Management Services",
    "features": [
      {
        "ar": "تجهيز المستندات",
        "en": "Document preparation"
      },
      {
        "ar": "الموافقات المدنية والأمنية",
        "en": "Civil and security approvals"
      },
      {
        "ar": "حجز الاسم التجاري",
        "en": "Trade name reservation"
      },
      {
        "ar": "عقد وكيل الخدمات موثق",
        "en": "Notarized service agent agreement"
      },
      {
        "ar": "رسوم وكيل الخدمات المواطن",
        "en": "Local service agent fees"
      },
      {
        "ar": "إذن الدفع وإصدار الرخصة",
        "en": "Payment authorization and license issuance"
      },
      {
        "ar": "فتح ملف الجوازات (بطاقة المنشأة)",
        "en": "Immigration file opening (Establishment card)"
      },
      {
        "ar": "التوقيع الإلكتروني",
        "en": "Electronic signature"
      }
    ],
    "cta": {
      "ar": "اتصل بنا",
      "en": "Contact Us"
    },
    "highlighted": false
  },
  {
    "id": 2,
    "title": "رخصة فورية",
    "title_en": "Instant License",
    "category": "خدمات إدارة المشاريع",
    "category_en": "Project Management Services",
    "features": [
      {
        "ar": "تجهيز المستندات",
        "en": "Document preparation"
      },
      {
        "ar": "الموافقات المدنية والأمنية",
        "en": "Civil and security approvals"
      },
      {
        "ar": "حجز الاسم التجاري",
        "en": "Trade name reservation"
      },
      {
        "ar": "عقد وكيل الخدمات موثق",
        "en": "Notarized service agent agreement"
      },
      {
        "ar": "رسوم وكيل الخدمات المواطن",
        "en": "Local service agent fees"
      },
      {
        "ar": "إذن الدفع وإصدار الرخصة",
        "en": "Payment authorization and license issuance"
      },
      {
        "ar": "فتح ملف الجوازات (بطاقة المنشأة)",
        "en": "Immigration file opening (Establishment card)"
      },
      {
        "ar": "التوقيع الإلكتروني",
        "en": "Electronic signature"
      }
    ],
    "cta": {
      "ar": "اتصل بنا",
      "en": "Contact Us"
    },
    "highlighted": true
  },
  {
    "id": 3,
    "title": "رخصة فورية",
    "title_en": "Instant License",
    "category": "خدمات إدارة المشاريع",
    "category_en": "Project Management Services",
    "features": [
      {
        "ar": "تجهيز المستندات",
        "en": "Document preparation"
      },
      {
        "ar": "الموافقات المدنية والأمنية",
        "en": "Civil and security approvals"
      },
      {
        "ar": "حجز الاسم التجاري",
        "en": "Trade name reservation"
      },
      {
        "ar": "عقد وكيل الخدمات موثق",
        "en": "Notarized service agent agreement"
      },
      {
        "ar": "رسوم وكيل الخدمات المواطن",
        "en": "Local service agent fees"
      },
      {
        "ar": "إذن الدفع وإصدار الرخصة",
        "en": "Payment authorization and license issuance"
      },
      {
        "ar": "فتح ملف الجوازات (بطاقة المنشأة)",
        "en": "Immigration file opening (Establishment card)"
      },
      {
        "ar": "التوقيع الإلكتروني",
        "en": "Electronic signature"
      }
    ],
    "cta": {
      "ar": "اتصل بنا",
      "en": "Contact Us"
    },
    "highlighted": false
  }
]

 
const content = {
  en: {
   hero: {
  title: "Jovera Business Services",
  description:
    "Jovera Business Services is a leading company in providing premium solutions for business professionals. We aim to simplify administrative and commercial operations while delivering comprehensive support across a wide range of services. We strive to be your ideal partner in achieving success and sustainable growth through our specialized services, including transaction follow-ups, company representation, administrative services, and debt collection.",
  goWebsite: "Go to Website",
  contact: "Contact Us",
},

    success: {
      label: "OUR SUCCESS",
      title: "We have helped more than 700+ clients worldwide",
      description:
                        "Building trust, innovation, and measurable results for our clients Delivering trust, innovation, and measurable results. Our clients' success is the true proof of our work.",

    },
  },

  ar: {
    hero: {
      title: "جوفيرا لخدمات رجال الأعمال",
      description:
        "شركة جوفيرا لخدمات رجال الأعمال هى شركة رائدة فى تقديم خدمات متميزة لرجال الأعمال , حيث تهدف الى تسهيل العمليات الإدارية والتجارية وتقديم الدعم الكامل للعملاء فى مجالات متنوعة . نحن نسعى أن تكون شريكك المثالى فى تحقيق النجاح والنمو . من خلال خدماتنا المتخصصة فى متابعة المعاملات , تمثيل الشركات , الخدمات الإدارية , تحصيل الديون",
      goWebsite: "اذهب إلى الموقع",
      contact: "اتصل بنا",
    },

    success: {
      label: "نجاحنا",
      title: "لقد ساعدنا أكثر من 700 عميل حول العالم",
      description:
        "نبني الثقة والابتكار ونحقق نتائج ملموسة لعملائنا.",
    },
  },
};

const options = [
  { key: "Business Loan", value: { en: "Business Loan", ar: "قرض تجاري" } },
  { key: "Mortgage Loan", value: { en: "Mortgage Loan", ar: "قرض عقاري" } },
  { key: "Personal Loan", value: { en: "Personal Loan", ar: "قرض شخصي" } },
  { key: "Real Estate", value: { en: "Real Estate", ar: "العقارات" } },
  { key: "Legal Service", value: { en: "Legal Service", ar: "خدمة قانونية" } },
  { key: "Auditing & Accounting", value: { en: "Auditing & Accounting", ar: "التدقيق والمحاسبة" } },
];



        
  const t = content[isArabic ? "ar" : "en"];

  /* ===================== RENDER ===================== */

  return (
    <div
      
      className="min-h-screen bg-black text-white"
    >
      {/* ================= HERO ================= */}
       {/* Hero Section */}
       <ScrollAnimation>
      <section className="container mx-auto px-4 pt-20 sm:pt-24 md:py-20 lg:py-24 max-w-7xl">
       <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
  {/* LEFT DIV (Text) */}
  <div className={`h-full flex flex-col mt-20 ${isArabic ? 'order-2 text-right' : 'order-1'} `}>
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
        <SecondaryButton children={t.hero.contact} onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" }) } />
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

</ ScrollAnimation>
 {/* ================= PARTNERS ================= */}
<ScrollAnimation>
<section className="relative py-24 md:py-32">
  {/* Outer Background */}
  <div className="absolute inset-0 bg-black" />

  {/* Wider container */}
  <div className="relative mx-auto px-4 max-w-screen-2xl">
    <div className="bg-[#0b0b0b] rounded-3xl px-6 sm:px-10 md:px-14 py-16 md:py-20 text-center overflow-hidden">

     {/* Heading */}
<h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
  {lang === "en"
    ? "We Work with Government Institutions"
    : "نتعامل مع المؤسسات الحكومية"}
</h2>

{/* Description */}
<p className="max-w-4xl mx-auto text-white/70 text-base md:text-lg leading-relaxed mb-14">
  {lang === "en"
    ? "It has been wonderful collaborating with our distinguished partners, whom we consider an essential part of our success. We are proud to work with top companies and institutions across various fields around the world."
    : "لقد كان من الرائع أن نتعاون مع شركائنا المميزين الذين نعتبرهم جزءاً أساسياً من نجاحنا. نحن فخورون بعملنا مع أفضل الشركات والمؤسسات في مختلف المجالات حول العالم."}
</p>


      {/* Logos */}
   <div
  className="
    grid grid-cols-2 gap-4
    sm:grid-cols-3
    md:flex md:flex-wrap md:justify-center md:gap-6
    lg:flex-nowrap
  "
>
  {partners.map((logo) => (
    <div
      key={logo.id}
      className="
        bg-[#1B1B1B]
        flex items-center justify-center
        h-20
        sm:h-24
        md:h-28
        lg:h-32
        px-4 sm:px-6
      "
    >
      <img
        src={logo.src}
        alt={logo.name}
        className="max-h-12 sm:max-h-14 md:max-h-16 object-contain"
        loading="lazy"
      />
    </div>
  ))}
</div>

</div>
</div>
</section>



</ ScrollAnimation>

  {/* ================= Services ================= */}
< ScrollAnimation>
<section className="py-32 bg-black">
  <div className="container mx-auto px-4">

    {/* Section Title */}
    <div className="flex justify-center mb-16">
      <span className="px-10 py-3 bg-[#1A1A1A] rounded-full text-white text-lg">
        {lang === "en" ? "Our Services" : "خدماتنا"}
      </span>
    </div>

    {/* Cards Grid */}
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8`}>
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          service={service} 
          lang={lang}       
        />
      ))}
    </div>

  </div>
</section>





</ ScrollAnimation>
  {/* ================= Pricing Cards ================= */}
<ScrollAnimation>
<section className="py-32 bg-black">
  <div className="container mx-auto px-4">

    {/* Section Title */}
    <div className="flex justify-center mb-16">
      <span className="px-10 py-3 bg-[#1A1A1A] rounded-full text-white text-lg">
        {lang === "en" ? "Pricing" : "التسعير"}
      </span>
    </div>

    {/* Pricing Cards Grid */}
   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
  {PricingPackages.map((pkg) => (
    <PricingCard
      key={pkg.id}
      title={lang === "en" ? pkg.title_en : pkg.title}
      subtitle={`( ${
        lang === "en" ? pkg.category_en : pkg.category
      } )`}
      features={pkg.features.map(feature =>
        lang === "en" ? feature.en : feature.ar
      )}
      buttonText={lang === "en" ? pkg.cta.en : pkg.cta.ar}
      highlighted={pkg.highlighted}
      onButtonClick={() =>
              window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
            }

      lang={lang}
    />
  ))}
</div>


  </div>
</section>



</ ScrollAnimation>













      {/* ================= CONTACT ================= */}
    {/* Contact Form & Success Section */}
      <section id="contact-form" className="container mx-auto px-4 py-16 max-w-7xl">
         <div className="bg-[#171717] p-20  grid lg:grid-cols-2 gap-12 rounded-xl">
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
        text="info@jovera.ae"
        link="mailto:info@jovera.ae"
      />

      <ContactPill
        icon={FaWhatsapp}
        text="+97126311977"
        link="https://wa.me/97126311977"
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
  );
};

export default BusinessLandingPage;
