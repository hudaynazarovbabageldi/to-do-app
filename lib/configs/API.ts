import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { API_URL } from "./config";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: "application/json",
  },
});

api.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("accessToken");
    const lng = (await AsyncStorage.getItem("locale")) || "en";

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    config.headers["Accept-Language"] = lng;
    return config;
  },
  (error) => Promise.reject(error)
);

export const setAcceptLanguage = (language: string) => {
  api.defaults.headers["Accept-Language"] = language;
};

export default api;
