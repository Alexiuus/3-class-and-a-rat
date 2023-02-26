import axios from "axios";

const URL = 'http://127.0.0.1:8000/'; // url back

// endpoints back
const endpoints = {
    createGame: ''
}

const Api = axios.create({
    baseURL: URL,
    timeout: 0,
});


export {Api, endpoints}; 