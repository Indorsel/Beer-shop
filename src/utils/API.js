import axios from "axios";

const baseURL = "https://api.punkapi.com/v2"

export default axios.create({
  baseURL: baseURL,
  responseType: "json"
});