import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const TermsAndConditionsFinance = ({ lang }) => {
  const isEnglish = lang === "en";

  // Content object
  const content = {
    en: {
      title: "Terms & Conditions",
      effectiveDate: "1st January 2026",
      intro: `Welcome to Jovera Finance LLC (“we”, “our”, or “us”). By accessing or using our website www.jovera.ae/Finance or mobile app, you agree to be bound by these Terms & Conditions. If you do not agree, please stop using our services immediately.`,
      sections: [
        {
          title: "1. Eligibility",
          body: [
            "You must be 18 years or older.",
            "All information provided must be accurate and truthful.",
          ],
        },
        {
          title: "2. Our Services",
          body: [
            "Mortgage loan solutions",
            "Business loan advisory and facilitation",
            "Personal loan advisory and facilitation",
            "Debt restructuring and financial consultancy",
          ],
          note: "⚠️ Disclaimer: We are not a bank or direct lender. Loan approvals are subject to banks and financial institutions.",
        },
        {
          title: "3. User Responsibilities",
          body: [
            "Provide accurate and updated information",
            "Avoid fraudulent or unlawful activities",
            "Maintain confidentiality of login details",
            "Comply with UAE AML regulations",
          ],
        },
        {
          title: "4. Loan Applications & Approvals",
          body: ["Submitting a loan request does not guarantee approval. All decisions are made by lenders."],
        },
        {
          title: "5. Fees & Charges",
          body: ["Any applicable fees will be clearly communicated in writing."],
        },
        {
          title: "6–13. Legal & Compliance",
          body: [
            "These sections cover intellectual property, liability, indemnity, privacy, termination, governing law, and updates.",
          ],
        },
        {
          title: "14. Contact Us",
          contact: true,
        },
      ],
      contact: {
        name: "Jovera Finance LLC",
        email: "info@jovera.ae",
        phone: "+971 2 631 1977",
        address: "Abu Dhabi, UAE",
      },
    },

    ar: {
      title: "الشروط والأحكام",
      effectiveDate: "1 يناير 2026",
      intro: `مرحبًا بكم في جوفيرا فاينانس ذ.م.م (نحن، لنا). عند دخولك أو استخدامك لموقعنا www.jovera.ae/Finance أو التطبيق، فإنك توافق على الالتزام بهذه الشروط والأحكام. في حال عدم الموافقة، يجب عليك التوقف فورًا عن استخدام خدماتنا.`,
      sections: [
        {
          title: "1. الأهلية",
          body: [
            "يجب ألا يقل عمرك عن 18 عامًا.",
            "يجب أن تكون جميع المعلومات المقدمة دقيقة وصحيحة.",
          ],
        },
        {
          title: "2. خدماتنا",
          body: [
            "حلول القروض العقارية",
            "الاستشارات وتسهيل القروض التجارية",
            "الاستشارات وتسهيل القروض الشخصية",
            "إعادة هيكلة الديون والاستشارات المالية",
          ],
          note: "⚠️ تنويه: نحن لسنا بنكًا أو جهة إقراض مباشرة، وتخضع الموافقات لشروط البنوك والمؤسسات المالية.",
        },
        {
          title: "3. مسؤوليات المستخدم",
          body: [
            "تقديم معلومات دقيقة ومحدثة",
            "عدم استخدام الخدمات لأغراض غير قانونية أو احتيالية",
            "الحفاظ على سرية بيانات الدخول",
            "الالتزام بلوائح مكافحة غسل الأموال في دولة الإمارات",
          ],
        },
        {
          title: "4. طلبات القروض والموافقات",
          body: ["تقديم طلب قرض لا يضمن الموافقة، حيث تعود جميع القرارات للبنوك والمؤسسات المالية."],
        },
        {
          title: "5. الرسوم والتكاليف",
          body: ["سيتم توضيح أي رسوم مطبقة بشكل واضح وخطي قبل تقديم الخدمة."],
        },
        {
          title: "6–13. الجوانب القانونية والامتثال",
          body: [
            "تشمل هذه البنود الملكية الفكرية، تحديد المسؤولية، التعويض، الخصوصية، إنهاء الخدمة، القانون الحاكم، والتحديثات.",
          ],
        },
        {
          title: "14. تواصل معنا",
          contact: true,
        },
      ],
      contact: {
        name: "جوفيرا فاينانس ذ.م.م",
        email: "info@jovera.ae",
        phone: "+971 2 631 1977",
        address: "أبوظبي، الإمارات العربية المتحدة",
      },
    },
  };

  const current = isEnglish ? content.en : content.ar;

  return (
    <div className="min-h-screen bg-black text-white py-20 px-6 md:px-10 lg:px-16" dir={isEnglish ? "ltr" : "rtl"}>
      {/* Header */}
      <div className="border-b border-gray-700 pb-6 mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{current.title}</h1>
        <p className="text-sm text-gray-300">
          <strong>{isEnglish ? "Effective Date:" : "تاريخ السريان:"}</strong> {current.effectiveDate}
        </p>
      </div>

      {/* Sections */}
      <div className="space-y-8">
        <section>
          <p className="text-gray-200 leading-relaxed">{current.intro}</p>
          <hr className="border-gray-700 mt-4" />
        </section>

        {current.sections.map((section, index) => (
          <section key={index}>
            <h2 className="text-xl font-semibold mb-3">{section.title}</h2>

            {section.body && (
              <ul className="list-disc list-inside text-gray-200 space-y-2">
                {section.body.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}

            {section.note && <p className="mt-2 text-sm text-gray-400">{section.note}</p>}

            {section.contact && (
              <div className="text-gray-200 space-y-3 mt-2">
                <strong>{current.contact.name}</strong>
                <div className="flex items-center gap-2">
                  <Mail size={18} /> <span>{current.contact.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={18} /> <span>{current.contact.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={18} /> <span>{current.contact.address}</span>
                </div>
              </div>
            )}

            {/* Line after section */}
            <hr className="border-gray-700 mt-6" />
          </section>
        ))}
      </div>
    </div>
  );
};

export default TermsAndConditionsFinance;
