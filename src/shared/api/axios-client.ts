import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";

export const axiosClient = axios.create({
  baseURL: BASE_URL,
});
