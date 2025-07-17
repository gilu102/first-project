import axios from "axios"
import { getToken } from "./localStorageService";

const API_BASE = "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/"

const token = getToken()

export const deleteCard = async (id) => {
    console.log(token);
    console.log(API_BASE);

    try {

        const { data } = await axios.delete(`${API_BASE}${id}`, { headers: { "x-auth-token": token } });

        return data


    } catch (error) {
        console.error("Error in deleteCard:", error.response ? error.response.data : error.message);
    }
}