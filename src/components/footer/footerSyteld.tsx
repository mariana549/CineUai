import styled from 'styled-components';
import { backgroundColor, primaryColor, textColor } from '../../utils/constants/constTheme/constThemes';

export const FooterContainer = styled.footer`
  background-color: ${backgroundColor};
  color: ${textColor};
  padding: 20px 0;
  text-align: center;
  border-top: 1px solid ${primaryColor};
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  nav {
    margin-top: 10px;

    a:not(:last-child) {
      margin-right: 15px;
    }
  }

  p {
    margin: 0;
    font-size: 14px;

  @media (max-width: 414px) {
    font-size: 12px;
  }
  }
`;

export const FooterLink = styled.p`
  color: ${primaryColor};

  &:hover {
    text-decoration: underline;
  }
`;

export const RedeSocial = styled(FooterLink).attrs({ as: 'a' })`
    text-decoration: none;
`
