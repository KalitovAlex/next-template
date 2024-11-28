import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";

export const axiosServer = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
}); 