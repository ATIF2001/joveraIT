import axios from 'axios';

const axiosInstance = axios.create({
    // Production
    // baseURL: 'https://api.joveratourism.ae',

    // Development
    baseURL: 'http://192.168.0.10:7000',
});

export default axiosInstance;