import { Box, Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ROUTES from '../../Routes/routesDict';

function Footer() {
    const navigate = useNavigate();

    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: '#2ecc71',
                paddingY: 4,
                paddingX: 3,
                display: 'flex',
                justifyContent: 'center',
                gap: 3,
                boxShadow: '0px -2px 10px rgba(0,0,0,0.15)',
                flexWrap: 'wrap'
            }}
        >
            <Button
                variant="contained"
                sx={{
                    backgroundColor: 'white',
                    color: '#2ecc71',
                    fontWeight: 600,
                    '&:hover': {
                        backgroundColor: '#e0f7e9'
                    }
                }}
                onClick={() => navigate(ROUTES.root)}
            >
                GO HOME
            </Button>
            <Button
                variant="contained"
                sx={{
                    backgroundColor: 'white',
                    color: '#2ecc71',
                    fontWeight: 600,
                    '&:hover': {
                        backgroundColor: '#e0f7e9'
                    }
                }}
                onClick={() => navigate(ROUTES.about)}
            >
                ABOUT US
            </Button>
        </Box>
    );
}

export default Footer;
