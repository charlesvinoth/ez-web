import axios from "./axios";

export default {
  /* get all users */

  getAll: () => axios.get("users"),

  /* ... */

  /* get user by id */

  getById: (payload) => axios.get(`users/${payload}`),

  /* ... */

  /* create user */

  create: (payload) => axios.post("users/", payload),

  /* ... */
};
