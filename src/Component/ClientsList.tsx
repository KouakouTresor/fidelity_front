import { Box } from '@mui/material';
import ClientsService from '../services/Api/ClientsApi';
import React, { ReactElement, useState } from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid';

const ClientsList = (): ReactElement => {
    const [clients, setClients] = useState([] as any[]);
    //https://stackoverflow.com/questions/61495714/typescript-property-title-does-not-exist-on-type-never

    React.useEffect(() => {
        getClients();
    }, []);

    const getClients = () => {
        ClientsService.getAllClients().then((response) => {
            setClients(response.data);
        });
    };

    /*     let extractClient = {};
    clients?.forEach((client) => {
        extractClient = client;
        return extractClient;
    });

    Object.entries(extractClient).forEach((key, value) => {
        console.log(key, value);
    });
 */

    const columns: GridColDef[] = [
        { field: 'code', headerName: 'Code Client', width: 70 },
        { field: 'name', headerName: 'Nom complet', width: 130 },
        { field: 'address', headerName: 'Adresse', width: 130 },
        { field: 'ville', headerName: 'City', width: 130 },
        { field: 'phone', headerName: 'Téléphone', width: 130 },
        { field: 'email', headerName: 'Email', width: 130 },
        { field: 'creationdate', headerName: 'Date de creation', width: 130 },
        { field: 'status', headerName: 'Status', width: 130 },
    ];

    return (
        <Box>
            <h2 color="primary">Liste des client Fidelity</h2>
            <Box sx={{ height: 400, margin: '80px', marginTop: '50px' }}>
                <DataGrid rows={clients} columns={columns} pageSize={5} rowsPerPageOptions={[5]} checkboxSelection />
            </Box>
        </Box>
    );
};

export default ClientsList;
