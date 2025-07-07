import React from 'react'
import Form from './Form'
import useForm from '../../hooks/useForm';
import { TextField } from '@mui/material';
import axios from 'axios';
import loginSchema from '../../interfaces/loginScheme';
import { getUser, setTokenInLocalStorage } from '../../services/localStorageService';
import { useCurrentUser } from '../../providers/UserProvider';
import { useNavigate } from 'react-router-dom';


function LoginForm() {
    const { setToken, setUser } = useCurrentUser()
    const navigate = useNavigate()

    const initialLoginForm = {
        email: "",
        password: "",
    }

    const handleLogin = async (user) => {
        try {
            const response = await axios.post(
                "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users/login",
                user
            );
            setTokenInLocalStorage(response.data);
            setToken(response.data)
            setUser(getUser())
            console.log(getUser());
            navigate("/")
        }
        catch (err) {
            console.log(err);
        }
    }

    const { formDetails, errors, handleChange, handleSubmit } = useForm(
        handleLogin,
        loginSchema,
        initialLoginForm
    );
    return (
        <Form
            onSubmit={handleSubmit}
            onReset={() => { }}
            title={"sign in form"}
            styles={{ maxWidth: "800px" }}>
            <TextField
                name="email"
                label="email"
                error={errors.email}
                onChange={handleChange}
                value={formDetails.email}
            />
            <TextField
                name="password"
                label="password"
                error={errors.password}
                onChange={handleChange}
                value={formDetails.password}
                type="password"
            />
        </Form>
    )
}

export default LoginForm