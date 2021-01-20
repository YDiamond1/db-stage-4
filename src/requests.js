import axios from "axios";

const API_ROOT = "http://localhost:8080/api";

const points = [{x:0,y:2}, {x:3,y:1},{x:3,y:1}];

export const requests = {
    get: url =>
        axios.get(`${API_ROOT}${url}`),
    post: (url, body) =>
        axios.post(`${API_ROOT}${url}`)
};

export const requests_w={
    get: url =>
        new Promise((resolve, reject) =>setTimeout(()=>resolve({data:points}),5000)),
    post: (url, body) =>
        axios.post(`${API_ROOT}${url}`,body)
}
