import { Header, Logo } from "./headerStyled";
import { Box } from "../../globalStyled";

import { PropsChildren } from "../../utils/types/interfaces";

import logo from "../../assets/images/logo.png"

export function HeaderCards({ children }: PropsChildren){

  return (
    <Header>
      <Box>
        <img src={logo} alt="logo" />
        <Logo translate="no">Cine Uai</Logo>
      </Box>
      {children} 
    </Header>
  )
}