import { InputSearch } from "../search";
import { Header, Logo, Pheader, SpanErrorInput } from "./headerStyled";
import logo from "../../../public/images/botao-play (1).png"
import { Box } from "../../globalStyled";

export function HeaderCards({searchValue, setSearchValue, setNumPageAtual, erroMinLength}) {

    return (
        <Header>
        <Box>
          <img src={logo} alt="logo" style={{width: "170px"}} />
          <Logo>Cine Uai</Logo>
        </Box>
        <Pheader>Descubra sua nova série ou filme preferido aqui</Pheader>
        <InputSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          setNumPageAtual={setNumPageAtual}
        />
        <SpanErrorInput>{searchValue.length <= 2 ? erroMinLength : ""}</SpanErrorInput>
      </Header>
    )
}