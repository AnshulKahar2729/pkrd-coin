import axios from "axios";

//pass new generated access token here
const userData = JSON.parse(localStorage.getItem("authUser"));
const token = userData?.body?.access_token;
console.log("token", token);
const secretKey =
  "sk_uRBK5fnSXeXmEja0854WPvRWxrv2nNfi4k4XRrSSFRHRYJjK+HgnmjRiU08=";
const publishkey =
  "pk_+SWeAYZDLbr8FQw+5NDEg+lUwLTgVxer6k0RhgG29swyu3/2wgMYEF6a/QqI";

//apply base url for axios
const API_URL = "";

const axiosApi = axios.create({
  baseURL: API_URL,
});

axiosApi.defaults.headers.common["Authorization"] = `Bearer ${token}`;
axiosApi.defaults.headers.common["secretKey"] = secretKey;
axiosApi.defaults.headers.common["publishkey"] = publishkey;

axiosApi.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export async function get(url, config = {}) {
  return await axiosApi
    .get(url, { ...config })
    .then((response) => response.data);
}

export async function post(url, data, config = {}) {
  return axiosApi
    .post(url, { ...data }, { ...config })
    .then((response) => response.data);
}

export async function put(url, data, config = {}) {
  return axiosApi
    .put(url, { ...data }, { ...config })
    .then((response) => response.data);
}

export async function del(url, config = {}) {
  return await axiosApi
    .delete(url, { ...config })
    .then((response) => response.data);
}
