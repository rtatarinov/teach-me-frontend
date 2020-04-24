export const TOKEN = 'token';

export const getToken = (key = TOKEN) => window.localStorage.getItem(key);

export const setToken = (key, token) => window.localStorage.setItem(key, token);

export const removeToken = (key = TOKEN) => window.localStorage.removeItem(key);
