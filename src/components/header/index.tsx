import { Header, Logo } from "./headerStyled";
import { Box } from "../../globalStyled";

import { PropsChildren } from "../../utils/interfaces";

import logo from "../../../public/images/logo.png"

export function HeaderCards({ children }: PropsChildren){

  return (
    <Header>
      <Box>
        <img src={logo} alt="logo" style={{ width: "170px" }} />
        <Logo>Cine Uai</Logo>
      </Box>
      {children} 
    </Header>
  )
}