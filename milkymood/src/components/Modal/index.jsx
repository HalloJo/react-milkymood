import React from 'react';
import { ModalWrapper, BG, CloseButton } from './Modal.styles';


const Modal = ({toggleModal, children}) => (
    <>
        <ModalWrapper>
            <CloseButton onClick={toggleModal} />
            {children}
        </ModalWrapper>
        <BG onClick={toggleModal}/>
    </>
    )

export default Modal