import React, { useState } from "react";
import useFetchOpenJobs from "../Apis/fetchJobOpenings";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

const Careers = ({ lang }) => {
  const [page, setPage] = useState(1);

  const { jobs, totaljobs, totalpages, loading, error } = useFetchOpenJobs({
    page,
    limit: 6,
    lang,
  });

  const navigate = useNavigate();

  const handlePrevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNextPage = () => {
    if (page < totalpages) setPage(page + 1);
  };

  /* ================= LOADER ================= */
  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="flex flex-col items-center gap-6">
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 rounded-full border-4 border-gray-700"></div>
            <div className="absolute inset-0 rounded-full border-4 border-yellow-400 border-t-transparent animate-spin"></div>
          </div>
          <span className="text-white text-sm uppercase tracking-widest">
            Loading jobs
          </span>
        </div>
      </div>
    );
  }

  /* ================= ERROR ================= */
  if (error) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-red-500">
        Failed to load jobs
      </div>
    );
  }

  return (
    <>
<Helmet>
        <title>{lang === "en" ? "Careers - Jovera Group" : "الوظائف - مجموعة جوفيرا"}</title>
        <meta
          name="description"
          content={lang === "en"
            ? "Explore career opportunities at Jovera Group. Join a dynamic team and grow your professional journey in real estate, finance, IT, tourism, and more."
            : "استكشف فرص العمل في مجموعة جوفيرا. انضم إلى فريق ديناميكي وطور مسيرتك المهنية في العقارات، والتمويل، وتكنولوجيا المعلومات، والسياحة، وأكثر من ذلك."}
        />
        {/* Open Graph */}
        <meta property="og:title" content="Careers - Jovera Group" />
        <meta
          property="og:description"
          content={lang === "en"
            ? "Join Jovera Group and be part of a professional team driving innovation in real estate, finance, IT, tourism, and business services."
            : "انضم إلى مجموعة جوفيرا وكن جزءًا من فريق محترف يقود الابتكار في العقارات والتمويل وتكنولوجيا المعلومات والسياحة وخدمات الأعمال."}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.jovera.ae/Career" />
      </Helmet>
<main>
    <div className="min-h-screen bg-black px-6 md:px-16 pt-[200px] pb-[200px]
">
      {/* Total Jobs */}
      <div className="text-white text-2xl mb-20 text-center">
   
  {lang === "en"
    ? `${totaljobs} JOBS OPEN`
    : `عدد الوظائف المتاحة: ${totaljobs}`}

      </div>

      {/* Job Listings */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-10">
        {jobs.map((job) => (
          <div
            key={job._id}
            onClick={() => navigate(`/careers/${job._id}`)}
            className="flex items-center justify-between border-b border-gray-700 pb-6 cursor-pointer group"
          >
            <div>
              <h3 className="text-white text-2xl font-medium mb-2">
                {job.title}
              </h3>

              <div className="flex flex-wrap items-center gap-4">
                <span className="text-white text-base">
                  {job.location}
                </span>

                <span className="text-yellow-400 text-sm font-medium">
                  Posting Date:{" "}
                  {new Date(job.createdAt).toLocaleDateString()}
                </span>
              </div>
            </div>

            <div className="text-white text-3xl transition-transform duration-300 group-hover:translate-x-1">
              ❯
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalpages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-10">
          <button
            onClick={handlePrevPage}
            disabled={page === 1}
            className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50"
          >
            Prev
          </button>

          <span className="text-white">
            Page {page} of {totalpages}
          </span>

          <button
            onClick={handleNextPage}
            disabled={page === totalpages}
            className="px-4 py-2 bg-gray-700 text-white rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
    </main>
    </>
  );
};

export default Careers;
