import axios from "axios"
import { getToken } from "./localStorageService";

const API_BASE = "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/"

const token = getToken()

export const deleteCard = async (id) => {
    console.log(token);
    console.log(API_BASE);

    const isConfirmed = window.confirm("are you sure you want to delete this card")
    if (isConfirmed) {
        try {

            const { data } = await axios.delete(`${API_BASE}${id}`, { headers: { "x-auth-token": token } });
            console.log("card deletion succeed", data);
            alert("card removed successfully", data)
            return data


        } catch (error) {
            console.error("Error in deleteCard:", error.response ? error.response.data : error.message);
            alert(error.response ? error.response.data : error.message)
        }
    } else {
        console.log("card deletion canceled!");

    }
}


export const getFavoriteCards = async () => {

}