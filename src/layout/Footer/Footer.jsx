import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import ROUTES from '../../Routes/routesDict'

function Footer() {
    const navigate = useNavigate()

    return (
        <>
            <Button variant='contained' onClick={() => navigate(ROUTES.root)}>GO HOME</Button>
            <Button variant='contained' onClick={() => navigate(ROUTES.about)}>ABOUT US</Button>

        </>
    )
}

export default Footer