import axios from "axios";

const BASE_API_URL =
  "http://localhost:3000/api" || process.env.NEXT_PUBLIC_API_URL;
if (!BASE_API_URL) {
  throw new Error(
    "NEXT_PUBLIC_API_URL is not defined in environment variables"
  );
}

export const baseApi = axios.create({
  baseURL: BASE_API_URL,
});
