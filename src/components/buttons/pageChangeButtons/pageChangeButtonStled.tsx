import styled from 'styled-components';

export const ImgButton = styled.img`
  width: 20px;
  height: 20px;

  @media (max-width: 765px) {
    width: 14px;
    height: 14px;
  }
`;

export const SpanButton = styled.span`
  font-size: 18px;
  color: #0ca5c0;

  @media (max-width: 765px) {
    font-size: 16px;
  }
`;

export const ToogleButton = styled.button`
  background: #12a5c0;
  border: none;
  color: white;
  padding: 10px;
  padding-bottom: 7px;
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease;

  @media (max-width: 765px) {
    padding: 7px;
    padding-bottom: 4px;
  }

  &:hover {
    background: #0e88a0;
    transform: scale(1.1);
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;
