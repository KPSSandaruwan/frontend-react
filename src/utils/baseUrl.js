import axios from "axios";
// require("dotenv").config();
const token = localStorage.getItem("AccessToken");

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_API_BASE}api/`,
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${localStorage.getItem("AccessToken")}`
  }
});

const publicInstance = axios.create({
  baseURL: `${process.env.REACT_APP_API_BASE}api/`,
  headers: {
    "Content-Type": "application/json"
  }
});

export { instance, publicInstance };
