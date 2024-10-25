import styled, { createGlobalStyle } from "styled-components";
import { backgroundColor, highlightColor, primaryColor, textColor } from "./utils/constants/constThemes";

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

export const StyledUL = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const H4 = styled.h4`
  font-size: 1.2em;
  margin-bottom: 10px;
  color: ${textColor};
`;


export const ClearButton = styled.button`
  padding: 10px 20px;
  background-color: ${primaryColor};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px 0;
  &:hover {
    background-color: ${highlightColor};
  }
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

