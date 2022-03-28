import styled from "styled-components";

export const Submit = styled.button`
  background: none;
  border: 2px solid #0519ce;
  color: #0519ce;
  cursor: pointer;
  float: right;
  font-size: 18px;
  font-weight: 700;
  padding: 12px;
  text-transform: uppercase;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #0519ce;
    color: #fff;
  }

  @media (max-width: 700px) {
    font-size: 16px;
  }
`;
