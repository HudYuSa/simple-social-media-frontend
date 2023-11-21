import axios from "axios";
import { fetchUrls } from "./firestore";

const http = axios.create({
  headers: {
    "Content-type": "application/json",
    "ngrok-skip-browser-warning": true,
  },
  withCredentials: true,
  timeout: 5000,
});

export async function initializeAxios() {
  try {
    const url = await fetchUrls();
    console.log(url);
    const mainURL = `${url}/api`;
    http.defaults.baseURL = mainURL;
  } catch (error) {
    console.error("Error initializing Axios:", error);
  }
}

function createRetryInterceptor(maxRetries = 3, retryDelay = 500) {
  let retries = 0;

  return async (err) => {
    console.log(err);
    if (retries >= maxRetries) {
      return Promise.reject(err);
    }

    if (err.code === "ERR_NETWORK") {
      console.log("inside err network");
      retries++;
      await initializeAxios();
      // this is to delay the retry request
      await new Promise((resolve) => setTimeout(resolve, retryDelay));
      // this is retrying to request
      return http({ ...err.config, baseURL: http.defaults.baseURL });
    }

    return Promise.reject(err);
  };
}

http.interceptors.response.use(
  async (res) => res,
  createRetryInterceptor(2, 3000),
);

export default http;
