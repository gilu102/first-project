import axios from "axios"

export const deleteCard = (_id) => {
    try {
        axios.delete(`https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/${_id}`);

    } catch (error) {
        console.log(error);

    }

}