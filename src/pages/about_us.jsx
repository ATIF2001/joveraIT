import ramy from "../assets/about-us/ramy.png";
import background from "../assets/about-us/bg.png";
import { Helmet } from "react-helmet";
import fady from "../assets/about-us/fady.png";
import backgroundfady from "../assets/about-us/bg-2.png";

import righttumb from "../assets/about-us/right-tumb.png";
import lefttumb from "../assets/about-us/left-tumb.png";

import { Eye, Target, Hand } from 'lucide-react';

const AboutUs = ({lang}) => {
   const cards = [
  {
    icon: Hand,
    title: lang === "en" ? "Overview" : "نظرة عامة",
    description:
      lang === "en"
        ? `Jovera Group established in 2013 in the UAE, it swiftly became a key player in real estate and financial services, tourism, advertisement, and accountancy, prioritizing excellence and innovation. Offering a comprehensive suite of services, the company has forged strong client and partner relationships. Guided by integrity and a customer-centric approach, Jovera Group's seasoned professionals navigate the complexities of sectors, providing informed advice. Since 2013, the company has experienced continuous growth, marked by innovation and an unwavering commitment to excellence, solidifying its prominent position in the UAE.`
        : `تأسست مجموعة جوفيرا في عام 2013 في دولة الإمارات العربية المتحدة، وسرعان ما أصبحت لاعبًا رئيسيًا في مجالات العقارات والخدمات المالية والسياحة والإعلان والمحاسبة، مع إعطاء الأولوية للتميز والابتكار. من خلال تقديم مجموعة شاملة من الخدمات، نجحت الشركة في بناء علاقات قوية مع العملاء والشركاء. وبفضل النزاهة ونهج يركز على العملاء، يعمل فريق جوفيرا من الخبراء المحترفين على التعامل مع تعقيدات القطاعات المختلفة وتقديم استشارات مدروسة. ومنذ عام 2013، شهدت الشركة نموًا مستمرًا مدفوعًا بالابتكار والالتزام الراسخ بالتميز، مما عزز مكانتها البارزة في دولة الإمارات.`
  },
  {
    icon: Target,
    title: lang === "en" ? "Mission Statement" : "رسالتنا",
    description:
      lang === "en"
        ? `Our mission is to provide exceptional financial services to our clients and help them achieve their goals. We believe that everyone deserves access to affordable and reliable financial services, and we are committed to making that a reality for our clients. We offer a range of services to meet the unique financial needs of our clients, including real estate, mortgages, business banking, personal loans, tourism, advertisement, and accountancy.`
        : `رسالتنا هي تقديم خدمات مالية استثنائية لعملائنا ومساعدتهم على تحقيق أهدافهم. نحن نؤمن بأن الجميع يستحق الوصول إلى خدمات مالية موثوقة وبأسعار مناسبة، ونعمل جاهدين على تحويل ذلك إلى واقع لعملائنا. نقدم مجموعة متنوعة من الخدمات التي تلبي الاحتياجات المالية الفريدة لعملائنا، بما في ذلك العقارات، والتمويل العقاري، والخدمات المصرفية للأعمال، والقروض الشخصية، والسياحة، والإعلان، والمحاسبة.`
  },
  {
    icon: Eye,
    title: lang === "en" ? "Vision Statement" : "رؤيتنا",
    description:
      lang === "en"
        ? `Our vision is to be the number one trusted and leading company in real estate, banking, tourism, advertisement, and accountancy services. We think in the best interest of our clients first by providing solutions best suited to them. We aim to build long-term relationships through trust, professionalism, and exceptional customer service, while empowering our clients with the tools and resources they need to achieve their goals.`
        : `رؤيتنا هي أن نكون الشركة الأولى والأكثر ثقة وريادة في مجالات العقارات والخدمات المصرفية والسياحة والإعلان والمحاسبة. نضع مصلحة عملائنا في المقام الأول من خلال تقديم حلول تناسب احتياجاتهم بشكل مثالي. نسعى لبناء علاقات طويلة الأمد قائمة على الثقة والاحترافية وخدمة العملاء المتميزة، وتمكين عملائنا بالأدوات والموارد التي تساعدهم على تحقيق أهدافهم.`
  }
];

  return (
     <div className="">
      <Helmet>
        <title>About Us - Jovera Group | Real Estate & Financial Services</title>
        <meta
          name="description"
          content="Learn about Jovera Group, established in 2013 in the UAE, providing exceptional services in real estate, financial services, tourism, advertisement, and accountancy. Our mission, vision, and commitment to excellence guide every client interaction."
        />
        {/* Optional: Open Graph for social media sharing */}
        <meta property="og:title" content="About Us - Jovera Group" />
        <meta
          property="og:description"
          content="Discover Jovera Group's journey since 2013, offering innovative solutions in real estate, finance, tourism, advertisement, and accountancy, with integrity and excellence."
        />
        <meta property="og:type" content="website" />
        {/* <meta property="og:image" content="/path-to-your-og-image.jpg" /> */}
        <meta property="og:url" content="https://www.jovera.ae/about-us" />
      </Helmet>


      <main>
    <div className="relative bg-black text-white min-h-screen overflow-hidden flex items-center justify-center pt-32 ">

     {/* Top Right Thumb */}
<img
  src={righttumb}
  alt=""
  className="absolute top-0 right-0 w-1/2 sm:w-1/2 max-w-[50%] opacity-80 pointer-events-none z-0"
/>

{/* Bottom Left Thumb */}
<img
  src={lefttumb}
  alt=""
  className="absolute bottom-0 left-0 w-1/2 sm:w-1/2 max-w-[50%] opacity-80 pointer-events-none z-0"
/>


    <div className="relative z-10 flex flex-col items-center text-center gap-12 w-full max-w-5xl">


  {/* CEO Message */}
<div className="flex justify-center items-center bg-black px-4 py-10 sm:py-20">
  {/* Tilted Card */}
  <div className="relative max-w-7xl w-full text-white rounded-[28px] px-6 md:px-16 py-20 md:py-28 transform overflow-visible">

    {/* Background - Golden Transparent */}
    <div className="absolute inset-0 rounded-[28px] bg-[#D7AA47]/10 -z-10"></div>

    {/* Content */}
    <div className="relative transform flex flex-col md:flex-row items-center">

      {/* IMAGE */}
      <div className="relative md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 md:-translate-x-1/2 mb-10 md:mb-0">
        <img
          src={ramy}
          alt="CEO"
          className="h-[260px] sm:h-[320px] md:h-[500px] object-contain mx-auto"
           loading="lazy"
        />
      </div>

      {/* TEXT */}
      <div className={`w-full md:w-[65%] md:ml-auto ${lang ==="en" ? "text-left":"text-right"}  px-2 sm:px-6 md:px-10`}>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
          {lang === "en" ? "CEO Welcome Message" : "رسالة ترحيب المدير التنفيذي"}
        </h1>

        <p className="text-sm sm:text-base md:text-lg leading-loose mb-4">
          {lang === "en"
            ? "As the CEO of Jovera Group, I'm thrilled to share the success of our journey in the UAE's real estate and financial, tourism, advertisement and accountancy sector. Our commitment to excellence and innovation has been the driving force behind our remarkable growth. We understand that our success is intertwined with that of our clients and partners, and we've built a foundation rooted in dedication and expertise. In the ever-changing landscapes of real estate and finance, we pride ourselves on being a reliable, innovative, and integrity-driven beacon. Our professional team brings experience and fresh perspectives to provide tailored solutions that truly make a difference. Looking ahead, we are excited about the opportunities that await us. Our commitment is to enhance services, expand reach, and foster even stronger relationships with all of you."
            : "بصفتي الرئيس التنفيذي لمجموعة جوفيرا، يسعدني أن أشارككم نجاح مسيرتنا في قطاع العقارات في دولة الإمارات العربية المتحدة، وقطاعات التمويل والسياحة والإعلان والمحاسبة. لقد كان التزامنا بالتميز والابتكار القوة الدافعة وراء نمونا الملحوظ، وندرك أن نجاحنا مرتبط بنجاح عملائنا وشركائنا، وقد بنينا أساسًا متينًا قائمًا على التفاني والخبرة. في ظل التغيرات المستمرة في قطاعي العقارات والتمويل، نفخر بكوننا منارة موثوقة ومبتكرة وقائمة على النزاهة، ويمتلك فريقنا المحترف الخبرة والرؤى الجديدة لتقديم حلول مصممة خصيصًا تُحدث فرقًا حقيقيًا. نتطلع بحماس إلى الفرص التي تنتظرنا، ونلتزم بتحسين خدماتنا، وتوسيع نطاق وصولنا، وتعزيز علاقاتنا معكم جميعًا"
          }
        </p>
      </div>

    </div>
  </div>
</div>

{/* Director / MD Message */}
<div className="flex justify-center items-center bg-black px-4 pb-10 sm:pb-20">
  {/* Tilted Card */}
  <div className="relative max-w-7xl w-full text-white px-6 md:px-16 py-20 md:py-28 transform overflow-visible">

    {/* Background - Golden Transparent */}
    <div className="absolute inset-0 rounded-[28px] bg-[#D7AA47]/10 -z-10"></div>

    {/* Content */}
    <div className="relative transform flex flex-col md:flex-row items-center">

      {/* IMAGE */}
      <div className="relative md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2 md:translate-x-1/2 mb-10 md:mb-0">
        <img
          src={fady}
          alt="MD"
          className="h-[260px] sm:h-[320px] md:h-[500px] object-contain mx-auto"
          loading="lazy"
        />
      </div>

      {/* TEXT */}
      <div className={`w-full md:w-[65%] md:mr-auto ${lang ==="en" ? "text-left":"text-right"}  px-2 sm:px-6 md:px-10`}>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
          {lang === "en" ? "Managing Director Welcome Message" : "رسالة ترحيب المدير العام"}
        </h1>

        <p className="text-sm sm:text-base md:text-lg leading-loose mb-4">
          {lang === "en"
            ? "As the Managing Director of Jovera Group, I am privileged to lead a team dedicated to excellence in real estate and financial, tourism, advertisement, and accountancy services. Every interaction is an opportunity for positive impact, guided by our commitment to integrity and innovation. Our team, a close-knit family, works tirelessly to provide tailored solutions, foster strong relationships, and create lasting value. Navigating the dynamic landscapes of real estate and finance, we remain confident in overcoming challenges and seizing opportunities."
            : "بصفتي المدير العام لمجموعة جوفيرا، أتشرف بقيادة فريق ملتزم بالتميز في خدمات العقارات والخدمات المالية والسياحة والإعلان والمحاسبة. كل تفاعل يمثل فرصة لإحداث تأثير إيجابي، مسترشدين بالتزامنا بالنزاهة والابتكار. فريقنا، الذي يُشكل عائلة مترابطة، يعمل بلا كلل لتقديم حلول مصممة خصيصًا، وتعزيز علاقات متينة، وخلق قيمة مستدامة. في خضمّ المشهد المتغير باستمرار لقطاعي العقارات والتمويل، نبقى على ثقة تامة بقدرتنا على تجاوز التحديات واغتنام الفرص"
          }
        </p>
      </div>

    </div>
  </div>
</div>

</div>


    </div>
     <div className=" bg-black px-4 sm:pt-20 pb-10" dir={lang === "en" ? "ltr" : "rtl"}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {cards.map((card, index) => (
          <div
  key={index}
  className="bg-[#1B1B1B] border border-yellow-600/30 rounded-lg px-8 py-12 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-900/20"
>
  <div className="flex flex-col items-center mb-6">
    <div className="w-20 h-20 rounded-full border-2 border-[#D7AA47] flex items-center justify-center mb-4 hover:border-yellow-500 transition-colors">
      <card.icon className="w-8 h-8 text-[#D7AA47]" strokeWidth={1.5} />
    </div>
    <h2 className="text-2xl font-bold text-[#D7AA47] text-center">
      {card.title}
    </h2>
  </div>
  <p className="text-gray-300 leading-relaxed text-center text-sm">
    {card.description}
  </p>
</div>

          ))}
        </div>
      </div>
    </div>
    </main>
   </div>
  );
};

export default AboutUs;
