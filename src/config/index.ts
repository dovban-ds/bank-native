import axios from "axios";

import { BasicAuthCredentials, SignupData } from "models/authModels";

const API_BASE_URL = "https://artjoms-spole.fly.dev";

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

apiClient.interceptors.request.use(
  (config) => {
    // any actions with token
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      const { status, data } = error.response;

      switch (status) {
        case 400:
          console.error("Bad Request:", data);
          break;
        case 401:
          console.error("Unauthorized:", data);
          break;
        case 404:
          console.error("Not Found:", data);
          break;
        case 500:
          console.error("Server Error:", data);
          break;
        default:
          console.error("Error:", data);
      }
    } else if (error.request) {
      console.error("Network Error:", error.request);
    } else {
      console.error("Error:", error.message);
    }

    return Promise.reject(error);
  }
);

// TODO: consider moving to separate folder; using cache working libs e.g TanstackQuery
export const authAPI = {
  signup: async (userData: SignupData) => {
    try {
      const response = await apiClient.post("/signup", {
        name: userData.name,
        email: userData.email,
        password: userData.password,
      });

      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      return {
        success: false,
        error:
          error.response?.data?.message || error.message || "Signup failed",
        status: error.response?.status,
      };
    }
  },

  signin: async (credentials) => {
    //todo
  },

  logout: async () => {
    //todo
  },

  getAccount: async (credentials: BasicAuthCredentials) => {
    try {
      const authHeader = btoa(
        `${credentials.username}:${credentials.password}`
      );

      const response = await apiClient.get("/account", {
        headers: {
          Authorization: `Basic ${authHeader}`,
        },
      });

      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      return {
        success: false,
        error:
          error.response?.data?.message ||
          error.message ||
          "Failed to get account details",
        status: error.response?.status,
      };
    }
  },
};
