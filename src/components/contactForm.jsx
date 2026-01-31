import { useState } from "react";
import createLeadFromWebsite from "../Apis/ContactApi";
import buttonArrow from "../assets/Home/buttonArrow.png";
import { MapPin, Phone, Mail } from 'lucide-react';
const TEXT = {
  en: {
    headerTitle: "Get In Touch With Us Today",
    headerDesc:
      "We're here to help! If you have any questions or would like to discuss how our IT, digital marketing, app, and web development services can benefit your business,",
    contactInfoTitle: "Contact Info",
    contactInfoDesc:
      "We're here to help! If you have any questions or would like to discuss how our IT, digital marketing, app, and web development services can benefit your business,",
    locationTitle: "Abu Dhabi",
    locationAddress: "Abu Dhabi (Head Office)\nAl Jazira Club - Tower A, Al Muroor St - floor 8",
    phoneTitle: "Phone Number",
    phoneNumbers: "800-644-000\n+97126311977",
    emailTitle: "Email Address",
    emailAddress: "info@joveraits.ae\ninfo@jovera.ae",
    formTitle: "Get In Touch",
    formDesc:
      "We're here to help! If you have any questions or would like to discuss how our IT, digital marketing, app, and web development services can benefit your business,",
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email Address",
    phone: "Phone Number",
    serviceType: "Service Type",
    serviceOptions: ["IT Services", "Digital Marketing", "App Development", "Web Development", "Consulting"],
    message: "Your Message",
    submit: "Free Consultation",
  },
  ar: {
    headerTitle: "تواصل معنا اليوم",
    headerDesc:
      "نحن هنا لمساعدتك! إذا كان لديك أي استفسارات أو ترغب في مناقشة كيفية استفادة عملك من خدمات تكنولوجيا المعلومات، التسويق الرقمي، تطوير التطبيقات وتطوير الويب لدينا،",
    contactInfoTitle: "معلومات الاتصال",
    contactInfoDesc:
      "نحن هنا لمساعدتك! إذا كان لديك أي استفسارات أو ترغب في مناقشة كيفية استفادة عملك من خدمات تكنولوجيا المعلومات، التسويق الرقمي، تطوير التطبيقات وتطوير الويب لدينا،",
    locationTitle: "أبوظبي",
    locationAddress: "أبوظبي (المكتب الرئيسي)\nنادي الجزيرة - برج A، شارع المارور - الطابق 8",
    phoneTitle: "رقم الهاتف",
    phoneNumbers: "800-644-000\n+97126311977",
    emailTitle: "البريد الإلكتروني",
    emailAddress: "info@joveraits.ae\ninfo@jovera.ae",
    formTitle: "تواصل معنا",
    formDesc:
      "نحن هنا لمساعدتك! إذا كان لديك أي استفسارات أو ترغب في مناقشة كيفية استفادة عملك من خدمات تكنولوجيا المعلومات، التسويق الرقمي، تطوير التطبيقات وتطوير الويب لدينا،",
    firstName: "الاسم الأول",
    lastName: "اسم العائلة",
    email: "البريد الإلكتروني",
    phone: "رقم الهاتف",
    serviceType: "نوع الخدمة",
    serviceOptions: ["خدمات تكنولوجيا المعلومات", "التسويق الرقمي", "تطوير التطبيقات", "تطوير الويب", "استشارات"],
    message: "رسالتك",
    submit: "استشارة مجانية",
  },
};


