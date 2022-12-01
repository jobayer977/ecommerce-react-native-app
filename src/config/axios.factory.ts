import axios, { AxiosError } from "axios";

import Snackbar from "react-native-snackbar";
import { environment } from "../environment";

const headers = {
  "Content-Type": "application/json",
  "x-client-name": "APP",
};
export const AxiosInstanceSellMart = axios.create({
  baseURL: environment.SELL_MART_API_URL,
  timeout: 60000,
  headers,
  httpsAgent: {
    rejectUnauthorized: false,
  },
});
export const AxiosInstance = axios.create({
  baseURL: environment.apiUrl,
  timeout: 60000,
  headers,
  httpsAgent: {
    rejectUnauthorized: false,
  },
});
AxiosInstance.interceptors.request.use(
  async (config: any) => {
    // const token: any = await getLocalDate("TOKEN");
    // if (token) {
    //   config.headers["Authorization"] = `Bearer ${token || ""}`;
    // }
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);
AxiosInstance.interceptors.response.use(
  (response: any) => {
    return response;
  },
  async (error: AxiosError) => {
    if (error?.response?.data?.message) {
      Snackbar.show({
        text: error?.response?.data?.message,
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: "red",
      });
    }
    return Promise.reject(error);
  }
);
