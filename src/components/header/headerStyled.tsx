import styled from "styled-components";
import { colorHeader } from "../../utils/constants/constTheme/constThemes";

export const Header = styled.header`
  text-align: center;
  padding: 20px;
  background-color: ${colorHeader};
  color: white;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;

  img {
    width: 170px;
  }

  @media (max-width: 765px) {
    padding: 15px;
    margin-bottom: 15px;

    img {
      width: 150px;
    }
  }

  @media (max-width: 600px) {
    padding: 13px;
    margin-bottom: 13px;

    img {
      width: 130px;
    }
  }
`;

export const Logo = styled.h1`
  position: absolute;
  top: 230;
  font-size: 3.9rem;
  color: #d2ffff;

  @media (max-width: 765px) {
    font-size: 3.5rem;
  }

  @media (max-width: 600px) {
    font-size: 3rem;
  }
`;

export const Pheader = styled.p`
  margin: 10px 0;
  font-size: 18px;
  color: #d1ecf1;

  @media (max-width: 765px) {
    margin: 7px 0;
    font-size: 16px;
  }

  @media (max-width: 600px) {
    margin: 5px 0;
    font-size: 13px;
  }
`;
