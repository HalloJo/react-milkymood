import React from 'react';
import { ModalWrapper, BG, CloseButton} from './Modal.styles';

const Modal = ({toggleModal}) => (
    <>
        <ModalWrapper>
            <CloseButton onClick={toggleModal} />
        </ModalWrapper>
        <BG onClick={toggleModal}/>
    </>
    )

export default Modal