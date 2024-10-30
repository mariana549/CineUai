import styled from 'styled-components';
import { colorHeader } from '../../../utils/constants/constThemes';

export const ToggleButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 50px;
  background-color: ${colorHeader};

  @media (max-width: 765px) {
    right: 30px;

    img {
      width: 25px;
    }
  }
  
  @media (max-width: 600px) {
    right: 15px;
  }
`;
