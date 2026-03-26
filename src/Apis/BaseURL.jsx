import axios from 'axios';

const axiosInstance = axios.create({
    // Production
   baseURL: 'https://finance.joveratourism.ae/',



    // Development
  //  baseURL: 'https://resorts-seven-interracial-ethical.trycloudflare.com',
});

export default axiosInstance;