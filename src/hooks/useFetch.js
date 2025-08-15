import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useCurrentUser } from "../providers/UserProvider";


export default function useFetch(API) {

    const [filSearchInput, setFilSearchInput] = useState([]);

    const { token } = useCurrentUser()
    const [aPIinput, setAPIInput] = useState([])
    const [err, setErr] = useState(null)
    async function getApiFromServer() {
        try {
            let responses = await axios.get(API, { headers: { "x-auth-token": token } });
            setAPIInput(responses.data)
            setErr(null)
        } catch (err) {
            console.log("error loading data", err);
            setErr(err)
        }

    }




    function handleChange(event) {
        setFilSearchInput(aPIinput.filter(input => input.name.common.toLowerCase().includes(event.target.value.toLowerCase().trim())))
        console.log(event.target.value);
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