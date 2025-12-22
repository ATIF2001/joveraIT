import { useState, useEffect } from 'react';
import axiosInstance from './BaseURL';

const usePropertiesPerCity = () => {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCities = async () => {
      setLoading(true);
      try {
        const res = await axiosInstance.get('api/cities/with-properties');
        setCities(res.data.data || []);
      } catch (err) {
        console.error('Error fetching cities with properties:', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCities();
  }, []);

  return { cities, loading, error };
};

export default usePropertiesPerCity;
