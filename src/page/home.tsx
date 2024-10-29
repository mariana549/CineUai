import { MainCards } from "../components/main";
import { HeaderCards } from "../components/header";

import { clearAllFavorites } from "../functions/favorites/clearAllFavorites";
import { useFavorites } from "../hooks/useFavorites";
import { SavedFavoritesList } from "../components/savedFavoritesList";

import { ClearButton, Container, H4 } from "../globalStyled";
import { Pheader } from "../components/header/headerStyled";
import { Nav } from "../components/nav/nav";

export function Home() {
  const { setFavorites } = useFavorites();

  return (
    <Container>
 
      <HeaderCards>
        <Pheader>Enter endless entertainment! Discover all about your movies and series now.</Pheader>
        <Nav/>
      </HeaderCards>

      <MainCards>
        <ClearButton onClick={() => clearAllFavorites(setFavorites)}>
        Delete All Favorites
        </ClearButton>
        <H4>Full list of favorites</H4>
        <SavedFavoritesList />
      </MainCards>

    </Container>
  )
}
