import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const AccountDeletionFinance = ({ lang }) => {
  const isEnglish = lang === "en";

  const content = {
    en: {
      title: "Account and Data Deletion – Jovera Finance",
      effectiveDate: "1st January 2026",
      intro: `At Jovera Finance, we are committed to protecting your privacy and ensuring transparency in how your data is handled. 
If you no longer wish to use our services, you can request that your account and associated personal data be permanently deleted.`,
      sections: [
        {
          title: "How to Request Account Deletion",
          body: [
            "Visit: https://www.jovera.ae/Finance",
            "Enter your registered email address.",
            "Submit a formal request using the provided form.",
            "Our team will verify your identity and process your request within 7 business days.",
            "If you face any issues, you can also email us directly at info@jovera.ae with the subject line: 'Account Deletion Request'.",
          ],
        },
        {
          title: "Account Deletion Via Mobile App",
          body: [
            "You can directly submit a request from our mobile app for your account deletion.",
            "After a short verification of the request, your account and all related data will be deleted.",
          ],
        },
        {
          title: "Contact Us",
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
      title: "حذف الحساب والبيانات – جوفيرا للخدمات المالية",
      effectiveDate: "1 يناير 2026",
      intro: `نحن في جوفيرا للخدمات المالية نلتزم بحماية خصوصيتك وضمان الشفافية في كيفية التعامل مع بياناتك. 
إذا لم تعد ترغب في استخدام خدماتنا، يمكنك طلب حذف حسابك والبيانات الشخصية المرتبطة به بشكل دائم.`,
      sections: [
        {
          title: "كيفية طلب حذف الحساب",
          body: [
            "زيارة الرابط: https://www.jovera.ae/Finance",
            "إدخال عنوان بريدك الإلكتروني المُسجل.",
            "تقديم طلب رسمي من خلال النموذج المخصص.",
            "سيقوم فريقنا بالتحقق من هويتك ومعالجة طلبك خلال 7 أيام عمل.",
            'في حال واجهت أي مشكلة، يمكنك أيضًا مراسلتنا عبر البريد الإلكتروني على support@jovera.ae مع عنوان الموضوع: "طلب حذف الحساب".',
          ],
        },
        {
          title: "حذف الحساب عبر تطبيق الجوال",
          body: [
            "يمكنك تقديم طلب حذف حسابك مباشرةً من خلال تطبيق الجوال الخاص بنا.",
            "بعد التحقق السريع من الطلب، سيتم حذف حسابك وجميع البيانات المتعلقة به.",
          ],
        },
        {
          title: "تواصل معنا",
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

export default AccountDeletionFinance;
