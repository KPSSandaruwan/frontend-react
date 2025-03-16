import axios from "axios";

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_API_BASE}/api/`,
  headers: {
    "Content-Type": "application/json"
  }
});

instance.interceptors.request.use(
  (config) => {

    if (config.url && config.url.startsWith('auth')) {
      const token = localStorage.getItem('AccessToken');

      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;