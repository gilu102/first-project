import { createTheme, ThemeProvider } from '@mui/material'
import React, { createContext, useContext, useState } from 'react'

const ThemeContexts = createContext()




export default function CustomThemeProvider({ children }) {
    const [isDark, setIsDark] = useState(false)
    function toggleMode() {
        setIsDark(prev => !prev)
    }
    const theme = createTheme({
        palette: {
            mode: isDark ? "dark" : "light"
        },
    })

    return (
        <ThemeProvider theme={theme}>
            <ThemeContexts.Provider value={{ toggleMode, isDark }}>{children}</ThemeContexts.Provider>
        </ThemeProvider>
    )
}


export const useTheme = () => {
    const context = useContext(ThemeContexts);
    if (!context) throw new Error("useTheme must be used within a Provider");
    return context;
};


