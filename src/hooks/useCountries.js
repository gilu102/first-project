import { useState, useEffect } from "react";
import axios from "axios";

export default function useCountries() {
    const [countries, setCountries] = useState([]);
    const [filCountries, setFilCountries] = useState([]);

    const getCountries = async () => {
        try {
            let res = await axios.get("https://restcountries.com/v3.1/all?fields=name,flags,capital,region");
            setCountries(res.data)
            setFilCountries(res.data)
        } catch (err) {
            console.log(err.message, "countries didnt load");
        }
    }

    function handleChange(event) {
        setFilCountries(countries.filter(country => country.name.common.toLowerCase().includes(event.target.value.toLowerCase().trim())))
        console.log(event.target.value);
    }

    useEffect(() => {
        getCountries()
    }, []);


    return { filCountries, handleChange }
}
