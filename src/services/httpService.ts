import type { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const app = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  timeout: 10000,
});

let isRefreshing: boolean = false;
let refreshSubscribers: (() => void)[] = [];

function onRefreshed() {
  refreshSubscribers.forEach(cb => cb());
  refreshSubscribers = [];
}

function addSubscribers(callback: () => void) {
  refreshSubscribers.push(callback);
}

app.interceptors.response.use(
  (res: AxiosResponse) => res,
  async (err: AxiosError): Promise<AxiosResponse> => {
    const orginalConfig = err.config as AxiosRequestConfig;
    if (!err.response) {
      return Promise.reject(err);
    }

    if (err.response.status === 401 && !orginalConfig._retry) {
      orginalConfig._retry = true;

      if (isRefreshing) {
        return new Promise(resolve => {
          addSubscribers(() => {
            resolve(app(orginalConfig));
          });
        });
      }
    }

    isRefreshing = true;

    try {
      await axios.get(`${BASE_URL}/user/refresh-token`, { withCredentials: true });
      onRefreshed();
      // eslint-disable-next-line require-atomic-updates
      isRefreshing = false;
      return app(orginalConfig);
    } catch (refreshErr) {
      isRefreshing = false;
      onRefreshed();
      return Promise.reject(refreshErr);
    }
  }
);

export default app;
