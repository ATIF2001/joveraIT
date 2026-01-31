import React, { useState } from "react";
import ContactForm from "../../components/contactForm";
import DigitalDevelopment from "../../assets/Services/DigitalDevHero.png";
import ourProcess from "../../assets/Home/ourProcess.png";
import image1 from "../../assets/Services/image1.jpg";
import image2 from "../../assets/Services/image2.jpg";
import image3 from "../../assets/Services/image3.jpg";
import image4 from "../../assets/Services/image4.jpg";
import hero2 from "../../assets/Services/hero2.png";
import work1 from "../../assets/Home/CustomSoftware.png";
import work2 from "../../assets/Home/CustomSoftware.png";
import work3 from "../../assets/Home/CustomSoftware.png";

import PortfolioProjects from "../../components/PortfolioProjects";
import uxImage from "../../assets/Services/uxImage.png";
import webImage from "../../assets/Services/webandMobileDesign.png";
import packagingImage from "../../assets/Services/packaging.png";
import appImage from "../../assets/Services/appDev.png";
import brandImage from "../../assets/Services/brandIdentity.png";
import { Helmet } from "react-helmet";

export default function WebMobileDevelopmentPage({ lang }) {
  const [activeTab, setActiveTab] = useState(lang === "en" ? "All" : "الكل");
  const [openIndex, setOpenIndex] = useState(null);

  const isArabic = lang !== "en";

  // Translated texts
  const texts = {
    heroTitle: isArabic ? "تطوير الويب والجوال" : "Web & Mobile Development",
    heroSubtitle: isArabic ? "مصمم للأعمال" : "Made for business",
    heroDesc: isArabic
      ? "من تطبيقات الويب والجوال إلى البرمجيات المخصصة، نقدم حلول رقمية آمنة وقابلة للتوسع."
      : "From web and mobile apps to custom software, we build secure and scalable digital solutions.",
    contactBtn: isArabic ? "تواصل معنا" : "Contact us",
    proposalBtn: isArabic ? "عرض الأعمال" : "Business Proposal",
    servicesTitle: isArabic ? "خدمات التطوير الرقمي" : "Digital Development Services",
    processTitle: isArabic ? "طريقة عملنا" : "Our Process",
    processDesc: isArabic
      ? "هكذا نعمل على هذه المرحلة. هذه هي طريقة عملنا."
      : "How we work in this part. This is our work process.",
    workTitle: isArabic ? "أعمالنا" : "Our Work",
    tabs: isArabic
      ? ["الكل", "تصميم الجوال", "تصميم الويب", "لوحة التحكم", "مصمم UX/UI"]
      : ["All", "Mobile design", "Web design", "Dashboard", "UX UI Designer"],
    goWebsite: isArabic ? "اذهب إلى الموقع →" : "Go Website →",
    caseStudy: isArabic ? "دراسة حالة" : "Case Study",
    webDevTitle: isArabic ? "خدمات تطوير المواقع" : "Web Development Services",
    webDevItems: isArabic
      ? [
          " تطوير مواقع ويب مخصصة •",
          " مواقع الشركات والأعمال •",
          " تطوير مواقع التجارة الإلكترونية •",
          " تطوير نظم إدارة المحتوى •",
          " تطوير تطبيقات الويب •",
          " صيانة ودعم المواقع •",
        ]
      : [
          "• Custom Website Development",
          "• Corporate & Business Websites",
          "• E-commerce Website Development",
          "• CMS Development (WordPress, Laravel, etc.)",
          "• Web Application Development",
          "• Website Maintenance & Support",
        ],
    mobileDevTitle: isArabic ? "تطوير تطبيقات الجوال" : "Mobile App Development",
    mobileDevItems: isArabic
      ? [
          " تطوير تطبيقات أندرويد •",
          " تطوير تطبيقات iOS •",
          " تطوير تطبيقات متعددة المنصات •",
          " تصميم واجهة وتجربة المستخدم للتطبيقات •",
          " صيانة وتحديث التطبيقات •",
        ]
      : [
          "• Android App Development",
          "• iOS App Development",
          "• Cross-Platform App Development (Flutter / React Native)",
          "• UI/UX Design for Mobile Apps",
          "• App Maintenance & Upgrades",
        ],
    uiuxTitle: isArabic ? "تصميم UX / UI" : "UI / UX Design",
    uiuxItems: isArabic
      ? [
          " تصميم واجهة المستخدم •",
          " تحسين تجربة المستخدم •",
          " إنشاء النماذج الأولية والتخطيط •",
          " تصميم متجاوب لجميع الأجهزة •",
        ]
      : [
          "• User Interface Design",
          "• User Experience Optimization",
          "• Wireframing & Prototyping",
          "• Responsive Design for All Devices",
        ],
    additionalTitle: isArabic ? "خدمات إضافية" : "Additional Services",
    additionalItems: isArabic
      ? [
          "تطوير ودمج واجهات برمجة التطبيقات •",
          "حلول سحابية •",
          "اختبار البرمجيات وضمان الجودة •",
          "استشارات التحول الرقمي •",
        ]
      : [
          "• API Development & Integration",
          "• Cloud-Based Solutions",
          "• Software Testing & Quality Assurance",
          "• Digital Transformation Consulting",
        ],
    processSteps: isArabic
      ? [
          { title: "التحليل والتخطيط", desc: "فهم احتياجاتك وتحديد الاستراتيجية الصحيحة." },
          { title: "التصميم والتطوير", desc: "تصميم وبناء حلول رقمية فعّالة." },
          { title: "الاختبار والإطلاق", desc: "ضمان الجودة قبل الإطلاق بسلاسة." },
          { title: "النمو والدعم", desc: "التحسين المستمر والدعم المستمر." },
        ]
      : [
          { title: "Analysis & Planning", desc: "Understanding your needs and defining the right strategy." },
          { title: "Design & Development", desc: "Designing and building efficient digital solutions." },
          { title: "Testing & Launch", desc: "Ensuring quality before a smooth launch." },
          { title: "Growth & Support", desc: "Continuous improvement and ongoing support." },
        ],
  };



const projects = {
  Websites: [
    {
      title: "Jovera Tourism",
      image: work1,
      tech: "Website, Mobile App & Dashboard",
      problem: "Client needed a full tourism ecosystem with bookings and admin control.",
      solution:
        "We built a responsive website, mobile apps, and a real-time dashboard with analytics.",
      website: "https://jovera.com",
    },
    {
      title: "Travel Pro",
      image: work2,
      tech: "Website",
      problem: "Low conversion and outdated UI.",
      solution: "Redesigned UX and optimized performance.",
    },
    {
      title: "Explore UAE",
      image: work3,
      tech: "Web App",
      problem: "No centralized booking platform.",
      solution: "Developed scalable booking system.",
    },
  ],

  MobileApps: [
    {
      title: "RideNow",
      image: work2,
      tech: "iOS & Android",
      problem: "Manual ride allocation.",
      solution: "Automated dispatch & live tracking.",
    },
    // add more
  ],
};







  const servicesList = [
    {
      title: isArabic ? "مصمم UX/UI" : "UX UI Designer",
      image: uxImage,
      content: isArabic
        ? "بحث المستخدم، تصميم الإطارات السلكية، أنظمة واجهة المستخدم وتصميم تجربة المستخدم."
        : "User research, wireframing, UI systems, and experience-driven design.",
    },
    {
      title: isArabic ? "تصميم الويب والجوال" : "Web & Mobile Design",
      image: webImage,
      content: isArabic
        ? "تصاميم حديثة ومتجاوبة للويب والجوال."
        : "Modern responsive designs for web and mobile platforms.",
    },
    {
      title: isArabic ? "تطوير التطبيقات" : "App Development",
      image: appImage,
      content: isArabic
        ? "تطبيقات جوال عالية الأداء لنظامي iOS و Android."
        : "High-performance mobile applications for iOS and Android.",
    },
    {
      title: isArabic ? "هوية العلامة التجارية" : "Brand Identity",
      image: brandImage,
      content: isArabic
        ? "الهوية البصرية، أنظمة الشعارات، وإرشادات العلامة التجارية."
        : "Visual identity, logo systems, and brand guidelines.",
    },
    {
      title: isArabic ? "التغليف" : "Packaging",
      image: packagingImage,
      content: isArabic
        ? "تصاميم تغليف إبداعية وجاهزة للإنتاج."
        : "Creative and production-ready packaging designs.",
    },
  ];

  return (
<>
<Helmet>
  {/* Page Title */}
  <title>
    {isArabic
      ? "تطوير الويب والجوال - Jovera IT"
      : "Web & Mobile Development - Jovera IT"}
  </title>

  {/* Meta Description */}
  <meta
    name="description"
    content={
      isArabic
        ? "نقدم حلول رقمية آمنة وقابلة للتوسع تشمل تطوير مواقع الويب، تطبيقات الجوال، البرمجيات المخصصة، وتصميم UX/UI."
        : "We build secure and scalable digital solutions including web development, mobile apps, custom software, and UX/UI design."
    }
  />

  {/* Open Graph / Facebook */}
  <meta property="og:title" content={isArabic ? "تطوير الويب والجوال - Jovera IT" : "Web & Mobile Development - Jovera IT"} />
  <meta
    property="og:description"
    content={
      isArabic
        ? "نقدم حلول رقمية آمنة وقابلة للتوسع تشمل تطوير مواقع الويب، تطبيقات الجوال، البرمجيات المخصصة، وتصميم UX/UI."
        : "We build secure and scalable digital solutions including web development, mobile apps, custom software, and UX/UI design."
    }
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.joveraits.ae/DigitalDevelopment" />
  <meta
    property="og:image"
    content="%PUBLIC_URL%/logo.webp" // Replace with hero image if preferred
  />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={isArabic ? "تطوير الويب والجوال - Jovera IT" : "Web & Mobile Development - Jovera IT"} />
  <meta
    name="twitter:description"
    content={
      isArabic
        ? "نقدم حلول رقمية آمنة وقابلة للتوسع تشمل تطوير مواقع الويب، تطبيقات الجوال، البرمجيات المخصصة، وتصميم UX/UI."
        : "We build secure and scalable digital solutions including web development, mobile apps, custom software, and UX/UI design."
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
  <link rel="canonical" href="https://www.joveraits.ae/DigitalDevelopment" />
</Helmet>




    <main 
     
    className={`${isArabic ? " text-right" : " text-left"} bg-[#0e0e0e] text-white`}>
      {/* HERO SECTION */}
      <section className="px-6 md:px-16 lg:px-20 pt-32">
      <div className={`max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center`}>
  {/* Text */}
  <div className={isArabic ? "lg:order-2 text-right" : ""}>
    <h1 className="text-4xl lg:text-5xl font-semibold leading-tight">
      <span className="text-[#C99E18]">{texts.heroTitle}</span>
      <br />
      {texts.heroSubtitle}
    </h1>
    <p className="text-gray-400 mt-6 max-w-xl">{texts.heroDesc}</p>
    <div className={`flex gap-4 mt-8 ${isArabic ? "justify-end" : "justify-start"}`}>
        <button
  onClick={() => {
    document
      .getElementById("contactForm")
      ?.scrollIntoView({ behavior: "smooth" });
  }}
  className="bg-[#C99E18] text-black px-6 py-3 rounded-lg font-medium hover:bg-[#b08e15] transition-colors"
>
  {texts.contactBtn}
</button>

<a
  href="https://calendly.com/batif7003/jovera-it-consultation"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="border border-gray-500 px-6 py-3 rounded-lg hover:border-gray-400 transition-colors">
    {texts.proposalBtn}
  </button>
</a>

    </div>
  </div>

  {/* Hero Image */}
  <div className={isArabic ? "lg:order-1" : ""}>
    <img src={DigitalDevelopment} alt="Hero" className="rounded-2xl" />
  </div>
</div>

      </section>

      {/* Hero 2 Image */}
      <div className="flex justify-center item-center">
        <img src={hero2} alt="" />
      </div>

      {/* SERVICES CARDS */}
      <section className="px-6 md:px-16 lg:px-20 pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-[#141414] border border-[#1f1f1f] rounded-xl ">
            <img src={image1} alt="Web Development" className="rounded-lg mb-4 h-[200px]" />
            <h3 className="font-semibold text-lg mb-3 text-[#C99E18] px-6">{texts.webDevTitle}</h3>
            <ul className="text-gray-400 text-sm space-y-2 px-6 py-2">
              {texts.webDevItems.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>

          {/* Card 2 */}
          <div className="bg-[#141414] border border-[#1f1f1f] rounded-xl ">
            <img src={image2} alt="Mobile App Development" className="rounded-lg mb-4 h-[200px]" />
            <h3 className="font-semibold text-lg mb-3 text-[#C99E18] px-6">{texts.mobileDevTitle}</h3>
            <ul className="text-gray-400 text-sm space-y-2 px-6 py-2">
              {texts.mobileDevItems.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-[#141414] border border-[#1f1f1f] rounded-xl ">
            <img src={image3} alt="UI UX Design" className="rounded-lg mb-4 h-[200px]" />
            <h3 className="font-semibold text-lg mb-3 text-[#C99E18] px-6">{texts.uiuxTitle}</h3>
            <ul className="text-gray-400 text-sm space-y-2 px-6 py-2">
              {texts.uiuxItems.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>

          {/* Card 4 */}
          <div className="bg-[#141414] border border-[#1f1f1f] rounded-xl ">
            <img src={image4} alt="Additional Services" className="rounded-lg mb-4 h-[200px]" />
            <h3 className="font-semibold text-lg mb-3 text-[#C99E18] px-6">{texts.additionalTitle}</h3>
            <ul className="text-gray-400 text-sm space-y-2 px-6 py-2">
              {texts.additionalItems.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      {/* DEVELOPMENT PROCESS */}
      <section className="bg-[1B1B1B] text-white py-16 px-8">
        <div className={`flex flex-col lg:flex-row items-start justify-between max-w-7xl mx-auto gap-12 ${isArabic ? "lg:flex-row-reverse" : ""}`}>
          <div className="flex-1">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#C99E18' }}>{texts.processTitle}</h2>
            <p className="text-gray-300 mb-12">{texts.processDesc}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              {texts.processSteps.map((step, i) => (
                <div key={i}>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end">
            <img src={ourProcess} alt="Our Process" className="w-full max-w-lg object-contain" />
          </div>
        </div>
      </section>

{/* Our Work Section */}
{/* Our Work Section */}
<PortfolioProjects />
{/* <section className="bg-[#0e0e0e] text-white px-6 md:px-16 lg:px-20 py-24">
  <div className="max-w-7xl mx-auto">

    <h2 className="text-3xl font-semibold mb-12">{texts.workTitle}</h2>

=
    <div className="relative mb-16">
      <div className="flex justify-between text-sm md:text-base flex-wrap gap-4">
        {texts.tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-4 relative transition ${
              activeTab === tab
                ? "text-[#C99E18]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {tab}
    
            {activeTab === tab && (
              <span className="absolute left-0 -bottom-[1px] w-full h-[2px] bg-[#C99E18]" />
            )}
          </button>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gray-700" />
    </div>


    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {(projects[activeTab] || []).map((project, index) => (
        <div
          key={index}
          className="bg-[#121212] border border-[#1f1f1f] rounded-2xl p-6 text-center hover:border-[#C99E18] transition"
        >
          <img
            src={project.image}
            alt={project.title}
            className="rounded-xl mb-6"
          />
          <h3 className="font-semibold mb-2">{project.title}</h3>
          <p className="text-sm text-gray-400 mb-4">{project.tech}</p>

          {project.website && (
            <div className="flex justify-center gap-3 mb-4">
              <img src={googlePlay} className="h-8" alt="Google Play" />
              <img src={appStore} className="h-8" alt="App Store" />
            </div>
          )}

          <div className="flex justify-center gap-3">
            {project.website && (
              <a
                href={project.website}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-md bg-gradient-to-r from-[#C99E18] to-[#8f6b12] text-black text-sm font-medium"
              >
                {lang === "en" ? "Go Website →" : "اذهب إلى الموقع →"}
              </a>
            )}
            <button className="px-4 py-2 rounded-md border border-gray-600 text-sm">
              {lang === "en" ? "Case Study" : "دراسة حالة"}
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section> */}


    
        {/* DIGITAL DEVELOPMENT SERVICES */}
    <section className="bg-[#0e0e0e] text-white px-6 md:px-16 lg:px-20 py-24">
  <div className="max-w-7xl mx-auto">
    <h2
      className={`text-3xl font-semibold mb-16 ${
        isArabic ? "text-right" : "text-left"
      }`}
    >
      {texts.servicesTitle}
    </h2>

    <div className="space-y-2">
      {servicesList.map((service, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={index}>
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className={`w-full flex items-center py-6 group
                ${isArabic ? "flex-row-reverse" : "flex-row"}
              `}
            >
              {/* IMAGE + TEXT */}
              <div
                className={`flex items-center gap-6 flex-1
                  ${isArabic ? "justify-end text-right" : "justify-start text-left"}
                `}
              >
              {isArabic ? (
                <>
                <span className="text-xl font-medium">
                  {service.title}
                </span>
                <img
                  src={service.image}
                  alt=""
                  className="w-16 h-8 rounded-full object-cover"
                />
                
                </>
              ):(
      
       <>
                <img
                  src={service.image}
                  alt=""
                  className="w-16 h-8 rounded-full object-cover"
                />
                <span className="text-xl font-medium">
                  {service.title}
                </span>
                </>
      
      
      )}
              </div>

              {/* + / - ICON */}
              <span
                className={`text-3xl font-light text-gray-400 group-hover:text-white transition
                  ${isArabic ? "mr-4" : "ml-4"}
                `}
              >
                {isOpen ? "–" : "+"}
              </span>
            </button>

            {/* CONTENT */}
            <div
              className={`overflow-hidden transition-all duration-300
                ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}
              `}
            >
              <p
                className={`text-gray-400 pb-6
                  ${isArabic ? "pr-22 text-right" : "pl-22 text-left"}
                `}
              >
                {service.content}
              </p>
            </div>

            <div className="h-px bg-gray-800" />
          </div>
        );
      })}
    </div>
  </div>
</section>
<div
id="contactForm"
dir={isArabic ? "rtl" : "ltr" } >

         <ContactForm lang={lang} />
         </div>
    </main>
    </>
  );
}
