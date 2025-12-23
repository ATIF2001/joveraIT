// Apis/applyJob.js
import { useState } from "react";
import axiosInstance from "./BaseURL";

const useApplyJob = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const applyJob = async ({ jobId, cv }) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const formData = new FormData();
      formData.append("jobId", jobId);
      formData.append("cv", cv); // cv should be a File object

      const res = await axiosInstance.post("/api/job-application/apply", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setSuccess(true);
      setLoading(false);
      return res.data;
    } catch (err) {
      setError(err.response?.data || "Something went wrong");
      setLoading(false);
      return null;
    }
  };

  return { applyJob, loading, error, success };
};

export default useApplyJob;
