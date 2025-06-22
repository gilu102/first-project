import axios from "axios";
import React, { useEffect, useState } from "react";


export default function useFetch(API) {
    const [aPIinput, setAPIInput] = useState([])
    async function getApiFromServer() {
        try {
            let responses = await axios.get(API);
            setAPIInput(responses.data)
            console.log(responses + " extracted successfully");
        } catch (err) {
            console.log("error loading data", err);
        }

    }


    useEffect(() => {
        getApiFromServer();
    }, [])
    return { aPIinput }
}