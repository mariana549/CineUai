import styled from "styled-components";

export const FavoriteButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  color: white;
  padding: 8px;
  padding-bottom: 5px;
  border-radius: 50%;
  cursor: pointer;

  @media (max-width: 765px) {
    padding: 5px;
    padding-bottom: 2px;
  }
`;

export const FavoritedCardStyled = styled.img`
   width: 25px;

   @media (max-width: 765px) {
    width: 18px;
  }
`;