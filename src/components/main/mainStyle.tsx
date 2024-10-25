import styled from "styled-components";
import { color40, color50, primaryColor } from "../../utils/constants/constThemes";

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
  color: ${primaryColor};
  border-bottom: 2px solid ${primaryColor};
  padding-bottom: 5px;
`;

;

export const VerificationMessage = styled.p`
  color: ${color40};
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  margin: 20px 0;
  background-color: ${color50};
  padding: 10px;
  border-radius: 10px;
`;

