import React from 'react';
import { Container, Grid, Typography, Card, CardContent, Button, Box } from '@mui/material';
import { styled } from '@mui/system';
import UserProvider, { useCurrentUser } from '../providers/UserProvider';
import ROUTES from '../Routes/routesDict';

const StyledCard = styled(Card)(({ theme }) => ({
    maxWidth: 345,
    margin: theme.spacing(2),
    backgroundColor: theme.palette.grey[100],
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
        transform: 'scale(1.05)',
    },
}));

const AboutPage = () => {
    const { user } = useCurrentUser()
    return (
        <Container maxWidth="md">
            <Box sx={{ textAlign: 'center', marginBottom: 4 }}>
                <Typography variant="h3" gutterBottom>
                    Welcome to Gil Business Card Application
                </Typography>
                <Typography variant="h6" color="text.secondary">
                    A platform to manage your business cards with ease and efficiency.
                </Typography>
            </Box>

            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <StyledCard>
                        <CardContent>
                            <Typography variant="h5" component="div" gutterBottom>
                                Our Mission
                            </Typography>
                            <Typography variant="body2" color="text.secondary" paragraph>
                                The mission of the **Gil Business Card Application** is to revolutionize how professionals
                                manage and share business cards in the modern digital era. We believe in simplifying
                                business networking, reducing paper waste, and making it easier to keep in touch with
                                your business connections.
                            </Typography>
                            <Button variant="contained" color="primary" fullWidth>
                                Learn More
                            </Button>
                        </CardContent>
                    </StyledCard>
                </Grid>

                <Grid item xs={12} md={6}>
                    <StyledCard>
                        <CardContent>
                            <Typography variant="h5" component="div" gutterBottom>
                                Features
                            </Typography>
                            <Typography variant="body2" color="text.secondary" paragraph>
                                - **Digitally store and organize your business cards** in one place.
                                <br />
                                - **Quickly add new cards** by scanning or entering manually.
                                <br />
                                - **Share your digital business card** with a simple QR code.
                                <br />
                                - **Manage contacts** and track interaction history with ease.
                            </Typography>
                            <Button variant="contained" color="primary" fullWidth>
                                Get Started
                            </Button>
                        </CardContent>
                    </StyledCard>
                </Grid>
            </Grid>

            <Box sx={{ textAlign: 'center', marginTop: 4 }}>
                <Typography variant="h4" gutterBottom>
                    Join the Future of Networking
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                    Say goodbye to traditional paper business cards and embrace the future of digital business
                    networking. Start using **Gil Business Card Application** today to organize, share, and manage
                    your contacts like never before.
                </Typography>
                <Button variant="contained" color="secondary" size="large" href={user ? ROUTES.createCard : ROUTES.login}>
                    Create Your Digital Card
                </Button>
            </Box>
        </Container>
    );
};

export default AboutPage;