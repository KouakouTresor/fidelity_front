import React, { ChangeEvent, FormEvent, FormEventHandler, ReactElement, useState } from 'react';
import { Label } from '@mui/icons-material';
import { Grid, Paper, Avatar, TextField, Button, Typography, Checkbox, FormControlLabel, Box } from '@mui/material';

import { Link, useNavigate } from 'react-router-dom';
import { CLIENTS, WELCOME } from '../../services/routesPath';

const LoginForm = (): ReactElement => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const authenticate = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (password === 'tresor' && username === 'tresor') {
            navigate(`${CLIENTS}`);
        }
    };

    const onChangeUsername = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setUsername(value);
    };

    const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setPassword(value);
    };

    const loginJWT = () => {};
    return (
        <Grid>
            <Paper elevation={10} sx={{ padding: 10, width: 280, margin: '0 auto', marginTop: '150px' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <h2>Connexion</h2>
                </Box>
                <form onSubmit={authenticate}>
                    <TextField
                        onChange={onChangeUsername}
                        label="Identifiant"
                        placeholder="Utilisateur"
                        type="password"
                        value={username}
                        sx={{ paddingBottom: 2 }}
                        fullWidth
                        required
                    />

                    <TextField
                        label="Mot de passe"
                        placeholder="Mot de passe"
                        type="password"
                        onChange={onChangePassword}
                        value={password}
                        sx={{ paddingBottom: 2 }}
                        fullWidth
                        required
                    />

                    <Button type="submit" color="primary" variant="outlined" fullWidth>
                        Se connecter
                    </Button>
                </form>
            </Paper>
        </Grid>
    );
};

export default LoginForm;
