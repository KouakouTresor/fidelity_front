import React, { ChangeEvent, ReactElement, useEffect, useState } from 'react';
import {
    Box,
    Button,
    IconButton,
    Paper,
    styled,
    Table,
    TableBody,
    TableCell,
    tableCellClasses,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material';
import ClientsService from '../../services/Api/ClientsApi';

import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid';
import { RiDeleteBinLine, RiEditLine } from 'react-icons/ri';
import SearchBar from '../header/SearchBar';
import { useNavigate } from 'react-router-dom';
import { CLIENTS, CREATE_CLIENTS } from '../../services/routesPath';
import { ConstructionOutlined } from '@mui/icons-material';
import CreateClient from './CreateClient';

const ClientsList = (): ReactElement => {
    const [clients, setClients] = useState([] as any[]);
    const [search, setSearch] = useState('');
    let navigate = useNavigate();

    //https://stackoverflow.com/questions/61495714/typescript-property-title-does-not-exist-on-type-never

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    const getClients = () => {
        ClientsService.getAllClients().then((response) => {
            setClients(response.data);
        });
    };

    useEffect(() => {
        getClients();
    }, []);

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setSearch(value);
    };

    /*     useEffect(() => {
        heandleSearch(search);
    }, [search]);
 */
    /*    const heandleSearch = async (codeClient: string) => {
        const trimmedCodeClient = codeClient.trim();
        await ClientsService.getClientByCode(trimmedCodeClient)
            .then((response) => {
                const clearArray: any[] = [];
                clearArray.push(response.data);
                setClients(clearArray);
                console.log(clients);
            })
            .catch((err) => {
                console.log(err);
            });
    };
 */
    const deleteClient = (id: string) => {
        const newId = '62b48395e437025da519b287';
        const elementIds = () => {};
        console.log(
            clients.find((element) => {
                return element.id === newId;
            }),
        );
    };

    const onClearSearchBar = () => {
        setSearch('');
    };

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
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
        // { field: 'active', headerName: 'Status', width: 130 },
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
                <h2 color="primary">Liste des clients Fidelity</h2>
            </Box>

            <Box sx={{ display: 'flex', paddingRight: '80px', paddingLeft: '80px', justifyContent: 'space-between' }}>
                <CreateClient />
                {/*   <SearchBar
                    onChange={onChange}
                    onSubmit={heandleSearch}
                    valueSearched={search}
                    onClearSearchBar={onClearSearchBar}
                ></SearchBar> */}
            </Box>

            <Button
                onClick={(e) => {
                    e.preventDefault();
                    deleteClient('11111');
                }}
            ></Button>

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
