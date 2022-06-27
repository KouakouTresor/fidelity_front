import { Box, Button, Typography, useTheme } from '@mui/material';
import React, { ReactElement } from 'react';

import { Link } from 'react-router-dom';
import { getDemoNameApi } from '../../services/demo';
import { CLIENTS } from '../../services/routesPath';

const Welcome = (): ReactElement => {
    const theme = useTheme();

    const getName = (name: string) => {
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
