import React from "react";
import { Link } from "react-router-dom";
import { Calendar} from "lucide-react";
import ServiceImage from "../components/serviceImg";
import ITHome from "../assets/Home/IT-Home.png";
import WhoWeAre from "../assets/Home/whoWeAre.png";
import MissionContent from "../components/MissionContent";
import HeroImage from "../assets/Home/IT-Home.png";
import ScrollAnimation from "../components/scrollAnimation";
import { PrimaryButton2 } from "../components/ButtonPrimary";
import ITDepartment from "../assets/Home/ITDepartment.png";
import Laptop from "../assets/Home/laptop.png";
import DigitalMarketing from "../assets/Home/DigitalMarketing.png";
import CustomSoftware from "../assets/Home/CustomSoftware.png";
import ContactForm from "../components/contactForm";

import idea from "../assets/Home/idea.png";
import certificate from "../assets/Home/certificate.png";
import operation from "../assets/Home/operation.png";

import img1 from "../assets/Home/whyChoose1.png";
import img2 from "../assets/Home/whyChoose2.png";
import img3 from "../assets/Home/whyChoose3.png";
import img4 from "../assets/Home/whyChoose4.png";


import serviceImg1 from "../assets/Home/service1.jpg";
import serviceImg2 from "../assets/Home/service2.jpg";
import serviceImg3 from "../assets/Home/service3.jpg";
import serviceImg4 from "../assets/Home/service4.jpg";

import ourProcess from "../assets/Home/ourProcess.png";
import OurMission from "../assets/Home/OurMission.jpg";

import buttonArrow from "../assets/Home/buttonArrow.png";
import freeConsultation from "../assets/Home/freeConsultation.jpg";

import { Helmet } from "react-helmet";

// ------------------ SAFE OPTIONS (FIXES map ERROR) ------------------
const options = [
  { key: "Web Development", value: { en: "Web Development" } },
  { key: "Mobile Apps", value: { en: "Mobile App Development" } },
  { key: "UI/UX", value: { en: "UI/UX Design" } },
  { key: "Custom Software", value: { en: "Custom Software Development" } },
  { key: "Cloud", value: { en: "Cloud Services" } },
  { key: "IT Consulting", value: { en: "IT Consulting" } },
  { key: "Cyber Security", value: { en: "Cyber Security" } },
  { key: "Support", value: { en: "Maintenance & Support" } }
];

