import React from 'react';
import { Toolbar, AppBar, Button, Box } from "@mui/material";
import ROUTES from '../../Routes/routesDict';
import HeaderLink from './HeaderLink';
import { useTheme } from '../../providers/CustomThemeProvider';
import { useCurrentUser } from '../../providers/UserProvider';
import { removeToken } from '../../services/localStorageService';

function Header() {
    const { isDark, toggleMode } = useTheme();
    const { user } = useCurrentUser();

    return (
        <AppBar
            position="sticky"
            sx={{
                backgroundColor: '#2ecc71',
                paddingY: 1.5,
                boxShadow: '0px 4px 10px rgba(0,0,0,0.2)'
            }}
        >
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <HeaderLink to={ROUTES.root} label="Home" />
                    <HeaderLink to={ROUTES.about} label="About" />
                    <HeaderLink to={ROUTES.favorite} label="Favorite cards" />
                    <HeaderLink to={ROUTES.sandbox} label="Sandbox" />
                </Box>
                <Box sx={{ display: 'flex', gap: 1 }}>
                    {user ? (
                        <>
                            <Button sx={{
                                color: 'white',
                                border: '1px solid white',
                                paddingX: 2,
                                '&:hover': {
                                    backgroundColor: '#27ae60'
                                }
                            }} onClick={removeToken}>logout</Button>
                        </>
                    ) : (
                        <>
                            <HeaderLink to={ROUTES.register} label="Register" />
                            <HeaderLink to={ROUTES.login} label="Login" />
                        </>
                    )}

                    <Button
                        onClick={toggleMode}
                        sx={{
                            color: 'white',
                            border: '1px solid white',
                            paddingX: 2,
                            '&:hover': {
                                backgroundColor: '#27ae60'
                            }
                        }}
                    >
                        {isDark ? "Light" : "Dark"} Mode
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
