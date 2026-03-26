import axiosInstance from "./BaseURL";

const createLeadFromWebsite = async (payload) => {
  try {
    const res = await axiosInstance.post(
      "/api/leads/create-lead-from-website",
      payload
    );

    return res.data;
  } catch (error) {
    console.error("Error creating lead:", error);
    throw error; 
  }
};

export default createLeadFromWebsite;
