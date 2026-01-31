import React from "react";
import ContactForm from "../../components/contactForm";
import socialMediaHero from "../../assets/Services/SocialMedia/hero.png";
import socialMediaIllustration from "../../assets/Services/SocialMedia/illustration.png";
import createAccountsIllustration from "../../assets/Services/SocialMedia/createAccounts.png";
import marketingVideosIllustration from "../../assets/Services/SocialMedia/marketingVideos.png";
import mobileMarketingIllustration from "../../assets/Services/SocialMedia/mobileMarketing.png";
import hero2 from "../../assets/Services/SocialMedia/illustration1.png"
import seoIllustration from "../../assets/Services/SocialMedia/seo.png";
import { Helmet } from "react-helmet";


export default function SocialMediaMarketingPage({ lang })
{
 const isArabic = lang === "ar";
   const t = {
    heroTitle: isArabic ? "تسويق وسائل التواصل الاجتماعي" : "Social Media Marketing",
    heroSubtitle: isArabic ? "حلول مصممة للأعمال" : "Made for business",
    heroDesc: isArabic
      ? "من مواقع الويب وتطبيقات الجوال إلى البرامج المخصصة، نقدم حلول رقمية آمنة وقابلة للتوسع."
      : "From web and mobile apps to custom software, we build secure and scalable digital solutions.",
    
    animation: isArabic ? "التسويق محركات البحث المحتوى تحسين وسائل التواصل الاجتماعي تحسين محركات البحث (SEO)"
    : "Marketing Search Engine Content Social Media Optimization SEO",
    contact: isArabic ? "تواصل معنا" : "Contact us",
    animation: isArabic ? "التسويق محركات البحث المحتوى تحسين وسائل التواصل الاجتماعي تحسين محركات البحث":" Marketing Search Engine Content Social Media Optimization SEO",
    proposal: isArabic ? "عرض أعمال" : "Business Proposal",
    creatingAccounts: isArabic ? "إنشاء حسابات وسائل التواصل الاجتماعي" : "Creating Social Media Accounts",
    createVideos: isArabic ? "إنشاء مقاطع فيديو تسويقية" : "Create Marketing Videos",
    seo: isArabic ? "تحسين محركات البحث (SEO)" : "Search Engine Optimization (SEO)",
    createAccountsPoints: isArabic
      ? [
          "إعداد الحسابات لمنتجاتك أو خدماتك",
          "تكلفة مناسبة",
          "بناء هوية رقمية قوية",
          "سهولة التواصل مع العملاء",
        ]
      : [
          "Set up for your products or services",
          "Reasonable",
          "Building a strong digital identity",
          "Easily communicate with customers",
        ],
    marketingVideosPoints: isArabic
      ? [
          "توصيل رسالتك التسويقية مباشرة واستراتيجياً",
          "زيادة ظهور عملك لمختلف الشرائح التسويقية",
          "قيمة عالية بتكلفة أقل مقارنة بطرق التسويق الأخرى",
        ]
      : [
          "It delivers your marketing message directly and strategically",
          "It enhances the visibility of your business to different marketing segments",
          "It's worth much at a lower cost compared to other marketing methods",
        ],
    seoPoints: isArabic
      ? [
          "زيادة عدد الزوار للموقع/المتجر مع فرص تحويل أكبر",
          "تحقيق نتائج أفضل في أداء الموقع/المتجر للمستخدمين والعملاء",
          "الظهور بمصداقية وبناء ثقة عالية مع العملاء",
        ]
      : [
          "The number of visitors to the website/store increases, along with the opportunities for conversion and sales to visitors",
          "Achieve better results in the performance of the website/store for the browsers of customers and interested parties",
          "Appear credible and build high trust with customers",
        ],
    learnMore: isArabic ? "اعرف أكثر" : "Learn more",
  };

// Layout classes
  const flexRowClass = isArabic ? "lg:flex-row-reverse" : "lg:flex-row";
  const textAlign = isArabic ? "text-right" : "text-left";
  const buttonAlign = isArabic ? "justify-end" : "justify-start";


  return (
<>
<Helmet>
  {/* Page Title */}
  <title>
    {isArabic ? "تسويق وسائل التواصل الاجتماعي - Jovera IT" : "Social Media Marketing - Jovera IT"}
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content={
      isArabic
        ? "نقدم خدمات تسويق وسائل التواصل الاجتماعي للشركات، بما في ذلك إنشاء الحسابات، مقاطع الفيديو التسويقية، تحسين محركات البحث (SEO) والتسويق عبر الهاتف المحمول."
        : "We provide social media marketing services for businesses, including account setup, marketing videos, SEO, and mobile marketing campaigns."
    }
  />

  {/* Open Graph / Facebook */}
  <meta property="og:title" content={isArabic ? "تسويق وسائل التواصل الاجتماعي - Jovera IT" : "Social Media Marketing - Jovera IT"} />
  <meta
    property="og:description"
    content={
      isArabic
        ? "نقدم خدمات تسويق وسائل التواصل الاجتماعي للشركات، بما في ذلك إنشاء الحسابات، مقاطع الفيديو التسويقية، تحسين محركات البحث (SEO) والتسويق عبر الهاتف المحمول."
        : "We provide social media marketing services for businesses, including account setup, marketing videos, SEO, and mobile marketing campaigns."
    }
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.joveraits.ae/Marketing" />
  <meta
    property="og:image"
    content="%PUBLIC_URL%/logo.webp" // Optional: replace with socialMediaHero for OG preview
  />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={isArabic ? "تسويق وسائل التواصل الاجتماعي - Jovera IT" : "Social Media Marketing - Jovera IT"} />
  <meta
    name="twitter:description"
    content={
      isArabic
        ? "نقدم خدمات تسويق وسائل التواصل الاجتماعي للشركات، بما في ذلك إنشاء الحسابات، مقاطع الفيديو التسويقية، تحسين محركات البحث (SEO) والتسويق عبر الهاتف المحمول."
        : "We provide social media marketing services for businesses, including account setup, marketing videos, SEO, and mobile marketing campaigns."
    }
  />
  <meta
    name="twitter:image"
    content="%PUBLIC_URL%/logo.webp"
  />

  {/* Favicon / Logo */}
  <link rel="icon" href="%PUBLIC_URL%/logo.webp" />
  <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo.webp" />

  {/* Canonical URL */}
  <link rel="canonical" href="https://www.joveraits.ae/Marketing" />
</Helmet>




    <main dir={isArabic ? "rtl" : "ltr"}  className="bg-[#0e0e0e] text-white">
      {/* HERO SECTION */}
       
      <section className="px-6 md:px-16 lg:px-20 pt-32 pb-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={textAlign}>
            <h1 className="text-4xl lg:text-5xl font-semibold leading-tight">
              <span className="text-[#C99E18]">{t.heroTitle}</span>
              <br />
              {t.heroSubtitle}
            </h1>
            <p className="text-gray-400 mt-6 max-w-xl">{t.heroDesc}</p>
            <div className={`flex gap-4 mt-8 `}>
                   <button
  onClick={() => {
    document
      .getElementById("contactForm")
      ?.scrollIntoView({ behavior: "smooth" });
  }}
  className="bg-[#C99E18] text-black px-6 py-3 rounded-lg font-medium hover:bg-[#b08e15] transition-colors"
>
  {t.contact}
</button>

<a
  href="https://calendly.com/batif7003/jovera-it-consultation"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="border border-gray-500 px-6 py-3 rounded-lg hover:border-gray-400 transition-colors">
    {t.proposal}
  </button>
</a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <img src={socialMediaHero} alt="Social Media Marketing" className="rounded-2xl w-full" />
          </div>
        </div>
      </section>

      <div className="flex justify-center">
        <img src={hero2} alt="illustration" />
      </div>

      {/* BANNER SECTION */}
<section className="relative bg-[#C99E18] h-[650px] overflow-hidden">

  {/* ===== BACKGROUND MARQUEES ===== */}
  <div dir={isArabic ? "ltr" : ""} className="absolute inset-0 z-0 overflow-hidden">

    {/* ROW 1 – TOP (Right → Left) */}
    <div className="absolute top-40 md:top-32 lg:top-25 w-full flex overflow-hidden">
      <div
        className="flex whitespace-nowrap animate-marquee-left
                   text-white font-extrabold opacity-90
                   text-[6rem] md:text-[10rem] lg:text-[14rem] leading-none"
      >
        <span className="mx-28">
          {t.animation}
        </span>
        <span className="mx-28">
           {t.animation}
        </span>
      </div>
    </div>

    {/* ROW 2 – BOTTOM (Left → Right) */}
    <div className="absolute bottom-40 md:bottom-32 lg:bottom-25 w-full flex overflow-hidden">
      <div
        className="flex whitespace-nowrap animate-marquee-right
                   text-white font-extrabold opacity-80
                   text-[6rem] md:text-[10rem] lg:text-[14rem] leading-none"
      >
        <span className="mx-28">
          {t.animation}
        </span>
        <span className="mx-28">
           {t.animation}
        </span>
      </div>
    </div>

  </div>

  {/* ===== FOREGROUND IMAGE ===== */}
  <div className="relative z-10 flex justify-center items-center h-full">
    <img
      src={socialMediaIllustration}
      alt="Marketing"
      className="max-h-[500px] object-contain"
    />
  </div>

</section>



{/* CREATING SOCIAL MEDIA ACCOUNTS */}
<section className="py-20 px-6 md:px-16 lg:px-20">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

      {/* Image */}
      <div className="flex justify-center lg:justify-start order-1 lg:order-none">
        <div className="relative w-80 h-80 rounded-full border-4 border-white flex items-center justify-center bg-[#1B1B1B]">
          <img
            src={createAccountsIllustration}
            alt="Creating Social Media Accounts"
            className="w-64 h-64 object-contain"
          />
        </div>
      </div>

      {/* Content */}
      <div className="order-2 lg:order-none">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">
          {t.creatingAccounts}
        </h2>
        <ul className="space-y-3 text-gray-400">
          {t.createAccountsPoints.map((point, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-[#C99E18] mt-1">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <button className="mt-8 border border-gray-500 px-6 py-3 rounded-lg hover:border-gray-400 transition-colors">
          {t.learnMore}
        </button>
      </div>

    </div>
  </div>
</section>


{/* CREATE MARKETING VIDEOS */}
<section className="py-20 px-6 md:px-16 lg:px-20 bg-[#0a0a0a]">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

      {/* Image */}
      <div className="flex justify-center lg:justify-start order-1 lg:order-2">
        <div className="relative w-80 h-80 rounded-full border-4 border-white flex items-center justify-center bg-[#1B1B1B]">
          <img
            src={marketingVideosIllustration}
            alt="Create Marketing Videos"
            className="w-64 h-64 object-contain"
          />
        </div>
      </div>

      {/* Content */}
      <div className="order-2 lg:order-1">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">
          {t.createVideos}
        </h2>
        <ul className="space-y-3 text-gray-400">
          {t.marketingVideosPoints.map((point, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-[#C99E18] mt-1">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <button className="mt-8 border border-gray-500 px-6 py-3 rounded-lg hover:border-gray-400 transition-colors">
          {t.learnMore}
        </button>
      </div>

    </div>
  </div>
</section>


{/* MOBILE MARKETING VIDEOS */}
<section className="py-20 px-6 md:px-16 lg:px-20">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

      {/* Image */}
      <div className="flex justify-center lg:justify-start order-1 lg:order-none">
        <div className="relative w-80 h-80 rounded-full border-4 border-white flex items-center justify-center bg-[#1B1B1B]">
          <img
            src={mobileMarketingIllustration}
            alt="Mobile Marketing Videos"
            className="w-64 h-64 object-contain"
          />
        </div>
      </div>

      {/* Content */}
      <div className="order-2 lg:order-none">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">
          {t.createVideos}
        </h2>
        <ul className="space-y-3 text-gray-400">
          {t.marketingVideosPoints.map((point, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-[#C99E18] mt-1">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <button className="mt-8 border border-gray-500 px-6 py-3 rounded-lg hover:border-gray-400 transition-colors">
          {t.learnMore}
        </button>
      </div>

    </div>
  </div>
</section>


{/* SEO */}
<section className="py-20 px-6 md:px-16 lg:px-20 bg-[#0a0a0a]">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

      {/* Image */}
      <div className="flex justify-center lg:justify-start order-1 lg:order-2">
        <div className="relative w-80 h-80 rounded-full border-4 border-white flex items-center justify-center bg-[#1B1B1B]">
          <img
            src={seoIllustration}
            alt="SEO"
            className="w-64 h-64 object-contain"
          />
        </div>
      </div>

      {/* Content */}
      <div className="order-2 lg:order-1">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">
          {t.seo}
        </h2>
        <ul className="space-y-3 text-gray-400">
          {t.seoPoints.map((point, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="text-[#C99E18] mt-1">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <button className="mt-8 border border-gray-500 px-6 py-3 rounded-lg hover:border-gray-400 transition-colors">
          {t.learnMore}
        </button>
      </div>

    </div>
  </div>
</section>


      {/* Contact Form */}
      <div id="contactForm">
      <ContactForm lang={lang} />
    </div>
    </main>
    </>
  );
}