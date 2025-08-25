import api from "./axiosClient";

export const loginApi = (credentials) =>
  api.post("/auth/login", credentials).then((response) => response.data);
