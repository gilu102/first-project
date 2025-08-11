import BCards from '../cards/BCards'
import { Box, Container, Typography } from '@mui/material';
import useFetch from '../hooks/useFetch';
import { useCallback, useMemo } from 'react';
import axios from 'axios';
import { useCurrentUser } from '../providers/UserProvider';

const url = import.meta.env.VITE_API_URL;

function CardsPage() {
    const { aPIinput, toggleLike, err } = useFetch(url)
    if (err) {
        return <Box>{err.data}</Box>
    }

    return (
        <Container sx={{ textAlign: 'center' }}>
            <Typography variant='h2'>cards page</Typography>
            <BCards cards={aPIinput} toggleLike={toggleLike}></BCards>
        </Container>

    )
}

export default CardsPage