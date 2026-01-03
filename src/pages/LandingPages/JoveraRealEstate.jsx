import { FaWhatsapp } from "react-icons/fa";
import { Home, Briefcase, CreditCard, Phone, Mail } from "lucide-react";
import ContactForm from "../../components/contactForm";
import { PrimaryButton, SecondaryButton,  PrimaryButton2} from "../../components/ButtonPrimary";
import { ContactPill } from "../../components/ContactPill";
import LoanCalculator from "../../components/LoanCalculator";
import FeaturedCategories from "../../components/FeaturedCategories";
import HeroImage from "../../assets/landing-pages/Real-Estate/Hero-img.webp";
import PropertiesSection from "../../components/PropertiesSection";
import ScrollAnimation from "../../components/scrollAnimation";
import { Helmet } from "react-helmet";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";

// Partners
import bloom from "../../assets/landing-pages/Real-Estate/partners1.webp";
import aldar from "../../assets/landing-pages/Real-Estate/partners2.webp";
import emaar from "../../assets/landing-pages/Real-Estate/partners3.webp";
import samana from "../../assets/landing-pages/Real-Estate/partners4.webp";
import binghatti from "../../assets/landing-pages/Real-Estate/partners6.webp";



const partners = [
  bloom,
  aldar,
  emaar,
  samana,
  binghatti,
];

const RealEstateLandingPage = ({ lang }) => {
  
  const isArabic = lang !== "en";


  /* ===================== CONTENT ===================== */
const content = {
  en: {
    hero: {
      title: "Real Estate & Mortgage",
      description:
        "From finding your dream home to securing the perfect mortgage. We simplify every step of your real estate journey.",
      goWebsite: "Go Website",
      contact: "Contact us",
    },

    success: {
      label: "OUR SUCCESS",
      title: "We have helped more than 700+ clients in the UAE",
      description:
        "Building trust, innovation, and measurable results for our clients Delivering trust, innovation, and measurable results. Our clients' success is the true proof of our work.",
    },
  },

  ar: {
    hero: {
      title: "العقارات والرهن العقاري",
      description:
        "من العثور على منزل أحلامك إلى تأمين الرهن العقاري المثالي، نبسط رحلتك العقارية.",
      goWebsite: "اذهب إلى الموقع",
      contact: "اتصل بنا",
    },

    success: {
      label: "نجاحنا",
      title:"لقد ساعدنا أكثر من 700 عميل في الإمارات",
      description:
        "نبني الثقة والابتكار ونحقق نتائج ملموسة لعملائنا.",
    },
  },
};


const options = [
  { key: "Real Estate", value: { en: "Real Estate", ar: "العقارات" } },

];


        
  const t = content[isArabic ? "ar" : "en"];

  /* ===================== RENDER ===================== */

  return (
<>
<Helmet>
        <title>
          {isArabic
            ? "العقارات - مجموعة جوفيرا"
            : "Real Estate - Jovera Group"}
        </title>
        <meta name="description" content={content.description} />

        {/* Open Graph */}
        <meta property="og:title" content={content.title} />
        <meta property="og:description" content={content.description} />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={HeroImage}
        />
        <meta
          property="og:url"
          content="https://www.jovera.ae/RealEstate"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={content.title} />
        <meta name="twitter:description" content={content.description} />
        <meta
          name="twitter:image"
          content={HeroImage}
        />
      </Helmet>





<main>
    <div
      
      className="min-h-screen bg-black text-white"
    >
      <ScrollAnimation>
      {/* ================= HERO ================= */}
       {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 md:pt-20 lg:pt-24 max-w-7xl">
 
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
     
   {/* ================= PARTNERS ================= */}
<section className="py-8">
  <div className="container mx-auto px-4 ">
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center">
      {partners.map((logo, i) => (
        <div
          key={i}
          className="flex items-center justify-center"
        >
          <img
            src={logo}
            alt="partner"
            className="w-32 h-16 object-contain opacity-80 hover:opacity-100 transition"
            draggable={false}
            loading="lazy"
          />
        </div>
      ))}
    </div>
  </div>
</section>
</ScrollAnimation>
  {/* ================= Featured Categories ================= */}

<ScrollAnimation>
<section className="w-full flex justify-center items-center py-8">
  <div className=" w-full max-w-7xl">
    <FeaturedCategories lang={lang} />
  </div>
</section>
  </ScrollAnimation>

  {/* ================= Properties ================= */}
<section className="w-full flex justify-center items-center py-8">
  <div className="w-full max-w-6xl px-4">
    <PropertiesSection lang={lang}/>
  </div>
</section>



      {/* ================= CONTACT ================= */}
      {/* Contact Form & Success Section */}
            <section className="container mx-auto px-4 py-16 max-w-7xl">
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
              text="info@jovera.ae"
              link="mailto:info@jovera.ae"
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

export default RealEstateLandingPage;
