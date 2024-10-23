import styled, { keyframes } from 'styled-components';

export const Main = styled.main`
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: auto;
`;

const focusImage = keyframes`
  from {
    transform: scale(1);
    box-shadow: none;
  }
  to {
    transform: scale(1.05);
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.7);
  }
`

export const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

  img {
    width: 100%;
    max-width: 300px;
    height: auto;
    border-radius: 10px;
    z-index: 1;
    transition: transform 0.3s ease;

    &:hover {
      width: 100%;
      height: 100%;
      border-radius: 10px;
      animation: ${focusImage} 2s forwards;
    }

  }
  
  figcaption {
    font-size: 20px;
    font-weight: 700;
    color: #0ca5c0;
    margin-top: 10px;
  }
`;

export const Section = styled.section`
  margin-bottom: 20px;
  
  a {
    color: #0ca5c0;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  h2 {
    font-size: 28px;
    margin-bottom: 10px;
    color: #0ca5c0;
    border-bottom: 2px solid #0ca5c0;
    padding-bottom: 5px;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

export const Th = styled.th`
  background-color: #0ca5c0;
  color: white;
  padding: 10px;
  text-align: left;
`;

export const Td = styled.td`
  border: 1px solid #ccc;
  padding: 10px;
  vertical-align: top;
`;

export const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const Label = styled.label`
  display: flex;
  gap: 10px;
  text-transform: capitalize;
  align-items: center; 
`;

export const InputCheckBox = styled.input.attrs({ type: 'checkbox' })`
  width: 20px;
  height: 20px;
  cursor: pointer;
  accent-color: #0ca5c0;
`
export const PlotParagrafro = styled.p`
  font-size: 18px;
  font-family: 'Franklin Gothic', 'Arial Narrow', Arial, sans-serif;
  margin-top: 5px;
`;