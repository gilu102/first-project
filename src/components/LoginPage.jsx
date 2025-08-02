import React from 'react'
import LoginForm from '../users/login/LoginForm'
import { Button, Accordion, AccordionSummary, AccordionDetails, Typography, Container } from '@mui/material'
import ROUTES from '../Routes/routesDict'
import { ExpandMore } from '@mui/icons-material'

function LoginPage() {
    return (<Container>
        <LoginForm />

        <Typography variant='h5'>dont have an account yet?</Typography>
        <Button variant="contained" color="secondary" size="medium" href={ROUTES.register}>
            create account
        </Button>
    </Container>
    )
}

export default LoginPage