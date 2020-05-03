export const TOKEN = 'token';

export const getToken = () => window.localStorage.getItem('token');

export const setToken = (token) => window.localStorage.setItem('token', token);

export const removeToken = (key = TOKEN) => window.localStorage.removeItem(key);
