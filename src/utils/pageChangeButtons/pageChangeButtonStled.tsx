import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 20px 0;
`;

export const ImgButton = styled.img`
  width: 20px;
  height: 20px;
`;

export const SpanButton = styled.span`
  font-size: 18px;
  color: #0ca5c0;
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

  &:hover {
    background: #0e88a0;
    transform: scale(1.1);
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;
