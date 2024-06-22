import axios from "axios";

export const instance = axios.create({
  baseURL: "https://test.v5.pryaniky.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export const URL = {
  AUTH: "/ru/data/v3/testmethods/docs/login",
  GET_DATA: "/ru/data/v3/testmethods/docs/userdocs/get",
  ADD_DATA: "/ru/data/v3/testmethods/docs/userdocs/create",
  DELETE_DATA: "/ru/data/v3/testmethods/docs/userdocs/delete/",
  CHANGE_DATA: "/ru/data/v3/testmethods/docs/userdocs/set/",
};
