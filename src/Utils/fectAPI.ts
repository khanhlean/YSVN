import axios, { AxiosError, AxiosResponse } from "axios";

const api = axios.create({
  baseURL: "http://localhost:2323/api/v1",
  // headers: {
  //     'Content-Type': 'application/json'
  // }
});

export const fetchLogin = (data: any) => {
  return axios.post("/auth/login", data);
};

api.interceptors.request.use(
  (config: any) => {
    let accessToken = "";
    config.headers = {
      ...config.headers,
      Authorization: `Bearer`,
    };
    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  (error: AxiosError) => Promise.reject(error)
);

export default api;
