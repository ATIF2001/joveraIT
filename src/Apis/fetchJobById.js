// Apis/fetchJobById.js
import { useEffect, useState } from "react";
import axiosInstance from "./BaseURL";


const useFetchJobById = (jobId, lang) => {
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!jobId) return;

    axiosInstance
      .get(`/api/jobs/get-single/${jobId}?lang=${lang}`) // remove the colon
      .then((res) => {
        setJob(res.data); 
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [jobId, lang]);

  return { job, loading, error };
};

export default useFetchJobById;
