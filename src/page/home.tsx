import { useEffect, useState } from "react";
import { ApiData } from "../utils/interfaces";
import { getData, getNumPagesTotal } from "../functions/funcoes";
import { Container, SpanErrorInput } from "../globalStyled";
import { MainCards } from "../components/main";
import { HeaderCards } from "../components/header";
import { InputSearch } from "../components/search";

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
        setFavorites={setFavorites}
      />
    </Container>
  )
}
