import React from "react";
import ContactForm from "../../components/contactForm";
import designHero from "../../assets/Services/Design/hero.png";
import hero2 from "../../assets/Services/Design/illustration.png";
import brandingDesignImage from "../../assets/Services/Design/branding.jpg";
import uxDesignImage from "../../assets/Services/Design/uxDesign.jpg";
import brandIdentityImage from "../../assets/Services/Design/brandIdentity.jpg";
import packagingDesignImage from "../../assets/Services/Design/packaging.jpg";
import websiteDesignImage from "../../assets/Services/Design/websiteDesign.jpg";
import { Helmet } from "react-helmet";


export default function DesignServicesPage({ lang }) {
  const isArabic = lang === "ar";

  const content = {
    en: {
      heroTitle1: "Design",
      heroTitle2: "Made for business",
      heroDesc:
        "We provide creative Graphics that capture attention, design UX/UI experiences for apps and websites with precision, create high-quality videos, build your brand's visual identity, and deliver effective and smart solutions across all platforms.",
      contactBtn: "Contact us",
      proposalBtn: "Business Proposal",

      selectedWorkTitle: "Selected work!",
      selectedWorkDesc:
        "We've built everything from fashion e-commerce platforms to CRM tools and AI-powered dashboards.",

      branding: {
        title: "Branding Design",
        desc:
          "Branding begins with capturing a visual identity that achieves brand purposes and reflects brand implementation.",
      },
      ux: {
        title: "UI UX Design",
        desc:
          "UX UI design focuses on creating designs that are effective and meaningful to user experiences.",
      },
      identity: {
        title: "Brand Identity",
        desc:
          "Brand identity ensures your brand looks, feels, and connects without confusion.",
      },
      packaging: {
        title: "Packaging Design",
        desc:
          "Packaging design enhances product novelty and functionality to attract customers in an effective and smart identity.",
      },
      website: {
        title: "Website Design",
        desc:
          "Website design focuses on creating a visually appealing, user-friendly, and increased business revenue.",
      },
    },
    ar: {
      heroTitle1: "التصميم",
      heroTitle2: "مصمم للأعمال",
      heroDesc:
        "نقدم تصاميم إبداعية تجذب الانتباه، ونصمم تجارب UI/UX للتطبيقات والمواقع بدقة عالية، وننتج فيديوهات احترافية، ونبني الهوية البصرية لعلامتك التجارية، مع تقديم حلول ذكية وفعّالة عبر جميع المنصات.",
      contactBtn: "تواصل معنا",
      proposalBtn: "عرض عمل",

      selectedWorkTitle: "أعمال مختارة",
      selectedWorkDesc:
        "قمنا بتنفيذ مشاريع متنوعة تشمل متاجر إلكترونية للأزياء، أنظمة CRM، ولوحات تحكم مدعومة بالذكاء الاصطناعي.",

      branding: {
        title: "تصميم العلامة التجارية",
        desc:
          "يبدأ تصميم العلامة التجارية بإنشاء هوية بصرية تعكس أهداف العلامة وطريقة تطبيقها.",
      },
      ux: {
        title: "تصميم UI / UX",
        desc:
          "يركز تصميم واجهات وتجربة المستخدم على إنشاء تجارب فعّالة وذات معنى للمستخدم.",
      },
      identity: {
        title: "هوية العلامة التجارية",
        desc:
          "تضمن هوية العلامة التجارية مظهراً وشعوراً متناسقاً يخلق اتصالاً واضحاً مع الجمهور.",
      },
      packaging: {
        title: "تصميم التغليف",
        desc:
          "يعزز تصميم التغليف من جاذبية المنتج ووظيفته لجذب العملاء بهوية ذكية وفعّالة.",
      },
      website: {
        title: "تصميم المواقع",
        desc:
          "يركز تصميم المواقع على إنشاء تجربة جذابة وسهلة الاستخدام تساعد على زيادة الإيرادات.",
      },
    },
  };

  const t = isArabic ? content.ar : content.en;

  return (
<>
<Helmet>
  {/* Page Title */}
  <title>
    {isArabic
      ? "خدمات التصميم - Jovera IT"
      : "Design Services - Jovera IT"}
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content={
      isArabic
        ? "نقدم خدمات تصميم احترافية تشمل UI/UX، الهوية البصرية، التغليف، وتصميم المواقع لمساعدة أعمالك على التميز."
        : "We provide professional design services including UI/UX, branding, packaging, and website design to help your business stand out."
    }
  />

  {/* Open Graph / Facebook */}
  <meta property="og:title" content={isArabic ? "خدمات التصميم - Jovera IT" : "Design Services - Jovera IT"} />
  <meta
    property="og:description"
    content={
      isArabic
        ? "نقدم خدمات تصميم احترافية تشمل UI/UX، الهوية البصرية، التغليف، وتصميم المواقع لمساعدة أعمالك على التميز."
        : "We provide professional design services including UI/UX, branding, packaging, and website design to help your business stand out."
    }
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.joveraits.ae/Design" />
  <meta
    property="og:image"
    content="%PUBLIC_URL%/logo.webp" // default logo or page banner
  />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={isArabic ? "خدمات التصميم - Jovera IT" : "Design Services - Jovera IT"} />
  <meta
    name="twitter:description"
    content={
      isArabic
        ? "نقدم خدمات تصميم احترافية تشمل UI/UX، الهوية البصرية، التغليف، وتصميم المواقع لمساعدة أعمالك على التميز."
        : "We provide professional design services including UI/UX, branding, packaging, and website design to help your business stand out."
    }
  />
  <meta
    name="twitter:image"
    content="%PUBLIC_URL%/logo.webp"
  />

  {/* Favicon / Logo */}
  <link rel="icon" href="%PUBLIC_URL%/logo.webp" />
  <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo.webp" />
</Helmet>






    <main
      dir={isArabic ? "rtl" : "ltr"} // RTL for Arabic
      className={`bg-[#0e0e0e] text-white ${isArabic ? "text-right" : "text-left"}`}
    >
      {/* HERO SECTION */}
      <section className="px-6 md:px-16 lg:px-20 pt-32 pb-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-semibold leading-tight">
              <span className="text-[#C99E18]">{t.heroTitle1}</span>
              <br />
              {t.heroTitle2}
            </h1>

            <p className="text-gray-400 mt-6 max-w-xl leading-relaxed">{t.heroDesc}</p>

            <div className={`flex gap-4 mt-8`}>
     <button
  onClick={() => {
    document
      .getElementById("contactForm")
      ?.scrollIntoView({ behavior: "smooth" });
  }}
  className="bg-[#C99E18] text-black px-6 py-3 rounded-lg font-medium hover:bg-[#b08e15] transition-colors"
>
  {t.contactBtn}
</button>

<a
  href="https://calendly.com/batif7003/jovera-it-consultation"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="border border-gray-500 px-6 py-3 rounded-lg hover:border-gray-400 transition-colors">
    {t.proposalBtn}
  </button>
</a>

            </div>
          </div>

          <div className="relative">
            <img src={designHero} alt="Design Services" className="rounded-2xl w-full" />
          </div>
        </div>
      </section>

      {/* Decorative Wave */}
      <div className="flex justify-center">
        <img src={hero2} alt="illustration" />
      </div>

      {/* SELECTED WORK */}
      <section className="py-20 px-6 md:px-16 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">{t.selectedWorkTitle}</h2>
          <p className="text-gray-400 mb-16 max-w-2xl">{t.selectedWorkDesc}</p>

          <div className="space-y-24">
            {/* Branding */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <img src={brandingDesignImage} alt="" className="rounded-2xl w-full" />
              <div>
                <h3 className="text-3xl lg:text-4xl font-bold mb-4">{t.branding.title}</h3>
                <p className="text-gray-400">{t.branding.desc}</p>
              </div>
            </div>

            {/* UX */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="text-3xl lg:text-4xl font-bold mb-4">{t.ux.title}</h3>
                <p className="text-gray-400">{t.ux.desc}</p>
              </div>
              <img src={uxDesignImage} alt="" className="order-1 lg:order-2 rounded-2xl w-full" />
            </div>

            {/* Identity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <img src={brandIdentityImage} alt="" className="rounded-2xl w-full" />
              <div>
                <h3 className="text-3xl lg:text-4xl font-bold mb-4">{t.identity.title}</h3>
                <p className="text-gray-400">{t.identity.desc}</p>
              </div>
            </div>

            {/* Packaging */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h3 className="text-3xl lg:text-4xl font-bold mb-4">{t.packaging.title}</h3>
                <p className="text-gray-400">{t.packaging.desc}</p>
              </div>
              <img src={packagingDesignImage} alt="" className="order-1 lg:order-2 rounded-2xl w-full" />
            </div>

            {/* Website */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <img src={websiteDesignImage} alt="" className="rounded-2xl w-full" />
              <div>
                <h3 className="text-3xl lg:text-4xl font-bold mb-4">{t.website.title}</h3>
                <p className="text-gray-400">{t.website.desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
<div id="contactForm">
      <ContactForm lang={lang} />
</div>
    </main>
    </>
  );
}
