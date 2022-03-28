import React from 'react';
import * as Yup from 'yup'
import {Formik, Form } from 'formik'
import InputComponent from '../InputComponent';
import { Submit } from './ModalForm.styles';


const ModalForm = ({handleSuccess}) => {

    const schema = Yup.object().shape({
        name: Yup.string().required('Required field') ,
        email: Yup.string().email('Must be a valid email address').required('Required field') ,
    })

    return (
        <Formik initialValues={{
            name: '',
            email: ''
        }}
        onSubmit={handleSuccess}
        validationSchema={schema}
        >
            {()=> (
                <Form>
                    <InputComponent name="name" type="text" label="Name" autoComplete="off" />
                    <InputComponent name="email" type="email" label="Email" autoComplete="off" />
                    <Submit type='submit'>Submit</Submit>
                </Form>
            )}       
        </Formik>
    )
}

export default ModalForm