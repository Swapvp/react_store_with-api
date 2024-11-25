import axios from "axios";

const instace = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export default instace;
