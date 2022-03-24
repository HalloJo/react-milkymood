import React from 'react';
import { ModalWrapper, BG} from './Modal.styles';

const Modal = ({toggleModal}) => (
    <>
        <ModalWrapper /><BG onClick={toggleModal}/>
    </>
    )

export default Modal