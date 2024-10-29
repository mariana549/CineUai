import styled from 'styled-components';
import apagar from "../../assets/icons/apagar.png"

export const SearchInput = styled.input`
  width: 700px;
  padding: 10px;
  font-size: 18px;
  border: 2px solid #0ca5c0;
  box-shadow: 0 2px 5px rgba(12, 165, 192, 0.7);
  border-radius: 10px;
  background-color: #00000039;
  color: white;

  &::placeholder {
    color: #a8cad3;
  }

  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    border-color: #0e88a0;
    box-shadow: 0 2px 5px rgba(14, 136, 160, 0.7);
    outline: none;
  }

  &::-webkit-search-cancel-button {
    -webkit-appearance: none;
    height: 20px;
    width: 20px;
    background: url(${apagar}) no-repeat center;
    background-size: 20px 20px;
    cursor: pointer;
  }
`;