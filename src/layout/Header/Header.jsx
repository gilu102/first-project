import React from 'react'
import { Toolbar, AppBar, Button } from "@mui/material"
import ROUTES from '../../Routes/routesDict'
import HeaderLink from './HeaderLink'


function Header() {
    return (
        <AppBar position="sticky" color="primary" elevation={10}>
            <Toolbar>
                <HeaderLink to={ROUTES.root} label={"Home"} />
                <HeaderLink to={ROUTES.about} label={"About"} />
                <HeaderLink to={ROUTES.favorite} label={"Favorite cards"} />
                <HeaderLink to={ROUTES.sandbox} label={"sandbox"} />
                <HeaderLink to={ROUTES.register} label={"register"} />

            </Toolbar>
        </AppBar>
    )
}

export default Header