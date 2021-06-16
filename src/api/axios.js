import axios from "axios";
import { encrypt, decrypt } from "../helpers/crypto";

const baseURL = "https://60c74f3406f3160017d29057.mockapi.io/api/v1/";

export default axios.create({
  baseURL: baseURL,

  headers: { "Content-Type": "application/json" },

  transformRequest: [(data) => encrypt(data)],

  transformResponse: [(data) => decrypt(data)],
});
