import styled from "styled-components";

export const ModalContainer = styled.div`
  color: #000;
  max-width: 440px;
`;

export const H3 = styled.h3`
  font-size: 64px;
  margin: 0;
  font-weight: 600px;
  line-height: 0.7;
  color: #0519ce;
`;

export const H4 = styled.h4`
  font-size: 34px;
  margin: 20px 0 0;
  font-weight: 600px;
  line-height: 0.7;
  color: #0519ce;

  @media (max-width: 700px) {
    font-size: 25px;
  }
`;

export const P = styled.p`
  font-size: 16px;
  margin: 20px 0;

  @media (max-width: 700px) {
    font-size: 14px;
  }
`;

export const Socials = styled.div`
  display: flex;
  justify-content: center;

  svg {
    margin: 0 16px;
  }
`;

export const SuccessContainer = styled(ModalContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 50px auto;
  text-align: center;
`;
