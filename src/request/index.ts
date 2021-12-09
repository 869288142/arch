import axios from 'axios';

const http = axios.create();


http.defaults.baseURL = 'http://localhost:5000'
http.interceptors.response.use(
    (response) => {
        const { c, m, d } = response.data;
        if (parseInt(c, 10) !== 0) {
            return Promise.reject(m);
        }
        return d;
    },
    (error) => {
        return Promise.reject(error);
    }
)

export default http;