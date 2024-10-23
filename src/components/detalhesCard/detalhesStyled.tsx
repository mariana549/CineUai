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
    transition: transform 0.3s ease;

    &:hover {
      width: 100%;
      height: 100%;
      border-radius: 10px;
      animation: ${focusImage} 2s forwards;
    }

  }
  
  figcaption {
    font-size: 18px;
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
`;

export const Table = styled.table`
  width: 100%;
  margin-top: 20px;
`;

export const Th = styled.th`
  border-radius: 5px;
  background-color: #0ca5c0;
  color: white;
  padding: 10px;
  text-align: left;
`;

export const Td = styled.td`
border-radius: 5px;

  border: 1px solid #ccc;
  padding: 10px;
  text-align: end;
`;

export const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }

  &:hover {
    background-color: #e6f7ff;
  }
`;

export const Thead = styled.thead`
  ${Tr} {
    background-color: #d4f8ff;

    &:nth-child(even) {
    background-color: #cdf3ff;
  }

    &:hover {
      background-color: #53d0e684; 
    }
  }

  ${Td}{
    border: 1px solid #05043649;
  }

`;

export const RatingItem = styled.li`
  background: #f8f9fa;
  margin: 5px 0;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
  text-align: center;

  strong {
    color: #0ca5c0;
  }
`;

export const Label = styled.label`
  display: flex;
  gap: 10px;
  margin: 10px 0;
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
  margin-top: 5px;
  text-align: center;
`;