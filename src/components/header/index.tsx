import { Header, Logo, Pheader } from "./headerStyled";
import logo from "../../../public/images/botao-play (1).png"
import { Box } from "../../globalStyled";
import { ReactNode } from "react";

export function HeaderCards({ children }: {
  children: ReactNode;
}): JSX.Element{

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