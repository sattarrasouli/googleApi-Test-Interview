import axios from "axios";

const API = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
        "Content-Type": "application/json; charset=utf-8",
    }
})

export default API;