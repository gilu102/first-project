import BCards from '../cards/BCards'
import { Container, Typography } from '@mui/material';
import useFetch from '../hooks/useFetch';
import { useCallback } from 'react';
import axios from 'axios';
import { useCurrentUser } from '../providers/UserProvider';

const url = import.meta.env.VITE_API_URL;

function CardsPage() {
    const { token } = useCurrentUser()

    const { aPIinput } = useFetch(url)


    const toggleLIke = useCallback(
        async (cardId) => {
            try {
                const response = await axios.patch("https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/" + cardId,
                    {}, { headers: { "x-auth-token": token } }
                )
            } catch (error) {
                console.log(error);

            }
        }
        , [token])

    return (
        <Container>
            <Typography variant='h2'>cards page</Typography>
            <BCards cards={aPIinput} toggleLIke={toggleLIke}></BCards>
        </Container>

    )
}

export default CardsPage