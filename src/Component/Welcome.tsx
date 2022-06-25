import { Box, Button, Typography, useTheme } from '@mui/material';
import React, { ReactElement } from 'react';
import { getDemoApi, getDemoNameApi } from '../services/demo';
import ClientsList from './ClientsList';
import { CLIENTS } from '../services/routesPath';
import { Link } from 'react-router-dom';

const Welcome = (): ReactElement => {
    const theme = useTheme();

    const getName = (name: string) => {
        console.log(name);
        return getDemoNameApi(name);
    };
    return (
        <Box sx={{ marginTop: theme.spacing(25) }}>
            <Typography>Bienvenue Admin_</Typography>
            <Box>
                Cliquer
                <Button component={Link} to={CLIENTS}>
                    ici
                </Button>{' '}
                pour voir tout les client click
            </Box>
            <Button to={CLIENTS} component={Link} />
        </Box>
    );
};

export default Welcome;
