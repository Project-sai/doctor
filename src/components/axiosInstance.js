import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://192.168.0.173:8000/login/',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;