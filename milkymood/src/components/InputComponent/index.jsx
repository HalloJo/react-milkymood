import React from 'react';
import { useField } from 'formik'

const InputComponent = ({label, ...props}) => {
    const [field, meta] = useField(props)

    return (
         <label>
             {label}: {meta.touched && meta.error && <div>{meta.error}</div>}
             <input {...field} {...props} />
         </label>
    )
}

export default InputComponent