import React, { useCallback, useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch'
import { useCurrentUser } from '../providers/UserProvider'
import { Container, TextField, Typography } from '@mui/material';
import BCards from '../cards/BCards';
import axios from 'axios';
const url = import.meta.env.VITE_API_URL;



function FavoriteCardsPages() {
    const { filSearchInput, handleChange } = useFetch(url)
    const [favoriteCards, setFavoriteCards] = useState([])
    const { user, token } = useCurrentUser()


    const toggleLike = useCallback(
        async (cardId) => {
            try {
                const response = await axios.patch("https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/" + cardId,
                    {}, { headers: { "x-auth-token": token } },
                )
                setFavoriteCards((prev) => {
                    return prev.filter(c => c.id != cardId)
                })

            } catch (error) {
                console.log(error);

            }
        }
        , [token])


    useEffect(() => {
        if (filSearchInput && filSearchInput.length > 0 && user) {
            setFavoriteCards(filSearchInput.filter((c) => c.likes.includes(user._id)))
        }
    }, [filSearchInput, user, toggleLike])


    return (
        <>      <Container sx={{ textAlign: "center" }}>
            <Typography variant='h2' sx={{ marginBottom: 4 }}>MY FAVORITE</Typography>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={handleChange} />

            <BCards cards={favoriteCards} toggleLike={toggleLike}></BCards>
        </Container>
        </>
    )
}

export default FavoriteCardsPages