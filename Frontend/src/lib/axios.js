import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "https://devchat-messanger.onrender.com/api"
      : "/api",
  withCredentials: true,
});
