import axios from "axios";

export const productApi = axios.create({
    baseURL: "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1",
    timeout: 8 * 1000,
})
