import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const TermsAndConditions = ({ lang }) => {
  const isEnglish = lang === "en";

  return (
    <div className="min-h-screen bg-black text-white">
      <div
        className={`mx-auto px-6 md:px-10 lg:px-16 py-[200px] space-y-10 ${
          isEnglish ? "text-left" : "text-right"
        }`}
        dir={isEnglish ? "ltr" : "rtl"}
      >
        {/* Header */}
        <div className="border-b border-gray-700 pb-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {isEnglish ? "Terms & Conditions" : "الشروط والأحكام"}
          </h1>
          <p className="text-sm text-gray-300">
            {isEnglish ? (
              <>
                <strong>Effective Date:</strong> 12th January 2023 <br />
                <strong>Last Updated:</strong> 27th August 2025
              </>
            ) : (
              <>
                <strong>تاريخ النفاذ:</strong> 12 يناير 2023 <br />
                <strong>آخر تحديث:</strong> 27 أغسطس 2025
              </>
            )}
          </p>
        </div>

        {/* Introduction */}
        <section className="border-b border-gray-700 pb-8">
          <p className="leading-relaxed text-gray-200">
            {isEnglish ? (
              <>
                Welcome to{" "}
                <strong>JOVERA IT & Digital Solutions</strong> (“we,” “our,” or “us”). By
                accessing or using our website <strong>www.joveraits.ae</strong> or
                our digital services and applications (“Services”), you agree
                to comply with these Terms & Conditions. If you do not agree,
                please discontinue use immediately.
              </>
            ) : (
              <>
                مرحبًا بكم في{" "}
                <strong>جوفيرا لحلول تقنية المعلومات والخدمات الرقمية</strong>
                . عند دخولك أو استخدامك لموقعنا الإلكتروني{" "}
                <strong>www.joveraits.ae</strong> أو خدماتنا الرقمية والتطبيقات،
                فإنك توافق على الالتزام بهذه الشروط والأحكام. في حال عدم
                الموافقة، يرجى التوقف فورًا عن الاستخدام.
              </>
            )}
          </p>
        </section>

        {/* 1. Eligibility */}
        <section className="border-b border-gray-700 pb-8">
          <h2 className="text-xl font-semibold mb-3">
            {isEnglish ? "1. Eligibility" : "1. الأهلية"}
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-200">
            <li>
              {isEnglish
                ? "You must be 18 years or older and legally able to enter into agreements."
                : "يجب ألا يقل عمرك عن 18 عامًا وأن تكون قادرًا قانونيًا على الدخول في الاتفاقيات."}
            </li>
            <li>
              {isEnglish
                ? "All information provided to us must be accurate and truthful."
                : "يجب أن تكون جميع المعلومات المقدمة دقيقة وصحيحة."}
            </li>
          </ul>
        </section>

        {/* 2. Our Services */}
        <section className="border-b border-gray-700 pb-8">
          <h2 className="text-xl font-semibold mb-3">
            {isEnglish ? "2. Our Services" : "2. خدماتنا"}
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-200">
            <li>
              {isEnglish
                ? "Web and mobile application development"
                : "تطوير مواقع الويب وتطبيقات الجوال"}
            </li>
            <li>
              {isEnglish
                ? "Digital marketing and social media management"
                : "التسويق الرقمي وإدارة وسائل التواصل الاجتماعي"}
            </li>
            <li>
              {isEnglish
                ? "IT infrastructure and office setup"
                : "إعداد البنية التحتية لتقنية المعلومات للمكاتب"}
            </li>
            <li>
              {isEnglish
                ? "Custom software and automation solutions"
                : "حلول برمجية مخصصة وأتمتة الأعمال"}
            </li>
          </ul>

          <p className="mt-4 text-sm text-gray-400">
            {isEnglish ? (
              <>
                ⚠️ <strong>Disclaimer:</strong> We provide IT and digital services, but we
                cannot guarantee results for third-party platforms, software, or
                marketing campaigns.
              </>
            ) : (
              <>
                ⚠️ <strong>تنويه:</strong> نحن نقدم خدمات تقنية المعلومات والخدمات الرقمية،
                ولا يمكننا ضمان النتائج على المنصات الخارجية أو البرامج أو
                حملات التسويق.
              </>
            )}
          </p>
        </section>

        {/* 3. User Responsibilities */}
        <section className="border-b border-gray-700 pb-8">
          <h2 className="text-xl font-semibold mb-3">
            {isEnglish ? "3. User Responsibilities" : "3. مسؤوليات المستخدم"}
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-200">
            <li>
              {isEnglish
                ? "Provide accurate and updated information for project requirements."
                : "تقديم معلومات دقيقة ومحدثة لمتطلبات المشاريع."}
            </li>
            <li>
              {isEnglish
                ? "Use our services for lawful and legitimate purposes only."
                : "استخدام خدماتنا لأغراض قانونية وشرعية فقط."}
            </li>
            <li>
              {isEnglish
                ? "Maintain confidentiality of login credentials."
                : "الحفاظ على سرية بيانات الدخول."}
            </li>
            <li>
              {isEnglish
                ? "Ensure compliance with applicable IT and data protection laws."
                : "الالتزام بالقوانين المتعلقة بتقنية المعلومات وحماية البيانات."}
            </li>
          </ul>
        </section>

        {/* 4. Project Delivery */}
        <section className="border-b border-gray-700 pb-8">
          <h2 className="text-xl font-semibold mb-3">
            {isEnglish ? "4. Project Delivery & Timelines" : "4. تسليم المشاريع والجداول الزمنية"}
          </h2>
          <p className="text-gray-200">
            {isEnglish
              ? "We strive to deliver projects on time. Delays may occur due to third-party dependencies or unforeseen circumstances."
              : "نسعى لتسليم المشاريع في الوقت المحدد. قد تحدث تأخيرات بسبب التبعيات الخارجية أو الظروف غير المتوقعة."}
          </p>
        </section>

        {/* 5. Fees & Payment */}
        <section className="border-b border-gray-700 pb-8">
          <h2 className="text-xl font-semibold mb-3">
            {isEnglish ? "5. Fees & Payment" : "5. الرسوم والدفع"}
          </h2>
          <p className="text-gray-200">
            {isEnglish
              ? "All fees will be clearly communicated before the start of any service. Payments must be completed as agreed."
              : "سيتم توضيح جميع الرسوم قبل بدء أي خدمة. يجب إتمام المدفوعات وفقًا للاتفاق."}
          </p>
        </section>

        {/* 6–10 Legal & Compliance */}
        <section className="border-b border-gray-700 pb-8">
          <h2 className="text-xl font-semibold mb-3">
            {isEnglish
              ? "6–10. Legal & Compliance"
              : "6–10. الجوانب القانونية والامتثال"}
          </h2>
          <p className="text-gray-200">
            {isEnglish
              ? "These sections cover intellectual property, liability, indemnity, privacy, termination, governing law, and updates related to our IT and digital services."
              : "تشمل هذه البنود الملكية الفكرية، المسؤولية، التعويض، الخصوصية، إنهاء الخدمة، القانون الحاكم، والتحديثات المتعلقة بخدماتنا الرقمية وتقنية المعلومات."}
          </p>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-xl font-semibold mb-3">
            {isEnglish ? "11. Contact Us" : "11. تواصل معنا"}
          </h2>

          <div className="text-gray-200 space-y-3">
            <strong className="block">
              {isEnglish
                ? "JOVERA IT & Digital Solutions"
                : "جوفيرا لحلول تقنية المعلومات والخدمات الرقمية"}
            </strong>

            <div className="flex items-center gap-2">
              <Mail size={18} />
              <span>info@joveraits.ae</span>
            </div>

            <div className="flex items-center gap-2">
              <Phone size={18} />
              <span>+971 2 631 1977</span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin size={18} />
              <span>
                {isEnglish
                  ? "Abu Dhabi, UAE"
                  : "أبوظبي، الإمارات العربية المتحدة"}
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
