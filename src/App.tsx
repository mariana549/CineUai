import { useEffect, useState } from 'react';
import { getApi_Search } from './services/requestApi';
import { Cards } from './components/cards';
import { ApiData } from './utils/interfaces';

function App() {
  const [dados, setDados] = useState<ApiData | null>(null);
  const [searchValue, setSearchValue] = useState('star wars');
  const [erroMinLength, setErrorMinLength] = useState('');
  const [favorites, setFavorites] = useState<Record<string, boolean>>(() => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : {};
  });
  const [notFound, setNotFound] = useState<string | null>(null);

  useEffect(() => {
    async function getData() {
      if (searchValue.length >= 2) {
        try {
          const data = await getApi_Search(searchValue);
          setDados(data);
          if (data.Response === 'False') {
            setNotFound(data.Error);
          } else {
            setNotFound(null);
          }
        } catch (error) {
          console.log(`Não foi possivel completar a requisição, ERROR ${error}`);
        }
      } else {
        setErrorMinLength("Digite no minimo 3 caracteres");
      }
    }
    getData();
  }, [searchValue]);

  useEffect(() => {
    // Salve os favoritos no localStorage sempre que mudar
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

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

  const favoritesFromStorage = Object.keys(favorites).filter((value) => favorites[value]);

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
        { favoritesFromStorage.length > 0 && dados && dados?.Response === "True" && (
          <Cards 
          dados={dados.Search.filter(item => favoritesFromStorage.includes(item.Title))} 
          onFavoriteToggle={toggleFavorite} 
          favorites={favorites} 
          />
        )}
        {dados?.Response === "False" && (<p>Nenhum favorito encontrado.</p>)}
      </ul>

      <h2>Todos os Resultados</h2>
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
    </div>
  );
}

export default App;
