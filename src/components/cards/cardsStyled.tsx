import styled from "styled-components";

export const CardStled = styled.li`
  width: 300px;
  height: 400px;
  /* border: 1px solid #0ca5c0; */
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
}
`;

export const ImgCardStyled = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CardContent = styled.div`
  position: absolute;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  text-align: center;
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
  transform: translateY(100%);

  ${CardStled}:hover & {
    opacity: 1;
    transform: translateY(0);
  }

`;

export const TituloCardStyled = styled.h3`
    margin: 0;
    padding: 10px 0;
`;
export const SpanCardStyled = styled.p`
    margin: 0;
    padding: 10px 0;
    text-transform: capitalize;
`;

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

export const MoreInfoButton = styled.button`
  background: #12a5c0;
  border: none;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #0e88a0;
  }
`;