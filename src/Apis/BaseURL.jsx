import axios from 'axios';

const axiosInstance = axios.create({
    // Production
   baseURL: 'https://resorts-seven-interracial-ethical.trycloudflare.com',



    // Development
  //  baseURL: 'https://resorts-seven-interracial-ethical.trycloudflare.com',
});

export default axiosInstance;