import styled, { createGlobalStyle } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: #000000; */
  background-color: #f8f9fa;
  color: #333;
  min-height: 100vh;
  /* padding: 20px; */
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 20px 0;
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

