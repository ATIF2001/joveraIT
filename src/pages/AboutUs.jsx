import { Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";


import manager from "../assets/kamal-badri.webp";
import mobileDev from "../assets/about-us/kashaf-1.jpg";
import frontend from "../assets/about-us/atif.jpeg";
import backend from "../assets/about-us/abdullah.png";
import fullstack from "../assets/about-us/naveed.png";
import uiux from "../assets/about-us/yousuf-1.jpg";
import graphic from "../assets/about-us/rafeel.jpeg";
import {
  Users,
  Heart,
  TrendingUp,
  Smile,
  Flag,
  Zap,
} from "lucide-react";






import aboutus from "../assets/about-us/aboutUS1.jpg";
import supportImg from "../assets/about-us/aboutUs2.jpg";
import { useState } from "react";





const AboutUs = ({ lang }) => {
 
const [openIndex, setOpenIndex] = useState(1);
const content = {
  en: {
    section1: {
      subtitle: "We've helped hundreds of companies",
      title: "We're only just getting started on our journey",
      stats: [
        { value: "400+", label: "Projects completed" },
        { value: "600%", label: "Return on investment" },
        { value: "10k", label: "Global downloads" },
        { value: "200+", label: "5-star reviews" },
      ],
    },
    section2: {
      title: "Meet our incredible team members.",
      description:
        "Join a team that values growth, innovation, and impact.",
      button: "Join Our Team",
      // members: [
      //   {
      //     name: "Ramy Gerguis",
      //     role: "CEO of Jovera IT",
      //     image: ceo,
      //   },
      //   {
      //     name: "Fady Gerguis",
      //     role: "Managing Director",
      //     image: md,
      //   },
      //   {
      //     name: "Kamal Uddin",
      //     role: "Project Manager & Product owner",
      //     image: manager,
      //   },
      //   {
      //     name: "Mahmoud Ghanem",
      //     role: "Business Analysis & User Experience Design",
      //     image: uiux,
      //   },
      //   {
      //     name: "Naveed Aslam",
      //     role: "Full Stack Developer",
      //     image: fullstack,
      //   },
      //   {
      //     name: "Abdullah",
      //     role: "Back-end Developer",
      //     image: backend,
      //   },
      //   {
      //     name: "Atef",
      //     role: "Front-end Developer",
      //     image: frontend,
      //   },
      //   {
      //     name: "Kashif Hameed",
      //     role: "Mobile Developer",
      //     image: mobileDev,
      //   },
      // ],
      members: [
  {
    name: "Kamal Uddin",
    role: "Project Manager & Product Owner",
    image: manager,
    isLead: true,
    linkedin: "https://www.linkedin.com/in/kamal-uddin-shemul/" // 👈 mark as top card
  },
  {
    name: "Mahmoud Ghanem",
    role: "Business Analysis & User Experience Design",
    image: uiux,
    linkedin: "https://www.linkedin.com/in/mahmoudghanem2/"
  },
  {
    name: "Naveed Aslam",
    role: "Full Stack Developer",
    image: fullstack,
    linkedin: "https://www.linkedin.com/in/naveed-aslam-559166196/"
  },
  {
    name: "Abdullah",
    role: "Back-end Developer",
    image: backend,
    linkedin: "https://www.linkedin.com/in/abdullah-shahorakzai/"
  },
  {
    name: "Atif",
    role: "Front-end Developer",
    image: frontend,
    linkedin: "https://www.linkedin.com/in/muhammad-atif-ab34031a5/"
  },
  {
    name: "Kashif Hameed",
    role: "Mobile Developer",
    image: mobileDev,
    linkedin: "https://www.linkedin.com/in/kashufhameed/"
  },
  {
    name: "Rashifal",
    role: "Graphic Designer",
    image: graphic, // replace with real image later
    linkedin: "#"
  },
],

    },
    section3: {
  title: "Relax, we’ve got your IT needs covered!",
  description:
    "At Jovera, we simplify technology so you can focus on growing your business. From digital development to IT solutions, we’re always here to help.",
  faqs: [
    {
      q: "What services does Jovera IT & Digital Development offer?",
      a: "We provide a full range of IT and digital services, including web and mobile app development, CRM solutions, e-commerce platforms, cloud integration, and IT consulting tailored to your business needs.",
    },
    {
      q: "How long does it take to complete a project?",
      a: "Project timelines vary depending on complexity, but we work closely with clients to provide clear milestones and ensure timely delivery without compromising quality.",
    },
    {
      q: "Can you integrate our existing systems with new software?",
      a: "Absolutely! Our team specializes in system integration, ensuring your existing tools and platforms work seamlessly with any new solutions we develop.",
    },
    {
      q: "Do you offer ongoing support after project completion?",
      a: "Yes, we provide ongoing technical support, maintenance, and updates to make sure your systems stay secure and up-to-date long after launch.",
    }

  ],
}
,
    section4: {
  badge: "Our Values",
  title: "How We Work at Jovera IT",
  subtitle:
    "Our shared values guide us as one team and ensure we deliver excellence to every client.",
  values: [
    {
      icon: Users,
      title: "Care About Our Team",
      text:
        "We understand what matters to our team and provide the support they need to excel, innovate, and grow together.",
    },
    {
      icon: Heart,
      title: "Collaborate with Integrity",
      text:
        "We foster an open, honest, and respectful environment. We value teamwork and always aim to support one another.",
    },
    {
      icon: TrendingUp,
      title: "Pride in Our Work",
      text:
        "Quality and integrity guide everything we do. We deliver solutions we’re proud of, every single time.",
    },
    {
      icon: Smile,
      title: "Focus on Client Success",
      text:
        "We deeply understand our clients’ needs, both stated and unstated, and strive to make their projects a complete success.",
    },
    {
      icon: Flag,
      title: "Challenge the Impossible",
      text:
        "We embrace tough problems and unknowns with energy and curiosity. We ask 'Why?' and 'Why not?' to innovate fearlessly.",
    },
    {
      icon: Zap,
      title: "Attention to Detail",
      text:
        "We believe excellence lies in the details. Every feature, design, and line of code matters to us.",
    },
  ],
},
  },
  ar: {
    section1: {
      subtitle: "لقد ساعدنا مئات الشركات",
      title: "نحن في بداية رحلتنا فقط",
      stats: [
        { value: "400+", label: "مشروع مكتمل" },
        { value: "600%", label: "عائد على الاستثمار" },
        { value: "10k", label: "تنزيلات عالمية" },
        { value: "200+", label: "تقييمات 5 نجوم" },
      ],
    },
    section2: {
      title: "تعرّفوا على أعضاء فريقنا المميزين",
      description:
        "انضم إلى فريق يقدّر النمو والابتكار وصناعة الأثر.",
      button: "انضم إلى فريقنا",
     members: [
  {
    name: "كمال الدين",
    role: "مدير المشروع ومالك المنتج",
    image: manager,
    isLead: true,
    linkedin: "https://www.linkedin.com/in/kamal-uddin-shemul/"
  },
  {
    name: "محمود غانم",
    role: "تحليل الأعمال وتصميم تجربة المستخدم",
    image: uiux,
    linkedin: "https://www.linkedin.com/in/mahmoudghanem2/"
  },
  {
    name: "نويد أسلم",
    role: "مطور متكامل (Full Stack)",
    image: fullstack,
    linkedin: "https://www.linkedin.com/in/naveed-aslam-559166196/"
  },
  {
    name: "عبدالله",
    role: "مطور الواجهة الخلفية",
    image: backend,
    linkedin: "https://www.linkedin.com/in/abdullah-shahorakzai/"
  },
  {
    name: "عاطف",
    role: "مطور الواجهة الأمامية",
    image: frontend,
    linkedin: "https://www.linkedin.com/in/muhammad-atif-ab34031a5/"
  },
  {
    name: "كاشف حميد",
    role: "مطور تطبيقات الجوال",
    image: mobileDev,
    linkedin: "https://www.linkedin.com/in/kashufhameed/"
  },
  {
    name: "راشفال",
    role: "مصمم جرافيك",
    image: graphic,
    linkedin: "#"
  },
],
 
    },
 section3: {
  title: "استرخِ، نحن هنا لدعم احتياجاتك التقنية!",
  description:
    "في Jovera، نسهل عليك التعامل مع التكنولوجيا لتتمكن من التركيز على نمو أعمالك. من التطوير الرقمي إلى حلول تكنولوجيا المعلومات، نحن دائمًا هنا لمساعدتك.",
  faqs: [
    {
      q: "ما هي الخدمات التي تقدمها Jovera لتقنية المعلومات والتطوير الرقمي؟",
      a: "نقدم مجموعة كاملة من خدمات تقنية المعلومات والتطوير الرقمي، بما في ذلك تطوير مواقع وتطبيقات الهواتف، حلول إدارة علاقات العملاء (CRM)، منصات التجارة الإلكترونية، التكامل مع السحابة، والاستشارات التقنية المصممة حسب احتياجات عملك.",
    },
    {
      q: "كم يستغرق إتمام المشروع؟",
      a: "تختلف مدة المشاريع حسب التعقيد، ولكننا نعمل عن كثب مع العملاء لتحديد مراحل واضحة وضمان التسليم في الوقت المحدد دون المساس بالجودة.",
    },
    {
      q: "هل يمكن دمج أنظمتنا الحالية مع البرمجيات الجديدة؟",
      a: "بالطبع! فريقنا متخصص في تكامل الأنظمة لضمان عمل الأدوات والمنصات الحالية بسلاسة مع أي حلول جديدة نطورها.",
    },


  ],
}
,
    section4: {
  badge: "قيمنا",
  title: "كيف نعمل في Jovera IT",
  subtitle:
    "قيمنا المشتركة توجهنا كفريق واحد وتضمن تقديم التميز لكل عميل.",
  values: [
    {
      icon: Users,
      title: "الاهتمام بفريقنا",
      text:
        "نفهم ما يهم فريقنا ونوفر لهم الدعم الذي يحتاجونه للتميز والابتكار والنمو معًا.",
    },
    {
      icon: Heart,
      title: "التعاون بنزاهة",
      text:
        "نخلق بيئة مفتوحة وصادقة ومحترمة. نقدر العمل الجماعي ونسعى دائمًا لدعم بعضنا البعض.",
    },
    {
      icon: TrendingUp,
      title: "الفخر بما نقوم به",
      text:
        "الجودة والنزاهة توجه كل ما نقوم به. نقدم حلولًا نفتخر بها في كل مرة.",
    },
    {
      icon: Smile,
      title: "تركيز على نجاح العميل",
      text:
        "نفهم احتياجات عملائنا بعمق، سواء كانت معلنة أو غير معلنة، ونسعى لجعل مشاريعهم ناجحة تمامًا.",
    },
    {
      icon: Flag,
      title: "تحدي المستحيل",
      text:
        "نستقبل المشاكل الصعبة والمجهول بحماس وفضول. نسأل 'لماذا؟' و 'لماذا لا؟' للابتكار بلا خوف.",
    },
    {
      icon: Zap,
      title: "الاهتمام بالتفاصيل",
      text:
        "نؤمن أن التميز يكمن في التفاصيل. كل ميزة وتصميم وسطر برمجي يهمنا.",
    },
  ],
},
  },
};


  const isArabic = lang !== "en";
  const data = content[lang];

  return (
    <>
    <Helmet>
      <title>
        {isArabic ? "من نحن - مجموعة جوفيرا" : "About Us - Jovera IT"}
      </title>

      <meta
        name="description"
        content={
          isArabic
            ? "اكتشف قصة مجموعة جوفيرا وفريقنا المميز. تعرف على قيمنا، وخبرتنا، والخدمات التي نقدمها في تكنولوجيا المعلومات والتطوير الرقمي."
            : "Discover the story of Jovera Group and our incredible team. Learn about our values, expertise, and services in IT and digital development."
        }
      />

      {/* Open Graph */}
      <meta
        property="og:title"
        content={isArabic ? "من نحن - مجموعة جوفيرا" : "About Us - Jovera IT"}
      />
      <meta
        property="og:description"
        content={
          isArabic
            ? "انضم إلى فريق محترف يقود الابتكار في خدمات تكنولوجيا المعلومات والتطوير الرقمي. تعرف على قيمنا وقصتنا."
            : "Join a professional team driving innovation in IT and digital development services. Learn about our values and story."
        }
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.joveraits.ae/AboutUs" />
      <meta property="og:image" content="%PUBLIC_URL%/logo.webp" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content={isArabic ? "من نحن - مجموعة جوفيرا" : "About Us - Jovera IT"}
      />
      <meta
        name="twitter:description"
        content={
          isArabic
            ? "انضم إلى فريق محترف يقود الابتكار في خدمات تكنولوجيا المعلومات والتطوير الرقمي. تعرف على قيمنا وقصتنا."
            : "Join a professional team driving innovation in IT and digital development services. Learn about our values and story."
        }
      />
      <meta name="twitter:image" content="%PUBLIC_URL%/logo.webp" />

      {/* Favicon / Logo */}
      <link rel="icon" href="%PUBLIC_URL%/logo.webp" />
      <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo.webp" />
    </Helmet>
    
    <div className="flex flex-col bg-[#0a0a0a] justify-center items-center">
    <section
      className="bg-[#0a0a0a] text-white pt-32 px-5 min-h-screen flex items-center relative overflow-hidden"
      dir={isArabic ? "rtl" : "ltr"}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[30%] left-[20%] w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[30%] right-[20%] w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Image */}
        <div className="relative overflow-hidden rounded-2xl aspect-[4/3] shadow-2xl shadow-black/50 group">
          <img
            src={aboutus}
            alt="Modern workspace"
            className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent" />
        </div>

        {/* Content */}
        <div className="space-y-12">
          {/* Subtitle */}
          <p
            className="text-sm font-medium tracking-wider uppercase text-gray-500
            animate-[fade-in-up_0.8s_ease_forwards]"
            style={{ animationDelay: "200ms" }}
          >
            {data.section1.subtitle}
          </p>

          {/* Title */}
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight
            animate-[fade-in-up_0.8s_ease_forwards]"
            style={{ animationDelay: "400ms" }}
          >
            {data.section1.title}
          </h2>

          {/* Stats */}
    <div className="grid grid-cols-2 gap-8">
  {data.section1.stats.map((stat, index) => (
    <div
      key={index}
      className={`relative py-4 transition-transform duration-300
      animate-[fade-in-up_0.8s_ease_forwards]
      ${isArabic ? "hover:-translate-x-2" : "hover:translate-x-2"}`}
      style={{ animationDelay: `${600 + index * 100}ms` }}
    >
      <div className="text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-br from-white to-gray-500 bg-clip-text text-transparent">
        {stat.value}
      </div>

      <div className="text-sm text-gray-400 font-medium tracking-wide">
        {stat.label}
      </div>
    </div>
  ))}
</div>

        </div>
      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>

{/* //Section 2 */}


 <section
      className="bg-[#0a0a0a] text-white pt-12 pb-6 px-5"
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 ">
  <h2 className="text-4xl md:text-5xl font-bold leading-tight ">
    {data.section2.title}
  </h2>
 

  <div className="space-y-6 max-w-sm ml-auto">
  <p className="text-gray-400 mb-5
  
  ">
    {data.section2.description}
  </p>
<Link to={"/Career"}>
  <button className="bg-[#866910] hover:bg-[#D7AA47] text-black px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition">
    {data.section2.button}
  </button>
  </Link>
</div>

</div>


        {/* Team Grid */}
      <div className="">
  {/* {data.section2.members.map((member, index) => (
    <div
      key={index}
      className="bg-[#111] rounded-2xl p-5 text-center shadow-xl transform transition-transform duration-500 hover:-translate-y-3 hover:scale-105 group"
    >
      <div className="relative mb-5">
        <img
          src={member.image}
          alt={member.name}
          className="w-40 h-40 max-w-[160px] max-h-[160px] mx-auto object-cover rounded-xl border-2 border-[#D7AA47] transition-all duration-500 group-hover:scale-105 group-hover:rotate-1"
        />
       
        <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      <h3 className="font-bold text-lg text-white transition-colors duration-300 group-hover:text-[#D7AA47]">
        {member.name}
      </h3>

      <p className="text-sm text-gray-400 mt-1 transition-colors duration-300 group-hover:text-gray-200">
        {member.role}
      </p>

      <Link
        to="#"
        className="flex justify-center mt-3 text-gray-400 hover:text-[#D7AA47] transition-colors duration-300"
      >
        <Linkedin className="w-6 h-6 hover:scale-110 transition-transform duration-300" />
      </Link>
    </div>
  ))} */}
  {/* Lead Member */}
{data.section2.members
  .filter((m) => m.isLead)
  .map((member, index) => (
    <div
      key={index}
      className="flex justify-center mb-16"
    >
      <div className="bg-[#111] rounded-2xl p-8 text-center shadow-xl w-full max-w-sm hover:-translate-y-2 transition"
      >
        <img
          src={member.image}
          alt={member.name}
          className="w-44 h-44 mx-auto object-cover rounded-xl border-2 border-[#D7AA47]"
        />

        <h3 className="mt-4 text-xl font-bold text-[#D7AA47]">
          {member.name}
        </h3>

        <p className="text-gray-400 mt-1">
          {member.role}
        </p>
          <Link to={member.linkedin}>
        <Linkedin className="mx-auto mt-4 w-6 h-6 text-gray-400 hover:text-[#D7AA47]" />
        </Link>
      </div>
    </div>
))}
{/* Team Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
  {data.section2.members
    .filter((m) => !m.isLead)
    .map((member, index) => (
      <div
        key={index}
        className="bg-[#111] rounded-2xl p-5 text-center shadow-xl hover:-translate-y-3 hover:scale-105 transition group"
      >
        <img
          src={member.image}
          alt={member.name}
          className="w-36 h-36 mx-auto object-cover rounded-xl border-2 border-[#D7AA47]"
        />

        <h3 className="mt-4 font-bold text-lg group-hover:text-[#D7AA47] transition">
          {member.name}
        </h3>

        <p className="text-sm text-gray-400 mt-1">
          {member.role}
        </p>
        <Link to={member.linkedin}>
        <Linkedin className="mx-auto mt-3 w-5 h-5 text-gray-400 hover:text-[#D7AA47]" />
        </Link>
      </div>
    ))}
</div>

</div>

      </div>
    </section>

{/* section 3 */}
    <section
      className="bg-[#1B1B1B] text-white mt-24 max-w-7xl"
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-10 px-20">
          <div className="space-y-5">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              {data.section3.title}
            </h2>
            <p className="text-gray-400 max-w-xl">
              {data.section3.description}
            </p>
          </div>

          {/* Accordion */}
          <div className="space-y-4 ">
            {data.section3.faqs.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className="bg-[#303030] rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    className="w-full flex justify-between items-center px-6 py-5 text-left"
                  >
                    <span className="font-medium">
                      {item.q}
                    </span>
                    <span className="text-xl">
                      {isOpen ? "×" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 text-sm text-gray-400 leading-relaxed">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Image */}
        <div className="relative overflow-hidden shadow-2xl">
          <img
            src={supportImg}
            alt="Support team"
            className="w-full h-[700px] object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      </div>
    </section>

{/* 
section 4 */}
    <section
      className="bg-[#1B1B1B] mt-20 mb-20 text-white py-28 px-5"
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className="max-w-6xl mx-auto text-center space-y-20">
        {/* Header */}
        <div className="space-y-6">
          <span className="text-sm text-gray-400 uppercase tracking-wider">
            {data.section4.badge}
          </span>

          <h2 className="text-4xl md:text-5xl font-bold">
            {data.section4.title}
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            {data.section4.subtitle}
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {data.section4.values.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="space-y-6"
              >
                <div className="mx-auto w-12 h-12 rounded-full bg-black flex items-center justify-center">
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="font-semibold text-lg">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    </div>
</>
  );
};

export default AboutUs;