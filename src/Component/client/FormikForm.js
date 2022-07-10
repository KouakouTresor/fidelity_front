import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const validationSchema = yup.object({
    email: yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
});

const FormikForm = () => {
    const formik = useFormik({
        initialValues: {
            nomcomplet: 'foobar@example.com',
            adress: 'foobar',
            ville: 'm',
            téléphone: '09',
            email: 'tresor@gmail.com',
            active: 'yes',
            code: '1',
            carte: '123',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <TextField fullWidth id="email" name="Nom complet" label="Email" />
                <TextField
                    fullWidth
                    id="nom"
                    name="nom"
                    label=" Nom complet"
                    type="nom"
                    value={formik.values.password}
                    onChange={formik.values.nomcomplet}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                />
                <TextField fullWidth id="téléphone" name="téléphone" label=" Téléphone" type="téléphone" />
                <TextField fullWidth id="email" name="email" label="Email" type="email" />
                <TextField fullWidth id="adress" name="adress" label="Adress" type="adress" />
                <TextField fullWidth id="ville" name="ville" label="Ville" type="ville" />
                <TextField fullWidth id="Active" name="Active" label="active" type="active" />
                <TextField fullWidth id="password" name="password" label="Mot de passe" type="password" />
            </form>
        </div>
    );
};
export default FormikForm;
