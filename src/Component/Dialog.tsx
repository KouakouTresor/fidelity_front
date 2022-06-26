import { Box, Button, Typography, useTheme } from '@mui/material';
import React, { ReactElement } from 'react';
import { getDemoApi, getDemoNameApi } from '../services/demo';
import ClientsList from './ClientsList';
import { CLIENTS } from '../services/routesPath';
import { Link } from 'react-router-dom';

const Dialog = (): ReactElement => {
    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Open responsive dialog
            </Button>
            <Dialog fullScreen={fullScreen} open={open} onClose={handleClose} aria-labelledby="responsive-dialog-title">
                <DialogTitle id="responsive-dialog-title">{"Use Google's location service?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Let Google help apps determine location. This means sending anonymous location data to Google,
                        even when no apps are running.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Disagree
                    </Button>
                    <Button onClick={handleClose} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default Dialog;
