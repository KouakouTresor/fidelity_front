import React, { ChangeEvent, FormEvent, FormEventHandler, ReactElement, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

import { Box, Button, IconButton, OutlinedInput } from '@mui/material';
import { RiDeleteBack2Line } from 'react-icons/ri';

const SearchBar = (
    props: React.PropsWithChildren<{
        onChange: (event: ChangeEvent<HTMLInputElement>) => void;
        onSubmit: (args: any) => any;
        onClearSearchBar: () => void;
        valueSearched: string;
    }>,
) => {
    const { onChange, onSubmit, onClearSearchBar, valueSearched } = props;

    return (
        <Box>
            <form>
                <OutlinedInput
                    onChange={onChange}
                    onSubmit={onSubmit(valueSearched)}
                    onEmptied={onClearSearchBar}
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Rechercher"
                    inputProps={{ 'aria-label': 'search google maps' }}
                    endAdornment={
                        valueSearched.length > 0 ? (
                            <IconButton
                                sx={{ height: '100%' }}
                                type="submit"
                                onClick={(e) => {
                                    e.preventDefault();
                                    onClearSearchBar;
                                }}
                            >
                                <RiDeleteBack2Line />
                            </IconButton>
                        ) : (
                            <Button variant="contained" color="primary" sx={{ height: '100%' }} type="submit">
                                <SearchIcon />
                            </Button>
                        )
                    }
                />
            </form>
        </Box>
    );
};

export default SearchBar;
