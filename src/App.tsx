import { useEffect, useState } from 'react';
import { Cards } from './components/cards';
import { ApiData } from './utils/interfaces';


import { getData, getNumPagesTotal } from './functions/funcoes';
import { PageChangeButton } from './utils/pageChangeButtons';
import { InputSearch } from './components/search';
import { Container, H2, Header, Logo, Main, Pheader, Section, SpanErrorInput, StyledUL, VerificationMessage } from './AppStyled';

function App() {
  const [dados, setDados] = useState<ApiData | null>(null);
  const [searchValue, setSearchValue] = useState('Harry Potter');
  const [erroMinLength, setErrorMinLength] = useState('');
  const [favorites, setFavorites] = useState<Record<string, boolean>>(() => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : {};
  });
  const [notFound, setNotFound] = useState<string | null>(null);
  const [numPageAtual, setNumPageAtual] = useState(1);

  useEffect(() => {
    const useStateDados = {
      searchValue: searchValue,
      numPageAtual: numPageAtual,
      setDados: setDados,
      setNotFound: setNotFound,
      setErrorMinLength: setErrorMinLength,
    }

    getData(useStateDados);
  }, [searchValue, numPageAtual]);

  useEffect(() => {
    // Salva os favoritos no localStorage sempre que mudar
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (title: string) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = { ...prevFavorites, [title]: !prevFavorites[title] };

      // Remove o item do localStorage, se ele não for mais um favorito.
      if (!updatedFavorites[title]) {
        delete updatedFavorites[title];
      }

      return updatedFavorites;
    });
  };

  const numTotalResults = dados?.totalResults || 0;

  const numPagesTotal = getNumPagesTotal(numTotalResults);

  const favoritesFromStorage = Object.keys(favorites).filter((value) => favorites[value]);

  const filteredFavoritos = dados?.Search?.filter(item => favoritesFromStorage.includes(item.Title));

  // transformar o resultado do filteredFavoritos em string
  const transformFilterdFavoritos = JSON.stringify(filteredFavoritos); 

  return (
    <Container>
      <Header>
        <Logo>Cine Uai</Logo>
        <Pheader>Descubra sua nova série ou filme preferido aqui</Pheader>
        <InputSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          setNumPageAtual={setNumPageAtual}
        />
        <SpanErrorInput>{searchValue.length <= 2 ? erroMinLength : ""}</SpanErrorInput>
      </Header>

      <Main>
        <Section>
          <H2>Favoritos</H2>
          <StyledUL>
            {favoritesFromStorage.length > 0 && dados && dados.Response === "True" ? (
              <Cards
                dados={filteredFavoritos || []}
                onFavoriteToggle={toggleFavorite}
                favorites={favorites}
              />
            ) : (
              <VerificationMessage>
                Nenhum favorito encontrado.
              </VerificationMessage>
            )
            } 
            {transformFilterdFavoritos === "[]" && (
              <VerificationMessage>
                Não possui favoritos nessa página.
              </VerificationMessage>)}
          </StyledUL>
        </Section>

        <Section>
          <H2>Todos os Resultados</H2>
          <PageChangeButton
            numPageAtual={numPageAtual}
            setNumPageAtual={setNumPageAtual}
            numPagesTotal={numPagesTotal}
          />
          <StyledUL>
            {dados && (dados.Response === 'True' ? (
              <Cards
                dados={dados.Search}
                onFavoriteToggle={toggleFavorite}
                favorites={favorites}
              />
            ) : (
              <VerificationMessage>{notFound}</VerificationMessage>
            ))}
          </StyledUL>
        </Section>
      </Main>
    </Container>
  );
}

export default App;
