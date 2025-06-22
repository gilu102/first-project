import React, { Children, createContext, useContext, useState } from 'react'

const UserContext = createContext()

export default function UserProvider({ children }) {
    const [user, setUser] = useState();
    const [token, setToken] = useState()


    return (

        <UserContext.Provider value={{ user, setUser, token, setToken }}>{children}</UserContext.Provider>
    )
}

export const useCurrentUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useCurrentUser must be used within tbe provider!");
    }
    return context
}
