import React, { useEffect, useState } from 'react';
import { X, ExternalLink, Code, Smartphone, Monitor, Palette } from 'lucide-react';
import joveraCRM from "../assets/Services/DigitalDev/JOVERACRM (2).png";
import MAnoCrm from "../assets/Services/DigitalDev/manoCRM (2).png";
import JoveraWeb from "../assets/Services/DigitalDev/joveraGroupWeb.png";
import JoveraTourism from "../assets/Services/DigitalDev/joveraTourism.png";
import uiux1 from "../assets/Services/DigitalDev/uiux1.png";
import uiux2 from "../assets/Services/DigitalDev/uiux2.png";
import vanguardCRM from "../assets/Services/DigitalDev/vanguard.png";


import JoveraTourismCRM from "../assets/Services/DigitalDev/joveraTourismCRMMockup.png";
import JoveraTourismweb from "../assets/Services/DigitalDev/joveraTourimWeb.png";
import vanguard from "../assets/Services/DigitalDev/vanguardmockup.png";
import yalla from "../assets/Services/DigitalDev/yallaMockup.png";
import Deltawy from "../assets/Services/DigitalDev/elMahallaDoctors.png";
import realEstate from "../assets/Services/DigitalDev/realestatelandingpage.png";


const translations = {
  en: {
    title: "Selected Works",
    subtitle: "Crafting digital experiences that solve real problems",
    viewDetails: "View Details",
    tech: "Tech Stack",
    overview: "Overview",
    features: "Key Features",
    problems: "Problems Solved",
    impact: "Impact",
    visit: "Visit Website",
    crm: "CRM Login",
    play: "Google Play",
    app: "App Store",
    behance: "View on Behance",
    projects: {
      manoCRM: {
        title: "manoCRM",
        category: "Tourism CRM Platform",
        tech: "React Node.js MongoDB AWS",
        description: "A specialized Tourism Customer Relationship Management (CRM) platform designed to streamline lead management, sales, and partnership operations for travel agencies and tourism businesses.",
        features: [
          "Lead Management: Capture, track, and nurture leads from multiple sources",
          "Package Selling: Create, customize, and sell tourism packages directly to leads",
          "Partner Management: Seamlessly manage partnerships with 100+ hotels across UAE",
          "Tourism Operations: Coordinate logistics for customer bookings and activities",
          "Analytics & Reporting: Track sales performance and partner performance"
        ],
        problems: [
          "Disorganized Lead Management - Centralizes all leads in one system",
          "Inefficient Package Selling - Automated pricing and booking confirmations",
          "Complex Hotel & Partner Coordination - Unified partner management dashboard",
          "Poor Customer Experience - Automated follow-ups ensure seamless experience",
          "Limited Performance Insights - Advanced analytics for data-driven decisions"
        ],
        impact: "100+ hotel partnerships across UAE"
      },
      joveraCRM: {
        title: "Jovera CRM",
        category: "All-in-One Business Management",
         tech: "React Node.js MongoDB AWS",
        description: "A robust all-in-one sales, HR, and accounting management platform designed for businesses that rely on lead generation and agent performance.",
        features: [
          "Lead Management & Calling Module: Agents can call leads directly and log outcomes",
          "Performance Tracking: Monitor agent activity, calls, conversions, and commissions",
          "HR & Payroll Management: Track salaries, attendance, and manage payroll seamlessly",
          "Accounting & Financial Oversight: Track deals, revenue, and employee compensation",
          "Role-Based Access Control: Assign permissions for secure data access",
          "Analytics & Reporting: Real-time dashboards for comprehensive business insights"
        ],
        problems: [
          "Disorganized Lead Management - Centralized lead tracking system",
          "Lack of Agent Accountability - Real-time performance metrics dashboards",
          "Manual Payroll Calculations - Automated payroll and commission tracking",
          "Fragmented HR and Accounting - Integrated single source of truth",
          "Unauthorized Data Access - Role-based access control for security",
          "Limited Business Insights - Real-time analytics for data-driven management"
        ],
        impact: "Complete business operations automation"
      },
      vanguardCRM: {
        title: "Vanguard Properties CRM",
        category: "Real-Time SaaS CRM + Website Control",
        tech: "React.Js Node.js Express.Js PostgreSQL AWS",
        description: "A real-time SaaS CRM and website control system currently running at Vanguard Properties. It combines a full CRM with a website CMS to manage listings, blogs, and lead capture while controlling website behavior.",
        features: [
          "SaaS CRM + Website CMS: One system for CRM and website content control",
          "Property Management: Create, edit, and publish listings in real time",
          "Blog Management: Create blogs and update site content instantly",
          "Lead Generation & Assignment: Capture leads and assign them to agents",
          "Web Contact Control: Manage and route website contact requests",
          "Role-Based Dashboards: Superadmin, admin, and agent roles with different views"
        ],
        problems: [
          "Disconnected CRM and website updates - Unified platform for both",
          "Slow publishing workflow - Real-time updates to properties and blogs",
          "Manual lead routing - Automated assignment to agents",
          "Lack of accountability - Role-based dashboards per team member",
          "Limited control over website behavior - CMS-driven changes without developers"
        ],
        impact: "Live system in daily use at Vanguard Properties",
        embed: {
          id: "cOe6jVnZvyI",
          aspectRatio: "2.126246",
          paddingTop: "47.031250%"
        },
        embedScriptSrc: "https://go.screenpal.com/player/appearance/cOe6jVnZvyI",
        embedIframeSrc: "https://go.screenpal.com/player/cOe6jVnZvyI?ff=1&ahc=1&dcc=1&tl=1&bg=transparent&share=1&download=1&embed=1&cl=1"
      },
      yalla:{
        title: "Yalla Lifestyle",
        category: "Company Website",
        tech: "React.Js Next.js Netlify",
        description: "A modern and dynamic company website for Yalla Lifestyle, showcasing their services and brand identity with a focus on user experience and visual appeal.",
        features: [
          "Dynamic Content: Easily update services and portfolio",
          "Responsive Design: Seamless experience across all devices",
          "Brand Showcase: Highlighting Yalla Lifestyle's unique offerings",
          "Contact Integration: Easy communication with potential clients",
          "Visual Appeal: Modern design with engaging visuals",
          "Performance Optimization: Fast loading times for better UX"
        ],
        problems: [
          "Static Content - Dynamic updates without developer intervention",
          "Inconsistent User Experience - Responsive design for all devices",
          "Weak Brand Representation - Modern design showcasing unique offerings",
          "Limited Contact Options - Integrated contact forms for easy communication",

          "Poor Visual Appeal - Engaging visuals to captivate visitors",
          "Slow Performance - Optimization for fast loading times"
        ],

      },
      JoveraWeb: {
        title: "Jovera Group Website",
        category: "Dynamic Corporate Website",
        tech: "React.Js Express.Js MongoDB",
        description: "A fully dynamic and CRM-driven corporate website with pixel-perfect responsive design and real-time content management capabilities.",
        features: [
          "CRM-Driven Content: Update website components from CRM in real-time",
          "Responsive Design: Pixel-perfect experience on all devices",
          "CRM-Powered Career Page: Manage job openings and applications centrally",
          "Role-Based Access: Content management with security controls",
          "Scalable Architecture: Modular design that grows with the business",
          "Modern UI: Professional brand representation with dynamic data"
        ],
        problems: [
          "Static Content - Dynamic CRM-driven updates without developers",
          "Inconsistent Data - Synchronized information across platforms",
          "Poor Mobile Experience - Responsive design for all devices",
          "Inefficient Recruitment - Centralized candidate management workflow",
          "Limited Content Control - CRM-controlled components for flexibility",
          "Lack of Scalability - Modular architecture for seamless growth",
          "Weak Brand Image - Pixel-perfect UI reflecting professionalism"
        ],
        impact: "Real-time website management without developer dependency"
      },
      JoveraTourism: {
        title: "Jovera Tourism",
        category: "Travel Booking Platform",
        tech: "React.Js Express.Js Flutter MongoDB",
        description: "A modern mobile-first travel booking platform that allows users to explore and book tour packages with ease, built with Flutter for iOS and Android.",
        features: [
          "Tour Package Booking: Browse and book curated tourism packages",
          "In-App Chat Support: Real-time chat with support agents",
          "Secure Online Payments: Integrated payment gateway with instant confirmation",
          "Cross-Platform: Single Flutter codebase for Android and iOS",
          "User-Friendly Experience: Clean interface with smooth animations",
          "Fast Performance: Optimized for mobile devices"
        ],
        problems: [
          "Complex Booking Process - Direct in-app booking eliminates phone calls",
          "Lack of Real-Time Support - In-app chat provides instant assistance",
          "Unsecure Payments - Integrated secure payment gateway",
          "Inconsistent Experience - Flutter ensures consistency across platforms",
          "Limited Accessibility - Mobile-first solution for on-the-go planning"
        ],
        impact: "Seamless mobile booking experience"
      },
      uiux1: {
        title: "Deltawy Accounting Program",
        category: "Financial Software UI/UX", 
        tech: "Figma",
        description: "Comprehensive UI/UX design for an accounting program focused on user experience and financial data visualization.",
        features: [
          "Clean interface design for financial data",
          "Intuitive navigation system",
          "Data visualization components",
          "Responsive layouts",
          "Design system documentation"
        ],
        problems: [],
        impact: "Enhanced user experience for accounting workflows"
      },
      uiux2: {
        title: "Real Estate Landing Page",
         tech: "Figma",
        category: "Property Website Design",
        description: "Modern landing page design for real estate businesses focused on property showcase and lead generation.",
        features: [
          "Property showcase layouts",
          "Lead capture forms",
          "Interactive property filters",
          "Mobile-optimized design",
          "Call-to-action optimization"
        ],
        problems: [],
        impact: "Conversion-focused real estate web presence"
      }
    }
  },
  ar: {

  title: "أعمال مختارة",
  subtitle: "نصمم تجارب رقمية تحل مشكلات حقيقية",
  viewDetails: "عرض التفاصيل",
  tech: "التقنيات المستخدمة",
  overview: "نظرة عامة",
  features: "المميزات الرئيسية",
  problems: "المشكلات التي تم حلها",
  impact: "النتائج",
  visit: "زيارة الموقع",
  crm: "تسجيل الدخول إلى CRM",
  play: "Google Play",
  app: "App Store",
  behance: "عرض على Behance",
  projects: {

    manoCRM: {
      title: "manoCRM",
      category: "منصة CRM للسياحة",
      tech: "React Node.js MongoDB AWS",
      description: "منصة متخصصة لإدارة علاقات العملاء في قطاع السياحة مصممة لتنظيم إدارة العملاء المحتملين والمبيعات وعمليات الشراكة لشركات ووكالات السفر.",
      features: [
        "إدارة العملاء المحتملين: جمع وتتبع ورعاية العملاء من مصادر متعددة",
        "بيع الباقات السياحية: إنشاء وتخصيص وبيع باقات السياحة مباشرة للعملاء",
        "إدارة الشركاء: إدارة شراكات مع أكثر من 100 فندق في الإمارات بسهولة",
        "إدارة العمليات السياحية: تنسيق الخدمات اللوجستية لحجوزات العملاء والأنشطة",
        "التحليلات والتقارير: متابعة أداء المبيعات وأداء الشركاء"
      ],
      problems: [
        "إدارة العملاء غير المنظمة - توحيد جميع العملاء في نظام واحد",
        "بيع الباقات غير الفعّال - أتمتة التسعير وتأكيد الحجوزات",
        "تعقيد إدارة الفنادق والشركاء - لوحة تحكم موحدة لإدارة الشركاء",
        "تجربة عملاء ضعيفة - متابعة تلقائية لضمان تجربة سلسة",
        "ضعف الرؤية التحليلية - تحليلات متقدمة لاتخاذ قرارات مبنية على البيانات"
      ],
      impact: "أكثر من 100 شراكة فندقية في الإمارات"
    },

    joveraCRM: {
      title: "Jovera CRM",
      category: "منصة متكاملة لإدارة الأعمال",
      tech: "React Node.js MongoDB AWS",
      description: "منصة قوية متكاملة لإدارة المبيعات والموارد البشرية والمحاسبة، مصممة للشركات التي تعتمد على توليد العملاء وتتبع أداء الوكلاء.",
      features: [
        "إدارة العملاء والمكالمات: يمكن للوكلاء الاتصال بالعملاء وتسجيل نتائج المكالمات",
        "تتبع الأداء: مراقبة نشاط الوكلاء والمكالمات والتحويلات والعمولات",
        "إدارة الموارد البشرية والرواتب: تتبع الرواتب والحضور وإدارة الرواتب بسهولة",
        "الإدارة المالية والمحاسبية: تتبع الصفقات والإيرادات وتعويضات الموظفين",
        "التحكم بالصلاحيات حسب الدور: تحديد الصلاحيات للوصول الآمن للبيانات",
        "التحليلات والتقارير: لوحات تحكم لحظية لرؤى شاملة للأعمال"
      ],
      problems: [
        "إدارة العملاء غير المنظمة - نظام مركزي لتتبع العملاء",
        "ضعف متابعة أداء الوكلاء - لوحات تحكم بمؤشرات الأداء",
        "حساب الرواتب يدوياً - أتمتة الرواتب وتتبع العمولات",
        "تجزئة الموارد البشرية والمحاسبة - نظام موحد لإدارة البيانات",
        "وصول غير مصرح به للبيانات - نظام صلاحيات حسب الدور",
        "رؤية محدودة للأعمال - تحليلات فورية لاتخاذ قرارات مبنية على البيانات"
      ],
      impact: "أتمتة كاملة لعمليات إدارة الأعمال"
    },

    vanguardCRM: {
      title: "Vanguard Properties CRM",
      category: "نظام CRM سحابي فوري مع التحكم بالموقع",
      tech: "React.Js Node.js Express.Js PostgreSQL AWS",
      description: "نظام SaaS لإدارة علاقات العملاء والتحكم بالموقع يعمل حالياً في شركة Vanguard Properties، ويجمع بين CRM كامل ونظام إدارة محتوى الموقع لإدارة العقارات والمدونات والعملاء المحتملين.",
      features: [
        "CRM سحابي + نظام إدارة الموقع: منصة واحدة لإدارة العملاء والمحتوى",
        "إدارة العقارات: إنشاء وتعديل ونشر العقارات بشكل فوري",
        "إدارة المدونات: إنشاء المقالات وتحديث محتوى الموقع مباشرة",
        "إدارة العملاء المحتملين: جمع العملاء وتوزيعهم على الوكلاء",
        "إدارة طلبات الموقع: تنظيم وتوجيه طلبات التواصل",
        "لوحات تحكم حسب الدور: صلاحيات مختلفة للمشرفين والوكلاء"
      ],
      problems: [
        "فصل بين CRM وتحديثات الموقع - منصة موحدة لإدارتهما",
        "بطء نشر المحتوى - تحديثات فورية للعقارات والمدونات",
        "توزيع العملاء يدوياً - توزيع تلقائي للوكلاء",
        "ضعف المساءلة - لوحات تحكم خاصة لكل دور",
        "تحكم محدود في الموقع - إدارة المحتوى عبر CMS بدون مطور"
      ],
      impact: "نظام يعمل يومياً داخل شركة Vanguard Properties"
    },

    yalla:{
      title: "Yalla Lifestyle",
      category: "موقع شركة",
      tech: "React.Js Next.js Netlify",
      description: "موقع شركة حديث وديناميكي يعرض خدمات وهوية شركة Yalla Lifestyle مع التركيز على تجربة المستخدم والتصميم الجذاب.",
      features: [
        "محتوى ديناميكي: تحديث الخدمات والأعمال بسهولة",
        "تصميم متجاوب: تجربة سلسة على جميع الأجهزة",
        "عرض العلامة التجارية: إبراز خدمات Yalla Lifestyle",
        "تكامل التواصل: تسهيل التواصل مع العملاء المحتملين",
        "تصميم جذاب: عناصر بصرية حديثة وجذابة",
        "تحسين الأداء: سرعة تحميل عالية لتجربة مستخدم أفضل"
      ],
      problems: [
        "محتوى ثابت - إمكانية تحديث المحتوى بسهولة بدون مطور",
        "تجربة مستخدم غير متناسقة - تصميم متجاوب لجميع الأجهزة",
        "ضعف عرض العلامة التجارية - تصميم حديث يعكس هوية الشركة",
        "خيارات تواصل محدودة - نماذج تواصل مدمجة",
        "ضعف الجاذبية البصرية - تصميم جذاب للزوار",
        "بطء الأداء - تحسين سرعة الموقع"
      ]
    },

    JoveraWeb: {
      title: "موقع مجموعة Jovera",
      category: "موقع شركات ديناميكي",
      tech: "React.Js Express.Js MongoDB",
      description: "موقع شركات ديناميكي بالكامل متصل بنظام CRM مع إدارة محتوى فورية وتصميم متجاوب بدقة عالية.",
      features: [
        "محتوى متصل بـ CRM: تحديث مكونات الموقع مباشرة من النظام",
        "تصميم متجاوب: تجربة مثالية على جميع الأجهزة",
        "صفحة وظائف مرتبطة بالنظام: إدارة الوظائف والتقديمات مركزياً",
        "تحكم بالصلاحيات: إدارة المحتوى مع حماية البيانات",
        "هيكلية قابلة للتوسع: تصميم مرن ينمو مع الشركة",
        "واجهة حديثة: عرض احترافي للعلامة التجارية"
      ],
      problems: [
        "محتوى ثابت - تحديثات ديناميكية عبر CRM بدون مطور",
        "بيانات غير متناسقة - مزامنة البيانات عبر الأنظمة",
        "تجربة موبايل ضعيفة - تصميم متجاوب لكل الأجهزة",
        "عملية توظيف غير فعالة - إدارة مركزية للمرشحين",
        "تحكم محدود بالمحتوى - إدارة مرنة عبر CRM",
        "ضعف قابلية التوسع - هيكلية مرنة للنمو",
        "صورة علامة تجارية ضعيفة - تصميم احترافي دقيق"
      ],
      impact: "إدارة الموقع بشكل فوري بدون الحاجة إلى مطور"
    },

    JoveraTourism: {
      title: "Jovera Tourism",
      category: "منصة حجز سياحي",
      tech: "React.Js Express.Js Flutter MongoDB",
      description: "منصة حجز سياحية حديثة تركز على الهاتف المحمول وتتيح للمستخدمين استكشاف وحجز الباقات السياحية بسهولة.",
      features: [
        "حجز الباقات السياحية",
        "دردشة مباشرة داخل التطبيق",
        "دفع إلكتروني آمن",
        "تطبيق متعدد الأنظمة عبر Flutter",
        "واجهة سهلة الاستخدام",
        "أداء سريع على الأجهزة المحمولة"
      ],
      problems: [
        "عملية حجز معقدة - الحجز مباشرة من التطبيق",
        "عدم توفر دعم فوري - دردشة مباشرة مع الدعم",
        "دفع غير آمن - بوابة دفع إلكترونية آمنة",
        "تجربة غير متناسقة - Flutter يضمن تجربة موحدة",
        "صعوبة الوصول - تطبيق موبايل سهل الاستخدام"
      ],
      impact: "تجربة حجز سياحي سلسة عبر الهاتف"
    },

    uiux1: {
      title: "برنامج دلتوي للمحاسبة",
      category: "تصميم واجهات برامج مالية UI/UX",
      tech: "Figma",
      description: "تصميم واجهات وتجربة مستخدم شاملة لبرنامج محاسبي يركز على سهولة الاستخدام وعرض البيانات المالية.",
      features: [
        "واجهة نظيفة لعرض البيانات المالية",
        "نظام تنقل سهل الاستخدام",
        "مكونات عرض البيانات",
        "تصميم متجاوب",
        "توثيق نظام التصميم"
      ],
      problems: [],
      impact: "تحسين تجربة المستخدم لبرامج المحاسبة"
    },

    uiux2: {
      title: "صفحة هبوط عقارية",
      category: "تصميم موقع عقاري",
      tech: "Figma",
      description: "تصميم صفحة هبوط حديثة لشركات العقارات تركز على عرض العقارات وتوليد العملاء المحتملين.",
      features: [
        "تصميم عرض العقارات",
        "نماذج جمع العملاء",
        "فلاتر عقارات تفاعلية",
        "تصميم متوافق مع الجوال",
        "تحسين أزرار الدعوة للإجراء"
      ],
      problems: [],
      impact: "موقع عقاري يركز على زيادة التحويلات"
    }

  }

  }
};

