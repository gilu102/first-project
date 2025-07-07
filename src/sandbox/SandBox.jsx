import React from 'react'
import Parent from './providers/Parent'
import { Navigate } from 'react-router-dom'
import { useCurrentUser } from '../providers/UserProvider'
import Counter from './components/Counter'



function SandBox() {
    const { user } = useCurrentUser()
    if (!user) {
        return <Navigate to={"/"} replace />
    }


    return (
        <>
            <Counter></Counter>
        </>
    )
}

export default SandBox