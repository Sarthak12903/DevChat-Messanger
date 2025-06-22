// lib/axios.js

import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api`, // ✅ cleaner and environment-based
  withCredentials: true, // ✅ if you're using cookies or sessions
});
