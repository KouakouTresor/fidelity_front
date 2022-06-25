import React, { ChangeEvent, FormEventHandler, ReactElement, useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import { Box, Button, OutlinedInput } from '@mui/material';

const SearchBar = (props: {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    searchClient: any;
    valueSearched: string;
}): ReactElement => {
    const { onChange, searchClient, valueSearched } = props;

    return (
        <Box>
            <OutlinedInput
                onChange={onChange}
                onSubmit={searchClient}
                value={valueSearched}
                sx={{ ml: 1, flex: 1 }}
                placeholder="Rechercher"
                inputProps={{ 'aria-label': 'search google maps' }}
                endAdornment={
                    <Button variant="contained" color="primary" sx={{ height: '100%' }}>
                        <SearchIcon />
                    </Button>
                }
            />
        </Box>
    );
};

export default SearchBar;
