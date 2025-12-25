// Scroll Animation
import { useInView } from "react-intersection-observer";
import Finance from "../assets/portfolio-main/Financial-services.jpg";
import RealEstate from "../assets/portfolio-main/real-estate.png";
import IT from "../assets/portfolio-main/IT.jpg";
import Travel from "../assets/portfolio-main/travel.jpg";
import Bussiness from "../assets/portfolio-main/business-service.jpg";
import Accounting from "../assets/portfolio-main/accounting-auditing.png";

// Importing Logos
import Financelogo from "../assets/portfolio-logos/financial-services.png";
import RealEstatelogo from "../assets/portfolio-logos/real-estate.png";
import Itlogo from "../assets/portfolio-logos/IT.png";
import Tourismlogo from "../assets/portfolio-logos/tourism.png";
import Businesslogo from "../assets/portfolio-logos/services-businessman.png";
import Accountancylogo from "../assets/portfolio-logos/accountancy.png";

import ScrollAnimation from "../components/scrollAnimation";
import { PrimaryButton2, SecondaryButton } from "../components/button-primary";

const servicesData = [
  {
    id: 1,
    logo: Financelogo,
    title_en: "Quick and Easy Loans for Your Financial Needs.",
    title_ar: "قروض سريعة وسهلة لتلبية احتياجاتك المالية.",
    description_en:
      "Our loan services offer a hassle-free and streamlined borrowing experience, providing you with the funds you need in a timely manner to meet your financial requirements.",
    description_ar:
      "توفر خدمات القروض لدينا تجربة سهلة وسلسة للحصول على الأموال التي تحتاجها في الوقت المناسب لتلبية متطلباتك المالية.",
    image: Finance,
    cta_en: "Read more",
    cta_ar: "اقرأ المزيد",
    website: "/Finance",
  },
  {
    id: 2,
    logo: RealEstatelogo,
    title_en:
      "Making a difference in UAE real estate world. Exceptional solutions adding real value to clients.",
    title_ar: "إحداث فرق في عالم العقارات في الإمارات. حلول استثنائية تضيف قيمة حقيقية للعملاء.",
    description_en:
      "Our vision is to be the pioneers in UAE real estate industry, innovating and delivering exceptional solutions that add real value to our clients, making us the first choice in the market.",
    description_ar:
      "رؤيتنا أن نكون رواد صناعة العقارات في الإمارات، من خلال ابتكار وتقديم حلول استثنائية تضيف قيمة حقيقية لعملائنا، مما يجعلنا الخيار الأول في السوق.",
    image: RealEstate,
    cta_en: "Read more",
    cta_ar: "اقرأ المزيد",
    website: "/RealEstate",
  },
  {
    id: 3,
    logo: Itlogo,
    title_en:
      "Empowering businesses through smart technology. Driving digital transformation with tailored IT solutions.",
    title_ar:
      "تمكين الأعمال من خلال التكنولوجيا الذكية. قيادة التحول الرقمي من خلال حلول تكنولوجيا المعلومات المصممة خصيصًا.",
    description_en:
      "Our mission is to drive digital transformation by delivering tailored IT solutions that boost efficiency, innovation, and growth — helping our clients stay ahead in today’s competitive market.",
    description_ar:
      "مهمتنا هي قيادة التحول الرقمي من خلال تقديم حلول تكنولوجيا معلومات مصممة خصيصًا تزيد من الكفاءة والابتكار والنمو — مما يساعد عملائنا على البقاء في الصدارة في السوق التنافسي.",
    image: IT,
    cta_en: "Read more",
    cta_ar: "اقرأ المزيد",
    website: "/IT",
  },
  {
    id: 5,
    logo: Tourismlogo,
    title_en: "Design your journey yourself and discover adventure.",
    title_ar: "صمم رحلتك بنفسك واكتشف المغامرة.",
    description_en:
      "Jovera Tourism – Explore the world with comfort and style. From dream vacations to hassle-free visa services, we make every journey unforgettable.",
    description_ar:
      "جوفيرا للسياحة – اكتشف العالم براحة وأناقة. من العطلات الحلم إلى خدمات التأشيرات السهلة، نجعل كل رحلة لا تُنسى.",
    image: Travel,
    cta_en: "Read more",
    cta_ar: "اقرأ المزيد",
    website: "/Tourism",
  },
  {
    id: 6,
    logo: Businesslogo,
    title_en: "Leading company providing exceptional services for businessmen.",
    title_ar: "شركة رائدة تقدم خدمات استثنائية لرجال الأعمال.",
    description_en:
      "The leading partner for businessmen by providing innovative solutions and professional services that support their success and enhance their business growth locally and globally.",
    description_ar:
      "الشريك الرائد لرجال الأعمال من خلال تقديم حلول مبتكرة وخدمات احترافية تدعم نجاحهم وتعزز نمو أعمالهم محليًا وعالميًا.",
    image: Bussiness,
    cta_en: "Read more",
    cta_ar: "اقرأ المزيد",
    website: "/Business",
  },
  {
    id: 7,
    logo: Accountancylogo,
    title_en: "Your financial statements, our priority.",
    title_ar: "القوائم المالية الخاصة بك، هي أولويتنا.",
    description_en:
      "To offer precise, reliable, and innovative accounting and auditing solutions that empower our clients to achieve their financial goals and maintain compliance with regulatory standards.",
    description_ar:
      "تقديم حلول محاسبية وتدقيقية دقيقة وموثوقة ومبتكرة تمكن عملائنا من تحقيق أهدافهم المالية والالتزام بالمعايير التنظيمية.",
    image: Accounting,
    cta_en: "Read more",
    cta_ar: "اقرأ المزيد",
    website: "/Accounting",
  },
];

