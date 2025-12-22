import React from "react";
import { Phone, Mail, MapPin} from 'lucide-react';
import { MdEmail } from "react-icons/md";

const TermsAndConditions = ({ lang }) => {
  const isEnglish = lang === "en";

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Content Wrapper */}
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

        {/* Intro */}
        <section className="border-b border-gray-700 pb-8">
          <p className="leading-relaxed text-gray-200">
            {isEnglish ? (
              <>
                Welcome to{" "}
                <strong>
                  JOVERA, BROKER – SOLE PROPRIETORSHIP L.L.C.
                </strong>{" "}
                (“we,” “our,” or “us”). By accessing or using our website
                <strong> www.jovera.ae</strong> or our mobile application
                (“App”), you agree to be bound by these Terms & Conditions. If
                you do not agree, you must stop using our services immediately.
              </>
            ) : (
              <>
                مرحبًا بكم في{" "}
                <strong>
                  JOVERA، وسيط – مؤسسة فردية ذات مسؤولية محدودة
                </strong>
                . عند دخولك أو استخدامك لموقعنا الإلكتروني{" "}
                <strong>www.jovera.ae</strong> أو تطبيق الهاتف المحمول
                (“التطبيق”)، فإنك توافق على الالتزام بهذه الشروط والأحكام.
                في حال عدم الموافقة، يجب عليك التوقف فورًا عن استخدام خدماتنا.
              </>
            )}
          </p>
        </section>

        {/* 1 */}
        <section className="border-b border-gray-700 pb-8">
          <h2 className="text-xl font-semibold mb-3">
            {isEnglish ? "1. Eligibility" : "1. الأهلية"}
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-200">
            <li>
              {isEnglish
                ? "You must be 18 years or older under UAE law."
                : "يجب ألا يقل عمرك عن 18 عامًا وفقًا لقوانين دولة الإمارات العربية المتحدة."}
            </li>
            <li>
              {isEnglish
                ? "All information provided must be accurate and truthful."
                : "يجب أن تكون جميع المعلومات المقدمة دقيقة وصحيحة."}
            </li>
          </ul>
        </section>

        {/* 2 */}
        <section className="border-b border-gray-700 pb-8">
          <h2 className="text-xl font-semibold mb-3">
            {isEnglish ? "2. Our Services" : "2. خدماتنا"}
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-200">
            <li>
              {isEnglish ? "Mortgage loan solutions" : "حلول القروض العقارية"}
            </li>
            <li>
              {isEnglish
                ? "Business loan advisory and facilitation"
                : "الاستشارات وتسهيل القروض التجارية"}
            </li>
            <li>
              {isEnglish
                ? "Personal loan advisory and facilitation"
                : "الاستشارات وتسهيل القروض الشخصية"}
            </li>
            <li>
              {isEnglish
                ? "Debt restructuring and financial consultancy"
                : "إعادة هيكلة الديون والاستشارات المالية"}
            </li>
          </ul>

          <p className="mt-4 text-sm text-gray-400">
            {isEnglish ? (
              <>
                ⚠️ <strong>Disclaimer:</strong> We are not a bank or direct
                lender. Loan approvals are subject to banks.
              </>
            ) : (
              <>
                ⚠️ <strong>تنويه:</strong> نحن لسنا بنكًا أو جهة إقراض مباشرة،
                وتخضع الموافقات لشروط البنوك والمؤسسات المالية.
              </>
            )}
          </p>
        </section>

        {/* 3 */}
        <section className="border-b border-gray-700 pb-8">
          <h2 className="text-xl font-semibold mb-3">
            {isEnglish ? "3. User Responsibilities" : "3. مسؤوليات المستخدم"}
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-200">
            <li>
              {isEnglish
                ? "Provide accurate and updated information"
                : "تقديم معلومات دقيقة ومحدثة"}
            </li>
            <li>
              {isEnglish
                ? "Avoid fraudulent or unlawful activities"
                : "عدم استخدام الخدمات لأغراض غير قانونية أو احتيالية"}
            </li>
            <li>
              {isEnglish
                ? "Maintain confidentiality of login details"
                : "الحفاظ على سرية بيانات الدخول"}
            </li>
            <li>
              {isEnglish
                ? "Comply with UAE AML regulations"
                : "الالتزام بلوائح مكافحة غسل الأموال في دولة الإمارات"}
            </li>
          </ul>
        </section>

        {/* 4 */}
        <section className="border-b border-gray-700 pb-8">
          <h2 className="text-xl font-semibold mb-3">
            {isEnglish
              ? "4. Loan Applications & Approvals"
              : "4. طلبات القروض والموافقات"}
          </h2>
          <p className="text-gray-200">
            {isEnglish
              ? "Submitting a loan request does not guarantee approval. All decisions are made by lenders."
              : "تقديم طلب قرض لا يضمن الموافقة، حيث تعود جميع القرارات للبنوك والمؤسسات المالية."}
          </p>
        </section>

        {/* 5 */}
        <section className="border-b border-gray-700 pb-8">
          <h2 className="text-xl font-semibold mb-3">
            {isEnglish ? "5. Fees & Charges" : "5. الرسوم والتكاليف"}
          </h2>
          <p className="text-gray-200">
            {isEnglish
              ? "Any applicable fees will be clearly communicated in writing."
              : "سيتم توضيح أي رسوم مطبقة بشكل واضح وخطي قبل تقديم الخدمة."}
          </p>
        </section>

        {/* 6–13 condensed for clarity */}
        <section className="border-b border-gray-700 pb-8">
          <h2 className="text-xl font-semibold mb-3">
            {isEnglish
              ? "6–13. Legal & Compliance"
              : "6–13. الجوانب القانونية والامتثال"}
          </h2>
          <p className="text-gray-200">
            {isEnglish
              ? "These sections cover intellectual property, liability, indemnity, privacy, termination, governing law, and updates."
              : "تشمل هذه البنود الملكية الفكرية، تحديد المسؤولية، التعويض، الخصوصية، إنهاء الخدمة، القانون الحاكم، والتحديثات."}
          </p>
        </section>

        {/* Contact */}
   {/* Contact */}
<section>
  <h2 className="text-xl font-semibold mb-3">
    {isEnglish ? "14. Contact Us" : "14. تواصل معنا"}
  </h2>

  <div className="text-gray-200 space-y-3">
    <strong className="block">
      {isEnglish
        ? "JOVERA, BROKER – SOLE PROPRIETORSHIP L.L.C."
        : "جوفيرا، وسيط – مؤسسة فردية ذات مسؤولية محدودة"}
    </strong>

    {/* Email */}
    <div className="flex items-center gap-2" >
      <Mail size={18} />
      <span>info@jovera.ae</span>
    </div>

    {/* Phone (FORCED LTR so it never reverses) */}
    <div className="flex items-center gap-2" >
      <Phone size={18} />
      <span>+971 2 631 1977</span>
    </div>

    {/* Address (respects language direction) */}
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
