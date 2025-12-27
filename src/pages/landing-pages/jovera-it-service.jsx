import React from 'react';
import { useState } from 'react';
import { FaWhatsapp } from "react-icons/fa";
import ContactForm from '../../components/contactForm';
import { PrimaryButton, PrimaryButton2 } from '../../components/button-primary';
import { SecondaryButton } from '../../components/button-primary';
import { ContactPill } from '../../components/contact-pill';
import { Phone, Mail, MessageCircle } from "lucide-react";
import HeroImage from "../../assets/landing-pages/IT/Kamal-Img.png";
import WhyUs1 from "../../assets/landing-pages/IT/1.png";
import WhyUs2 from "../../assets/landing-pages/IT/2.png";
import Projects from "../../assets/landing-pages/IT/phone-pic.png";
import PlayStore from "../../assets/landing-pages/IT/Mobile-play-store-badge.png";
import AppStore from "../../assets/landing-pages/IT/Mobile-app-store-badge.png";
import ScrollAnimation from "../../components/scrollAnimation";

import { Shield, Monitor, Wrench, TrendingUp } from 'lucide-react';

const ITLandingPage = ({lang}) => {
 
 

const isArabic = lang !== 'en';

  const content = {
    en: {
      hero: {
        title: "Jovera",
        subtitle: "IT Solutions",
        description: "Our mission is to drive digital transformation by delivering tailored IT solutions that boost efficiency, innovation, and growth. We help our clients stay ahead in today's competitive market.",
        goWebsite: "Go Website",
        contact: "Contact us"
      },
      services: {
        title: "Our Services",
        itServices: {
          title: "IT Services",
          items: ["IT Services", "System Application Development", "Cloud Computing", "Cyber and Network Solutions"]
        },
        customSoftware: {
          title: "Custom Software Development",
          items: ["Software Development", "Mobile App Development", "Web Development", "ERP & CRM Development"]
        },
        design: {
          title: "Design & Production",
          items: ["Web Design", "Digital Design", "Logo Design", "Graphic Design"]
        },
        marketing: {
          title: "Marketing",
          items: ["Digital Marketing", "SEO", "Search Marketing", "Content Marketing"]
        }
      },
      whyUs: {
        label: "WHY US",
        title: "We have over 12+ years in the Tech Industry",
        description: "Your trusted partner in digital transformation. Turning ideas into solid solutions.",
        teams: "DEDICATED TEAMS",
        teamsDesc: "ONLY THE BEST IN THE FIELD. Driving your vision, from concept to completion.",
        certified: "CERTIFIED PROFESSIONAL",
        support: "24/7 SUPPORT TEAM"
      },
      projects: {
        label: "PROJECTS",
        title: "Our amazing projects that has been completed",
        description: "A collection of our finest achievements. Crafted with creativity, precision, and purpose.",
        subtitle: "Every innovative IT solution we create is meant to impact. Each project reflects our expertise and creativity.",
        button: "Go Website"
      },
      stats: {
        customers: "WORLDWIDE CUSTOMERS",
        projectsDone: "PROJECTS DONE",
        itProducts: "IT PRODUCTS",
        projectsSpend: "PROJECTS SPEND"
      },
      success: {
        label: "OUR SUCCESS",
        title: "We have helped more than 700+ clients in the UAE",
        description: "Building trust, innovation, and measurable results for our clients Delivering trust, innovation, and measurable results. Our clients' success is the true proof of our work.",

      }
    },
    ar: {
      hero: {
        title: "جوفيرا",
        subtitle: "حلول تقنية المعلومات",
        description: "مهمتنا هي دفع التحول الرقمي من خلال تقديم حلول تقنية مخصصة تعزز الكفاءة والابتكار والنمو. نساعد عملائنا على البقاء في المقدمة في سوق اليوم التنافسي.",
        goWebsite: "اذهب إلى الموقع",
        contact: "اتصل بنا"
      },
      services: {
        title: "خدماتنا",
        itServices: {
          title: "خدمات تقنية المعلومات",
          items: ["خدمات تقنية المعلومات", "تطوير تطبيقات النظام", "الحوسبة السحابية", "حلول الأمن السيبراني والشبكات"]
        },
        customSoftware: {
          title: "تطوير البرمجيات المخصصة",
          items: ["تطوير البرمجيات", "تطوير تطبيقات الجوال", "تطوير المواقع", "تطوير أنظمة ERP و CRM"]
        },
        design: {
          title: "التصميم والإنتاج",
          items: ["تصميم المواقع", "التصميم الرقمي", "تصميم الشعارات", "التصميم الجرافيكي"]
        },
        marketing: {
          title: "التسويق",
          items: ["التسويق الرقمي", "تحسين محركات البحث", "التسويق عبر البحث", "تسويق المحتوى"]
        }
      },
      whyUs: {
        label: "لماذا نحن",
        title: "لدينا أكثر من 12+ سنة في صناعة التقنية",
        description: "شريكك الموثوق في التحول الرقمي. نحول الأفكار إلى حلول قوية.",
        teams: "فرق متخصصة",
        teamsDesc: "فقط الأفضل في المجال. نحقق رؤيتك من المفهوم إلى الإنجاز.",
        certified: "محترفون معتمدون",
        support: "فريق دعم على مدار الساعة"
      },
      projects: {
        label: "المشاريع",
        title: "مشاريعنا المذهلة التي تم إنجازها",
        description: "مجموعة من أفضل إنجازاتنا. صُنعت بإبداع ودقة وهدف.",
        subtitle: "كل حل تقني مبتكر نقوم بإنشائه مصمم لإحداث تأثير. كل مشروع يعكس خبرتنا وإبداعنا.",
        button: "اذهب إلى الموقع"
      },
      stats: {
        customers: "العملاء حول العالم",
        projectsDone: "المشاريع المنجزة",
        itProducts: "منتجات تقنية المعلومات",
        projectsSpend: "إنفاق المشاريع"
      },
      success: {
        label: "نجاحنا",
        title: "لقد ساعدنا أكثر من 700 عميل في الإمارات",
        description: "تقديم الثقة والابتكار والنتائج القابلة للقياس. نجاح عملائنا هو الدليل الحقيقي على عملنا."
      }
    }
  };

const options = [
  { key: "Web Development", value: { en: "Web Development", ar: "تطوير المواقع" } },
  { key: "Mobile App Development", value: { en: "Mobile App Development", ar: "تطوير تطبيقات الجوال" } },
  { key: "UI/UX Design", value: { en: "UI/UX Design", ar: "تصميم واجهات وتجربة المستخدم" } },
  { key: "Software Development", value: { en: "Software Development", ar: "تطوير البرمجيات" } },
  { key: "E-Commerce Solutions", value: { en: "E-Commerce Solutions", ar: "حلول التجارة الإلكترونية" } },
  { key: "Cloud Services", value: { en: "Cloud Services", ar: "الخدمات السحابية" } },
  { key: "IT Consulting", value: { en: "IT Consulting", ar: "استشارات تقنية المعلومات" } },
  { key: "Cyber Security", value: { en: "Cyber Security", ar: "الأمن السيبراني" } },
  { key: "Maintenance & Support", value: { en: "Maintenance & Support", ar: "الصيانة والدعم الفني" } }
];



  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);



  const t = content[isArabic ? 'ar' : 'en'];

  return (
    <div className={`min-h-screen bg-black text-white ${isArabic ? 'rtl' : 'ltr'}`}>
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
{/* Services Section */}
<ScrollAnimation>
<section className="container mx-auto px-4 pb-16 ">
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#D7AA47]">
    {t.services.title}
  </h2>

  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

    {[
      {
        icon: <Shield className="w-7 h-7 text-white" />,
        title: t.services.itServices.title,
        items: t.services.itServices.items,
      },
      {
        icon: <Monitor className="w-7 h-7 text-white" />,
        title: t.services.customSoftware.title,
        items: t.services.customSoftware.items,
      },
      {
        icon: <Wrench className="w-7 h-7 text-white" />,
        title: t.services.design.title,
        items: t.services.design.items,
      },
      {
        icon: <TrendingUp className="w-7 h-7 text-white" />,
        title: t.services.marketing.title,
        items: t.services.marketing.items,
      },
    ].map((service, idx) => (
      <div
        key={idx}
        className="bg-gradient-to-b from-[#1c1c1c] to-[#111] p-6 rounded-xl hover:scale-105 transition duration-300"
      >
        {/* ICON + HEADING ROW */}
        <div className={` flex items-center gap-3 mb-4 ${isArabic ? 'flex-row-reverse' : ''}`}>
          <div>{service.icon}</div>
          <h3 className="text-lg font-semibold text-white">{service.title}</h3>
        </div>

        {/* BULLET POINTS BELOW HEADING (NOT ICON) */}
   <div className={`${isArabic ? 'mr-10 text-right' : 'ml-10 text-left'}`}>
  <ul className="space-y-2 text-gray-300 text-sm">
    {service.items.map((item, index) => (
      <li
        key={index}
        className={`flex gap-2 ${isArabic ? 'flex-row-reverse' : ''}`}
      >
        <span>•</span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
</div>

      </div>
    ))}

  </div>
</section>
</ScrollAnimation>

{/* Why us */}
<ScrollAnimation>
<section
  className="relative w-full bg-black text-white py-20"
  
>
  <div
    className={`
      max-w-7xl mx-auto px-6 
      grid lg:grid-cols-2 gap-12 items-center
    `}
  >

    {/* LEFT (TEXT) – becomes RIGHT when Arabic */}
    <div className={`${isArabic ? "order-2 text-right" : "order-1 text-left"}`}>
      <h4 className="text-[#D7AA47] font-semibold tracking-widest mb-3">
        {isArabic ? "لماذا نحن" : "WHY US"}
      </h4>

      <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
        {isArabic
          ? "لدينا أكثر من 12 عامًا من الخبرة في مجال التكنولوجيا"
          : "We have over 12+ years in the Tech Industry"}
      </h2>

      <p className="text-gray-300 text-lg leading-relaxed mb-10">
        {isArabic ? (
          <>
            شريكك الموثوق في التحول الرقمي. <br />
            نحول الأفكار إلى حلول ذكية وقابلة للتطوير.
          </>
        ) : (
          <>
            Your trusted partner in digital transformation. <br />
            Turning ideas into smart, scalable solutions.
          </>
        )}
      </p>

      {/* Feature 1 */}
      <div className="mb-10 cursor-pointer" onClick={() => setOpen1(!open1)}>
        <div className={`flex gap-4 ${isArabic ? "justify-end" : "items-start"}`}>
          <span className="text-[#D7AA47] text-xl font-bold select-none">
            {open1 ? "-" : "+"}
          </span>
          <h3 className={`text-xl font-semibold ${open1 ? "text-[#D7AA47]": ""}`}>
            {isArabic ? "فِرَق مُخَصَّصة" : "DEDICATED TEAMS"}
          </h3>
        </div>

        {open1 && (
          <p className="text-gray-300 text-sm leading-relaxed mt-3 transition-all duration-300"
             style={{ marginInlineStart: "36px" }}>
            {isArabic
              ? "تعمل فرقنا المخصصة حصريًا على مشروعك، مما يضمن التركيز وسرعة التسليم وجودة عالية موجهة نحو أهداف عملك."
              : "Our dedicated teams work exclusively on your project, ensuring focus, faster delivery, and high-quality results tailored to your business goals."}
          </p>
        )}
      </div>

      {/* Feature 2 */}
      <div className="mb-10 cursor-pointer" onClick={() => setOpen2(!open2)}>
        <div className={`flex gap-4 ${isArabic ? "justify-end" : "items-start"}`}>
          <span className="text-[#D7AA47]  text-xl font-bold flex items-start select-none">
            {open2 ? "-" : "+"}
          </span>
          <h3 className={`text-xl font-semibold ${open2 ? "text-[#D7AA47]": ""}`}>
            {isArabic ? "محترفون معتمدون" : "CERTIFIED PROFESSIONAL"}
          </h3>
        </div>

        {open2 && (
          <p className="text-gray-300 text-sm leading-relaxed mt-3 transition-all duration-300"
             style={{ marginInlineStart: "36px" }}>
            {isArabic
              ? "يتكون فريقنا من خبراء معتمدين في التطوير والتصميم والسحابة والأمن — لضمان حلول بمعايير عالمية."
              : "Our team consists of certified experts across development, design, cloud, and security — ensuring industry-standard solutions for your business."}
          </p>
        )}
      </div>

      {/* Feature 3 */}
      <div className="cursor-pointer" onClick={() => setOpen3(!open3)}>
        <div className={`flex gap-4 ${isArabic ? "justify-end" : "items-start"}`}>
          <span className="text-[#D7AA47] text-xl font-bold select-none">
            {open3 ? "-" : "+"}
          </span>
          <h3 className={`text-xl font-semibold ${open3 ? "text-[#D7AA47]": ""}`}>
            {isArabic ? "دعم متواصل 24/7" : "24/7 SUPPORT TEAM"}
          </h3>
        </div>

        {open3 && (
          <p className="text-gray-300 text-sm leading-relaxed mt-3 transition-all duration-300"
             style={{ marginInlineStart: "36px" }}>
            {isArabic
              ? "نقدم دعمًا على مدار الساعة لضمان سير عملياتك بسلاسة وتوفير المساعدة فورًا عند الحاجة."
              : "We provide round-the-clock support, ensuring your operations run smoothly with instant help whenever you need it."}
          </p>
        )}
      </div>
    </div>

    {/* RIGHT (IMAGES) – becomes LEFT when Arabic */}
    <div className={`${isArabic ? "order-1" : "order-2"} grid grid-cols-2 gap-6`}>
      <img
        src={WhyUs1}
        alt="Programming code"
        className="w-full h-[330px] object-cover rounded-2xl"
      />
      <img
        src={WhyUs2}
        alt="Team working together"
        className="w-full h-[330px] object-cover rounded-2xl"
        loading="lazy"
      />
    </div>

  </div>
</section>

</ScrollAnimation>
      {/* Projects Section */}
<ScrollAnimation>
      <section className="bg-gray-900 bg-opacity-30 py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="flex justify-center">
              <div className="relative w-full max-w-lg">
                <div className="p-4 overflow-hidden">
                  <img 
                    src={Projects} 
                    alt="Projects"
                    className="w-full h-full object-cover rounded-lg"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div className={`${isArabic ? "text-right" : "text-left"}`}>
              <p className="text-[#D7AA47] font-semibold mb-2 text-sm uppercase tracking-wider">{t.projects.label}</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                {t.projects.title}
              </h2>
              <p className="text-gray-300 mb-8 text-sm">
                {t.projects.description}
              </p>
              <p className="text-gray-300 mb-8 text-sm">
                {t.projects.subtitle}
              </p>
              

              <div className="flex items-center gap-3">
              <img
              src={PlayStore}
              alt="Play Store"
             className="h-8 w-auto"
             loading="lazy"
               />
              <img
            src={AppStore}
             alt="App Store"
             className="h-8 w-auto"
             loading="lazy"
           />
         </div>


               
               {/* <SecondaryButton children={
               <span className={`flex items-center gap-2  ${isArabic ? 'flex-row-reverse' : ''}`}>
               {t.projects.button}
               <span>{isArabic ? '←' : '→'}</span>
               </span>
               } link={"#"} /> */}
            
            
              {/* <div className='flex '>
              <button className="border border-white hover:bg-white hover:text-black text-white px-6 py-2.5 rounded text-sm font-medium transition-colors flex items-center gap-2">
                {}
                <span>→</span>
              </button>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 text-[#D7AA47]">782</h3>
            <p className="font-bold text-xs uppercase tracking-wide">{t.stats.customers}</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 text-[#D7AA47]">12K</h3>
            <p className="font-bold text-xs uppercase tracking-wide">{t.stats.projectsDone}</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 text-[#D7AA47]">5,896</h3>
            <p className="font-bold text-xs uppercase tracking-wide">{t.stats.itProducts}</p>
          </div>
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 text-[#D7AA47]">800K Dhs</h3>
            <p className="font-bold text-xs uppercase tracking-wide">{t.stats.projectsSpend}</p>
          </div>
        </div>
      </section>
</ScrollAnimation>
      {/* Contact Form & Success Section */}
    
      <section className="container mx-auto px-4 py-16 sm:max-w-7xl">
        <div className="sm:bg-[#171717] sm:p-20  grid lg:grid-cols-2 gap-12 sm:rounded-xl">
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
        text="info@joveraits.ae"
        link="mailto:info@joveraits.ae"
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
  );
};

export default ITLandingPage;