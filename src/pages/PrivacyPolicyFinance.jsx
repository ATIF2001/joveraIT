import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const PrivacyPolicyFinance = ({ lang = "en" }) => {
  const isEnglish = lang === "en";

  const content = {
    en: {
      title: "Privacy Policy – Jovera Finance",
      effectiveDate: "1st January 2026",
      intro: `At Jovera Finance, we are committed to protecting your privacy. This Privacy Policy explains how we handle any personal data you choose to provide while using our website or mobile app. 
By using our website https://www.jovera.ae/Finance, you agree to the terms outlined in this Privacy Policy and our Terms and Conditions.`,
      sections: [
        {
          title: "1. Information Collection (Voluntary & Optional)",
          body: [
            "Full name",
            "Email address",
            "Contact number",
            "Financial account information or requested services",
            "FCM Token, if notifications are enabled by the user",
          ],
          note: "None of this information is collected automatically or without your consent. Certain services may require relevant information for processing.",
        },
        {
          title: "2. How We Use the Information",
          body: [
            "To respond to your queries or requests",
            "To process requested financial services",
            "To enhance your user experience",
            "To communicate important updates or relevant service information",
          ],
          note: "Your data will not be sold, rented, or shared with third parties unless required for the service or by law.",
        },
        {
          title: "3. Your Consent",
          body: [
            "By voluntarily submitting information via forms or applications, you consent to the processing of your data for the purposes mentioned above.",
            "You may request to view, edit, or delete your information by contacting us directly.",
          ],
        },
        {
          title: "4. Cookies",
          body: [
            "Our website uses cookies to optimize functionality and enhance your experience.",
            "You may accept or reject cookies via your browser settings. Rejecting cookies may limit some features but basic access remains unaffected.",
          ],
        },
        {
          title: "5. Payment Information",
          body: [
            "For services requiring payment, we use secure, third-party payment gateways.",
            "We do not store or access your card or banking details. Payments are encrypted and processed externally.",
          ],
        },
        {
          title: "6. Data Security",
          body: [
            "We take strong measures to protect the confidentiality and integrity of your personal data, including SSL encryption and limited access to authorized personnel.",
          ],
        },
        {
          title: "7. External Links",
          body: [
            "Our website may include links to third-party sites.",
            "We are not responsible for the privacy practices or content of these sites.",
          ],
        },
        {
          title: "8. Fraud Protection and Phishing",
          body: [
            "We will never ask you to disclose sensitive information like OTPs, passwords, or full card details via email or phone.",
            "Report suspicious messages to our support email.",
          ],
        },
        {
          title: "Contact Information",
          contact: true,
        },
      ],
      contact: {
        name: "Jovera Finance LLC",
        email: "support@jovera.ae",
        phone: "+971 50 123 4567",
        address: "Abu Dhabi, UAE",
      },
    },

    ar: {
      title: "سياسة الخصوصية – جوفيرا للخدمات المالية",
      effectiveDate: "1 يناير 2026",
      intro: `نحن في جوفيرا للخدمات المالية نلتزم بحماية خصوصيتك. توضح سياسة الخصوصية هذه كيفية تعاملنا مع البيانات الشخصية التي تختار تقديمها أثناء استخدامك لموقعنا أو تطبيق الهاتف المحمول. 
باستخدامك لموقعنا https://www.jovera.ae/Finance، فإنك توافق على الشروط الموضحة في سياسة الخصوصية هذه وشروط الاستخدام.`,
      sections: [
        {
          title: "1. جمع المعلومات (اختياري وطوعي)",
          body: [
            "الاسم الكامل",
            "عنوان البريد الإلكتروني",
            "رقم الهاتف",
            "بيانات الحساب المالي أو الخدمات المطلوبة",
            "رمز إشعارات FCM، إذا قام المستخدم بتمكين الإشعارات",
          ],
          note: "لا يتم جمع أي من هذه المعلومات تلقائيًا أو بدون موافقتك. قد تتطلب بعض الخدمات تقديم المعلومات ذات الصلة لمعالجتها.",
        },
        {
          title: "2. كيفية استخدامنا للمعلومات",
          body: [
            "الرد على استفساراتك أو طلباتك",
            "معالجة الخدمات المالية إذا تم اختيارها",
            "تحسين تجربتك كمستخدم",
            "إبلاغك بالتحديثات أو المعلومات المتعلقة بالخدمة",
          ],
          note: "لن يتم بيع أو تأجير أو مشاركة بياناتك مع أي طرف ثالث إلا إذا كان ذلك مطلوبًا لتقديم الخدمة أو بموجب القانون.",
        },
        {
          title: "3. موافقتك",
          body: [
            "من خلال تقديم معلوماتك طوعاً عبر النماذج أو التطبيقات، فإنك توافق على معالجة واستخدام بياناتك للأغراض المذكورة أعلاه.",
            "يمكنك طلب عرض أو تعديل أو حذف معلوماتك من خلال التواصل معنا مباشرة.",
          ],
        },
        {
          title: "4. ملفات تعريف الارتباط (الكوكيز)",
          body: [
            "يستخدم موقعنا ملفات تعريف الارتباط لتحسين الأداء وتجربة التصفح.",
            "يمكنك قبول أو رفض الكوكيز من خلال إعدادات المتصفح. رفض الكوكيز قد يحد من بعض الميزات، لكن الوصول الأساسي للموقع سيظل متاحًا.",
          ],
        },
        {
          title: "5. معلومات الدفع",
          body: [
            "بالنسبة للخدمات التي تتطلب دفعًا، نستخدم بوابات دفع آمنة تابعة لجهات خارجية.",
            "لا نقوم بتخزين أو الوصول إلى تفاصيل بطاقتك أو حسابك البنكي. تتم معالجة المدفوعات بشكل مشفر وآمن.",
          ],
        },
        {
          title: "6. أمان البيانات",
          body: [
            "نتخذ تدابير قوية لحماية سرية وسلامة بياناتك الشخصية، بما في ذلك تشفير SSL والوصول المحدود للموظفين المخولين.",
          ],
        },
        {
          title: "7. الروابط الخارجية",
          body: [
            "قد يحتوي موقعنا على روابط لمواقع طرف ثالث.",
            "نحن لسنا مسؤولين عن سياسات الخصوصية أو محتوى هذه المواقع.",
          ],
        },
        {
          title: "8. الحماية من الاحتيال والتصيد",
          body: [
            "لن نطلب منك مشاركة معلومات حساسة مثل كلمات المرور أو OTP أو بيانات البطاقة الكاملة عبر البريد الإلكتروني أو الهاتف.",
            "يرجى الإبلاغ عن الرسائل المشبوهة عبر بريد الدعم.",
          ],
        },
        {
          title: "معلومات الاتصال",
          contact: true,
        },
      ],
      contact: {
        name: "جوفيرا للخدمات المالية",
        email: "support@jovera.ae",
        phone: "+971 50 123 4567",
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

            <hr className="border-gray-700 mt-6" />
          </section>
        ))}
      </div>
    </div>
  );
};

export default PrivacyPolicyFinance;
