import { useEffect, useState } from "react";
import { ApiData } from "../utils/interfaces";
import { clearAllFavorites, getData, getNumPagesTotal } from "../functions/funcoes";
import { ClearButton, Container, H4, SpanErrorInput } from "../globalStyled";
import { MainCards } from "../components/main";
import { HeaderCards } from "../components/header";
import { InputSearch } from "../components/search";
import { SavedFavoritesList } from "../utils/savedFavoritesList";

export function Home() {
  const [dados, setDados] = useState<ApiData | null>(null);
  const [searchValue, setSearchValue] = useState(localStorage.getItem('searchValue') || "harry potter");
  const [numPageAtual, setNumPageAtual] = useState(parseInt(localStorage.getItem('numPageAtual') || '1', 10));
  const [erroMinLength, setErrorMinLength] = useState('');
  const [notFound, setNotFound] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<Record<string, boolean>>(() => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : {};
  });

  useEffect(() => {
    const useStateDados = {
      searchValue: searchValue,
      numPageAtual: numPageAtual,
      setDados: setDados,
      setNotFound: setNotFound,
      setErrorMinLength: setErrorMinLength,
    }

    getData(useStateDados);

    localStorage.setItem('searchValue', searchValue);
    localStorage.setItem('numPageAtual', numPageAtual.toString());
  }, [searchValue, numPageAtual]);

  useEffect(() => {
    // Salva os favoritos no localStorage sempre que mudar
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (title: string, id: string) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = {
        ...prevFavorites,
        [id]: { title, isFavorite: !prevFavorites[id]?.isFavorite || false }
      };

      // Remove o item do localStorage se não for mais favorito
      if (!updatedFavorites[id].isFavorite) {
        delete updatedFavorites[id];
      }

      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  };

  const numTotalResults = dados?.totalResults || 0;
  const numPagesTotal = getNumPagesTotal(numTotalResults);

  const favoritesList = Object.keys(favorites).map((id) => ({
    title: favorites[id].title,
    id,
}));

  return (
    <Container>
      <HeaderCards>
        <InputSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          setNumPageAtual={setNumPageAtual}
        />
        <SpanErrorInput>{searchValue.length <= 2 ? erroMinLength : ""}</SpanErrorInput>
      </HeaderCards>
      <MainCards
        dados={dados}
        toggleFavorite={toggleFavorite}
        favorites={favorites}
        numPageAtual={numPageAtual}
        setNumPageAtual={setNumPageAtual}
        numPagesTotal={numPagesTotal}
        notFound={notFound}
        searchValue={searchValue}
        favoritesList={favoritesList}
      >
        <ClearButton onClick={() => clearAllFavorites(setFavorites)}>
          Excluir Todos os Favoritos
        </ClearButton>
          <H4>Lista completa de favoritos</H4>
          <SavedFavoritesList favoritesList={favoritesList} setFavorites={setFavorites} />
      </MainCards>
    </Container>
  )
}
