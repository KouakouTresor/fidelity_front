import React, { ChangeEvent, ReactElement, useEffect, useState } from 'react';
import { Box, Button, IconButton } from '@mui/material';
import ClientsService from '../services/Api/ClientsApi';
import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid';
import { RiDeleteBinLine, RiEditLine } from 'react-icons/ri';
import SearchBar from './header/SearchBar';
import { useNavigate } from 'react-router-dom';
import { CLIENTS } from '../services/routesPath';

const ClientsList = (): ReactElement => {
    const [clients, setClients] = useState([] as any[]);
    const [search, setSearch] = useState('');
    const [codeClient, setCodeClient] = useState();
    let navigate = useNavigate();

    //https://stackoverflow.com/questions/61495714/typescript-property-title-does-not-exist-on-type-never

    useEffect(() => {
        getClients();
    }, []);

    const getClients = () => {
        ClientsService.getAllClients().then((response) => {
            setClients(response.data);
        });
    };

    const searchClient = (codeClient: string) => {
        /*         console.log(navigate(`${CLIENTS}/${codeClient}`)); */
        ClientsService.getClientByCode(codeClient).then((response) => {
            /*        setClients([]); */
            console.log(codeClient);
            setCodeClient(response.data);
        });
    };

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setSearch(event.target.value);
    };
    const randomIndex = Math.random();
    const random = Math.random() * 1000;
    const columns: GridColDef[] = [
        { field: 'code', headerName: 'Code', width: 150 },
        { field: 'name', headerName: 'Nom complet', width: 150 },
        { field: 'address', headerName: 'Adresse', width: 130 },
        { field: 'ville', headerName: 'Ville', width: 110 },
        { field: 'phone', headerName: 'Téléphone', width: 160 },
        { field: 'email', headerName: 'Email', width: 150 },
        { field: 'creationdate', headerName: 'Date de creation', width: 200 },
        { field: 'active', headerName: 'Status', width: 130 },
        {
            field: 'actions',
            type: 'actions',
            width: 130,
            renderCell: () => [
                <IconButton key={randomIndex}>
                    <RiDeleteBinLine />
                </IconButton>,
                <IconButton key={random}>
                    <RiEditLine />
                </IconButton>,
            ],
        },
    ];

    return (
        <Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <h2 color="primary">Liste des client Fidelity</h2>
            </Box>

            <Box sx={{ display: 'flex', paddingRight: '80px', paddingLeft: '80px', justifyContent: 'space-between' }}>
                <Button color="primary" variant="outlined">
                    nouveau client
                </Button>
                <SearchBar onChange={onChange} valueSearched={search} searchClient={searchClient}></SearchBar>
            </Box>
            <Box sx={{ height: 400, margin: '80px', marginTop: '50px' }}>
                <DataGrid
                    rows={clients}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[10]}
                    checkboxSelection
                    componentsProps={{
                        toolbar: {
                            showQuickFilter: true,
                            quickFilterProps: { debounceMs: 500 },
                        },
                    }}
                />
            </Box>
        </Box>
    );
};

export default ClientsList;
