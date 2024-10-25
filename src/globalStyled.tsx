import styled, { createGlobalStyle } from "styled-components";
import { backgroundColor } from "./utils/constants/constThemes";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${backgroundColor};
  color: #333;
  min-height: 100vh;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 20px 0;
`;

export const SpanErrorInput = styled.span`
  color: #d8db16;
  margin-top: 10px;
  display: block;
`;

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-transform: none;
    border: none;
  }
  
  body {
    font-family: 'Roboto', sans-serif;
  }
`

