import React from 'react'
import Parent from './providers/Parent'
import { Navigate } from 'react-router-dom'
import { useCurrentUser } from '../providers/UserProvider'



function SandBox() {
    const { user } = useCurrentUser()
    if (!user) {
        return <Navigate to={"/"} replace />
    }


    return (
        <>
            <Parent />
        </>
    )
}

export default SandBox