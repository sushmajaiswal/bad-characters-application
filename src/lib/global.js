import { useHistory } from "react-router-dom";

export const getQueryParams = ( params, url ) => {
    let href = url;
    // this is an expression to get query strings
    let regexp = new RegExp( '[?&]' + params + '=([^&#]*)', 'i' );
    let qString = regexp.exec(href);
    return qString ? qString[1] : null;
};

export const setLastLocation = () => {
    let history = useHistory();
    if(history.location.pathname !== '/signin') {
        localStorage.setItem("lastLocation", history.location.pathname); 
    }
}

export const clearLastLocation = () => {
    localStorage.setItem("lastLocation", "")
}

export const getLastLocation = () => {
    return localStorage.getItem("lastLocation");
}

export const goBack = () => {
    let history = useHistory();
    history.goBack();
}

export const goNextPage = (path) => {
    // let history = useHistory();
    // history.push(path);
    window.location.href = path;
    return
}
