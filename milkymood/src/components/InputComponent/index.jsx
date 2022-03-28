import React from 'react';
import { useField } from 'formik'
import { Input, Label, Error } from './InputComponent.styles';

const InputComponent = ({label, ...props}) => {
    const [field, meta] = useField(props)

    return (
         <Label>
             {label}: {meta.touched && meta.error && <Error>{meta.error}</Error>}
             <Input {...field} {...props} />
         </Label>
    )
}

export default InputComponent