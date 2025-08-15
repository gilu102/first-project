import axios from "axios"
import { getToken } from "./localStorageService";

const API_BASE = "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/"
const token = getToken()

export const deleteCard = async (id) => {
    const isConfirmed = window.confirm("are you sure you want to delete this card")
    if (isConfirmed) {
        try {
            await axios.delete(`${API_BASE}${id}`, { headers: { "x-auth-token": token } });
            alert("card removed successfully")
            return data


        } catch (error) {
            console.error("Error in deleteCard:", error.response ? error.response.data : error.message);
            alert(error.response ? error.response.data : error.message)
        }
    }
}

export const getCardById = async (id) => {
    try {
        const response = await axios.get(`${API_BASE}${id}`);
        return response.data
    } catch (err) {
        console.log(err);

    }
}
