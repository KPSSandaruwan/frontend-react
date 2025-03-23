import axios from "axios";
const apiUrl = process.env.REACT_APP_API_BASE;
console.log("apiUrl", apiUrl);

const instance = axios.create({
  baseURL: `${apiUrl}/`,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("AccessToken")}`
  }
});

const publicInstance = axios.create({
  baseURL: `${apiUrl}/`,
  headers: {
    "Content-Type": "application/json"
  }
});

export { instance, publicInstance };
