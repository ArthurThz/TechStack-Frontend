import axios from "axios";

export const apiRoute = axios.create({
  baseURL: "http://localhost:3333",
  headers: {
    "Content-Type": "application/json",
  },
});

export const gitHubApi = axios.create({
  baseURL:"https://api.github.com/users",
  headers:{
    "Content-Type":"application/json"
  }
})
