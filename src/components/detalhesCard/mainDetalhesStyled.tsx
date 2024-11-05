import styled, { keyframes } from "styled-components";
import {
  backgroundColor,
  color10,
  color50,
  color60,
  color70,
  primaryColor,
} from "../../utils/constants/constTheme/constThemes";

export const Main = styled.main`
  position: relative;
  padding: 20px;
  background-color: ${backgroundColor};
  border-radius: 10px;
  box-shadow: 0 4px 8px ${color60};
  border: 1px solid ${color50};
  max-width: 800px;
  margin: auto;
  margin-bottom: 20px;

  @media (max-width: 765px) {
    padding: 17px;
    padding-bottom: 0px;

    img {
      width: 26px;
    }
  }
`;

const focusImage = keyframes`
  from {
    transform: scale(1);
    box-shadow: none;
  }
  to {
    transform: scale(1.05);
    box-shadow: 0 0 15px ${color10};
  }
`;

export const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

  img {
    width: 100%;
    max-width: 300px;
    height: auto;
    border-radius: 10px;
    transition: transform 0.3s ease;

    &:hover {
      width: 100%;
      height: 100%;
      border-radius: 10px;
      animation: ${focusImage} 2s forwards;
    }
  }

  figcaption {
    font-size: 18px;
    font-weight: 700;
    color: ${primaryColor};
    margin-top: 10px;
  }

  @media (max-width: 765px) {
    margin-bottom: 15px;

    figcaption {
      font-size: 16px;
    }
  }

  @media (max-width: 765px) {
    figcaption {
      font-size: 13px;
    }
  }
`;

export const Section = styled.section`
  margin-bottom: 20px;

  a {
    color: ${primaryColor};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Table = styled.table`
  width: 100%;
  margin-top: 20px;

  @media (max-width: 765px) {
    margin-top: 15px;
  }
`;

export const Th = styled.th`
  border-radius: 5px;
  background-color: ${primaryColor};
  color: white;
  padding: 10px;
  text-align: left;

  @media (max-width: 765px) {
    font-size: 14px;
    padding: 8px;
  }
`;

export const Td = styled.td`
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 10px;
  text-align: end;

  @media (max-width: 765px) {
    font-size: 14px;
    padding: 8px;
  }
`;

export const Tr = styled.tr`
  background-color: ${color70};
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
  &:hover {
    background-color: #e6f7ff;
  }
`;

export const Thead = styled.thead`
  ${Tr} {
    background-color: #d4f8ff;
    &:nth-child(even) {
      background-color: #cdf3ff;
    }
    &:hover {
      background-color: #53d0e684;
    }
  }
  ${Td} {
    border: 1px solid #05043649;
  }
`;

export const RatingItem = styled.li`
  background: ${color70};
  margin: 5px 0;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
  text-align: center;

  strong {
    color: ${primaryColor};
  }

  @media (max-width: 765px) {
    padding: 8px;
  }
`;

export const Label = styled.label`
  display: flex;
  gap: 10px;
  margin: 10px 0;
  text-transform: capitalize;
  align-items: center;

  @media (max-width: 765px) {
    font-size: 12px;
    gap: 7px;
  }
`;

export const InputCheckBox = styled.input.attrs({ type: "checkbox" })`
  width: 20px;
  height: 20px;
  cursor: pointer;
  accent-color: ${primaryColor};

  @media (max-width: 765px) {
    width: 15px;
    height: 15px;
  }
`;

export const PlotParagrafro = styled.p`
  font-size: 18px;
  margin-top: 5px;
  text-align: center;

  @media (max-width: 765px) {
    font-size: 15px;
  }

  @media (max-width: 600px) {
    font-size: 13px;
  }
`;
