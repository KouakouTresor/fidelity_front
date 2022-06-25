import { ThemeContext, useTheme } from '@emotion/react';
import { Label } from '@mui/icons-material';
import { Grid, Paper, Avatar, TextField, Button, Typography, Checkbox, FormControlLabel } from '@mui/material';
import React, { ReactElement, useState } from 'react';
import { CLIENTS, WELCOME } from '../services/routesPath';
import { Link } from 'react-router-dom';

import InputComponent from './InputComponent';

const LoginForm = (props: { user: any }): ReactElement => {
    const theme = useTheme();

    return (
        <Grid>
            <Paper elevation={10} sx={{ padding: 10, width: 280, margin: '0 auto', marginTop: '150px' }}>
                <h2>Connexion</h2>
                <TextField
                    label="Identifient"
                    placeholder="Enter username"
                    fullWidth
                    required
                    sx={{ paddingBottom: 2 }}
                />
                <TextField
                    label="Mot de passe"
                    placeholder="Enter password"
                    type="password"
                    sx={{ paddingBottom: 2 }}
                    fullWidth
                    required
                />

                <Button type="submit" color="primary" variant="outlined" to={WELCOME} component={Link} fullWidth>
                    Se connecter
                </Button>
                <Typography>Mot de passe oublié ?</Typography>
            </Paper>
        </Grid>
    );
};

export default LoginForm;