export default function ContactForm({ lang, formOnly }) {
  const t = lang === "en" ? TEXT.en : TEXT.ar;

  // Form state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const payload = {
      name: `${firstName} ${lastName}`,
      email,
      phone,
      description: message,
      product: "Alondra", // Always Alondra
    };

    try {
      await createLeadFromWebsite(payload);
      setLoading(false);
      alert(lang === "en" ? "form submitted successfully!" : "تم إرسال النموذج بنجاح");
      // Reset form
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setServiceType("");
      setMessage("");
    } catch (err) {
      console.error(err);
      setLoading(false);
      setError(lang === "en" ? "Failed to submit. Try again." : "فشل الإرسال. حاول مرة أخرى.");
    }
  };

  const renderForm = () => (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder={t.firstName}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          dir={lang === "ar" ? "rtl" : "ltr"}
          className="w-full bg-transparent border border-gray-600 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#C99E18]"
        />
        <input
          type="text"
          placeholder={t.lastName}
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          dir={lang === "ar" ? "rtl" : "ltr"}
          className="w-full bg-transparent border border-gray-600 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#C99E18]"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="email"
          placeholder={t.email}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          dir={lang === "ar" ? "ltr" : "rtl"}
          className={`w-full bg-transparent border border-gray-600 rounded-md px-4 py-3
          text-left text-white placeholder-gray-500
          focus:outline-none focus:border-[#C99E18]
          ${lang === "ar" ? "text-right" : "text-left"}`}
        />
        <input
          type="tel"
          placeholder={t.phone}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          dir={lang === "ar" ? "rtl" : "ltr"}
          className={`w-full bg-transparent border border-gray-600 rounded-md px-4 py-3
          text-white placeholder-gray-500
          focus:outline-none focus:border-[#C99E18]
          ${lang === "ar" ? "text-right" : "text-left"}`}
        />
      </div>

      <select
        value={serviceType}
        onChange={(e) => setServiceType(e.target.value)}
        dir={lang === "ar" ? "rtl" : "ltr"}
        className={`w-full bg-transparent border border-gray-600 rounded-md py-3 text-gray-500
          focus:outline-none focus:border-[#C99E18] appearance-none cursor-pointer
          ${lang === "ar" ? "pl-4 pr-4 text-right" : "pr-4 pl-4 text-left"}`}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23999'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: lang === "ar" ? "left 1rem center" : "right 1rem center",
          backgroundSize: "1.5rem",
        }}
      >
        <option value="">{t.serviceType}</option>
        {t.serviceOptions.map((opt, idx) => (
          <option key={idx} value={opt}>
            {opt}
          </option>
        ))}
      </select>

      <textarea
        rows="5"
        placeholder={t.message}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        dir={lang === "ar" ? "rtl" : "ltr"}
        className="w-full bg-transparent border border-gray-600 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#C99E18] resize-none"
      ></textarea>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="bg-[#866910] text-white font-semibold pl-8 py-1 rounded-full flex items-center gap-2 transition-colors"
      >
        {lang === "en" ? (
          <>
            {loading ? "Submitting..." : t.submit}
            <img src={buttonArrow} alt="" />
          </>
        ) : (
          <>
            <img src={buttonArrow} alt="" />
            {loading ? "جارٍ الإرسال..." : t.submit}
          </>
        )}
      </button>
    </form>
  );

  if (formOnly) {
    return (
      <section className="bg-[1B1B1B] text-white py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div>
            <div className="bg-neutral-900 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4" style={{ color: "#C99E18" }}>
                {t.formTitle}
              </h3>
              <p className="text-gray-400 text-sm mb-6">{t.formDesc}</p>
              {renderForm()}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[1B1B1B] text-white py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: "#C99E18" }}>
            {t.headerTitle}
          </h2>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">{t.headerDesc}</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column */}
          <div className=" bg-black text-white ">
    

      {/* Contact Info Section */}
      <div className="max-w-4xl mx-auto  rounded-2xl p-12">
        <h2 className="text-4xl font-bold mb-6">{t.contactInfoTitle}</h2>
        <p className="text-gray-400 text-base leading-relaxed mb-12">
          {t.contactInfoDesc}
        </p>

        <div className="space-y-12">
          {/* Location */}
          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center">
                <MapPin className="w-8 h-8 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">{t.locationTitle}</h3>
              <p className="text-gray-300 text-base whitespace-pre-line leading-relaxed">
                {t.locationAddress}
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center">
                <Phone className="w-8 h-8 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">{t.phoneTitle}</h3>
              <div className="text-gray-300 text-base whitespace-pre-line leading-relaxed">
                {t.phoneNumbers}
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center">
                <Mail className="w-8 h-8 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">{t.emailTitle}</h3>
              <div className="text-gray-300 text-base whitespace-pre-line leading-relaxed">
                {t.emailAddress}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

          {/* Right Column */}
          <div className="bg-neutral-900 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4" style={{ color: "#C99E18" }}>
              {t.formTitle}
            </h3>
            <p className="text-gray-400 text-sm mb-6">{t.formDesc}</p>
            {renderForm()}
          </div>
        </div>
      </div>
    </section>
  );
}
