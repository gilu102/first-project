import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import Joi from "joi";
import useForm from "../hooks/useForm";

function RegisterForm() {
    const { formDetails, errors, handleChange, handleSubmit, isSubmit } = useForm(
        {
            firstName: "",
            lastName: "",
            middleName: "",
            email: "",
            phone: "",
            password: "",
        },
        {
            firstName: Joi.string().min(2).max(10).required().label("First Name"),
            middleName: Joi.string().allow("").label("Middle Name").required(),
            lastName: Joi.string().min(2).required().label("Last Name"),
            email: Joi.string().email({ tlds: { allow: false } }).required().label("Email"),
            phone: Joi.string()
                .pattern(/^[0-9]{9,15}$/)
                .required()
                .label("Phone"),
            password: Joi.string().min(9).pattern(/[A-Z]/).pattern(/[a-z]/).pattern(/[0-9]/).pattern(/[^a-zA-Z0-9]/)
                .required()
                .label("Password"),
        }
    );

    // Style object for larger text fields
    const largeFieldProps = {
        InputProps: {
            sx: {
                fontSize: 24,
                height: 68,
                padding: "24px 18px",
            }
        },
        InputLabelProps: {
            sx: {
                fontSize: 22,
                top: "6px"
            }
        }
    };

    return (
        <Container
            maxWidth="md"
            sx={{
                mt: 6,
                p: 4,
                bgcolor: "#f7fafd",
                borderRadius: 4,
                boxShadow: 4,
            }}
        >
            <Typography variant="h3" mb={5} align="center" fontWeight="bold" letterSpacing={2}>
                REGISTER
            </Typography>
            <form autoComplete="off">
                <Grid container spacing={3}>
                    {/* First Name */}
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
                    {/* Middle Name */}
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
                    {/* Last Name */}
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
                    {/* Phone */}
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
                    {/* Email */}
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
                    {/* Password */}
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
                    {/* Buttons */}
                    <Grid item xs={12} md={6}>
                        <Button
                            fullWidth
                            variant="outlined"
                            color="error"
                            sx={{ py: 2, fontSize: 20 }}
                        >
                            Cancel
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
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
            </form>
            {isSubmit && (
                <Container sx={{ mt: 5, bgcolor: "#e3f2fd", py: 3, borderRadius: 2 }}>
                    <Typography variant="h6" mb={1}>Form Data:</Typography>
                    <Typography>First Name: {formDetails.firstName}</Typography>
                    <Typography>Middle Name: {formDetails.middleName}</Typography>
                    <Typography>Last Name: {formDetails.lastName}</Typography>
                    <Typography>Email: {formDetails.email}</Typography>
                    <Typography>Phone: {formDetails.phone}</Typography>
                </Container>
            )}
        </Container>
    );
}

export default RegisterForm;
