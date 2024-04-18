import axios from "axios";

const authToken = import.meta.env.VITE_API_AUTH;
const baseURL = import.meta.env.VITE_API

const axiosApi = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`
    }
});

export default axiosApi;