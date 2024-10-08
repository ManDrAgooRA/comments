import axios from 'axios';

const { VITE_API_URL } = import.meta.env;

const axiosInstance = axios.create({
  baseURL: VITE_API_URL,
  responseType: 'json',
  headers: {
    common: {
      Accept: 'application/json',
    },
  },
});

export default axiosInstance;