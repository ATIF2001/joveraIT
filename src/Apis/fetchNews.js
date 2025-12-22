import { useState, useEffect } from 'react';
import axiosInstance from './BaseURL';

const useFetchNews = ({ page, lang, limit, featured}) => {
  const [allNews, setAllNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const res = await axiosInstance.get(
          `api/news/get-published?lang=${lang}&page=${page}&limit=${limit}${featured ? '&featured=true' : ''}`
        );
        setAllNews(res.data.data || []);
      } catch (err) {
        console.error('Error fetching news:', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [page, lang, limit, featured]);

  return { allNews, loading, error };
};

export default useFetchNews;
