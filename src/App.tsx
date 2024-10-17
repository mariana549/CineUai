import { useEffect, useState } from 'react';
import { getApi_Search } from './services/requestApi';
import { Cards } from './components/cards';

interface ApiData {
  Search: SearchResult[];
}

interface SearchResult {
  Poster: string;
  Title: string;
  Year: string;
  Type: string;
}

function App() {
  const [dados, setDados] = useState<ApiData | null>(null);
  const [searchValue, setSearchValue] = useState('harry potter');
  const [erroMinLength, setErrorMinLength] = useState('');
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});

  useEffect(() => {
    async function getData() {
      if (searchValue.length >= 2) {
        try {
          const data = await getApi_Search(searchValue);
          setDados(data);
        } catch (error) {
          console.log(`Não foi possivel completar a requisição, ERROR ${error}`);
        }
      } else {
        setErrorMinLength("Digite no minimo 3 caracteres");
      }
    }
    getData();
  }, [searchValue]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const toggleFavorite = (title: string) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [title]: !prevFavorites[title],
    }));
  };

  const filteredFavorites = dados?.Search?.filter((item) => favorites[item.Title]);

  return (
    <div>
      <h1>Cine Uai</h1>
      <p>Pesquise sua série ou filme favorita</p>
      <input
        type="search"
        name="pesquisa"
        id="pesquisa"
        placeholder="Digite o nome"
        value={searchValue}
        minLength={3}
        onChange={handleSearch}
      />
      <span>{searchValue.length <= 2 ? erroMinLength : ""}</span>

      <h2>Favoritos</h2>
      <ul>
        {filteredFavorites && (
          <Cards
            dados={filteredFavorites}
            onFavoriteToggle={toggleFavorite}
            favorites={favorites}
          />
        )}
      </ul>

      <h2>Todos os Resultados</h2>
      <ul>
        {dados && (
          <Cards
            dados={dados.Search}
            onFavoriteToggle={toggleFavorite}
            favorites={favorites}
          />
        )}
      </ul>
    </div>
  );
}

export default App;
