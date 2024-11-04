import styled from "styled-components";
import { backgroundColor, primaryColor, textColor } from "../../utils/constants/constTheme/constThemes";

export const StyledSelect = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: ${backgroundColor};
  color: ${textColor};
  font-size: 16px;
  margin: 5px 0;
  transition: border-color 0.3s;
  text-transform: capitalize;

  &:focus {
    border-color: ${primaryColor};
    outline: none;
  }

  @media (max-width: 765px) {
    padding: 7px;
    font-size: 14px;
    margin: 0;
  }
`;

export const StyledOption = styled.option`
  background-color: ${backgroundColor};
  color: ${textColor};
  text-transform: capitalize;
`;

export const StyledInput = styled.input`
  width: 90px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: ${backgroundColor};
  color: ${textColor};
  font-size: 16px;
  margin: 5px 0;
  transition: border-color 0.3s;

  &:focus {
    border-color: ${primaryColor};
    outline: none;
  }

  @media (max-width: 765px) {
    width: 80px;
    padding: 8px;
    font-size: 14px;
    margin: 0;
  }
`;
