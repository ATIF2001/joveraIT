import { useState } from 'react';
import { FaWhatsapp } from "react-icons/fa";
import ContactForm from '../../components/contactForm';
import { PrimaryButton, PrimaryButton2 } from '../../components/button-primary';
import { SecondaryButton } from '../../components/button-primary';
import { ContactPill } from '../../components/contact-pill';
import LoanCalculator from "../../components/loan-calculator";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { Home, Briefcase, CreditCard } from "lucide-react";
import HeroImage from "../../assets/landing-pages/Financial-Services/Hero-img.png";
import ScrollAnimation from "../../components/scrollAnimation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

// importing Partner images
import adcb from "../../assets/partners/Adcb.png";
import adib from "../../assets/partners/ADIB.png";
import aldar from "../../assets/partners/Aldar.png";
import eithad from "../../assets/partners/eithad.png";
import emaar from "../../assets/partners/Emaar.png";
import emiratesislamic from "../../assets/partners/Emirates_Islamic.png";
import emiratesnbd from "../../assets/partners/emirates-nbd.png";
import emirates from "../../assets/partners/emirates.png";
import fab from "../../assets/partners/FAB.png";
import mashreq from "../../assets/partners/mashreq.png";



const partners = [
    adcb,
    adib,
    emiratesislamic,
    emiratesnbd,
    fab,
    mashreq
  ];


