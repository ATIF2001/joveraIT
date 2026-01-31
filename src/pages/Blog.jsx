import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import { Helmet } from "react-helmet";


import designThinkingImage from "../assets/Blog/design-thinking.jpg";
import businessGrowthImage from "../assets/Blog/business-growth.jpg";
import saas from "../assets/Blog/saas.jpg";
import erp from "../assets/Blog/erp.jpg";
import It from "../assets/Blog/cctv-surveillance.jpg";
import crm from "../assets/Blog/crm.jpg";

export default function BlogPage({ lang }) {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [selectedBlog, setSelectedBlog] = useState(null);

const texts = {
  en: {
    top: "Home → Blog",
    readmore: "Read Article",
    close: "Close Article"
  },
  ar: {
    top: "المدونة ← الرئيسية",
    readmore: "اقرأ المقال",
    close: "إغلاق المقال"
  }
};


  const blogPosts = [
    {
      id: 1,
      image: designThinkingImage,
      title:
        "Design Thinking for ERP & SaaS Platforms: Solving Enterprise Problems at Scale",
      description:
        "How user-centered design helps ERP, CRM, and SaaS platforms reduce operational friction and drive adoption across enterprises.",
      slug: "design-thinking-erp-saas",
      fullContent: `
        <h2>Design Thinking in Enterprise Software</h2>
        <p>
          In ERP, CRM, and SaaS ecosystems, complexity is inevitable. Design thinking
          enables organizations to simplify workflows by aligning technology with
          real operational needs rather than abstract feature sets.
        </p>

        <h2>Why ERP Systems Fail Without User-Centered Design</h2>
        <p>
          Many ERP implementations fail not because of weak technology, but due to
          poor usability and user resistance. Finance teams, operations managers,
          and executives often struggle with systems that were never designed for
          real-world usage.
        </p>

        <h2>Applying Design Thinking to SaaS & CRM Platforms</h2>
        <p>
          In SaaS and CRM environments, customer experience directly impacts churn,
          retention, and scalability. Design-led platforms reduce training time,
          accelerate onboarding, and improve operational efficiency.
        </p>

        <h2>Business Impact</h2>
        <p>
          Organizations that adopt design-led ERP and SaaS strategies experience
          higher adoption rates, better ROI, and stronger alignment between business
          goals and technology investments.
        </p>

        <h2>Conclusion</h2>
        <p>
          Design thinking is no longer optional for enterprise platforms. It is a
          strategic requirement for organizations seeking scalable, future-proof
          digital systems.
        </p>
      `,
    },

    {
      id: 2,
      image: businessGrowthImage,
      title: "Scaling Businesses in UAE with ERP, CRM & Custom SaaS Solutions",
      description:
        "How UAE businesses scale operations using integrated ERP, CRM, and custom SaaS platforms.",
      slug: "scaling-business-erp-crm-uae",
      fullContent: `
        <h2>Digital Transformation in the UAE</h2>
        <p>
          UAE businesses operate in one of the most competitive and fast-moving
          markets globally. Growth requires centralized systems that unify finance,
          operations, sales, and customer engagement.
        </p>

        <h2>ERP as the Backbone of Operations</h2>
        <p>
          ERP platforms provide a single source of truth across accounting,
          procurement, HR, and operations—enabling leadership to make data-driven
          decisions with confidence.
        </p>

        <h2>CRM for Revenue & Customer Experience</h2>
        <p>
          Modern CRM systems go beyond lead tracking. They power customer journeys,
          automate engagement, and provide deep insights into pipeline performance.
        </p>

        <h2>Custom SaaS for Competitive Advantage</h2>
        <p>
          Custom SaaS platforms allow organizations to solve unique operational
          challenges while maintaining scalability, security, and flexibility.
        </p>

        <h2>Managed IT Operations</h2>
        <p>
          Centralizing ERP, CRM, and SaaS under a single technology partner reduces
          operational risk and accelerates digital growth.
        </p>
      `,
    },

    {
      id: 3,
      image: It,
      title:
        "Managing Complete IT Operations with Cloud, DevOps & Automation",
      description:
        "How enterprises scale reliably using cloud infrastructure, DevOps, and automation.",
      slug: "managed-it-operations-cloud-devops",
      fullContent: `
        <h2>IT Operations as a Growth Enabler</h2>
        <p>
          IT operations are no longer a support function. They directly impact
          scalability, security, and business continuity.
        </p>

        <h2>Cloud Infrastructure for Scalability</h2>
        <p>
          Cloud platforms such as AWS and Azure allow organizations to scale on
          demand, improve resilience, and reduce capital expenditure.
        </p>

        <h2>DevOps & Continuous Delivery</h2>
        <p>
          DevOps practices enable faster releases, better collaboration, and higher
          system reliability through automation and monitoring.
        </p>

        <h2>Security & Compliance</h2>
        <p>
          Enterprise IT operations must meet strict compliance and security
          requirements, especially in regulated UAE industries.
        </p>

        <h2>End-to-End IT Management</h2>
        <p>
          A single partner managing infrastructure, applications, and security
          ensures accountability, performance, and long-term stability.
        </p>
      `,
    },
    {
  id: 4,
  image: erp,
  title: "ERP Implementation Challenges in the UAE (And How to Avoid Them)",
  description:
    "A deep dive into the most common ERP implementation mistakes in UAE businesses and how a structured approach ensures long-term success.",
  slug: "erp-implementation-challenges-uae",
  fullContent: `
    <h2>Why ERP Projects Fail in the UAE Market</h2>
    <p>
      ERP implementations are complex by nature, but in the UAE market they come
      with additional challenges such as regulatory compliance, multi-entity
      operations, and rapid business expansion.
    </p>

    <h2>Lack of Business Process Alignment</h2>
    <p>
      One of the most common reasons ERP projects fail is poor alignment between
      business processes and system configuration. Implementing software without
      re-engineering workflows leads to inefficiencies and user frustration.
    </p>

    <h2>Data Migration & Integration Issues</h2>
    <p>
      Legacy systems, spreadsheets, and disconnected tools make data migration
      risky. A structured migration strategy and proper system integration are
      essential to ensure data accuracy and continuity.
    </p>

    <h2>User Adoption & Change Management</h2>
    <p>
      Even the best ERP system fails if users resist it. Training, stakeholder
      involvement, and phased rollouts are critical for adoption across finance,
      HR, and operations teams.
    </p>

    <h2>How to Ensure ERP Success</h2>
    <p>
      Successful ERP implementations require clear ownership, experienced
      implementation partners, and ongoing post-launch support to continuously
      optimize the system as the business evolves.
    </p>
  `,
},{
  id: 5,
  image: saas,
  title: "Why Custom SaaS Platforms Outperform Off-the-Shelf Software",
  description:
    "Understanding when custom SaaS development delivers better ROI, scalability, and operational control than ready-made tools.",
  slug: "custom-saas-vs-off-the-shelf",
  fullContent: `
    <h2>The Limitations of Off-the-Shelf Software</h2>
    <p>
      Off-the-shelf software is designed for the masses. While it works for basic
      needs, it often forces businesses to adapt their operations around the
      software rather than the other way around.
    </p>

    <h2>Custom SaaS as a Strategic Asset</h2>
    <p>
      Custom SaaS platforms are built around your exact workflows, data models,
      and business rules. This results in higher efficiency, better performance,
      and stronger differentiation in competitive markets.
    </p>

    <h2>Scalability & Performance Control</h2>
    <p>
      With custom SaaS, organizations control architecture decisions, cloud
      scaling strategies, and performance optimization—ensuring the platform
      grows with the business.
    </p>

    <h2>Security & Compliance Advantages</h2>
    <p>
      Custom platforms allow tighter control over data access, security policies,
      and compliance requirements—especially important for regulated industries
      operating in the UAE.
    </p>

    <h2>Long-Term ROI</h2>
    <p>
      While initial investment may be higher, custom SaaS platforms reduce license
      costs, eliminate unnecessary features, and deliver higher ROI over time.
    </p>
  `,
},
{
  id: 6,
  image: crm,
  title: "CRM as a Core System, Not Just a Sales Tool",
  description:
    "How modern CRM platforms power operations, customer experience, and long-term growth beyond sales tracking.",
  slug: "crm-beyond-sales",
  fullContent: `
    <h2>The Evolution of CRM Systems</h2>
    <p>
      CRM systems have evolved far beyond contact management and sales pipelines.
      Today, they serve as central platforms connecting marketing, operations,
      customer support, and leadership insights.
    </p>

    <h2>CRM & Customer Experience</h2>
    <p>
      A modern CRM captures every customer interaction across channels, enabling
      personalized engagement, faster response times, and improved satisfaction.
    </p>

    <h2>Operational Intelligence Through CRM</h2>
    <p>
      CRM data provides valuable insights into customer behavior, deal cycles,
      service bottlenecks, and revenue trends—helping leadership make informed
      decisions.
    </p>

    <h2>CRM Integration with ERP & SaaS Platforms</h2>
    <p>
      When CRM integrates seamlessly with ERP and custom SaaS systems, businesses
      gain a unified view of customers, operations, and financial performance.
    </p>

    <h2>CRM as a Long-Term Growth Engine</h2>
    <p>
      Organizations that treat CRM as a core system—not just a sales tool—build
      stronger customer relationships and scalable growth strategies.
    </p>
  `,
}

  ];
  const blogPostsAr = [
  {
    id: 1,
    image: designThinkingImage,
    title:
      "التفكير التصميمي لمنصات ERP و SaaS: حل مشكلات المؤسسات على نطاق واسع",
    description:
      "كيف يساعد التصميم المرتكز على المستخدم منصات ERP وCRM وSaaS على تقليل التعقيد وزيادة معدل التبني داخل المؤسسات.",
    slug: "design-thinking-erp-saas-ar",
    fullContent: `
      <h2>التفكير التصميمي في برمجيات المؤسسات</h2>
      <p>
        في أنظمة ERP وCRM ومنصات SaaS، التعقيد أمر لا مفر منه. يساعد التفكير
        التصميمي المؤسسات على تبسيط العمليات من خلال مواءمة التقنية مع
        الاحتياجات التشغيلية الفعلية بدلًا من التركيز على الميزات فقط.
      </p>

      <h2>لماذا تفشل أنظمة ERP بدون تصميم يركز على المستخدم</h2>
      <p>
        تفشل العديد من مشاريع ERP ليس بسبب ضعف التقنية، بل بسبب سوء تجربة
        المستخدم ومقاومة الفرق الداخلية. غالبًا ما تواجه فرق المالية
        والعمليات والإدارة أنظمة لم تُصمم للاستخدام الواقعي اليومي.
      </p>

      <h2>تطبيق التفكير التصميمي في منصات SaaS وCRM</h2>
      <p>
        في بيئات SaaS وCRM، تؤثر تجربة المستخدم مباشرة على معدلات الاحتفاظ
        والتوسع. تقلل المنصات المصممة بعناية من وقت التدريب، وتسرّع عملية
        الإعداد، وتحسّن الكفاءة التشغيلية.
      </p>

      <h2>الأثر على الأعمال</h2>
      <p>
        تحقق المؤسسات التي تعتمد نهجًا تصميميًا في ERP وSaaS معدلات تبنٍ أعلى،
        وعائد استثمار أفضل، وتوافقًا أقوى بين الأهداف التجارية والتقنية.
      </p>

      <h2>الخلاصة</h2>
      <p>
        لم يعد التفكير التصميمي خيارًا إضافيًا لمنصات المؤسسات، بل أصبح متطلبًا
        استراتيجيًا لبناء أنظمة رقمية قابلة للتوسع ومستدامة.
      </p>
    `,
  },

  {
    id: 2,
    image: businessGrowthImage,
    title: "توسيع نطاق الأعمال في الإمارات باستخدام ERP وCRM ومنصات SaaS مخصصة",
    description:
      "كيف تقوم الشركات في الإمارات بتوسيع عملياتها عبر أنظمة ERP وCRM ومنصات SaaS مخصصة.",
    slug: "scaling-business-erp-crm-uae-ar",
    fullContent: `
      <h2>التحول الرقمي في دولة الإمارات</h2>
      <p>
        تعمل الشركات في الإمارات ضمن سوق سريع النمو وشديد التنافسية. ويتطلب
        النمو أنظمة مركزية توحد المالية والعمليات والمبيعات وتجربة العملاء.
      </p>

      <h2>ERP كعمود فقري للعمليات</h2>
      <p>
        توفر أنظمة ERP مصدرًا موحدًا للبيانات يشمل المحاسبة والمشتريات والموارد
        البشرية والعمليات، مما يمكّن الإدارة من اتخاذ قرارات دقيقة.
      </p>

      <h2>CRM لتعزيز الإيرادات وتجربة العملاء</h2>
      <p>
        لم تعد أنظمة CRM مقتصرة على تتبع العملاء المحتملين، بل أصبحت تدير
        رحلات العملاء، وتؤتمت التفاعل، وتقدم رؤى دقيقة لأداء المبيعات.
      </p>

      <h2>منصات SaaS المخصصة كميزة تنافسية</h2>
      <p>
        تتيح منصات SaaS المخصصة حل تحديات تشغيلية فريدة مع الحفاظ على
        القابلية للتوسع والأمان والمرونة.
      </p>

      <h2>إدارة تقنية المعلومات</h2>
      <p>
        توحيد ERP وCRM وSaaS تحت شريك تقني واحد يقلل المخاطر التشغيلية
        ويسرّع النمو الرقمي.
      </p>
    `,
  },

  {
    id: 3,
    image: It,
    title: "إدارة عمليات تقنية المعلومات بالكامل باستخدام السحابة وDevOps والأتمتة",
    description:
      "كيف تحقق المؤسسات قابلية التوسع والاستقرار عبر البنية السحابية وDevOps.",
    slug: "managed-it-operations-cloud-devops-ar",
    fullContent: `
      <h2>عمليات تقنية المعلومات كمحرك للنمو</h2>
      <p>
        لم تعد عمليات تقنية المعلومات مجرد وظيفة داعمة، بل أصبحت عنصرًا
        أساسيًا في قابلية التوسع والأمان واستمرارية الأعمال.
      </p>

      <h2>البنية السحابية وقابلية التوسع</h2>
      <p>
        تتيح منصات مثل AWS وAzure التوسع حسب الطلب، وتحسين الاستقرار،
        وتقليل التكاليف الرأسمالية.
      </p>

      <h2>DevOps والتسليم المستمر</h2>
      <p>
        تمكّن ممارسات DevOps الفرق من إطلاق التحديثات بسرعة، وتحسين التعاون،
        وزيادة موثوقية الأنظمة عبر الأتمتة والمراقبة.
      </p>

      <h2>الأمان والامتثال</h2>
      <p>
        يجب أن تلتزم عمليات تقنية المعلومات بمعايير أمان وامتثال صارمة،
        خاصة في القطاعات المنظمة داخل الإمارات.
      </p>

      <h2>إدارة تقنية المعلومات من طرف واحد</h2>
      <p>
        وجود شريك واحد يدير البنية التحتية والتطبيقات والأمان يضمن الأداء
        والاستقرار على المدى الطويل.
      </p>
    `,
  },

  {
    id: 4,
    image: erp,
    title: "تحديات تنفيذ أنظمة ERP في الإمارات (وكيفية تجنبها)",
    description:
      "نظرة معمقة على أكثر أخطاء تنفيذ ERP شيوعًا في الشركات الإماراتية وكيفية ضمان النجاح.",
    slug: "erp-implementation-challenges-uae-ar",
    fullContent: `
      <h2>لماذا تفشل مشاريع ERP في سوق الإمارات</h2>
      <p>
        تواجه مشاريع ERP في الإمارات تحديات إضافية مثل الامتثال التنظيمي،
        وتعدد الكيانات، وسرعة توسع الأعمال.
      </p>

      <h2>غياب مواءمة العمليات التجارية</h2>
      <p>
        يؤدي تنفيذ النظام دون إعادة هندسة العمليات إلى ضعف الكفاءة
        وزيادة مقاومة المستخدمين.
      </p>

      <h2>مشكلات ترحيل البيانات والتكامل</h2>
      <p>
        تجعل الأنظمة القديمة وجداول البيانات عملية الترحيل معقدة،
        ما يتطلب استراتيجية دقيقة وتكاملًا محكمًا.
      </p>

      <h2>تبني المستخدم وإدارة التغيير</h2>
      <p>
        التدريب وإشراك أصحاب المصلحة والتنفيذ المرحلي عناصر أساسية
        لنجاح اعتماد النظام.
      </p>

      <h2>ضمان نجاح ERP</h2>
      <p>
        يتطلب النجاح ملكية واضحة للمشروع، وشريك تنفيذ خبير،
        ودعمًا مستمرًا بعد الإطلاق.
      </p>
    `,
  },

  {
    id: 5,
    image: saas,
    title: "لماذا تتفوق منصات SaaS المخصصة على الحلول الجاهزة",
    description:
      "متى يكون تطوير SaaS مخصص الخيار الأفضل من حيث العائد والاستدامة.",
    slug: "custom-saas-vs-off-the-shelf-ar",
    fullContent: `
      <h2>قيود البرمجيات الجاهزة</h2>
      <p>
        تُصمم الحلول الجاهزة لتناسب الجميع، لكنها غالبًا تُجبر الشركات
        على تعديل عملياتها لتناسب النظام.
      </p>

      <h2>SaaS المخصص كأصل استراتيجي</h2>
      <p>
        تُبنى المنصات المخصصة وفق عملياتك ونماذج بياناتك،
        ما يؤدي إلى كفاءة أعلى وتميّز تنافسي.
      </p>

      <h2>التحكم في التوسع والأداء</h2>
      <p>
        تمنحك المنصات المخصصة السيطرة الكاملة على البنية
        واستراتيجيات التوسع وتحسين الأداء.
      </p>

      <h2>الأمان والامتثال</h2>
      <p>
        يتيح التطوير المخصص التحكم في سياسات الوصول
        والامتثال للمتطلبات التنظيمية.
      </p>

      <h2>العائد طويل المدى</h2>
      <p>
        رغم ارتفاع التكلفة الأولية، إلا أن SaaS المخصص
        يحقق عائدًا أعلى على المدى الطويل.
      </p>
    `,
  },

  {
    id: 6,
    image: crm,
    title: "نظام CRM كنظام أساسي وليس مجرد أداة مبيعات",
    description:
      "كيف أصبحت أنظمة CRM الحديثة محركًا للتشغيل وتجربة العملاء والنمو.",
    slug: "crm-beyond-sales-ar",
    fullContent: `
      <h2>تطور أنظمة CRM</h2>
      <p>
        لم تعد أنظمة CRM مجرد أدوات لإدارة جهات الاتصال،
        بل أصبحت منصات مركزية تربط التسويق والدعم والعمليات.
      </p>

      <h2>CRM وتجربة العملاء</h2>
      <p>
        يتيح CRM الحديث تتبع جميع تفاعلات العملاء
        وتحقيق تجربة مخصصة وسريعة الاستجابة.
      </p>

      <h2>الذكاء التشغيلي عبر CRM</h2>
      <p>
        توفر بيانات CRM رؤى حول سلوك العملاء
        ودورات البيع ونقاط التحسين.
      </p>

      <h2>تكامل CRM مع ERP وSaaS</h2>
      <p>
        يحقق التكامل رؤية موحدة للعملاء
        والعمليات والأداء المالي.
      </p>

      <h2>CRM كمحرك للنمو المستدام</h2>
      <p>
        الشركات التي تعتمد CRM كنظام أساسي
        تبني علاقات أقوى ونموًا قابلًا للتوسع.
      </p>
    `,
  },
];

const isArabic = lang === "ar";
const activeBlogs = isArabic ? blogPostsAr : blogPosts;

  const closeModal = () => {
    setSelectedBlog(null);
    document.body.style.overflow = "unset";
    navigate("/blog");
  };


useEffect(() => {
  if (slug) {
    const blog = activeBlogs.find((post) => post.slug === slug);
    if (blog) {
      setSelectedBlog(blog);
      document.body.style.overflow = "hidden";
    }
  } else {
    setSelectedBlog(null);
    document.body.style.overflow = "unset";
  }

  return () => {
    document.body.style.overflow = "unset";
  };
}, [slug, lang]);


  return (
    <>
  <Helmet>
  <title>
    {selectedBlog
      ? `${selectedBlog.title} - Jovera IT`
      : isArabic
      ? "المدونة - Jovera IT"
      : "Blog - Jovera IT"}
  </title>

  <meta
    name="description"
    content={
      selectedBlog
        ? selectedBlog.description
        : isArabic
        ? "تابع أحدث المقالات والمحتوى حول ERP و CRM و SaaS وعمليات تقنية المعلومات من Jovera IT."
        : "Browse the latest insights and blog articles on ERP, CRM, SaaS, and IT operations from Jovera IT."
    }
  />

  {/* Open Graph */}
  <meta
    property="og:title"
    content={
      selectedBlog
        ? `${selectedBlog.title} - Jovera IT`
        : "Blog - Jovera IT"
    }
  />
  <meta
    property="og:description"
    content={
      selectedBlog
        ? selectedBlog.description
        : "Explore expert articles on ERP, CRM, SaaS, and IT operations from Jovera IT."
    }
  />
  <meta property="og:type" content={selectedBlog ? "article" : "website"} />
  <meta
    property="og:url"
    content={`https://www.joveraits.ae/blog${selectedBlog ? `/${selectedBlog.slug}` : ""}`}
  />
  <meta
    property="og:image"
    content={
      selectedBlog
        ? selectedBlog.image
        : "%PUBLIC_URL%/logo.webp"
    }
  />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta
    name="twitter:title"
    content={
      selectedBlog
        ? `${selectedBlog.title} - Jovera IT`
        : "Blog - Jovera IT"
    }
  />
  <meta
    name="twitter:description"
    content={
      selectedBlog
        ? selectedBlog.description
        : "Explore expert articles on ERP, CRM, SaaS, and IT operations from Jovera IT."
    }
  />
  <meta
    name="twitter:image"
    content={
      selectedBlog
        ? selectedBlog.image
        : "%PUBLIC_URL%/logo.webp"
    }
  />

  {/* Favicon / Logo */}
  <link rel="icon" href="%PUBLIC_URL%/logo.webp" />
  <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo.webp" />
</Helmet>

    <main className="bg-[#0e0e0e] text-white pt-32 min-h-screen">
      {/* Hero */}
      <section className="px-6 md:px-16 lg:px-20  pb-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* <h1 className="text-4xl font-bold mb-6">
            ERP, SaaS, CRM & Enterprise IT Insights
          </h1> */}
          <p className="text-gray-400 text-lg leading-7 pt-10">
           {isArabic ? texts.ar.top: texts.en.top}
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="px-6 md:px-16 lg:px-20 pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* {blogPosts.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))} */}
          {activeBlogs.map((post) => (
  <BlogCard key={post.id} {...post} lang={lang} />
))}

        </div>
      </section>

      {/* Modal */}
      {selectedBlog && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="bg-[#1B1B1B] rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="overflow-y-auto max-h-[90vh] p-8 md:p-14">
              <img
                src={selectedBlog.image}
                alt={selectedBlog.title}
                className="w-full h-64 object-cover rounded-xl mb-10"
              />

              <h1
  className={`text-3xl md:text-4xl font-bold text-[#C99E18] mb-12  ${
    isArabic ? "text-right" : "text-left"
  }`}
>

                {selectedBlog.title}
              </h1>

              <div
  dir={isArabic ? "rtl" : "ltr"}
  className={`prose prose-invert prose-lg 
    prose-headings:text-[#C99E18]
    prose-headings:mt-14
    prose-headings:mb-6
    prose-p:text-gray-300
    prose-p:leading-8
    prose-p:mb-8
    [&>h2:not(:first-child)]:border-t
    [&>h2:not(:first-child)]:border-white/10
    [&>h2:not(:first-child)]:pt-12
    ${isArabic ? "text-right" : "text-left"}
  `}
                dangerouslySetInnerHTML={{
                  __html: selectedBlog.fullContent,
                }}
              />

              <div className="mt-16 text-center">
                <button
                  onClick={closeModal}
                  className="bg-[#C99E18] text-black px-12 py-4 rounded-full font-semibold hover:bg-[#b08e15]"
                >
                    {isArabic ? texts.ar.close: texts.en.close}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
    </>
  );
}
