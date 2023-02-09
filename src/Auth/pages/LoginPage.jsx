import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';

import { Google } from '@mui/icons-material';
import {
    Alert,
    Button,
    Grid,
    Link,
    TextField,
    Typography,
} from '@mui/material';

import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';

import {
    startGoogleSignIn,
    startLoginWithEmailPassword,
} from '../../store/auth/';

const formData = {
    email: '',
    password: '',
};

const formValidations = {
    email: [(value) => value.includes('@'), 'Ingresa un correo valido'],
    password: [(value) => value.length >= 1, 'Ingresa una contraseña'],
};

export const LoginPage = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const { status, errorMessage } = useSelector((state) => state.auth);

    const dispatch = useDispatch();

    const {
        email,
        password,
        onInputChange,
        isformValid,
        emailValid,
        passwordValid,
    } = useForm(formData, formValidations);

    const isAuthenticating = useMemo(() => status === 'checking', [status]);

    const onSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);
        if (!isformValid) return;
        dispatch(startLoginWithEmailPassword({ email, password }));
    };

    const onGoogleSignIn = () => {
        console.log('onGoogleSignIn');
        dispatch(startGoogleSignIn());
    };

    return (
        <>
            <AuthLayout title="Login">
                <form
                    onSubmit={onSubmit}
                    className="animate__animated animate__fadeIn animate__faster"
                >
                    <Grid container>
                        <Grid item xs={12} sx={{ mt: 2 }}>
                            <TextField
                                label="Correo"
                                type="email"
                                placeholder="correo@google.com"
                                fullWidth
                                name="email"
                                value={email}
                                onChange={onInputChange}
                                error={!!emailValid && formSubmitted}
                                helperText={emailValid}
                            />
                        </Grid>
                        <Grid item xs={12} sx={{ mt: 2 }}>
                            <TextField
                                label="Contraseña"
                                type="password"
                                placeholder="Contraseña"
                                fullWidth
                                name="password"
                                value={password}
                                onChange={onInputChange}
                                error={!!passwordValid && formSubmitted}
                                helperText={passwordValid}
                            />
                        </Grid>

                        <Grid
                            container
                            sx={{ mt: 1.5 }}
                            display={!!errorMessage ? '' : 'none'}
                        >
                            <Grid item xs={12}>
                                <Alert severity="error">{errorMessage}</Alert>
                            </Grid>
                        </Grid>

                        <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                            <Grid item xs={12} sm={6}>
                                <Button
                                    disabled={isAuthenticating}
                                    variant="contained"
                                    type="submit"
                                    fullWidth
                                >
                                    Login
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Button
                                    disabled={isAuthenticating}
                                    onClick={onGoogleSignIn}
                                    variant="contained"
                                    fullWidth
                                >
                                    <Google />
                                    <Typography sx={{ ml: 1 }}>
                                        {' '}
                                        Google
                                    </Typography>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container direction="row" justifyContent="end">
                        <Link
                            component={RouterLink}
                            color="inherit"
                            to="/auth/register"
                        >
                            Crear una cuenta
                        </Link>
                    </Grid>
                </form>
            </AuthLayout>
        </>
    );
};
