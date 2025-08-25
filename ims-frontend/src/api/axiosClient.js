import axios from "axios";
import { store } from "../store";
import { logout } from "../store/slices/authSlice";
import { normalizeError } from "./normalizeError";

const api = axios.create({
  baseURL: import.meta.env.IMS_APP_BASE_URL,
  withCredentials: true,
});

api.interceptors.request.use(
  (config) => {
    const token = store.getState().auth.token;

    if (token) {
      config.headers.Authorization = `Bearer${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

//Error Mapping
//Invalid Access
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error?.response?.status;
    if (status === 401) {
      store.dispatch(logout());
    }
  }
);

return Promise.reject(normalizeError(error));

export default api;
