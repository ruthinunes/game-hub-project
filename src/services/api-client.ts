import axios, { AxiosRequestConfig } from "axios";

const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: import.meta.env.VITE_API_KEY_GAME,
  },
});

apiClient.interceptors.request.use((config: AxiosRequestConfig) => {
  config.headers["Access-Control-Allow-Origin"] =
    "https://game-hub-project-2023-kezpf8429-ruthinunes.vercel.app";
  return config;
});

export default apiClient;
