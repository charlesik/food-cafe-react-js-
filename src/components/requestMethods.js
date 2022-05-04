import axios from "axios";


// const BASE_URL = "http://localhost:8000/api";
const BASE_URL = "https://sage-server.herokuapp.com/api";
const TOKEN ="JKL;INJNKNKNK";


export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token:`Bearer ${TOKEN}`}

})