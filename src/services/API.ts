import axios, { AxiosInstance } from "axios";
/**
 * axios instance 
 * delaring baseurl in using .env for diffrent stage production, testing, development.
 * and be able to declare axios interceptors for setting headers: authentication and so on.
 */
const API: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
        "Content-Type": "application/json; charset=utf-8",
    }
})

export default API;