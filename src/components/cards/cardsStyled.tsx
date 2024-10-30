import styled from "styled-components";

export const CardStled = styled.li`
  width: 300px;
  height: 400px;
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }

  @media (max-width: 765px) {
    width: 250px;
    height: 350px;
  }

  @media (max-width: 600px) {
    width: 200px;
    height: 300px;
  }

  @media (max-width: 414px) {
    width: 300px;
    height: 400px;
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

  @media (max-width: 765px) {
    padding: 15px;
  }

  @media (max-width: 414px) {
    padding: 20px;
  }
`;

export const TituloCardStyled = styled.h3`
  margin: 0;
  padding: 10px 0;

  @media (max-width: 765px) {
    font-size: 16px;
    padding: 7px 0;
  }

  @media (max-width: 600px) {
    font-size: 13px;
    padding: 5px 0;
  }

  @media (max-width: 414px) {
    font-size: 18px;
    padding: 10px 0;
  }
`;
export const SpanCardStyled = styled.p`
    margin: 0;
    padding: 10px 0;
    text-transform: capitalize;

    @media (max-width: 765px) {
      font-size: 14px;
      padding: 7px 0;
    }

    @media (max-width: 600px) {
      font-size: 12px;
      padding: 5px 0;
    }

    @media (max-width: 414px) {
      font-size: 16px;
      padding: 10px 0;
    }
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

  @media (max-width: 765px) {
    font-size: 12px;
    padding: 7px 15px;
  }

  @media (max-width: 765px) {
    font-size: 10px;
    padding: 5px 10px;
  }

  @media (max-width: 414px) {
    font-size: 13px;
    padding: 10px 20px;
  }
`;