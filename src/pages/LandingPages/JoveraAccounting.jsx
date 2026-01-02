import { FaWhatsapp } from "react-icons/fa";
import {  Phone, Mail } from "lucide-react";
import ContactForm from "../../components/contactForm";
import { PrimaryButton, PrimaryButton2, SecondaryButton } from "../../components/ButtonPrimary";
import { ContactPill } from "../../components/ContactPill";
import HeroImage from "../../assets/landing-pages/Accounting/hero.png";
import ChartImage from "../../assets/landing-pages/Accounting/charts.jpg"
import ServicesImg from "../../assets/landing-pages/Accounting/services.png"
import ScrollAnimation from "../../components/scrollAnimation";
import { Helmet } from "react-helmet";



const AccountingLandingPage = ({ lang }) => {
  
  const isArabic = lang !== "en";

 
  /* ===================== CONTENT ===================== */

const content = {
  en: {
   hero: {
  title: "Jovera Accounting",
  description:
    "At Jovira, we offer comprehensive accounting and auditing services that help you make informed financial decisions and meet your tax obligations with ease.",
  goWebsite: "Go to Website",
  contact: "Contact Us",
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
      title: "جوڤيرا للمحاسبة",
      description:
   ".في جوڤيرا، نقدم خدمات محاسبية وتدقيقية شاملة تساعدك على اتخاذ قرارات مالية مستنيرة والالتزام بواجباتك الضريبية بسهولة",
      goWebsite: "اذهب إلى الموقع",
      contact: "اتصل بنا",
    },

    success: {
      label: "نجاحنا",
      title: "لقد ساعدنا أكثر من 700 عميل في الإمارات",
      description:
        "نبني الثقة والابتكار ونحقق نتائج ملموسة لعملائنا.",
    },
  },
};


const options = [
  { key: "Auditing & Accounting", value: { en: "Auditing & Accounting", ar: "التدقيق والمحاسبة" } }
];


        
  const t = content[isArabic ? "ar" : "en"];

  /* ===================== RENDER ===================== */

  return (

<>
      <Helmet>
        <title>{lang === "en" ? "Accounting Services - Jovera Group" : "خدمات المحاسبة - مجموعة جوفيرا"}</title>
        <meta
          name="description"
          content={content.description}
        />
        {/* Open Graph */}
        <meta property="og:title" content={content.title} />
        <meta property="og:description" content={content.description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={HeroImage} />
        <meta property="og:url" content="https://www.jovera.ae/Accounting" />
      </Helmet>


<main>

    <div className="min-h-screen bg-black text-white">
     
      {/* ================= HERO ================= */}

{/* Hero Section */}
<ScrollAnimation>
<section className="container mx-auto px-4 pt-20 sm:pt-24 md:py-20 lg:pt-32 max-w-7xl">
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
      {/* ================= Our Services ================= */}
<ScrollAnimation>
<section className="container mx-auto max-w-7xl 
  bg-[#1B1B1B] 
  px-6 sm:px-10 lg:px-16 
  py-24 sm:py-10 lg:py-16 
  rounded-3xl
">

  {/* Heading */}
  <h2 className="text-center text-3xl md:text-4xl font-bold text-[#D7AA47] mb-20">
    {lang === "en" ? "Our Services" : "خدماتنا"}
  </h2>

  {/* Image Wrapper */}
  <div className="flex justify-center">
    <img
      src={ServicesImg}
      alt="Services"
      className="max-w-full sm:max-w-3xl lg:max-w-4xl rounded-xl"
      loading="lazy"
    />
  </div>

</section>
</ScrollAnimation>
 {/* ================= Why Us? ================= */}
<ScrollAnimation>
<section
  className={`
    container mx-auto max-w-7xl
    bg-black
    px-6 sm:px-10 lg:px-16
    py-20 sm:py-24 lg:py-28
    rounded-3xl
    ${lang === "en" ? "text-left" : "text-right"}
  `}
>
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

    {/* LEFT CONTENT */}
    <div className={`${isArabic ? 'order-2 text-right' : 'order-1'} `} >
      <h2 className="text-3xl md:text-4xl font-bold text-[#D7AA47] mb-10">
        {lang === "en"
          ? "Why choose Jovera? (Our values & advantages)"
          : "لماذا تختار جوفيرا؟ (قيمنا ومميزاتنا)"}
      </h2>

      <div className="space-y-8 text-white text-base leading-relaxed">

        <p>
          <span className="font-semibold text-white">
            {lang === "en" ? "Expertise:" : "الخبرة:"}
          </span>{" "}
          {lang === "en"
            ? "Our team comprises seasoned professionals with extensive experience in accounting, auditing, and financial consultancy."
            : "يضم فريقنا نخبة من الخبراء ذوي الخبرة الواسعة في المحاسبة والتدقيق والاستشارات المالية."}
        </p>

        <p>
          <span className="font-semibold text-white">
            {lang === "en" ? "Integrity:" : "النزاهة:"}
          </span>{" "}
          {lang === "en"
            ? "We uphold the highest standards of integrity and professionalism in all our dealings."
            : "نلتزم بأعلى معايير النزاهة والاحترافية في جميع تعاملاتنا."}
        </p>

        <p>
          <span className="font-semibold text-white">
            {lang === "en" ? "Client-Centric:" : "التركيز على العميل:"}
          </span>{" "}
          {lang === "en"
            ? "We prioritize our clients’ needs and tailor our services to meet their specific requirements."
            : "نضع احتياجات عملائنا في المقام الأول ونصمم خدماتنا لتلبية متطلباتهم الخاصة."}
        </p>

        <p>
          <span className="font-semibold text-white">
            {lang === "en" ? "Innovation:" : "الابتكار:"}
          </span>{" "}
          {lang === "en"
            ? "We leverage the latest technology and best practices to deliver efficient and effective solutions."
            : "نعتمد على أحدث التقنيات وأفضل الممارسات لتقديم حلول فعّالة ومبتكرة."}
        </p>

        <p>
          <span className="font-semibold text-white">
            {lang === "en" ? "Compliance:" : "الامتثال:"}
          </span>{" "}
          {lang === "en"
            ? "We ensure that all our services comply with the latest regulatory standards and best practices."
            : "نحرص على التزام جميع خدماتنا بأحدث المعايير والأنظمة المعتمدة."}
        </p>

      </div>
    </div>

    {/* RIGHT IMAGE */}
    <div className={`flex justify-center lg:justify-end h-full ${isArabic ? 'order-1' : 'order-2'}`}>
      <img
        src={ChartImage}
        alt="Why Choose Jovera"
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>

  </div>
</section>


</ScrollAnimation>


      {/* ================= CONTACT ================= */}
      {/* Contact Form & Success Section */}
        <section id="contact-form" className="container mx-auto px-4 pb-16 max-w-7xl">
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

export default AccountingLandingPage;
