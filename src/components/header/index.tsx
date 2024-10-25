import { Header, Logo, Pheader } from "./headerStyled";
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
      <Pheader>Descubra sua nova série ou filme preferido aqui</Pheader>
      {children} 
    </Header>
  )
}