export default function ServicesSection({ lang }) {
  return (
    <section className="py-32 px-4 sm:px-10 bg-black text-white">

      {/* Intro Section */}
      <ScrollAnimation
        className={`mb-16 w-full sm:w-1/2 ${
    lang === "en" ? "text-left sm:mr-auto" : "text-right sm:ml-auto"
  } transition-all duration-700 ease-out opacity-100 translate-y-0`}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          {lang === "en" ? "OUR PORTFOLIO" : "خدماتنا"}
        </h2>

        <ul
          role="list"
          className={`list-disc ${lang === "en" ? "pl-5" : "pr-5"}`}
          dir={lang === "en" ? "ltr" : "rtl"}
        >
          <li className="mb-3 text-gray-300">
            {lang === "en"
              ? "With innovation at our core, Jovera Group has built a dynamic network of specialized entities across diverse sectors — Financial Services (Mortgage & Business Loans), Real Estate, IT Solutions E-Marketing, Businessmen Services, Tourism, And ( Accounting & Auditing )."
              : "مع الابتكار في جوهرنا، قامت مجموعة جوفيرا ببناء شبكة ديناميكية من الكيانات المتخصصة عبر قطاعات متنوعة — الخدمات المالية (الرهون والقروض التجارية)، العقارات، حلول تكنولوجيا المعلومات، التسويق الإلكتروني، خدمات رجال الأعمال، السياحة، و (المحاسبة والتدقيق)."}
          </li>
          <li className="text-gray-300">
            {lang === "en"
              ? "We continue to expand our reach and evolve with market trends, driving growth and excellence across every field we serve."
              : "نواصل توسيع نطاقنا والتطور مع اتجاهات السوق، مما يدفع النمو والتميز في كل مجال نخدمه."}
          </li>
        </ul>
      </ScrollAnimation>

      {/* Services List */}
      <div className="max-w-7xl mx-auto flex flex-col gap-8 sm:gap-12">
        {servicesData.map((service, index) => (
          <ScrollAnimation
            key={service.id}
            className={`flex flex-col md:flex-row items-center gap-4 sm:gap-8 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="md:w-1/2 w-full h-48 sm:h-64 md:h-80 overflow-hidden rounded-xl shadow-lg">
              <img
                src={service.image}
                alt={service.title_en}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* Content */}
            <div className={`md:w-1/2 w-full flex flex-col gap-3 sm:gap-4 ${lang === "en" ? "text-left" : "text-right"}`}>
              <img
                src={service.logo}
                alt={service.title_en}
                className="w-32 sm:w-44 md:w-52 mx-auto md:mx-0"
                loading="lazy"
              />
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold">
                {lang === "en" ? service.title_en : service.title_ar}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base">
                {lang === "en" ? service.description_en : service.description_ar}
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-4">
                <PrimaryButton2
                  children={lang === "en" ? service.cta_en : service.cta_ar}
                  link={service.website}
                />
                <SecondaryButton
                  children={lang === "en" ? "Go Website" : "اذهب إلى الموقع"}
                  link={"/UnderDevelopment"}
                />
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </section>
  );
}
