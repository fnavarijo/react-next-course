import axios from "axios";
import Cookies from 'js-cookie';

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_API,
});

instance.interceptors.request.use((config) => {
  const authToken = Cookies.get('token');
  
  return {
    ...config,
    headers: {
      authorization:
        `Bearer ${authToken}`,
    },
  };
});
