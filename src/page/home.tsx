import { MainCards } from "../components/main";
import { HeaderCards } from "../components/header";

import { clearAllFavorites } from "../functions/funcoes";
import { useFavorites } from "../hooks/useFavorites";
import { SavedFavoritesList } from "../utils/savedFavoritesList";

import { ClearButton, Container, H4 } from "../globalStyled";
import { Pheader } from "../components/header/headerStyled";
import { Nav } from "../components/nav/nav";

export function Home() {
  const { setFavorites } = useFavorites();

  return (
    <Container>

      <HeaderCards>
        <Pheader>Descubra sua nova série ou filme preferido aqui</Pheader>
        <Nav/>
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
