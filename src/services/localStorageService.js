import { jwtDecode } from "jwt-decode"

const TOKEN = "my token"

export const setTokenInLocalStorage = (jwtToken) => {
    localStorage.setItem(TOKEN, jwtToken)
}

export const removeToken = () => localStorage.removeItem(TOKEN)


export const getToken = () => {
    return localStorage.getItem(TOKEN)
}

export const getUser = () => {
    try {
        const myToken = getToken();
        return jwtDecode(myToken);
    } catch (err) {
        console.log(err);

    }
};