import styled from "styled-components";
import { ReactComponent as LogoSVG } from "./logo.svg";

export const Logo = styled(LogoSVG)`
  height: auto;
  max-width: 760px;
  width: 100%;
`;

export const HeaderWrapper = styled.header`
  box-sizing: border-box;
  display: flex;
  pointer-events: none;
  position: fixed;
  z-index: 1;
  width: 100vw;
  justify-content: center;
  padding: 30px;
`;
