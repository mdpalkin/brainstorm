import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://66c3b60bd057009ee9c10ee2.mockapi.io/brainstorm/api',
})