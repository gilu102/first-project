import React, { useEffect, useMemo, useState } from 'react'
import CreateCard from '../users/createCard/CreateCard'
import useFetch from '../hooks/useFetch'
import BCards from '../cards/BCards'
import { Grid } from '@mui/material'





function MyCardsPage() {
    const { aPIinput, toggleLike } = useFetch("https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/my-cards")


    return (
        <>
            <Grid container spacing={3} justifyContent={'center'}>

                <BCards cards={aPIinput} toggleLike={toggleLike}></BCards>
            </Grid>
        </>
    )
}

export default MyCardsPage