import React from 'react'
import { Navigate } from 'react-router-dom'
import { useCurrentUser } from '../providers/UserProvider'
import CountryList from './CountryList'
import ChromeDinoGame from 'react-chrome-dino'
import Typography from '@mui/material/Typography'



function SandBox() {
    const { user } = useCurrentUser()
    if (!user) {
        return <Navigate to={"/"} replace />
    }


    return (
        <>
            <Typography variant="h3" color="initial" >welcome to my sand box!</Typography>
            <CountryList />

            <ChromeDinoGame />


        </>
    )
}

export default SandBox