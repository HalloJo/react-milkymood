import styled from "styled-components";

export const Input = styled.input`
  border: 2px solid black;
  box-sizing: border-box;
  font-size: 18px;
  margin: 8px 0 24px;
  padding: 12px;
  width: 100%;

  &:focus {
    border-color: #0519ce;
  }

  @media (max-width: 700px) {
    font-size: 16px;
  }
`;

export const Label = styled.label`
  font-weight: 600;
`;

export const Error = styled.span`
  color: #e26e2d;
`;
