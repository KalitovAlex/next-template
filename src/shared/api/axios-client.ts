import axios from 'axios';
import { getStoredToken } from '@/shared/lib/auth';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

export const axiosClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

axiosClient.interceptors.request.use(async (config) => {
  const refreshToken = getStoredToken();
  
  if (refreshToken) {
    try {
      const response = await axios.post(
        `${BASE_URL}/auth/refresh`, 
        { refreshToken },
        { withCredentials: true }
      );
      
      const { accessToken } = response.data;
      
      if (config.headers) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
    } catch (error) {
      console.error('Failed to refresh token');
    }
  }
  
  return config;
});

axiosClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = getStoredToken();
        const response = await axios.post(
          `${BASE_URL}/auth/refresh`,
          { refreshToken },
          { withCredentials: true }
        );

        const { accessToken } = response.data;

        if (originalRequest.headers) {
          originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        }

        return axiosClient(originalRequest);
      } catch (error) {
        console.error('Failed to refresh token');
      }
    }

    return Promise.reject(error);
  }
); 