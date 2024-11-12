import { Box } from "../../globalStyled";
import { HeaderSty, Logo } from "./headerStyled";

import { PropsChildren } from "../../utils/types/interfaces";

import logo from "../../assets/images/logo.png";

export function Header({ children }: PropsChildren) {
  return (
    <HeaderSty>
      <Box>
        <img src={logo} alt="logo" />
        <Logo translate="no">Cine Uai</Logo>
      </Box>
      {children}
    </HeaderSty>
  );
}
