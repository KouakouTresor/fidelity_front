import { useTheme } from '@emotion/react';
import { Box, InputLabel, OutlinedInput } from '@mui/material';
import React, { ReactElement } from 'react';

const InputComponent = (): ReactElement => {
    const theme = useTheme();
    return (
        <Box sx={{ '&.MuiBox-root ': { display: 'flex', gap: '16px' } }}>
            <InputLabel htmlFor="nom"> nom:</InputLabel>
            <OutlinedInput placeholder="Please enter text" />
        </Box>
    );
};

export default InputComponent;
