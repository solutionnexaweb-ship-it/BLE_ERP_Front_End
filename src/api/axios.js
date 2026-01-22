import axios from 'axios';

const api = axios.create({
    // baseURL: "http://localhost:8080/ble/api",
    //baseURL: "http://13.212.91.58:8080 ",
    baseURL: "/ble/api",
    headers: {
        "Content-Type": "application/json"
    }
});

export default api;