import React from 'react'
import { Toolbar, AppBar, Button, Box } from "@mui/material"
import ROUTES from '../../Routes/routesDict'
import HeaderLink from './HeaderLink'
import { useTheme } from '../../providers/CustomThemeProvider'
import { useCurrentUser } from '../../providers/UserProvider'

function Header() {
    const { isDark, toggleMode } = useTheme()
    const { user } = useCurrentUser()
    return (
        <AppBar position="sticky" color="primary" elevation={10}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box>
                    <HeaderLink to={ROUTES.root} label={"Home"} />
                    <HeaderLink to={ROUTES.about} label={"About"} />
                    <HeaderLink to={ROUTES.favorite} label={"Favorite cards"} />
                    <HeaderLink to={ROUTES.sandbox} label={"sandbox"} />
                </Box>
                <Box>
                    {user ? null : (<>< HeaderLink to={ROUTES.register} label={"register"} />
                        <HeaderLink to={ROUTES.login} label={"login"} /></>)}
                    <Button onClick={toggleMode} sx={{ color: 'white' }}>
                        {isDark ? "dark" : "light"} mode
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header