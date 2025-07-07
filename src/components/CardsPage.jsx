import BCards from '../cards/BCards'
import { Container, Typography } from '@mui/material';
import useFetch from '../hooks/useFetch';

const url = import.meta.env.VITE_API_URL;
function CardsPage() {
    const { aPIinput } = useFetch(url)




    return (
        <Container>
            <Typography variant='h2'>cards page</Typography>
            <BCards cards={aPIinput}></BCards>
        </Container>

    )
}

export default CardsPage