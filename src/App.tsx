import { useEffect, useState } from 'react';
import { Cards } from './components/cards';
import { ApiData } from './utils/interfaces';


import { getData, getNumPagesTotal } from './functions/funcoes';
import { PageChangeButton } from './utils/pageChangeButtons';
import { InputSearch } from './components/search';

function App() {
  const [dados, setDados] = useState<ApiData | null>(null);
  const [searchValue, setSearchValue] = useState('harry Potter');
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

  return (
    <>
      <header>
        <h1>Cine Uai</h1>
        <p>Pesquise sua série ou filme favorita</p>
        <InputSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <span>{searchValue.length <= 2 ? erroMinLength : ""}</span>
      </header>

      <main>
        <section>
          <h2>Favoritos</h2>
          <ul>
            {favoritesFromStorage.length > 0 && dados && dados.Response === "True" && (
              <Cards
                dados={dados.Search.filter(item => favoritesFromStorage.includes(item.Title))}
                onFavoriteToggle={toggleFavorite}
                favorites={favorites}
              />
            )}
            {dados?.Response === "False" && (<p>Nenhum favorito encontrado.</p>)}
          </ul>
        </section>

        <section>
          <h2>Todos os Resultados</h2>
          <PageChangeButton
            numPageAtual={numPageAtual}
            setNumPageAtual={setNumPageAtual}
            numPagesTotal={numPagesTotal}
          />
          <ul>
            {dados && (dados.Response === 'True' ? (
              <Cards
                dados={dados.Search}
                onFavoriteToggle={toggleFavorite}
                favorites={favorites}
              />
            ) : (
              <p>{notFound}</p>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

export default App;
