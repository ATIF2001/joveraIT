import React, { useState } from "react";
import ContactForm from "../../components/contactForm";
import ITHero from "../../assets/Services/IT/ITServices.png";

import hero2 from "../../assets/Services/hero2.png";
import implementationImage from "../../assets/Services/IT/ourImplementationProcess.jpg";


import itServicesImage1 from "../../assets/Services/IT/services.png";
import itServicesImage2 from "../../assets/Services/IT/services.png";
import itServicesImage3 from "../../assets/Services/IT/services.png";
import itServicesImage4 from "../../assets/Services/IT/services.png";
import itServicesImage5 from "../../assets/Services/IT/services.png";
import { Helmet } from "react-helmet";



export default function WebMobileDevelopmentPage({ lang }) {
  const [activeTab, setActiveTab] = useState("office-setup");

  const isArabic = lang === "ar";

  // Translation object
  const t = {
    heroTitle: isArabic ? "تطوير الويب وتطبيقات الجوال" : "Web & Mobile Development",
    heroSubtitle: isArabic ? "حلول مصممة للأعمال" : "Made for business",
    heroDesc: isArabic
      ? "من مواقع الويب وتطبيقات الجوال إلى الأنظمة المخصصة، نقدم حلول رقمية آمنة وقابلة للتوسع."
      : "From web and mobile apps to custom software, we build secure and scalable digital solutions.",
    contact: isArabic ? "تواصل معنا" : "Contact us",
    proposal: isArabic ? "عرض أعمال" : "Business Proposal",
    itServices: isArabic ? "خدمات تقنية المعلومات" : "IT Services",
    processTitle: isArabic ? "آلية التنفيذ لدينا" : "Our Implementation Process",
    serviceTabs: {
      "office-setup": isArabic ? "إعداد تقنية المعلومات للمكاتب الجديدة" : "New Office IT Setup",
      workstation: isArabic ? "إعداد أجهزة العمل والمعدات" : "Workstation & Hardware Setup",
      networking: isArabic ? "حلول الشبكات" : "Networking Solutions",
      cctv: isArabic ? "أنظمة المراقبة والأمن" : "CCTV & Security Solutions",
      alarm: isArabic ? "أنظمة الإنذار والحماية" : "Alarm & Security Solutions",
    },
    processSteps: isArabic
      ? [
          "تقييم المتطلبات – فهم احتياجات العمل وتقييم الموقع",
          "تصميم الحلول والتخطيط – تصميم بنية تحتية مخصصة لتقنية المعلومات",
          "المشتريات – أجهزة وبرمجيات موثوقة وعلامات تجارية",
          "التثبيت والإعداد – إعداد احترافي واختبارات شاملة",
          "الأمن والتحسين – ضمان السلامة والأداء المثالي",
          "التسليم والتدريب – الوثائق وإرشادات المستخدم الأساسية",
          "الدعم المستمر – الصيانة والمساعدة التقنية",
        ]
      : [
          "Requirement Assessment – Understanding business needs and site evaluation",
          "Solution Design & Planning – Customized IT infrastructure layout",
          "Procurement – Branded and reliable hardware & software",
          "Installation & Configuration – Professional setup and testing",
          "Security & Optimization – Ensuring safety and performance",
          "Handover & Training – Documentation and basic user guidance",
          "Ongoing Support – Maintenance and technical assistance",
        ],
  };

  // Services data
  const services = {
    "office-setup": {
      title: t.serviceTabs["office-setup"],
      description: isArabic
        ? "إدارة وتأمين جميع الأجهزة من أي مكان مع تحكم كامل ورؤية شاملة."
        : "Secure and manage every device, from anywhere. Swyt gives full visibility, zero-touch control, and built-in MDM and IT Asset Management.",
      features: isArabic
        ? [
            "تخطيط واستشارات تقنية المعلومات",
            "تصميم الشبكات وتمديد الكابلات",
            "إعداد الإنترنت وجدار الحماية",
            "إعداد الخوادم والرفوف",
            "أنظمة الطاقة الاحتياطية (UPS)",
          ]
        : [
            "Complete IT Planning & Consultation",
            "Network Design & Cabling (LAN/WAN)",
            "Internet & Firewall Configuration",
            "Server & Rack Setup",
            "Power Backup (UPS) Planning",
          ],
      image: itServicesImage1,
    },
    workstation: {
      title: t.serviceTabs.workstation,
      description: isArabic
        ? "إعداد احترافي لأجهزة العمل بما يلائم احتياجات عملك."
        : "Professional workstation configuration and hardware deployment tailored to your business needs.",
      features: isArabic
        ? [
            "إعداد أجهزة الكمبيوتر المحمولة والمكتبية",
            "ربط الملحقات",
            "اختبار وتشخيص الأجهزة",
            "إعداد شاشات متعددة",
            "تصميم بيئة عمل مريحة",
          ]
        : [
            "Desktop & Laptop Configuration",
            "Peripheral Setup & Integration",
            "Hardware Diagnostics & Testing",
            "Multi-monitor Setup",
            "Ergonomic Workspace Design",
          ],
      image: itServicesImage2,
    },
    networking: {
      title: t.serviceTabs.networking,
      description: isArabic
        ? "بنية شبكات قوية وقابلة للتوسع لضمان أفضل أداء."
        : "Build robust and scalable network infrastructure that ensures seamless connectivity and optimal performance across your organization.",
      features: isArabic
        ? [
            "تصميم بنية الشبكات",
            "إعداد أجهزة التوجيه والمحولات",
            "إعداد الشبكات اللاسلكية",
            "تنفيذ VPN",
            "حلول أمن الشبكات",
          ]
        : [
            "Network Architecture Design",
            "Router & Switch Configuration",
            "Wireless Network Setup",
            "VPN Implementation",
            "Network Security Solutions",
          ],
      image: itServicesImage3,
    },
    cctv: {
      title: t.serviceTabs.cctv,
      description: isArabic
        ? "أنظمة مراقبة متكاملة لحماية منشآتك."
        : "Comprehensive security systems to protect your premises with advanced surveillance and monitoring capabilities.",
      features: isArabic
        ? [
            "تركيب كاميرات IP",
            "إعداد DVR/NVR",
            "مراقبة عن بعد",
            "أنظمة كشف الحركة",
            "دمج أنظمة التحكم بالدخول",
          ]
        : [
            "IP Camera Installation",
            "DVR/NVR Setup",
            "Remote Monitoring Access",
            "Motion Detection Systems",
            "Access Control Integration",
          ],
      image: itServicesImage4,
    },
    alarm: {
      title: t.serviceTabs.alarm,
      description: isArabic
        ? "حلول إنذار متقدمة لحماية أصولك."
        : "Advanced alarm systems and security solutions to safeguard your business assets and ensure peace of mind.",
      features: isArabic
        ? [
            "أنظمة كشف التسلل",
            "تركيب إنذارات الحريق",
            "إعداد الاستجابة للطوارئ",
            "خدمات المراقبة",
            "أنظمة أمن ذكية",
          ]
        : [
            "Intrusion Detection Systems",
            "Fire Alarm Installation",
            "Emergency Response Setup",
            "Alarm Monitoring Services",
            "Smart Security Integration",
          ],
      image: itServicesImage5,
    },
  };

  const currentService = services[activeTab];

  return (
<>
<Helmet>
  {/* Page Title */}
  <title>
    {isArabic ? "خدمات تقنية المعلومات - Jovera IT" : "IT Services - Jovera IT"}
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content={
      isArabic
        ? "نقدم حلول تقنية المعلومات للشركات تشمل إعداد المكاتب، الشبكات، أنظمة الأمن والمراقبة، وإنذار الحريق، مع دعم مستمر."
        : "We provide comprehensive IT services for businesses including office setup, networking, security & surveillance systems, fire alarm systems, and ongoing support."
    }
  />

  {/* Open Graph / Facebook */}
  <meta property="og:title" content={isArabic ? "خدمات تقنية المعلومات - Jovera IT" : "IT Services - Jovera IT"} />
  <meta
    property="og:description"
    content={
      isArabic
        ? "نقدم حلول تقنية المعلومات للشركات تشمل إعداد المكاتب، الشبكات، أنظمة الأمن والمراقبة، وإنذار الحريق، مع دعم مستمر."
        : "We provide comprehensive IT services for businesses including office setup, networking, security & surveillance systems, fire alarm systems, and ongoing support."
    }
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.joveraits.ae/IT" />
  <meta
    property="og:image"
    content="%PUBLIC_URL%/logo.webp" // Replace with ITHero if you want hero preview
  />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={isArabic ? "خدمات تقنية المعلومات - Jovera IT" : "IT Services - Jovera IT"} />
  <meta
    name="twitter:description"
    content={
      isArabic
        ? "نقدم حلول تقنية المعلومات للشركات تشمل إعداد المكاتب، الشبكات، أنظمة الأمن والمراقبة، وإنذار الحريق، مع دعم مستمر."
        : "We provide comprehensive IT services for businesses including office setup, networking, security & surveillance systems, fire alarm systems, and ongoing support."
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
  <link rel="canonical" href="https://www.joveraits.ae/IT" />
</Helmet>



    <main
      dir={isArabic ? "rtl" : "ltr"}
      className={`bg-[#0e0e0e] text-white ${isArabic ? "text-right" : "text-left"}`}
    >
      {/* HERO SECTION */}
      <section className="px-6 md:px-16 lg:px-20 pt-32 justify-center items-center">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-semibold leading-tight">
              <span className="text-[#C99E18]">{t.heroTitle}</span>
              <br />
              {t.heroSubtitle}
            </h1>
            <p className="text-gray-400 mt-6 max-w-xl">{t.heroDesc}</p>
            <div className={`flex gap-4 mt-8 justify-start`}>
              <button className="bg-[#C99E18] text-black px-6 py-3 rounded-lg font-medium">
                {t.contact}
              </button>
              <button className="border border-gray-500 px-6 py-3 rounded-lg">
                {t.proposal}
              </button>
            </div>
          </div>

          <div className="relative">
            <img src={ITHero} alt="Hero" className="rounded-2xl" />
          </div>
        </div>
      </section>

 <div className="flex justify-center items-center">
<div className="flex justify-center items-center">
  <img
    src={hero2}
    alt=""
    className="w-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
  />
</div>

</div>


      {/* SERVICES CARDS */}
{/* SERVICES CARDS */}
      <section className="py-12 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">{t.itServices}</h2>

          {/* Tabs */}
          <div className="bg-[#1B1B1B] rounded-xl py-2 px-4 sm:py-3 sm:px-8 flex flex-wrap gap-4 sm:gap-8 justify-center mb-8 sm:mb-12">
            {Object.keys(services).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-2 sm:px-3 py-1 sm:py-2 text-xs sm:text-sm rounded-full flex items-center gap-2 font-medium transition-colors ${
                  activeTab === key
                    ? "bg-[#866910] text-white"
                    : "text-white hover:bg-neutral-700"
                }`}
              >
                {services[key].title}
              </button>
            ))}
          </div>

          {/* Service Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 p-6 sm:p-10 bg-[#1B1B1B] rounded-lg">
            <div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6">{currentService.title}</h3>
              <ul className="space-y-3 sm:space-y-4">
                {currentService.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 bg-white rounded-full mt-1 flex-shrink-0"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative bg-neutral-800 rounded-3xl border border-neutral-700 max-w-md sm:max-w-lg">
                <img src={currentService.image} alt={currentService.title} className="w-full h-auto rounded-2xl object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-12 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12">{t.processTitle}</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 p-6 sm:p-10 bg-[#1B1B1B] rounded-xl">
            <div className="space-y-4 sm:space-y-6">
              {t.processSteps.map((step, index) => (
                <div key={index} className="flex gap-3 sm:gap-4">
                  <span className="text-base sm:text-lg font-semibold flex-shrink-0">{index + 1}.</span>
                  <p className="text-sm sm:text-base lg:text-lg">{step}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative rounded-3xl overflow-hidden border-2 border-blue-500/30 max-w-md sm:max-w-lg">
                <img src={implementationImage} alt="Implementation Process" className="w-full h-auto object-cover" />
              </div>
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
