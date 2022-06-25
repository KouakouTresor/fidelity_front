import { AppBar, Box, Button, List, ListItem, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { ReactElement, useState } from 'react';
import DrawerComponent from './DrawerComponent';
import SearchBar from './SearchBar';

const Header = (): ReactElement => {
    const [value, setValue] = useState();
    const theme = useTheme();
    console.log(theme);
    const isMobileView = useMediaQuery(theme.breakpoints.down('md'));

    const menu = [
        { label: 'Category', link: '/' },
        { label: 'Clients', link: '/' },
        { label: 'Prix', link: '/' },
        { label: 'Statistique', link: '/' },
        { label: 'Autre', link: '/' },
    ];

    return (
        <Box>
            <AppBar sx={{ background: '#063970' }} position="sticky">
                <Toolbar>
                    {isMobileView ? (
                        <>
                            <DrawerComponent />
                            <Typography sx={{ fontSize: '2rem', paddingLeft: '10%' }}>Pharmacie Beta</Typography>
                        </>
                    ) : (
                        <>
                            <List
                                component="nav"
                                sx={{
                                    display: 'flex',
                                }}
                            >
                                {menu.map((menu, index) => {
                                    return <ListItem key={index}>{menu.label}</ListItem>;
                                })}
                            </List>
                            <Button sx={{ marginLeft: 'auto' }} variant="contained">
                                Login
                            </Button>
                            <Button sx={{ marginLeft: '10px' }} variant="contained">
                                SignUp
                            </Button>
                        </>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;
