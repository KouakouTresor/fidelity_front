import React, { FormEvent, ReactElement } from 'react';
import { Field, Form, Formik, FormikProps, useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Box, DialogActions } from '@mui/material';
import ClientsService from '../../services/Api/ClientsApi';

interface MyFormValues {
    code: string;
    name: string;
    adress: string;
    ville: string;
    phone: string;
    email: string;
    dateCreation: string;
    fidelity: number;
}

const FormikForm = (): ReactElement => {
    const initialValues: MyFormValues = {
        code: '',
        name: '',
        adress: '',
        ville: '',
        phone: '',
        email: '',
        dateCreation: '',
        fidelity: 1,
    };
    const saveClient = async (client: MyFormValues) => {
        /*  event.preventDefault(); */
        await ClientsService.createClient(client).then((response) => {
            console.log(response.data);
        });
    };

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
    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={(values, actions) => {
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                    saveClient(values);
                }}
            >
                <Form>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <Field fullWidth id="code" name="code" label="Code" styled="" />
                        <Field fullWidth id="name" name="name" label="Nom" />
                        <Field fullWidth id="email" name="phone" label="Email" />
                        <Field fullWidth id="dateCreation" name="dateCreation" label="Email" />
                        <Field fullWidth id="email" name="email" label="Email" />
                        <Field fullWidth id="adress" name="adress" label="Adress" />
                        <Field fullWidth id="ville" name="ville" label="Ville" />
                        <Field fullWidth id="Active" name="Active" label="active" />
                        <Field fullWidth id="fidelity" name="fidelity" label="Carte de fidelité" />
                        <DialogActions>
                            <Button>Annuler</Button>
                            <Button autoFocus type="submit">
                                Sauver
                            </Button>
                        </DialogActions>
                    </Box>
                </Form>
            </Formik>
        </div>
    );
};
export default FormikForm;
/* 
<TextField fullWidth id="email" name="email" label="Email" type="email" />
                <TextField fullWidth id="adress" name="adress" label="Adress" type="adress" />
                <TextField fullWidth id="ville" name="ville" label="Ville" type="ville" />
                <TextField fullWidth id="Active" name="Active" label="active" type="active" />
                <TextField fullWidth id="password" name="password" label="Mot de passe" type="password" /> */
