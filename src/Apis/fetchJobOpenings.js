import { useEffect, useState } from "react";
import axiosInstance from "./BaseURL";

const useFetchOpenJobs = ({ page, limit, lang }) => {
  const [jobs, setJobs] = useState([]);
  const [totaljobs, setTotaljobs] = useState(0);
  const [totalpages, setTotalpages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);

    axiosInstance
      .get(`/api/jobs/get-open`, {
        params: { page, limit, lang },
      })
      .then((res) => {
        if (!isMounted) return;

        setJobs(res.data.data);       // ✅ overwrite only when ready
        setTotaljobs(res.data.total);
        setTotalpages(res.data.totalPages);
        setError(null);
      })
      .catch(() => {
        if (!isMounted) return;
        setError(true);
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [page, limit, lang]);

  return { jobs, totaljobs, totalpages, loading, error };
};

export default useFetchOpenJobs;
