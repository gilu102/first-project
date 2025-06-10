import BCards from '../cards/BCards'
import { Container, Typography } from '@mui/material';
import useFetch from '../hooks/useFetch';

function CardsPage() {
    const { aPIinput } = useFetch("https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards")





    return (
        <Container>
            <Typography variant='h2'>cards page</Typography>
            <BCards cards={aPIinput}></BCards>
        </Container>

    )
}

export default CardsPage