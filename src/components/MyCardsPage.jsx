import React, { useEffect, useMemo, useState } from 'react'
import CreateCard from '../users/createCard/CreateCard'
import useFetch from '../hooks/useFetch'
import BCards from '../cards/BCards'
import { Container, Grid, TextField, Typography } from '@mui/material'





function MyCardsPage() {
    const { filSearchInput, toggleLike, handleChange } = useFetch("https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/my-cards")


    return (
        <>
            <Container Container sx={{ textAlign: 'center' }}>
                <Typography variant='h2' sx={{ marginBottom: 4 }}>MY CARDS</Typography>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={handleChange} />


                <BCards cards={filSearchInput} toggleLike={toggleLike}></BCards>
            </Container>
        </>
    )
}

export default MyCardsPage