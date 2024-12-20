import styled from "styled-components";
import { color10, color20, color30, errorColor, primaryColor, terciaryColor, textColor } from "../../../utils/constants/constTheme/constThemes";

export const StyledDiv = styled.div`
  padding: 15px;
  background-color: ${color30};
  border: 1px solid ${terciaryColor};
  border-radius: 5px;
  box-shadow: 0 0 10px ${color10};
  margin-bottom: 20px;

  @media (max-width: 765px) {
    padding: 10px;
    margin-bottom: 15px;
  }
`;

export const ListItem = styled.li`
  display: inline-block;
  padding: 5px;
  color: ${textColor};
  border-bottom: 1px solid ${terciaryColor};
  font-size: 11px;
  cursor: pointer;

  &:hover {
    background-color: ${color20};
    zoom: 1.4;
  }

  @media (max-width: 765px) {
    font-size: 9px;
  }
`

export const ClearFavorite = styled.button`
  display: inline-block;
  background-color: transparent; 
  color: ${primaryColor};
  border: none;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
  font-size: 10px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${errorColor}; 
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px ${primaryColor};
  }

  @media (max-width: 765px) {
    font-size: 8px;
    padding: 3px;
  }
`;