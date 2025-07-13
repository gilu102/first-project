import axios from "axios"
import { getToken } from "./localStorageService";

const API_BASE = "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/";

export const deleteCard = async (id) => {
    try {
        const { data } = await axios.delete(`${API_BASE}${id}`);

        return data


    } catch (error) {
        console.log(error);
        throw error
    }
}