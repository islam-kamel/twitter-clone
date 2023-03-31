import axios from "axios";
const baseURL = 'http://localhost:8000';
export const instance = axios.create({
    baseURL,
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
});
export const loginInstance = axios.create({
    baseURL,
    method: 'POST',
});
function checkConfig(config) {
    console.log(config);
    if (!config.headers.hasOwnProperty('Authorization')) {
        throw Error("You have include Access token!");
    }
    return config;
}
function checkLoginConfig(config) {
    const requirements = ['username', 'password'];
    const is_valid = requirements.every((el) => config.data.hasOwnProperty(el));
    if (is_valid)
        return config;
    throw Error("You have include username & password");
}
instance.interceptors.request.use(checkConfig, (error) => Promise.reject(error));
loginInstance.interceptors.request.use(checkLoginConfig, (error) => Promise.reject(error));
//# sourceMappingURL=axios.instance.js.map