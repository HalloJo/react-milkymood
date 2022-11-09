import React from 'react';
import { Button } from './SignUpButton.styles';

const SignUpButton = ({toggleModal}) => (
        <Button onClick={toggleModal}>Sign up for updates</Button>
)

export default SignUpButton