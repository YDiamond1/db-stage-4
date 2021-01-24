import axios from "axios";

const API_ROOT = "http://localhost:8000";

const points = [{x:0,y:2}, {x:3,y:1},{x:3,y:1}];
const headers = {
    Accept:"application/json",
    "Content-Type":"application/json"
}
export const requests = {
    get: url =>
        axios.get(`${API_ROOT}${url}`, {headers}),
    post: (url, body) =>
        axios.post(`${API_ROOT}${url}`, body, {headers})
};

export const requests_w={

    get: url =>
        new Promise((resolve, reject) =>setTimeout(()=>resolve({data:points}),1000  )),
    post: (url, body) =>
        axios.post(`${API_ROOT}${url}`,body)
}
