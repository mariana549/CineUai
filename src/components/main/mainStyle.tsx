import styled from "styled-components";
import { color10, color20, color30, color40, color50, errorColor, highlightColor, primaryColor, terciaryColor, textColor } from "../../utils/constants/constThemes";

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

export const H4 = styled.h4`
  font-size: 1.2em;
  margin-bottom: 10px;
  color: ${textColor};
`;

export const StyledDiv = styled.div`
  padding: 15px;
  background-color: ${color30};
  border: 1px solid ${terciaryColor};
  border-radius: 5px;
  box-shadow: 0 0 10px ${color10};
  margin-bottom: 20px;
`;

export const ListItem = styled.li`
  padding: 5px;
  color: ${textColor};
  border-bottom: 1px solid ${terciaryColor};
  font-size: 11px;
  cursor: pointer;

  &:hover {
    background-color: ${color20};
    zoom: 1.4;
  }
`

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

export const ClearFavorite = styled.button`
  background-color: transparent; // Cor de Alerta
  color: ${primaryColor};
  border: none;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
  font-size: 10px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${errorColor}; // Cor de Erro ao passar o mouse
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px ${primaryColor};
  }
`;


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

export const StyledUL = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;