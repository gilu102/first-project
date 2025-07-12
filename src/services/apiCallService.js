import axios from "axios"
import { getToken } from "./localStorageService";

const API_BASE = "https://monkfish-app-z9uza.ondigitalocean.app/bcard2";

export const deleteCard = async (id) => {
    const token = getToken()
    try {
        const config = token ? { headers: { "x-auth-token": token } } : {};
        const { data } = await axios.delete(`${API_BASE}/cards/${id}`, config);
        return data
    } catch (error) {
        console.log(error);
        throw error
    }
}