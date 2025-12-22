import { useState , useEffect } from "react";
import createLeadFromWebsite from "../Apis/ContactApi";

export default function ContactForm({ lang, options}) {
  
  // form content
  const texts = {
    en: {
      title: "Meet Jovera Group",
      subtitle: "Enter your details",
      fullname: "Full Name",
      email: "Email",
      phone: "Phone",
      service: "Service",
      message: "Message",
      register: "Register Now",
      success: "Your request has been submitted successfully!",
      error: "Something went wrong. Please try again.",
    },

    ar: {
      title: "تعرف على مجموعة جوفيرا",
      subtitle: "أدخل بياناتك",
      fullname: "الاسم الكامل",
      email: "البريد الإلكتروني",
      phone: "رقم الهاتف",
      service: "الخدمة",
      message: "الرسالة",
      register: "سجل الآن",
      success: "تم إرسال طلبك بنجاح!",
      error: "حدث خطأ ما، يرجى المحاولة مرة أخرى",
    },
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");


//Language changer
  const t = (key) => (lang === "en" ? texts.en[key] : texts.ar[key]);

// Handle change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

// Handle submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMsg("");
    setErrorMsg("");

    try {
      setLoading(true);

      await createLeadFromWebsite({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        product: formData.service,
        description: formData.message,
      });

      setSuccessMsg(t("success"));
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error("Lead submission failed", error);
      setErrorMsg(t("error"));
    } finally {
      setLoading(false);
    }
  };


//Remove success/error message after 5 sec
  useEffect(() => {
  if (successMsg || errorMsg) {
    const timer = setTimeout(() => {
      setSuccessMsg("");
      setErrorMsg("");
    }, 5000);

    return () => clearTimeout(timer);
  }
}, [successMsg, errorMsg]);


  return (
    <div
      className={`w-full max-w-[700px] mx-auto rounded-xl p-6 md:p-8 flex items-center justify-center bg-gradient-to-r from-[#D7AA47] to-[#715925] ${
        lang === "en" ? "text-left" : "text-right"
      }`}
    >
      <div className="w-full max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-1">
          {t("title")}
        </h1>

        <p className="text-lg md:text-xl text-white mb-8 opacity-90">
          {t("subtitle")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-white text-base mb-2">
              {t("fullname")}
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-xl bg-[#F4D98F] text-gray-800 placeholder-gray-500 text-sm"
              required
            />
          </div>

          <div>
            <label className="block text-white text-base mb-2">
              {t("email")}
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-xl bg-[#F4D98F] text-gray-800 placeholder-gray-500 text-sm"
              required
            />
          </div>

          <div>
            <label className="block text-white text-base mb-2">
              {t("phone")}
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 rounded-xl bg-[#F4D98F] text-gray-800 placeholder-gray-500 text-sm"
            />
          </div>

          {/* <div>
            <label className="block text-white text-base mb-2">
              {t("service")}
            </label>
            <input
              type="text"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full p-3 rounded-xl bg-[#F4D98F] text-gray-800 placeholder-gray-500 text-sm"
            />
          </div> */}
          <div>
  <label className="block text-white text-base mb-2">
    {t("service")}
  </label>
<div className="relative">
  <select
  name="service"
  value={formData.service}
  onChange={handleChange}
  className="w-full p-3 rounded-xl bg-[#F4D98F] text-white text-sm appearance-none pr-10 cursor-pointer"
  required
>
  <option value="" disabled className="text-white">
    {lang === "en" ? "Select a service" : "اختر الخدمة"}
  </option>

  {options.map((opt) => (
    <option key={opt.key} value={opt.key} className="text-gray-800">
      {lang === "en" ? opt.value.en : opt.value.ar}
    </option>
  ))}
</select>


  {/* Arrow icon */}
  <span className="absolute top-1/2 right-3 -translate-y-1/2 pointer-events-none text-white">
    ▼
  </span>
</div>

</div>

        </div>

        <div className="mb-6">
          <label className="block text-white text-base mb-2">
            {t("message")}
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 rounded-xl bg-[#F4D98F] text-gray-800 placeholder-gray-500 text-sm h-32 resize-none"
          />
        </div>

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="border-2 border-white relative overflow-hidden bg-white text-[#C8982A] font-bold text-lg 
                     py-3 px-10 rounded-full 
                     transition-colors duration-500 ease-out group disabled:opacity-60"
        >
          <span
            className="absolute inset-0 bg-[#C8982A] scale-x-0 origin-left 
                       transition-transform duration-500 ease-out group-hover:scale-x-100"
          ></span>

          <span className="relative z-10 transition-colors duration-500 ease-out group-hover:text-white">
            {loading ? "Submitting..." : t("register")}
          </span>
        </button>

        {/* Success / Error Messages */}
        {successMsg && (
          <p className="mt-4 text-green-600 font-semibold">
            {successMsg}
          </p>
        )}

        {errorMsg && (
          <p className="mt-4 text-red-600 font-semibold">
            {errorMsg}
          </p>
        )}
      </div>
    </div>
  );
}
