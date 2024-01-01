import axios from "axios";

export const apiRoute = axios.create({
    baseURL:"https://localhost:3333"
})