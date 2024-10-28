import { MainCards } from "../components/main";
import { HeaderCards } from "../components/header";
import { InputSearch } from "../components/search";

import { clearAllFavorites } from "../functions/funcoes";
import { useData } from "../hooks/useData";
import { useFavorites } from "../hooks/useFavorites";
import { SavedFavoritesList } from "../utils/savedFavoritesList";

import { ClearButton, Container, H4, SpanErrorInput } from "../globalStyled";
import { Pheader } from "../components/header/headerStyled";

export function Home() {
  const { searchValue, erroMinLength } = useData();
  const { setFavorites } = useFavorites();

  return (
    <Container>

      <HeaderCards>
      <Pheader>Descubra sua nova série ou filme preferido aqui</Pheader>
        <InputSearch />
        <SpanErrorInput>
          {searchValue && searchValue.length <= 2 ? erroMinLength : ""}
        </SpanErrorInput>
      </HeaderCards>

      <MainCards>
        <ClearButton onClick={() => clearAllFavorites(setFavorites)}>
          Excluir Todos os Favoritos
        </ClearButton>
        <H4>Lista completa de favoritos</H4>
        <SavedFavoritesList />
      </MainCards>

    </Container>
  )
}
