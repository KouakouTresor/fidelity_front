import React, { ChangeEvent, FormEvent, FormEventHandler, ReactElement, useEffect } from 'react';
import { Label } from '@mui/icons-material';
import { Grid, Paper, Avatar, TextField, Button, Typography, Checkbox, FormControlLabel, Box } from '@mui/material';

import { Link, useNavigate } from 'react-router-dom';
import { CLIENTS, WELCOME } from '../../services/routesPath';

const Logout = (): ReactElement => {
    return (
        <Box>
            <h1>Decconexion avc success!</h1>
        </Box>
    );
};

export default Logout;