// Then inside component use:
const PortfolioProjects = ({ lang = "en" }) => {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const t = translations[lang];
  const isArabic = lang === "ar";

  useEffect(() => {
    if (!selectedProject?.embedScriptSrc) return;
    const existing = document.querySelector(`script[src="${selectedProject.embedScriptSrc}"]`);
    if (existing) return;
    const script = document.createElement("script");
    script.src = selectedProject.embedScriptSrc;
    script.async = true;
    document.body.appendChild(script);
  }, [selectedProject]);

  const projectsData = [
    { ...t.projects.vanguardCRM, image: vanguard, type: "web", website: "https://vanguardproperty.netlify.app/", crmLink: "https://propertymgt.netlify.app/login" },
    { ...t.projects.manoCRM, image: MAnoCrm, type: "web", website: "https://crm.mano.ae" },
    { ...t.projects.joveraCRM, image: joveraCRM, type: "web", website: "http://new.jovera.ae" },
    { ...t.projects.JoveraWeb, image: JoveraWeb, type: "web", website: "https://www.jovera.ae/" },
    { ...t.projects.yalla, image: yalla, type: "web", website: "https://yallalifestyle.netlify.app/" },
    { ...t.projects.JoveraTourism, image: JoveraTourismweb, type: "mobile", playStore: "https://play.google.com/store/apps/details?id=com.joveragroup.tourism&hl=en" },
    { ...t.projects.uiux1, image: Deltawy, type: "uiux", behance: "https://www.behance.net/gallery/195587553/Deltawy-accounting-program/modules/1107127633" },
    { ...t.projects.uiux2, image: realEstate, type: "uiux", behance: "https://www.behance.net/gallery/200363125/Real-state-Landing-Page/modules/1135830205" }
  ];

  const tabs = [
    { name: isArabic ? "الكل" : "All", icon: Code },
    { name: isArabic ? "ويب" : "Web", icon: Monitor },
    { name: isArabic ? "موبايل" : "Mobile", icon: Smartphone },
    { name: isArabic ? "تصميم" : "UI/UX", icon: Palette }
  ];

  const getFilteredProjects = () => {
    if (activeTab === (isArabic ? "الكل" : "All")) return projectsData;
    if (activeTab === (isArabic ? "ويب" : "Web")) return projectsData.filter(p => p.type === 'web');
    if (activeTab === (isArabic ? "موبايل" : "Mobile")) return projectsData.filter(p => p.type === 'mobile');
    if (activeTab === (isArabic ? "تصميم" : "UI/UX")) return projectsData.filter(p => p.type === 'uiux');
    return projectsData;
  };

  const openModal = (project) => { setSelectedProject(project); setIsModalOpen(true); document.body.style.overflow='hidden'; };
  const closeModal = () => { setIsModalOpen(false); document.body.style.overflow='unset'; setTimeout(()=>setSelectedProject(null),300); };

  return (
    <section dir={isArabic ? "rtl" : "ltr"} className="min-h-screen bg-[#0e0e0e] text-white px-6 md:px-16 lg:px-24 py-24">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-[#D7AA47] to-white bg-clip-text text-transparent"
              style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
            {t.title}
          </h2>
          <p className="text-gray-400 text-lg">
            {t.subtitle}
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-12">
          <div className="flex gap-4 flex-wrap">
            {tabs.map(({ name, icon: Icon }) => (
              <button
                key={name}
                onClick={() => setActiveTab(name)}
                className={`group relative px-6 py-3 rounded-full border transition-all duration-300 flex items-center gap-2
                  ${activeTab === name
                    ? 'bg-[#D7AA47]/20 border-[#D7AA47] text-white'
                    : 'border-gray-700 text-gray-400 hover:border-gray-500 hover:text-white'
                  }`}
              >
                <Icon className="w-4 h-4" />
                <span className="font-medium">{name}</span>
                {activeTab === name && (
                  <div className="absolute inset-0 rounded-full blur-xl" style={{ background: '#D7AA47', opacity: 0.1 }} />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {getFilteredProjects().map((project, index) => (
            <div
              key={project.id}
              onClick={() => openModal(project)}
              className="group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative bg-[#121212] rounded-2xl overflow-hidden border border-gray-800 hover:border-[#D7AA47]/50 transition-all duration-500 hover:scale-[1.02]" 
                   style={{ boxShadow: 'none' }}
                   onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(215, 170, 71, 0.15)'}
                   onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}>

                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0  opacity-40 mix-blend-multiply`} />
                  
                  {/* Type Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-black/70 backdrop-blur-sm rounded-full text-xs font-medium border border-gray-700">
                    {project.type.toUpperCase()}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-3">
                    <h3 className="text-xl font-bold mb-1 group-hover:text-[#D7AA47] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-400">{project.category}</p>
                  </div>
                  
                  <p className="text-sm text-gray-500 mb-4 font-mono">
                    {project.tech}
                  </p>

                  <div className="flex items-center gap-2 text-[#D7AA47] text-sm font-medium group-hover:gap-3 transition-all">
                    <span>{t.viewDetails}</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>

                {/* Hover gradient effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={closeModal}
          style={{
            animation: 'fadeIn 300ms ease-out'
          }}
        >
          <div
            className="bg-[#121212] rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-800 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            style={{
              animation: 'slideUp 400ms cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-[#121212]/95 backdrop-blur-xl border-b border-gray-800 p-6 flex items-start justify-between z-10">
              <div>
                <h3 className="text-3xl font-bold mb-2">{selectedProject.title}</h3>
                <p className="text-gray-400">{selectedProject.category}</p>
              </div>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-800 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-8">
              {/* Image */}
              {selectedProject.embed ? (
                <div className="relative rounded-2xl overflow-hidden">
                  <div
                    className="sp-embed-player"
                    data-id={selectedProject.embed.id}
                    data-aspect-ratio={selectedProject.embed.aspectRatio}
                    data-padding-top={selectedProject.embed.paddingTop}
                    style={{
                      position: "relative",
                      width: "100%",
                      paddingTop: selectedProject.embed.paddingTop,
                      height: 0
                    }}
                  >
                    <iframe
                      title={selectedProject.title}
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        border: 0
                      }}
                      scrolling="no"
                      src={selectedProject.embedIframeSrc}
                      allowFullScreen
                    />
                  </div>
                </div>
              ) : (
               
                 <div className="relative h-80 rounded-2xl overflow-hidden flex items-center justify-center bg-black">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="max-h-full max-w-full object-contain"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${selectedProject.gradient} opacity-30 mix-blend-multiply`} />
                </div>
              )}

              {/* Tech Stack */}
              <div>
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  {t.tech}
                </h4>
                <p className="font-mono text-[#D7AA47]">{selectedProject.tech}</p>
              </div>

              {/* Description */}
              <div>
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  {t.overview}
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Features */}
              {selectedProject.features && selectedProject.features.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                    {t.features}
                  </h4>
                  <div className="space-y-3">
                    {selectedProject.features.map((feature, idx) => (
                      <div key={idx} className="flex gap-3 items-start">
                        <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: '#D7AA47' }} />
                        <p className="text-gray-300 leading-relaxed">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Problems Solved */}
              {selectedProject.problems && selectedProject.problems.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                    {t.problems}
                  </h4>
                  <div className="space-y-3">
                    {selectedProject.problems.map((problem, idx) => (
                      <div key={idx} className="flex gap-3 items-start">
                        <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: '#D7AA47' }} />
                        <p className="text-gray-300 leading-relaxed">{problem}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Impact */}
              {selectedProject.impact && (
                <div className="border rounded-2xl p-6" style={{ borderColor: '#D7AA47', backgroundColor: 'rgba(215, 170, 71, 0.05)' }}>
                  <h4 className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: '#D7AA47' }}>
                    {t.impact}
                  </h4>
                  <p className="text-white font-medium text-lg">{selectedProject.impact}</p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-4 flex-wrap pt-4">
                {selectedProject.website && (
                  <a
                    href={selectedProject.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl text-black font-medium transition-all flex items-center gap-2"
                    style={{ background: '#D7AA47' }}
                    onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 10px 40px -10px rgba(215, 170, 71, 0.5)'}
                    onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
                  >
                    {t.visit}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {selectedProject.crmLink && (
                  <a
                    href={selectedProject.crmLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl bg-[#1B1B1B] text-white font-medium hover:shadow-lg hover:shadow-[#D7AA47]/20 transition-all flex items-center gap-2 border border-gray-700"
                  >
                    {t.crm}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {selectedProject.playStore && (
                  <a
                    href={selectedProject.playStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl bg-green-600 text-white font-medium hover:shadow-lg hover:shadow-green-500/30 transition-all flex items-center gap-2"
                  >
                    {t.play}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {selectedProject.appStore && (
                  <a
                    href={selectedProject.appStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all flex items-center gap-2"
                  >
                    {t.app}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {selectedProject.behance && (
                  <a
                    href={selectedProject.behance}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl bg-blue-500 text-white font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all flex items-center gap-2"
                  >
                    {t.behance}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default PortfolioProjects;


