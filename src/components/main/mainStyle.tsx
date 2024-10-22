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