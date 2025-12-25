// pages/JobDetails.jsx
import { useParams } from "react-router-dom";
import { useState, useRef } from "react";
import useFetchJobById from "../Apis/fetchJobById";
import { PrimaryButton } from "../components/button-primary";
import useApplyJob from "../Apis/postResume";

const JobDetails = ({ lang }) => {
  const { jobId } = useParams();
  const isRTL = lang === "ar";

  const { job, loading, error } = useFetchJobById(jobId, lang);
  const { applyJob, loading: applying, error: applyError } = useApplyJob();
  const [showMessage, setShowMessage] = useState(false);

  // Reference to hidden file input
  const fileInputRef = useRef(null);

  // Open file selector when button clicked
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  // Handle file selection and submit CV
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const response = await applyJob({ jobId, cv: file });
    if (response) {
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 5000); // hide after 5 sec
    }
    e.target.value = ""; // reset input so user can re-upload if needed
  };

  // ================= LOADER =================
  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="flex flex-col items-center gap-6">
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 rounded-full border-4 border-gray-700"></div>
            <div className="absolute inset-0 rounded-full border-4 border-yellow-400 border-t-transparent animate-spin"></div>
          </div>
          <span className="text-white text-sm uppercase tracking-widest">
            {isRTL ? "جاري تحميل الوظائف" : "Loading jobs"}
          </span>
        </div>
      </div>
    );
  }

  if (error || !job) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-red-500">
        {isRTL ? "لم يتم العثور على الوظيفة" : "Job not found"}
      </div>
    );
  }

  // Helper function to display field or fallback
  const display = (field) => field || (isRTL ? "غير محدد" : "N/A");

  return (
    <div
  dir={isRTL ? "rtl" : "ltr"}
  className="min-h-screen bg-black text-white px-6 md:px-24 pt-[160px] pb-24"
>

      {/* Title */}
      <h1 className="text-4xl font-semibold text-center mb-2">{display(job.title)}</h1>
      <p className="text-center text-gray-400 mb-8">{display(job.location)}</p>

      {/* Upload CV */}
      <div className="flex flex-col items-center mb-16">
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          onChange={handleFileChange}
        />
        <PrimaryButton link={handleButtonClick}>
          {applying ? (isRTL ? "جاري الرفع..." : "Uploading...") : isRTL ? "ارفع سيرتك الذاتية" : "Upload CV"}
        </PrimaryButton>

        {showMessage && (
          <div className="mt-4 text-green-400 text-center">
            {isRTL
              ? "شكراً! تلقينا سيرتك الذاتية، سيتواصل فريقنا معك إذا تم اختيارك."
              : "Thank you! We have received your CV, our team will contact you if you are shortlisted."}
          </div>
        )}

        {applyError && <div className="mt-4 text-red-500 text-center">{applyError}</div>}
      </div>

      {/* Job Info */}
      <div className="max-w-4xl mx-auto space-y-4 text-gray-300">
        <p>
          <b>{isRTL ? "تاريخ النشر:" : "Posting Date:"}</b>{" "}
          {job.createdAt ? new Date(job.createdAt).toLocaleString() : display()}
        </p>
        <p>
          <b>{isRTL ? "آخر موعد للتقديم:" : "Apply Before:"}</b>{" "}
          {job.deadline ? new Date(job.deadline).toLocaleDateString() : display()}
        </p>
        <p>
          <b>{isRTL ? "القسم:" : "Department:"}</b> {display(job.department)}
        </p>
        <p>
          <b>{isRTL ? "نوع الوظيفة:" : "Job Type:"}</b> {display(job.type)}
        </p>
        <p>
          <b>{isRTL ? "مستوى الخبرة:" : "Experience Level:"}</b> {display(job.experienceLevel)}
        </p>
        <p>
          <b>{isRTL ? "الراتب:" : "Salary:"}</b>{" "}
          {job.salary
            ? job.salary.amount
              ? `${job.salary.amount} ${job.salary.currency || ""}`
              : job.salary.currency || display()
            : display()}
        </p>
      </div>

      {/* Description */}
      <div className="max-w-4xl mx-auto mt-10 text-gray-400 leading-relaxed">{display(job.description)}</div>

      {/* Responsibilities */}
      <div className="max-w-4xl mx-auto mt-6 text-gray-400 leading-relaxed">
        <h2 className="text-xl font-semibold mb-2">{isRTL ? "المسؤوليات" : "Responsibilities"}</h2>
        <p>{display(job.responsibilities)}</p>
      </div>

      {/* Requirements */}
      <div className="max-w-4xl mx-auto mt-6 text-gray-400 leading-relaxed">
        <h2 className="text-xl font-semibold mb-2">{isRTL ? "المتطلبات" : "Requirements"}</h2>
        <p>{display(job.requirements)}</p>
      </div>

      {/* Qualifications */}
      <div className="max-w-4xl mx-auto mt-6 text-gray-400 leading-relaxed">
        <h2 className="text-xl font-semibold mb-2">{isRTL ? "المؤهلات" : "Qualifications"}</h2>
        <p>{display(job.qualifications)}</p>
      </div>

      {/* Additional Benefits */}
      {job.additionalBenefits?.length > 0 && (
        <div className="max-w-4xl mx-auto mt-6 text-gray-400 leading-relaxed">
          <h2 className="text-xl font-semibold mb-2">{isRTL ? "المزايا الإضافية" : "Additional Benefits"}</h2>
          <ul className="list-disc list-inside">
            {job.additionalBenefits.map((benefit, idx) => (
              <li key={idx}>{display(benefit)}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default JobDetails;
