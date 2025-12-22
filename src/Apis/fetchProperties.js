import { useState, useEffect } from 'react';
import axiosInstance from './BaseURL';

const useFetchProperties = ({ page, lang, limit, featured }) => {
  const [allProperties, setAllProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperties = async () => {
      setLoading(true);
      try {
        const res = await axiosInstance.get(
          `api/property/all?lang=${lang}&page=${page}&limit=${limit}${featured ? '&featured=true' : ''}`
        );
        setAllProperties(res.data.data || []);
      } catch (err) {
        console.error('Error fetching properties:', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, [page, lang, limit, featured]);

  return { allProperties, loading, error };
};

export default useFetchProperties;
