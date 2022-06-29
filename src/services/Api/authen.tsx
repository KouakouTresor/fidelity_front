import axios from 'axios';
const API_URL = 'http://localhost:8080';
export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';

export const executeBasicAuthenticationService = (username: string, password: string) => {
    return axios.get(`${API_URL}/basicauth`, { headers: { authorization: createBasicAuthToken(username, password) } });
};

export const executeJwtAuthenticationService = (username: string, password: string) => {
    console.log(username);
    return axios.post(`${API_URL}/authenticate`, {
        username,
        password,
    });
};

export const createBasicAuthToken = (username: string, password: string) => {
    return 'Basic ' + window.btoa(username + ':' + password);
};

export const registerSuccessfulLogin = (username: string, password: string) => {
    //let basicAuthHeader = 'Basic ' +  window.btoa(username + ":" + password)
    //console.log('registerSuccessfulLogin')
    sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username);
    setupAxiosInterceptors(createBasicAuthToken(username, password));
};

export const registerSuccessfulLoginForJwt = (username: string, token: string) => {
    sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username);
    setupAxiosInterceptors(createJWTToken(token));
};

export const createJWTToken = (token: string) => {
    return 'Bearer ' + token;
};

export const logout = () => {
    sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
};

export const isUserLoggedIn = () => {
    let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
    if (user === null) return false;
    return true;
};

export const getLoggedInUserName = () => {
    let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
    if (user === null) return '';
    return user;
};

export const setupAxiosInterceptors = (token: string) => {
    axios.interceptors.request.use((config) => {
        if (isUserLoggedIn()) {
            console.log(token);
            config.headers!.authorization = token;
        }
    });
};
