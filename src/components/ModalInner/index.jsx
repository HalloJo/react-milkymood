import React, {useState} from 'react';
import { ModalContainer, H3, H4, P, Socials, SuccessContainer } from './ModalInner.styles';
import ModalForm from '../ModalForm';
import { ReactComponent as Happy } from './../../assets/happy_face.svg'
import { ReactComponent as Instagram } from './../../assets/icon_instagram.svg'
import { ReactComponent as Facebook } from './../../assets/icon_facebook.svg'
import { ReactComponent as Twitter } from './../../assets/icon_twitter.svg'

const Input = ({handleSuccess}) => (
    <ModalContainer>
        <H3>Sign up</H3>
        <P>Join our newsletter to be notified of when pre-release tickets for our first ever world tour go on sale.</P>
        <ModalForm handleSuccess={handleSuccess} />
    </ModalContainer>
)

const Success = () => (
    <SuccessContainer>
        <Happy />
        <H4>Yay! We're so excited!</H4>
        <P>We hope you are too. In the meantime you can follow us on social media to keep up to date:</P>
        <Socials>
            <Instagram />
            <Facebook />
            <Twitter />
        </Socials>
    </SuccessContainer>
)

const ModalInner = () => {

    const [showSuccess, setShowSuccess] = useState(false)

    const handleSuccess = () => {
        setShowSuccess(true)
    }

    return showSuccess ? <Success /> : <Input handleSuccess={handleSuccess} />
}

export default ModalInner