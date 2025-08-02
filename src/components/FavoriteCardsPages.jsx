import React, { useCallback, useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch'
import { useCurrentUser } from '../providers/UserProvider'
import { Container, Typography } from '@mui/material';
import BCards from '../cards/BCards';
import axios from 'axios';
const url = import.meta.env.VITE_API_URL;



function FavoriteCardsPages() {
    const { aPIinput } = useFetch(url)
    const [favoriteCards, setFavoriteCards] = useState([])
    const { user, token } = useCurrentUser()


    const toggleLike = useCallback(
        async (cardId) => {
            try {
                const response = await axios.patch("https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/" + cardId,
                    {}, { headers: { "x-auth-token": token } },
                )
                alert("you removed the card successfully!");

                setFavoriteCards((prev) => {
                    return prev.filter(c => c.id != cardId)
                })

            } catch (error) {
                console.log(error);

            }
        }
        , [token])


    useEffect(() => {
        if (aPIinput && aPIinput.length > 0 && user) {
            setFavoriteCards(aPIinput.filter((c) => c.likes.includes(user._id)))
        }
    }, [aPIinput, user, toggleLike])


    return (
        <>      <Container>
            <Typography variant='h2'>cards page</Typography>
            <BCards cards={favoriteCards} toggleLike={toggleLike}></BCards>
        </Container>
        </>
    )
}

export default FavoriteCardsPages