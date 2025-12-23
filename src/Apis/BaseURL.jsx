import axios from 'axios';

const axiosInstance = axios.create({
    // Production
     baseURL: 'https://resorts-seven-interracial-ethical.trycloudflare.com',

    // Development
    //baseURL: 'http://192.168.0.10:7000',
});

export default axiosInstance;