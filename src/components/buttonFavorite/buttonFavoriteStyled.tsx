import styled from "styled-components";

export const FavoriteButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  padding: 8px;
  padding-bottom: 5px;
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }
`;

export const FavoritedCardStyled = styled.img`
   width: 25px;
`;