import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import useForm from "../hooks/useForm";
import {
    containerStyle,
    formTitleStyle,
    largeFieldProps,
    submitSectionStyle,
} from "../styles/registerFormStyes";
import axios from "axios";
import { JOIObject } from "./registerFormJoiObj";
import { registerDetailes } from "../interfaces/registerDetailes";



const handleSignup = async (userDetails) => {
    const userDetailsForServer = {
        name: {
            first: userDetails.firstName,
            middle: userDetails.middleName,
            last: userDetails.lastName,
        },
        phone: userDetails.phone,
        email: userDetails.email,
        password: userDetails.password,
        image: {
            url: userDetails.url,
            alt: userDetails.alt,
        },
        address: {
            state: userDetails.state,
            country: userDetails.country,
            city: userDetails.city,
            street: userDetails.street,
            houseNumber: userDetails.houseNumber,
            zip: userDetails.zip,
        },
        isBusiness: true,
    };

    try {
        const response = await axios.post(
            "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users",
            userDetailsForServer
        );
        console.log(response.data);
    } catch (error) {
        console.log(error);
        if (error.response) {
            alert(error.response.data);
        }
    }
};

function RegisterForm() {
    const { formDetails, errors, handleChange, handleSubmit, handleCancel } = useForm(
        handleSignup
        , JOIObject
        , registerDetailes
    );

    return (
        <Container maxWidth="md" sx={containerStyle}>
            <Typography variant="h3" sx={formTitleStyle}>
                REGISTER
            </Typography>
            <form autoComplete="off">
                <Grid container spacing={3}>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="First name"
                            name="firstName"
                            value={formDetails.firstName}
                            onChange={handleChange}
                            error={Boolean(errors.firstName)}
                            helperText={errors.firstName}
                            autoComplete="given-name"
                            {...largeFieldProps}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Middle name"
                            name="middleName"
                            value={formDetails.middleName}
                            onChange={handleChange}
                            error={Boolean(errors.middleName)}
                            helperText={errors.middleName}
                            autoComplete="additional-name"
                            {...largeFieldProps}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Last name"
                            name="lastName"
                            value={formDetails.lastName}
                            onChange={handleChange}
                            error={Boolean(errors.lastName)}
                            helperText={errors.lastName}
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
                            label="Password"
                            name="password"
                            type="password"
                            value={formDetails.password}
                            onChange={handleChange}
                            error={Boolean(errors.password)}
                            helperText={errors.password}
                            autoComplete="new-password"
                            {...largeFieldProps}
                        />
                    </Grid>

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
                                >
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
}

export default RegisterForm;
