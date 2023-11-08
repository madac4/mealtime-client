import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER,
    headers: {
        'Content-Type': 'application/json',
    },
});
