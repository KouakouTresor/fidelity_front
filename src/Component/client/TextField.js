import React from 'react';
import { ErrorMessage, useField } from 'formik';
import OutlinedInput from '@mui/material/OutlinedInput';

export const TextField = ({ label: any, ...props }) => {
    const { label } = props;
    const [field, meta] = useField(props);
    return (
        <div className="mb-2">
            <label htmlFor={field.name}>{label}</label>
            <OutlinedInput {...field} {...props} autoComplete="off" />
            <ErrorMessage component="div" name={field.name} className="error" />
        </div>
    );
};