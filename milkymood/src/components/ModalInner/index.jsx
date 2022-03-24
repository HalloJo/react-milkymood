import React, {useState} from 'react';
import { ModalContainer } from './ModalInner.styles';
import ModalForm from '../ModalForm';

const ModalInner = () => {

    const [showSuccess, setShowSuccess] = useState(false)

    const handleSuccess = () => {
        setShowSuccess(true)
    }

    return (
        <ModalContainer>
            { showSuccess ? 
             <>
                <h4>Yay! We're so excited!</h4>
                <p>We hope you are too. In the meantime you can follow us on social media to keep up to date:</p>
             </>
            :   
            <>
                <h3>Sign up</h3>
                <p>Join our newsletter to be notified of when pre-release tickets for our first ever world tour go on sale.</p>
                <ModalForm handleSuccess={handleSuccess} />
            </>
            }
        </ModalContainer>
    )
}

export default ModalInner