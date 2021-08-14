export const API = process.env.REACT_APP_BACKEND;
export const Header = () => {
    const username = 'bob@gmail.com';
    const password = 'bob';
    let authString = `${username}:${password}`
    let headers = new Headers();
    headers.set('Authorization', 'Basic ' + btoa(authString));
    return headers;
};