const FinanceLandingPage = ({lang}) => {
 
  


const isArabic = lang !== 'en';

const content = {
  
    en: {
    hero: {
      title: "Financial Services",
      description:
        "Our loan services offer a hassle-free and streamlined borrowing experience, providing you with the funds you need in a timely manner to meet your financial requirements.",
      primaryBtn: "Go Website",
      secondaryBtn: "Contact us"
    },

    services: {
      title: "Our Services",

      mortgage: {
        title: "Mortgage",
        items: [
          "New purchase",
          "Final payment",
          "Buyout for Mortgage loan",
          "Refinance your property with equity cash",
          "Plot and land purchase",
          "Under construction residential properties",
          "Mortgage against rental income",
          "Commercial properties"
        ]
      },

      businessFinance: {
        title: "Business Finance",
        items: [
          "Startup and SME Business Financing",
          "Working Capital Support",
          "Trade Finance Solutions",
          "Machinery and Equipment Financing",
          "Business Expansion Loan",
          "Invoice and Receivables Financing",
          "Short-term and Long-term Business Loans",
          "Business Loan Buyout and Refinancing"
        ]
      },

      personalLoan: {
        title: "Personal Loan",
        items: [
          "Salary Transfer Personal Loan",
          "Non-transfer rates",
          "Secure approval within days",
          "Minimum Salary Required AED 10,000",
          "Maximum flexibility with loans up to AED 5 million"
        ]
      }
    },

    calculator: {
      title: "Calculator",
      tabs: ["Mortgage", "Business Finance", "Personal Loan"],
      nationality: ["UAE National", "Resident"],
      profile: ["Employee", "Investor"],
      fields: {
        amount: "Amount",
        period: "Payment Period",
        interest: "Annual Interest Rates",
        month: "Month"
      },
      result: {
        monthlyPayment: "Monthly Payment",
        totalInterest: "Total Interest",
        totalAmount: "Total Amount"
      },
      actions: {
        apply: "Apply Now",
        consultation: "Get Free Consultation"
      }
    },

    partners: {
      title: "Our Partners"
    },

    success: {
      label: "OUR SUCCESS",
      title: "We have helped more than 700+ clients in the UAE",
      description:
                        "Building trust, innovation, and measurable results for our clients Delivering trust, innovation, and measurable results. Our clients' success is the true proof of our work.",

    },

    contact: {
      title: "Meet Jovera Group",
      fields: {
        name: "Full Name",
        email: "Email",
        phone: "Phone",
        service: "Service",
        message: "Message"
      },
      button: "Register Now"
    }
  },

  ar: {
    hero: {
      title: "الخدمات المالية",
      description:
        "تقدم خدمات القروض لدينا تجربة اقتراض سهلة وسلسة، مما يوفر لك التمويل الذي تحتاجه في الوقت المناسب لتلبية متطلباتك المالية.",
      primaryBtn: "اذهب إلى الموقع",
      secondaryBtn: "اتصل بنا"
    },

    services: {
      title: "خدماتنا",

      mortgage: {
        title: "التمويل العقاري",
        items: [
          "شراء جديد",
          "الدفعة النهائية",
          "تحويل قرض الرهن العقاري",
          "إعادة تمويل العقار مع سيولة نقدية",
          "شراء الأراضي والقطع",
          "العقارات السكنية قيد الإنشاء",
          "رهن مقابل دخل الإيجار",
          "العقارات التجارية"
        ]
      },

      businessFinance: {
        title: "تمويل الأعمال",
        items: [
          "تمويل الشركات الناشئة والمؤسسات الصغيرة والمتوسطة",
          "دعم رأس المال العامل",
          "حلول التمويل التجاري",
          "تمويل الآلات والمعدات",
          "قروض التوسع التجاري",
          "تمويل الفواتير والمستحقات",
          "قروض أعمال قصيرة وطويلة الأجل",
          "تحويل القروض وإعادة التمويل"
        ]
      },

      personalLoan: {
        title: "القروض الشخصية",
        items: [
          "قرض شخصي مع تحويل راتب",
          "معدلات بدون تحويل",
          "موافقة سريعة خلال أيام",
          "الحد الأدنى للراتب المطلوب 10,000 درهم",
          "مرونة عالية مع قروض تصل إلى 5 مليون درهم"
        ]
      }
    },

    calculator: {
      title: "الحاسبة",
      tabs: ["التمويل العقاري", "تمويل الأعمال", "القرض الشخصي"],
      nationality: ["مواطن إماراتي", "مقيم"],
      profile: ["موظف", "مستثمر"],
      fields: {
        amount: "المبلغ",
        period: "مدة السداد",
        interest: "معدل الفائدة السنوي",
        month: "شهر"
      },
      result: {
        monthlyPayment: "القسط الشهري",
        totalInterest: "إجمالي الفائدة",
        totalAmount: "إجمالي المبلغ"
      },
      actions: {
        apply: "قدّم الآن",
        consultation: "احصل على استشارة مجانية"
      }
    },

    partners: {
      title: "شركاؤنا"
    },

    success: {
      label: "نجاحنا",
      title: "لقد ساعدنا أكثر من 700 عميل في الإمارات",
      description:
        "نقدم الثقة والابتكار والنتائج القابلة للقياس. نجاح عملائنا هو الدليل الحقيقي على جودة عملنا."
    },

    contact: {
      title: "تواصل مع مجموعة جوفيرا",
      fields: {
        name: "الاسم الكامل",
        email: "البريد الإلكتروني",
        phone: "رقم الهاتف",
        service: "الخدمة",
        message: "الرسالة"
      },
      button: "سجل الآن"
    }
  }
};

const options = [
  { key: "Business Loan", value: { en: "Business Loan", ar: "قرض تجاري" } },
  { key: "Mortgage Loan", value: { en: "Mortgage Loan", ar: "قرض عقاري" } },
  { key: "Personal Loan", value: { en: "Personal Loan", ar: "قرض شخصي" } },
];





  const t = content[isArabic ? 'ar' : 'en'];

  return (
 
  <div className={`min-h-screen bg-black text-white ${isArabic ? 'rtl' : 'ltr'}`}>
      {/* Hero Section */}
      <ScrollAnimation>
      <section className="container mx-auto px-4 pt-12 md:pt-20 lg:pt-24 max-w-7xl">
       <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
  {/* LEFT DIV (Text) */}
  <div className={`h-full pt-[80px] ${isArabic ? 'order-2 text-right' : 'order-1'} `}>
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10 leading-tight">
      {t.hero.title}
    </h1>
    
    <p className="text-gray-300 mb-10 text-sm md:text-base leading-relaxed">
      {t.hero.description}
    </p>
   <div className={`flex flex-wrap gap-4  ${isArabic ? ' flex-row-reverse' : ''} `}>
          <PrimaryButton2 children={
        <span className={`flex items-center gap-2  ${isArabic ? 'flex-row-reverse' : ''}`}>
          {t.hero.primaryBtn}
          <span>{isArabic ? '←' : '→'}</span>
        </span>
      } link={"/UnderDevelopment"} />
          <SecondaryButton children={t.hero.secondaryBtn} onClick={() => {
  document.getElementById("contact")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}}>

</SecondaryButton>
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
{/* Services Section */}
<section className="container mx-auto px-4 pb-16">
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#D7AA47]">
    {t.services.title}
  </h2>

  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

    {[
      {
        icon: <Home className="w-7 h-7 text-white" />,
        title: t.services.mortgage.title,
        items: t.services.mortgage.items,
      },
      {
        icon: <Briefcase className="w-7 h-7 text-white" />,
        title: t.services.businessFinance.title,
        items: t.services.businessFinance.items,
      },
      {
        icon: <CreditCard className="w-7 h-7 text-white" />,
        title: t.services.personalLoan.title,
        items: t.services.personalLoan.items,
      },
    ].map((service, idx) => (
      <div
        key={idx}
        className="bg-gradient-to-b from-[#1c1c1c] to-[#111] p-6 p-6 rounded-xl hover:scale-105 transition duration-300"
      >
        {/* Icon + Title */}
        <div
          className={`flex items-center gap-3 mb-4 ${
            isArabic ? "flex-row-reverse text-right" : ""
          }`}
        >
          {service.icon}
          <h3 className="text-lg font-semibold">{service.title}</h3>
        </div>

        {/* Bullet points */}
        <div className={`${isArabic ? "mr-10 text-right" : "ml-10 text-left"}`}>
          <ul className="space-y-2 text-gray-300 text-sm">
            {service.items.map((item, index) => (
              <li
                key={index}
                className={`flex gap-2 ${
                  isArabic ? "flex-row-reverse" : ""
                }`}
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
<ScrollAnimation>
  {/* Calculator */}
<section>
 <h2 className="text-center text-3xl font-bold text-[#D7AA47]">
        Calculator
  </h2>


<LoanCalculator lang={lang}/>
</section>

  {/* Our Partners */}
      <section className="py-16 px-4 ">
  <div className="max-w-7xl mx-auto">

 <h2 className="text-center text-3xl font-bold text-[#D7AA47] mb-20">
  {lang === "en" ? "Our Partners" : "شركاؤنا"}
</h2>


    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 3000,                 
        reverseDirection: true,     
        disableOnInteraction: false
      }}
      speed={900}                    
      loop={true}
      slidesPerView={2.5}
      spaceBetween={30}
      breakpoints={{
        640: { slidesPerView: 3.2 },
        768: { slidesPerView: 4.2 },
        1024: { slidesPerView: 5.2 },
        1280: { slidesPerView: 6.2 },
      }}
    >
      {partners.map((partner, index) => (
        <SwiperSlide key={index}>
          <div className="flex items-center justify-center">

            {/* FIXED SIZE IMAGE WRAPPER */}
            <div className="w-32 h-20 flex items-center justify-center">
              <img
                src={partner}
                alt="partner"
                className="max-w-full max-h-full object-contain"
                loading="lazy"
              />
            </div>

          </div>
        </SwiperSlide>
      ))}
    </Swiper>

  </div>
</section>
</ScrollAnimation>


      {/* Contact Form & Success Section */}
      <section id=" contact-form" className="container mx-auto px-4 py-16 sm:max-w-7xl">
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
  );
};

export default FinanceLandingPage;