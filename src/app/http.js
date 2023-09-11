import axios from "axios";
import { fetchUrls } from "./firestore";

const http = axios.create({
  headers: {
    "Content-type": "application/json",
    "ngrok-skip-browser-warning": true,
  },
  withCredentials: true,
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

http.interceptors.response.use(
  async (res) => {
    return res;
  },
  async (err) => {
    console.log(err);
    if (err.code === "ERR_NETWORK") {
      console.log("err network occured");
      await initializeAxios();
      return Promise.reject(err);
    } else return Promise.reject(err);
  },
);

export default http;
