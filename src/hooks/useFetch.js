import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useCurrentUser } from "../providers/UserProvider";


export default function useFetch(API) {
    const [filSearchInput, setFilSearchInput] = useState([]);
    const [aPIinput, setAPIInput] = useState([])
    const { token } = useCurrentUser()
    const [err, setErr] = useState(null)
    async function getApiFromServer() {
        try {
            let responses = await axios.get(API, { headers: { "x-auth-token": token } });
            setAPIInput(responses.data)
            setFilSearchInput(responses.data)
        } catch (err) {
            console.log("error loading data", err);
            setErr(err)
        }

    }




    function handleChange(event) {
        const searchTerm = event.target.value.toLowerCase().trim();

        if (!Array.isArray(aPIinput)) {
            console.error("aPIinput is not an array!", aPIinput);
            return;
        }
        const filtered = aPIinput.filter((card) =>
            (card.title || "").toLowerCase().includes(searchTerm)
        );
        setFilSearchInput(filtered);
    }

    const toggleLike = useCallback(
        async (cardId) => {
            try {
                const response = await axios.patch("https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/" + cardId,
                    {}, { headers: { "x-auth-token": token } },
                )
            } catch (error) {
                console.log(error);

            }
        }
        , [token])

    useEffect(() => {
        getApiFromServer();
    }, [])
    return { aPIinput, toggleLike, err, handleChange, filSearchInput }
}