export default function ITLandingPage({ lang = "en" }) {
  
//   const translations = {
//   en: {
//     lookingFor: "LOOKING FOR",
//     theFuture: "THE FUTURE",
//     heroDesc:
//       "From IT services and digital development to creative design and social media marketing, we help brands innovate, scale, and succeed in the digital world. Smart IT solutions and digital transformation services designed to scale your business with innovation.",
//     contactUs: "Contact us",

//     whoWeAre: "Who We Are",
//     whoWeAreDesc:
//       "Jovera IT Services is a leading technology solutions provider delivering end-to-end IT services, software development, digital transformation, and marketing solutions for businesses of all sizes.\n\nWith a strong focus on innovation, reliability, and customer satisfaction, we act as a long-term technology partner, not just a service provider.",
//     whyChooseUs: "Why Choose Us",
//     whyChooseDesc:
//       "We combine technology, creativity, and strategy to deliver solutions that truly make a difference.",

//     webMobile: "Web & Mobile App Development",
//     customSoftware: "Custom Software Development",
//     itInfrastructure: "IT Infrastructure & Solutions",
//     digitalMarketing: "Digital Marketing Services",

//     ourProcess: "Our Process",
//     processDesc: "How we are work on this part. This is our work process.",

//     ourMission: "OUR Mission",
//     ourVision: "OUR Vision",

//     getInTouch: "Get In Touch With Us Today",
//     freeConsultation: "Free Consultation",
//     haveIdea: "Have an idea?",
//     letsTalk: "Let's talk."
//   },

//   ar: {
//     lookingFor: "هل تبحث عن",
//     theFuture: "المستقبل",
//     heroDesc:
//       "من خدمات تقنية المعلومات والتطوير الرقمي إلى التصميم الإبداعي والتسويق عبر وسائل التواصل الاجتماعي، نساعد العلامات التجارية على الابتكار والنمو والنجاح في العالم الرقمي. حلول تقنية ذكية وخدمات التحول الرقمي المصممة لتوسيع أعمالك بالابتكار.",
//     contactUs: "تواصل معنا",

//     whoWeAre: "من نحن",
//     whoWeAreDesc:
//       "تُعد Jovera لخدمات تقنية المعلومات مزودًا رائدًا للحلول التقنية، حيث نقدم خدمات تقنية شاملة، وتطوير البرمجيات، والتحول الرقمي، وحلول التسويق للشركات بجميع أحجامها.\n\nنركز بشكل قوي على الابتكار والموثوقية ورضا العملاء، ونعمل كشريك تقني طويل الأمد، وليس مجرد مزود خدمة.",

//     whyChooseUs: "لماذا تختارنا",
//     whyChooseDesc:
//       "نمزج بين التكنولوجيا والإبداع والاستراتيجية لتقديم حلول تُحدث فرقًا حقيقيًا.",

//     webMobile: "تطوير تطبيقات الويب والجوال",
//     customSoftware: "تطوير البرمجيات المخصصة",
//     itInfrastructure: "البنية التحتية وحلول تقنية المعلومات",
//     digitalMarketing: "خدمات التسويق الرقمي",

//     ourProcess: "آلية العمل",
//     processDesc: "هذه هي خطوات العمل التي نتبعها لتنفيذ المشاريع.",

//     ourMission: "مهمتنا",
//     ourVision: "رؤيتنا",

//     getInTouch: "تواصل معنا اليوم",
//     freeConsultation: "استشارة مجانية",
//     haveIdea: "هل لديك فكرة؟",
//     letsTalk: "دعنا نتحدث."
//   }
// };

  
  
// const t = (key) => translations[lang === "en" ? "en" : "ar"][key];

  const content = {
  en: {
    hero: {
      title: "LOOKING FOR THE FUTURE !",
      description:
        "From IT services and digital development to creative design and social media marketing, we help brands innovate, scale, and succeed in the digital world. Smart IT solutions and digital transformation services designed to scale your business with innovation.",
      cta: "Contact us "
    },

    servicesHighlight: [
      "IT Department",
      "Web & Mobile Development",
      "Digital Marketing",
      "Custom Software"
    ],

    whoWeAre: {
      title: "Who We Are",
      description:
        "Jovera IT Services is a leading technology solutions provider delivering end-to-end IT services, software development, digital transformation, and marketing solutions for businesses of all sizes.",
      description2:
        "With a strong focus on innovation, reliability, and customer satisfaction, we act as a long-term technology partner, not just a service provider."
    },

    values: [
      {
        title: "Deliver Quality Solutions",
        text: "High-quality IT and digital solutions tailored to business needs"
      },
      {
        title: "Ensure Reliability",
        text: "Security and scalability in every project"
      },
      {
        title: "Continuous Innovation",
        text: "Modern technologies to drive business growth"
      }
    ],

    whyChooseUs: {
      title: "Why Choose Us",
      description:
        "We combine technology, creativity, and strategy to deliver solutions that truly make a difference.",
      stats: [{
        label: "Projects Completed",
        value: "100%" 
      },
    {
        label: "Client Satisfaction",
        value: "95%" 
      },
     {
        label: "Years Experience",
        value: "5+" 
      },
       {
        label: "Support Available",
        value: "24/7" 
      }
  ],
   points: [
    { id: "01", title: "One-Stop Solution", desc: "Complete IT, software, and digital marketing services under one roof" },
    { id: "02", title: "Experienced Team", desc: "Skilled professionals with years of industry experience" },
    { id: "03", title: "Customized Approach", desc: "Tailored solutions designed specifically for your business needs" },
    { id: "04", title: "Secure & Scalable", desc: "Robust security measures and scalable architecture" },
    { id: "05", title: "Transparent Communication", desc: "Regular updates and clear communication throughout projects" },
    { id: "06", title: "Reliable Support", desc: "Always-on technical support to ensure your systems run smoothly without interruptions" },
  ]
},

    services: {
      webMobile: {
        title: "Web & Mobile App Development",
        description:
          "Modern, user-friendly applications for seamless digital experience.",
        list: [
          "Custom Websites",
          "E-commerce Solutions",
          "Web Applications",
          "Android & iOS Apps",
          "Cross-Platform Apps",
          "UI/UX Design"
        ]
      },
      customSoftware: {
        title: "Custom Software Development",
        description: "Tailor-made solutions to streamline business operations.",
        list: [
          "Enterprise Solutions",
          "CRM & ERP Systems",
          "Workflow Automation",
          "Inventory Software",
          "HR Management Systems",
          "SaaS Applications"
        ]
      },
      infrastructure: {
        title: "IT Infrastructure & Solutions",
        description: "End-to-end IT setup and support for secure operations.",
        list: [
          "Office IT Setup",
          "Network Solutions",
          "Firewall & VPN",
          "CCTV Surveillance",
          "Communication Systems",
          "IT Support"
        ]
      },
      marketing: {
        title: "Digital Marketing Services",
        description:
          "Strategies to build online presence and generate leads.",
        list: [
          "SEO (Search Engine Optimization)",
          "Social Media Marketing",
          "Google & Meta Ads",
          "Email Marketing",
          "Reputation Management"
        ]
      }
    },

    process: {
      title: "Our Process",
      description:"How we are work on this part. This is our work process.",
      steps: [
        {
          title: "Analysis & Planning",
          text: "Understanding your needs and defining the right strategy."
        },
        {
          title: "Design & Development",
          text: "Designing and building efficient digital solutions."
        },
        {
          title: "Testing & Launch",
          text: "Ensuring quality before a smooth launch."
        },
        {
          title: "Growth & Support",
          text: "Continuous improvement and ongoing support."
        }
      ]
    },
   mission: {
      title: "Our Mission",
      points: [
        {
          heading: "Deliver Quality Solutions",
          desc: "To become a trusted global IT solutions partner by delivering innovative, secure, and scalable technology solutions that empower businesses to grow in the digital era"
        },
        {
          heading: "Ensure Reliability",
          desc: "Security and scalability in every project"
        },
        {
          heading: "Build Partnerships",
          desc: "Long-term relationships through trust and transparency"
        },
        {
          heading: "Continuous Innovation",
          desc: "Modern technologies to drive business growth"
        }
      ]
    },
    vision: {
      title: "Our Vision",
      text: "To become a trusted global IT solutions partner by delivering innovative, secure, and scalable technology solutions that empower businesses to grow in the digital era."
    },

    contactCTA: {
      title: "Have an idea?",
      subtitle: "Let's talk.",
      description:
        "Visually attractive design from concept to final result. We create solutions that are bold and forward-looking.",
      button: "Free Consultation"
    }
  },

  ar: {
    hero: {
      title: "نبحث عن المستقبل",
      description:
        "من خدمات تقنية المعلومات والتطوير الرقمي إلى التصميم الإبداعي والتسويق عبر وسائل التواصل الاجتماعي، نساعد العلامات التجارية على الابتكار والتوسع والنجاح في العالم الرقمي. حلول تقنية ذكية وخدمات تحول رقمي مصممة لنمو أعمالك.",
      cta: "تواصل معنا "
    },

    servicesHighlight: [
      "قسم تقنية المعلومات",
      "تطوير الويب والتطبيقات",
      "التسويق الرقمي",
      "البرمجيات المخصصة"
    ],

    whoWeAre: {
      title: "من نحن",
      description:
        "تعد Jovera IT Services شركة رائدة في تقديم الحلول التقنية، حيث نوفر خدمات تقنية معلومات متكاملة، وتطوير البرمجيات، والتحول الرقمي، وحلول التسويق للشركات بمختلف أحجامها.",
      description2:
        "نركز بشكل كبير على الابتكار والموثوقية ورضا العملاء، ونعمل كشريك تقني طويل الأمد وليس مجرد مزود خدمة."
    },

    values: [
      {
        title: "تقديم حلول عالية الجودة",
        text: "حلول تقنية ورقمية عالية الجودة مصممة حسب احتياجات الأعمال"
      },
      {
        title: "ضمان الموثوقية",
        text: "الأمان وقابلية التوسع في كل مشروع"
      },
      {
        title: "الابتكار المستمر",
        text: "استخدام أحدث التقنيات لدفع نمو الأعمال"
      }
    ],

    whyChooseUs: {
      title: "لماذا تختارنا",
      description:
        "نمزج بين التكنولوجيا والإبداع والاستراتيجية لتقديم حلول تصنع فرقًا حقيقيًا.",
    stats: [{
        label: "المشاريع المنجزة",
        value: "100%"
      },
      {
        label: "رضا العملاء",
        value: "95%"
      },
      {
        label: "سنوات الخبرة",
        value: "5+"
      },
      {
        label: "الدعم المتاح",
        value: "24/7"
      }
],

   points: [
  { id: "01", title: "حل متكامل من مكان واحد", desc: "خدمات متكاملة في تقنية المعلومات، تطوير البرمجيات، والتسويق الرقمي تحت سقف واحد" },
  { id: "02", title: "فريق ذو خبرة", desc: "محترفون مهرة يتمتعون بسنوات من الخبرة في المجال" },
  { id: "03", title: "نهج مخصص", desc: "حلول مصممة خصيصًا لتلبية احتياجات عملك" },
  { id: "04", title: "آمن وقابل للتوسع", desc: "إجراءات أمنية قوية وبنية تقنية قابلة للتوسع" },
  { id: "05", title: "تواصل شفاف", desc: "تحديثات منتظمة وتواصل واضح طوال مراحل المشروع" },
  { id: "06", title: "دعم موثوق", desc: "دعم تقني متواصل لضمان تشغيل أنظمتك بسلاسة دون انقطاع" },
]

    },

    services: {
      webMobile: {
        title: "تطوير تطبيقات الويب والموبايل",
        description:
          "تطبيقات حديثة وسهلة الاستخدام لتجربة رقمية سلسة.",
        list: [
          "مواقع مخصصة",
          "متاجر إلكترونية",
          "تطبيقات ويب",
          "تطبيقات أندرويد و iOS",
          "تطبيقات متعددة المنصات",
          "تصميم UI/UX"
        ]
      },
      customSoftware: {
        title: "تطوير البرمجيات المخصصة",
        description:
          "حلول مصممة خصيصًا لتبسيط العمليات التجارية.",
        list: [
          "حلول مؤسسية",
          "أنظمة CRM و ERP",
          "أتمتة سير العمل",
          "برامج إدارة المخزون",
          "أنظمة الموارد البشرية",
          "تطبيقات SaaS"
        ]
      },
      infrastructure: {
        title: "البنية التحتية وحلول تقنية المعلومات",
        description:
          "إعداد ودعم تقني متكامل لعمليات آمنة.",
        list: [
          "إعداد تقنية المكتب",
          "حلول الشبكات",
          "الجدار الناري و VPN",
          "أنظمة المراقبة CCTV",
          "أنظمة الاتصالات",
          "الدعم التقني"
        ]
      },
      marketing: {
        title: "خدمات التسويق الرقمي",
        description:
          "استراتيجيات لبناء الحضور الرقمي وتوليد العملاء المحتملين.",
        list: [
          "تحسين محركات البحث (SEO)",
          "التسويق عبر وسائل التواصل الاجتماعي",
          "إعلانات Google و Meta",
          "التسويق عبر البريد الإلكتروني",
          "إدارة السمعة"
        ]
      }
    },

    process: {
      title: "آلية العمل",
      description:"كيف نعمل في هذا الجزء. هذه هي آلية عملنا.",
      steps: [
        {
          title: "التحليل والتخطيط",
          text: "فهم احتياجاتك وتحديد الاستراتيجية المناسبة."
        },
        {
          title: "التصميم والتطوير",
          text: "تصميم وبناء حلول رقمية فعالة."
        },
        {
          title: "الاختبار والإطلاق",
          text: "ضمان الجودة قبل الإطلاق السلس."
        },
        {
          title: "النمو والدعم",
          text: "تحسين مستمر ودعم متواصل."
        }
      ]
    },

   mission: {
      title: "مهمتنا",
      points: [
        {
          heading: "تقديم حلول عالية الجودة",
          desc: "لنصبح شريكًا موثوقًا عالميًا في حلول تقنية المعلومات من خلال تقديم حلول تقنية مبتكرة وآمنة وقابلة للتوسع تمكن الشركات من النمو في العصر الرقمي"
        },
        {
          heading: "ضمان الموثوقية",
          desc: "الأمن وقابلية التوسع في كل مشروع"
        },
        {
          heading: "بناء الشراكات",
          desc: "علاقات طويلة الأمد من خلال الثقة والشفافية"
        },
        {
          heading: "الابتكار المستمر",
          desc: "استخدام أحدث التقنيات لدفع نمو الأعمال"
        }
      ]
    },
    vision: {
      title: "رؤيتنا",
      text: "لنصبح شريكًا موثوقًا عالميًا في حلول تقنية المعلومات من خلال تقديم حلول تقنية مبتكرة وآمنة وقابلة للتوسع تمكن الشركات من النمو في العصر الرقمي."
    },

    contactCTA: {
      title: "لديك فكرة؟",
      subtitle: "دعنا نتحدث.",
      description:
        "تصميم جذاب بصريًا من الفكرة إلى النتيجة النهائية. نبتكر حلولًا جريئة ومواكبة للمستقبل.",
      button: "استشارة مجانية"
    }
  }
};

  
  
  
  
  
  
  
  
  
  
  
  
  
  const dummyImages = [
    img1,
    img2,
    img3,
    img4,
  ];

  const features = [
    { id: "01", title: "One-Stop Solution", desc: "Complete IT, software, and digital marketing services under one roof" },
    { id: "02", title: "Experienced Team", desc: "Skilled professionals with years of industry experience" },
    { id: "03", title: "Customized Approach", desc: "Tailored solutions designed specifically for your business needs" },
    { id: "04", title: "Secure & Scalable", desc: "Robust security measures and scalable architecture" },
    { id: "05", title: "Transparent Communication", desc: "Regular updates and clear communication throughout projects" },
    { id: "06", title: "Reliable Support", desc: "Always-on technical support to ensure your systems run smoothly without interruptions" },
  ];

  const stats = [
    { value: "100%", label: "Projects Completed" },
    { value: "95%", label: "Client Satisfaction" },
    { value: "5+", label: "Years Experience" },
    { value: "24/7", label: "Support Available" },
  ];
const web_services = [
    "Custom Websites",
    "E-commerce Solutions",
    "Web Applications",
    "Android & iOS Apps",
    "Cross-Platform Apps",
    "UI/UX Design"
  ];
  const t = content[lang] || content.en;
  const isArabic = lang !== "en";




  return (
<>
    <Helmet>
      <title>
        {lang === "en" ? "Home - Jovera IT" : "الصفحة الرئيسية - مجموعة جوفيرا"}
      </title>

      <meta
        name="description"
        content={
          lang === "en"
            ? "Jovera IT delivers innovative digital solutions, including web and mobile app development, IT consulting, cloud integration, and custom software for businesses in UAE and beyond."
            : "تقدم Jovera IT حلولًا رقمية مبتكرة، بما في ذلك تطوير مواقع الويب والتطبيقات، واستشارات تقنية المعلومات، ودمج السحابة، والبرمجيات المخصصة للشركات في الإمارات وخارجها."
        }
      />

      {/* Open Graph */}
      <meta
        property="og:title"
        content={lang === "en" ? "Home - Jovera IT" : "الصفحة الرئيسية - مجموعة جوفيرا"}
      />
      <meta
        property="og:description"
        content={
          lang === "en"
            ? "Jovera IT delivers innovative digital solutions, including web and mobile app development, IT consulting, cloud integration, and custom software for businesses in UAE and beyond."
            : "تقدم Jovera IT حلولًا رقمية مبتكرة، بما في ذلك تطوير مواقع الويب والتطبيقات، واستشارات تقنية المعلومات، ودمج السحابة، والبرمجيات المخصصة للشركات في الإمارات وخارجها."
        }
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.joveraits.ae/" />
      <meta property="og:image" content="%PUBLIC_URL%/logo.webp" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content={lang === "en" ? "Home - Jovera IT" : "الصفحة الرئيسية - مجموعة جوفيرا"}
      />
      <meta
        name="twitter:description"
        content={
          lang === "en"
            ? "Jovera IT delivers innovative digital solutions, including web and mobile app development, IT consulting, cloud integration, and custom software for businesses in UAE and beyond."
            : "تقدم Jovera IT حلولًا رقمية مبتكرة، بما في ذلك تطوير مواقع الويب والتطبيقات، واستشارات تقنية المعلومات، ودمج السحابة، والبرمجيات المخصصة للشركات في الإمارات وخارجها."
        }
      />
      <meta name="twitter:image" content="%PUBLIC_URL%/logo.webp" />

      {/* Favicon */}
      <link rel="icon" href="%PUBLIC_URL%/logo.webp" />
      <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo.webp" />
    </Helmet>

<main>

    <div className="bg-[#0B0B0B] text-white">

      {/* ================= HERO ================= */}
      <ScrollAnimation>
  <section className="container mx-auto px-4 pt-32 md:pt-24 lg:pt-32 max-w-7xl">
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

      {/* TEXT */}
      <div
        className={`h-full flex flex-col justify-center
        ${isArabic ? "lg:order-2 text-right items-end" : "lg:order-1 text-left items-start"}`}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 leading-tight">
          {t.hero.title.split(" ").slice(0, 2).join(" ")} <br />
          <span className="text-[#C99E18]">
            {t.hero.title.split(" ").slice(2).join(" ")}
          </span>
        </h1>

        <p className="text-gray-300 mb-8 text-sm md:text-base leading-relaxed">
          {t.hero.description}
        </p>

        <div className={`flex flex-wrap gap-4 ${isArabic ? "flex-row-reverse" : ""}`}>
          <PrimaryButton2
            link="/ContactUs"
            children={
              <span className={`flex items-center gap-2 ${isArabic ? "flex-row-reverse" : ""}`}>
                {t.hero.cta}
                <span>{isArabic ? "←" : "→"}</span>
              </span>
            }
          />
        </div>
      </div>

      {/* IMAGE */}
      <div
        className={`relative flex
        ${isArabic ? "lg:order-1 justify-start" : "lg:order-2 justify-end"}`}
      >
        <div className="relative w-full aspect-square">
          <img
            src={HeroImage}
            alt="Hero"
            className="w-full h-full object-cover rounded-lg"
            loading="lazy"
          />
        </div>
      </div>

    </div>
  </section>
</ScrollAnimation>


      {/* ================= FEATURES ================= */}
           <ScrollAnimation>
      <section className="px-6 md:px-20 py-20 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl w-full">

          {[
            { img: ITDepartment, title: t.servicesHighlight[0], link: "/IT" },
            { img: Laptop, title: t.servicesHighlight[1], link: "/DigitalDevelopment" },
            { img: DigitalMarketing, title: t.servicesHighlight[2], link: "/Marketing" },
            { img: CustomSoftware, title: t.servicesHighlight[3], link: "/Design" },
          ].map((card, idx) => (
            <Link to={card.link}>
            <div key={idx} className="bg-[#121212] border border-[#1F1F1F] rounded-xl 
                h-[220px] p-8 flex flex-col items-center text-center
                transition-colors duration-300 hover:bg-[rgb(174,144,52)]">
              <img src={card.img} alt={card.title} className="w-12 h-12 object-contain mt-4 mb-6" />
              <p className="font-semibold text-white">{card.title}</p>
            </div>
            </Link>
          ))}
        </div>
      </section>
</ScrollAnimation>




      {/* ================= WHO WE ARE ================= */}

<ScrollAnimation>
      <section className="container mx-auto px-4 max-w-7xl">
        <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center  ${isArabic ? "text-right" : "text-left"} `}>
          {/* LEFT DIV (Text) */}
          <div className={`h-full flex flex-col justify-center ${isArabic ? "order-2" : "order-1"}`}>
            <h2 className="text-3xl font-bold text-[#C99E18] mb-6">
              {t.whoWeAre.title}
            </h2>
            <p className="text-white font-medium max-w-3xl">
              {t.whoWeAre.description}
              <br /><br />
              {t.whoWeAre.description2}
            </p>
          </div>

          {/* RIGHT DIV (Image) */}
          <div className={`relative flex justify-center lg:justify-end ${isArabic ? "order-1" : "order-2"}`}>
            <div className="relative w-full aspect-square">
              <div className="rounded-lg">
                <img
                  src={WhoWeAre}
                  alt="Who We Are"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Quality / Reliability / Innovation */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {[
            { img: idea, title: t.values[0].title , desc: t.values[0].text },
            { img: certificate, title: t.values[1].title, desc: t.values[1].text },
            { img: operation, title: t.values[2].title, desc: t.values[2].text},
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-6">
              <img src={item.img} alt={item.title} className={`w-16 h-16 object-contain ${isArabic ? "order-2" : "order-1"}`} />
              <div className={`flex flex-col ${isArabic ? "order-1 text-right" : "text-left order-2"}`}>
                <h1 className="font-bold text-xl text-white mb-2">{item.title}</h1>
                <p className="text-white">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
</ScrollAnimation>
      {/* ================= WHY CHOOSE US ================= */}
<ScrollAnimation>
      <section className="bg-[1B1B1B] text-white px-6 py-6 md:px-16 lg:px-20 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Grid: Left Images + Right Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 ">
          
          {/* LEFT SIDE - Header + Images */}
          <div className={`${isArabic ? "order-2 text-right" : "text-left order-1"}`}>
            <h2 className="text-[#C99E18] text-3xl lg:text-4xl font-semibold mb-4">
              {t.whyChooseUs.title}
            </h2>
            <p className="text-gray-300 text-base lg:text-lg mb-8">
              {t.whyChooseUs.description}
            </p>
<div className="grid grid-cols-2 auto-rows-[120px] gap-3 mb-8">
  {/* Left Column: BIG (img1) */}
  <img
    src={img1}
    alt="Server room"
    className="row-span-2 w-full h-full object-cover rounded-lg"
  />
  
  {/* Right Column: SMALL (img2) */}
  <img
    src={img2}
    alt="Technology"
    className=" w-full h-full object-cover rounded-lg"
  />
  
  {/* Left Column: SMALL (img3) */}
  <img
    src={img3}
    alt="Team collaboration"
    className="row-span-2 w-full h-full object-cover rounded-lg"
  />
  
  {/* Right Column: BIG (img4) */}
  <img
    src={img4}
    alt="Digital workspace"
    className=" w-full h-full object-cover rounded-lg"
  />
</div>
               {/* BOTTOM - Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {t.whyChooseUs.stats.map((stat, idx) => (
            <div key={idx} className="bg-[#1A1A1A]  rounded-xl p-8 text-center">
              <p className="font-bold text-3xl text-white mb-2">{stat.value}</p>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
          </div>

          {/* RIGHT SIDE - Features Grid (3x2) */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-8 ${isArabic ? "order-1 text-right" : "text-left order-2"}`}>
            {t.whyChooseUs.points.map((feature) => (
              <div key={feature.id}>
                <div className="inline-block bg-white text-black font-bold text-lg px-4 py-2 rounded-sm rounded-br-lg mb-3">
                  {feature.id}
                </div>
                <h3 className="font-semibold text-white text-xl mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

     
      </div>
    </section>

</ScrollAnimation>
      {/* ================= Services ================= */}
  
<section className="bg-[#1B1B1B] text-white px-6 md:px-16 lg:px-20 py-20">

  <div className="max-w-7xl mx-auto space-y-16 lg:space-y-28">

    {/* ===== BLOCK 1 ===== */}
    <scrollAnimation>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      {/* Text */}
      <div className={`order-1 ${isArabic ? "text-right" : "text-left"}`}>
        <h2 className="text-[#C99E18] text-3xl lg:text-4xl font-semibold mb-4">
          {t.services.webMobile.title}
        </h2>
        <p className="text-gray-400 mb-8">
          {t.services.webMobile.description}
        </p>

        <ul className="space-y-2 text-gray-200">
          {t.services.webMobile.list.map((service, index) => (
            <li key={index}>
              {isArabic ? `${service} •` : `• ${service}`}
            </li>
          ))}
        </ul>
      </div>

      {/* Image */}
      <div className={`order-2 my-5 flex justify-center ${isArabic ? "lg:justify-end" : "lg:justify-start"}`}>
        <div className="w-52 sm:w-64 md:w-72 lg:w-full">
          <ServiceImage img={serviceImg1} />
        </div>
      </div>
    </div>
  </scrollAnimation>
    {/* ===== BLOCK 2 (REVERSED ON DESKTOP) ===== */}
    <scrollAnimation>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      {/* Text */}
      <div className={`order-1 lg:order-2 ${isArabic ? "text-right" : "text-left"}`}>
        <h2 className="text-[#C99E18] text-3xl lg:text-4xl font-semibold mb-4">
          {t.services.customSoftware.title}
        </h2>
        <p className="text-gray-400 mb-8">
          {t.services.customSoftware.description}
        </p>

        <ul className="space-y-2 text-gray-200">
          {t.services.customSoftware.list.map((service, index) => (
            <li key={index}>
              {isArabic ? `${service} •` : `• ${service}`}
            </li>
          ))}
        </ul>
      </div>

      {/* Image */}
      <div className={`order-2 lg:order-1 my-5 flex justify-center ${isArabic ? "lg:justify-end" : "lg:justify-start"}`}>
        <div className="w-52 sm:w-64 md:w-72 lg:w-full">
          <ServiceImage img={serviceImg2} />
        </div>
      </div>
    </div>
</scrollAnimation>
    {/* ===== BLOCK 3 ===== */}
    <scrollAnimation>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      {/* Text */}
      <div className={`order-1 ${isArabic ? "text-right" : "text-left"}`}>
        <h2 className="text-[#C99E18] text-3xl lg:text-4xl font-semibold mb-4">
          {t.services.infrastructure.title}
        </h2>
        <p className="text-gray-400 mb-8">
          {t.services.infrastructure.description}
        </p>

        <ul className="space-y-2 text-gray-200">
          {t.services.infrastructure.list.map((service, index) => (
            <li key={index}>
              {isArabic ? `${service} •` : `• ${service}`}
            </li>
          ))}
        </ul>
      </div>

      {/* Image */}
      <div className={`order-2 flex justify-center my-5 ${isArabic ? "lg:justify-end" : "lg:justify-start"}`}>
        <div className="w-52 sm:w-64 md:w-72 lg:w-full">
          <ServiceImage img={serviceImg3} />
        </div>
      </div>
    </div>
</scrollAnimation>
<scrollAnimation>
    {/* ===== BLOCK 4 (REVERSED ON DESKTOP) ===== */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      {/* Text */}
      <div className={`order-1 lg:order-2 ${isArabic ? "text-right" : "text-left"}`}>
        <h2 className="text-[#C99E18] text-3xl lg:text-4xl font-semibold mb-4">
          {t.services.marketing.title}
        </h2>
        <p className="text-gray-400 mb-8">
          {t.services.marketing.description}
        </p>

        <ul className="space-y-2 text-gray-200">
          {t.services.marketing.list.map((service, index) => (
            <li key={index}>
              {isArabic ? `${service} •` : `• ${service}`}
            </li>
          ))}
        </ul>
      </div>

      {/* Image */}
      <div className={`order-2 lg:order-1 flex justify-center my-5 ${isArabic ? "lg:justify-end" : "lg:justify-start"}`}>
        <div className="w-52 sm:w-64 md:w-72 lg:w-full">
          <ServiceImage img={serviceImg4} />
        </div>
      </div>
    </div>
</scrollAnimation>
  </div>
</section>
<scrollAnimation>
   {/* ================= Our Process ================= */}
<section className="bg-[1B1B1B] text-white py-16 px-8">
  <div className="flex flex-col lg:flex-row items-start justify-between max-w-7xl mx-auto gap-12">
    {/* Left Column - Process Information */}
    <div  className={` flex-1 ${
          isArabic ? "order-2 text-right" : "order-1 text-left"
        }`}>
      <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#C99E18' }}>
        {t.process.title}
      </h2>
      <p className="text-gray-300 mb-12">
        {t.process.description}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
        {/* Analysis & Planning */}
        <div>
          <h3 className="text-xl font-semibold mb-3">{t.process.steps[0].title}</h3>
          <p className="text-gray-400 text-sm">
            {t.process.steps[0].text}
          </p>
        </div>

        {/* Design & Development */}
        <div>
          <h3 className="text-xl font-semibold mb-3">{t.process.steps[1].title}</h3>
          <p className="text-gray-400 text-sm">
               {t.process.steps[1].text}
          </p>
        </div>

        {/* Testing & Launch */}
        <div>
          <h3 className="text-xl font-semibold mb-3">{t.process.steps[2].title}</h3>
          <p className="text-gray-400 text-sm">
             {t.process.steps[2].text}
          </p>
        </div>

        {/* Growth & Support */}
        <div>
          <h3 className="text-xl font-semibold mb-3">{t.process.steps[3].title}</h3>
          <p className="text-gray-400 text-sm">
            {t.process.steps[3].title}
          </p>
        </div>
      </div>
    </div>

    {/* Right Column - Image Collage */}
    <div className={`flex-1 flex justify-center lg:justify-end ${
          isArabic ? "order-1 " : "order-2 "
        }`}>
      <img 
        src={ourProcess} 
        alt="Our Process" 
        className="w-full max-w-lg object-contain"
      />
    </div>
  </div>
</section>
</scrollAnimation>
 {/* ================= Our Mission ================= */}
<scrollAnimation>
<section className="bg-neutral-900 text-white py-16 px-8">
  <div className="max-w-7xl mx-auto">

    {/* FLEX instead of GRID */}
    <div
      className={`
        flex flex-col lg:flex-row
        ${isArabic ? "lg:flex-row-reverse" : ""}
        gap-12 items-center
      `}
    >

      {/* TEXT */}
      <div
        className={`lg:w-1/2 ${isArabic ? "text-right" : "text-left"}`}
        dir={isArabic ? "rtl" : "ltr"}
      >
        {/* Our Mission */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">
            {t.mission.title}
          </h2>

          <div className="space-y-8">
            {t.mission.points.map((point, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-[#C99E18] flex items-center justify-center">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">
                    {point.heading}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {point.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Vision */}
        <div>
          <h2 className="text-3xl font-bold mb-6">
            {t.vision.title}
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            {t.vision.text}
          </p>
        </div>
      </div>

      {/* IMAGE */}
      <div className="lg:w-1/2 flex justify-center lg:justify-end">
        <img
          src={OurMission}
          alt="Our Mission"
          className="lg:w-1/2 h-[354px] max-w-md rounded-lg object-cover"
        />
      </div>

    </div>
  </div>
</section>


</scrollAnimation>

{/* Get in touch with us */}
<div dir={`${isArabic ? "rtl" : "ltr"}`}>
<ContactForm lang={lang}/>
</div>


{/* free consultaion */}


<section className="bg-[1B1B1B] py-16 px-8">
  <div className="max-w-7xl mx-auto">
    <div className="relative rounded-3xl overflow-hidden h-[350px] md:h-[420px]">
      
      {/* Background Image */}
      <img 
        src={freeConsultation} 
        alt="" 
        className="w-full h-full object-cover"
      />

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
          {t.contactCTA.title}
        </h2>
        <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          {t.contactCTA.subtitle}
        </h3>
        <p className="text-white text-sm md:text-base max-w-2xl mb-8">
           {t.contactCTA.description}
        </p>
        <a href="https://calendly.com/batif7003/jovera-it-consultation">
        <button className="bg-white text-black font-semibold px-8 py-3 rounded-full flex items-center gap-2 hover:bg-gray-100 transition-colors">
          <span><Calendar lang={lang}/></span>
          {t.contactCTA.button}
        </button>
        </a>
      </div>

    </div>
  </div>
</section>
      {/* ================= ADDITIONAL SECTIONS (Why Choose Us, Services, Process, Contact, CTA) ================= */}
      {/* Keeping your existing structure unchanged */}
      {/* ... rest of your code remains the same ... */}
    </div>
    </main>
    </>
  );
}

// ------------------ SERVICE BLOCK ------------------
function ServiceBlock({ title, items }) {
  return (
    <div className="bg-[#121212] border border-[#1F1F1F] rounded-xl p-6">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <ul className="space-y-2 text-gray-400 text-sm">
        {items.map((item, i) => (
          <li key={i}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}








