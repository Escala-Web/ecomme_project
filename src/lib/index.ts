import axios, { AxiosRequestConfig } from "axios";

// Define the interface for your auth token structure
interface AuthToken {
  token: string;
}

// Extend AxiosRequestConfig to include the `requiresAuth` property
interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  requiresAuth?: boolean; // Optional property, since it may not be on every request
}

export const api = axios.create({
  baseURL: "http://192.168.15.9/api-php",
});

// Request Interceptor
api.interceptors.request.use(
  (config: CustomAxiosRequestConfig) => {
    if (config.requiresAuth) {
      const storedAuth = localStorage.getItem("auth");

      if (storedAuth) {
        try {
          // Typecast the parsed auth data to the AuthToken interface
          const parsedAuth: AuthToken = JSON.parse(storedAuth);
          const token = parsedAuth?.token;

          if (token) {
            // Set the Authorization header
            config.headers.Authorization = `Bearer ${token}`;
          } else {
            console.warn("Token not found in localStorage.");
          }
        } catch (error) {
          console.error("Error parsing auth token from localStorage:", error);
        }
      } else {
        console.warn("No auth token found in localStorage.");
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
