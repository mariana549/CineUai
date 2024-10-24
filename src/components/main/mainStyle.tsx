import styled from "styled-components";

export const Main = styled.main`
  width: 90%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
`;

export const Section = styled.section`
  width: 100%;
  max-width: 1800px;
  margin: 20px 0;
`;

export const H2 = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  color: #0ca5c0;
  border-bottom: 2px solid #0ca5c0;
  padding-bottom: 5px;
`;

;

export const H4 = styled.h4`
  font-size: 1.2em;
  margin-bottom: 10px;
  color: #555;
`;

export const StyledDiv = styled.div`
  padding: 15px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

export const ListItem = styled.li`
  padding: 5px;
  color: black;
  border-bottom: 1px solid #ddd;
  font-size: 11px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
    zoom: 1.4;
  }
`

export const ClearButton = styled.button`
  padding: 10px 20px;
  background-color: #0ca5c0;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px 0;
  &:hover {
    background-color: #0e88a0;
  }
`;

export const VerificationMessage = styled.p`
  color: #0ca5c0;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  margin: 20px 0;
  background-color: #e0f7fa;
  padding: 10px;
  border-radius: 10px;
`;

export const StyledUL = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;