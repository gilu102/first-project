import React, { useState } from 'react'
import { createCardScheme } from './createCardScheme'
import { cardDetailes } from '../../interfaces/cardDetailes';
import useForm from '../../hooks/useForm';
import {
    containerStyle,
    formTitleStyle,
    largeFieldProps,
    submitSectionStyle,
} from "../../styles/registerFormStyes";
import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import axios from 'axios';
import { useCurrentUser } from '../../providers/UserProvider';
import SnackBarProvider from '../../providers/SnackBarProvider';

function CreateCard() {
    const { token } = useCurrentUser()

    const handleSignup = async (cardDetailes) => {
        const cardDetailesForServer = {
            title: cardDetailes.title,
            subtitle: cardDetailes.subtitle,
            description: cardDetailes.description,
            phone: cardDetailes.phone,
            email: cardDetailes.email,
            web: cardDetailes.web,
            image: {
                url: cardDetailes.url,
                alt: cardDetailes.alt,
            },
            address: {
                state: cardDetailes.state,
                country: cardDetailes.country,
                city: cardDetailes.city,
                street: cardDetailes.street,
                houseNumber: cardDetailes.houseNumber,
                zip: cardDetailes.zip,
            }
        }


        try {
            const response = await axios.post(
                "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards",
                cardDetailesForServer,
                { headers: { "x-auth-token": token } }
            );
            console.log(response.data);
            showSnackBar("card added successfully")
        } catch (error) {
            console.log(error);
            if (error.response) {
                alert(error.response.data);
            }
        }
    };
    const { formDetails, errors, handleChange, handleSubmit, handleCancel } = useForm(
        handleSignup
        , createCardScheme
        , cardDetailes
    );

    return (
        <Container maxWidth="md" sx={containerStyle}>
            <Typography variant="h3" sx={{
                ...formTitleStyle,
                textAlign: 'center',
                display: 'inline-block',
                borderBottom: 2,
                borderColor: 'rgba(0, 0, 0, 0.3)',
                width: "100%",
                pb: 3
            }}>
                CREATE CARD
            </Typography>
            <form autoComplete="off">
                <Grid container spacing={3} justifyContent={'center'}>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="title"
                            name="title"
                            value={formDetails.title}
                            onChange={handleChange}
                            error={Boolean(errors.title)}
                            helperText={errors.title}
                            autoComplete="given-name"
                            {...largeFieldProps}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="sub title"
                            name="subtitle"
                            value={formDetails.subtitle}
                            onChange={handleChange}
                            error={Boolean(errors.subtitle)}
                            helperText={errors.subtitle}
                            autoComplete="additional-name"
                            {...largeFieldProps}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="description"
                            name="description"
                            value={formDetails.description}
                            onChange={handleChange}
                            error={Boolean(errors.description)}
                            helperText={errors.description}
                            autoComplete="family-name"
                            {...largeFieldProps}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Phone"
                            name="phone"
                            value={formDetails.phone}
                            onChange={handleChange}
                            error={Boolean(errors.phone)}
                            helperText={errors.phone}
                            autoComplete="tel"
                            {...largeFieldProps}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Email"
                            name="email"
                            value={formDetails.email}
                            onChange={handleChange}
                            error={Boolean(errors.email)}
                            helperText={errors.email}
                            autoComplete="email"
                            {...largeFieldProps}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="website"
                            name="web"
                            type="url"
                            value={formDetails.web}
                            onChange={handleChange}
                            error={Boolean(errors.web)}
                            helperText={errors.web}
                            autoComplete="website"
                            {...largeFieldProps}
                        />
                    </Grid>
                    <Typography variant="h5" sx={{
                        ...formTitleStyle,
                        textAlign: 'center',
                        display: 'inline-block',
                        borderBottom: 2,
                        borderColor: 'rgba(0, 0, 0, 0.3)',
                        width: "100%",
                        pb: 3
                    }}>
                        CARD IMAGE
                    </Typography>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Image URL"
                            name="url"
                            value={formDetails.url}
                            onChange={handleChange}
                            error={Boolean(errors.url)}
                            helperText={errors.url}
                            autoComplete="url"
                            {...largeFieldProps}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Image Description"
                            name="alt"
                            value={formDetails.alt}
                            onChange={handleChange}
                            error={Boolean(errors.alt)}
                            helperText={errors.alt}
                            {...largeFieldProps}
                        />
                    </Grid>
                    <Typography variant="h5" sx={{
                        ...formTitleStyle,
                        textAlign: 'center',
                        display: 'inline-block',
                        borderBottom: 2,
                        borderColor: 'rgba(0, 0, 0, 0.3)',
                        width: "100%",
                        pb: 3
                    }}>
                        CARD ADDRESS
                    </Typography>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="State"
                            name="state"
                            value={formDetails.state}
                            onChange={handleChange}
                            error={Boolean(errors.state)}
                            helperText={errors.state}
                            {...largeFieldProps}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Country"
                            name="country"
                            value={formDetails.country}
                            onChange={handleChange}
                            error={Boolean(errors.country)}
                            helperText={errors.country}
                            {...largeFieldProps}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="City"
                            name="city"
                            value={formDetails.city}
                            onChange={handleChange}
                            error={Boolean(errors.city)}
                            helperText={errors.city}
                            {...largeFieldProps}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Street"
                            name="street"
                            value={formDetails.street}
                            onChange={handleChange}
                            error={Boolean(errors.street)}
                            helperText={errors.street}
                            {...largeFieldProps}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="House Number"
                            name="houseNumber"
                            type="number"
                            value={formDetails.houseNumber}
                            onChange={handleChange}
                            error={Boolean(errors.houseNumber)}
                            helperText={errors.houseNumber}
                            {...largeFieldProps}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="ZIP"
                            name="zip"
                            type="number"
                            value={formDetails.zip}
                            onChange={handleChange}
                            error={Boolean(errors.zip)}
                            helperText={errors.zip}
                            {...largeFieldProps}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <Button
                                    fullWidth
                                    variant="outlined"
                                    color="error"
                                    sx={{ py: 2, fontSize: 20 }}
                                    onClick={handleCancel}
                                >
                                    Cancel
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    sx={{ py: 2, fontSize: 20 }}
                                    onClick={handleSubmit}
                                    {...submitSectionStyle}
                                >
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        </Container>
    )
}

export default CreateCard