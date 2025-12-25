import axios from 'axios';

const axiosInstance = axios.create({

    //Tourism Production
    baseURL:"https://api.joveratourism.ae",


    // Development
    //baseURL: 'https://resorts-seven-interracial-ethical.trycloudflare.com',
});

export default axiosInstance;