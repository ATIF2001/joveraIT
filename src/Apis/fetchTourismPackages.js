import { useState, useEffect } from "react";
import fallbackImage from "../assets/tourism.png"
import fallbackflag from "../assets/landing-pages/Tourism/packages/UAE-flag.png"
import axiosInstance from "./Tourism_BaseURL";

const useTourismPackages = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const res = await axiosInstance.get(
          "api/packages/get-published?limit=10"
        );

        const mapped = (res.data.data || []).map((item) => ({
          id: item._id,

          title: item.name,

          description: item.description,

          country: item.dest_country?.name || "",

          image: item.featured_photo || fallbackImage,

          flag: item.dest_country?.flagUrl || fallbackflag,

          days: item.main_description?.find(
            (d) => d.heading === "Duration"
          )?.description || "—",

          people:
            item.prices_and_offers?.[0]?.price_and_offer_details?.[0]
              ?.description || "",

          rating: item.rating || 0,

          price: item.prices_and_offers?.[0]?.adult_price || 0,

          oldPrice: null,
        }));

        setPackages(mapped);
      } catch (err) {
        console.error(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);

  return { packages, loading, error };
};

export default useTourismPackages;
