import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'https://www.googleapis.com/books/v1',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosClient;