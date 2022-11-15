import axios from "axios";
import get from "lodash/get"
import config from "config"
import index from "../storage";


const request = axios.create({
    baseURL: config.API_ROOT
});
request.defaults.params = {};
request.defaults.params["_f"] = "json";
request.defaults.headers.common["Accept"] = "application/json";
request.defaults.headers.common["Cache-Control"] = "no-cache";
request.defaults.headers.common["Content-Type"] = "application/json; charset=utf-8";

let token = index.get("token");

const subscribe = store => {
    let state = store.getState();
    request.defaults.params["_l"] = state.system.currentLangCode;
    if (get(state, "auth.token")) token = get(state, "auth.token");
    if (token) {
        request.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
};

request.interceptors.response.use(
    response => response,
    error => Promise.reject(error)
);

const interceptor = {
    request,
    subscribe
};

export default interceptor;
