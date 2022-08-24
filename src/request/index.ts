import axios from 'axios';

const http = axios.create();


// http.defaults.baseURL = 'http://localhost:5000'
http.defaults.baseURL = '/api/'
// http.interceptors.response.use(
//     (response) => {
//         const { d } = response.data;
//         return { data: {d } } ;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// )

export default http;