import { useEffect, useState } from 'react';
import { getApi_Search } from './services/requestApi';
import { Cards } from './components/cards';
import { ApiData } from './utils/interfaces';
import leftArrow from '../public/icons/leftArrow.png';
import rightArrow from '../public/icons/rigthArrow.png';

function App() {
  const [dados, setDados] = useState<ApiData | null>(null);
  const [searchValue, setSearchValue] = useState('star wars');
  const [erroMinLength, setErrorMinLength] = useState('');
  const [favorites, setFavorites] = useState<Record<string, boolean>>(() => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : {};
  });
  const [notFound, setNotFound] = useState<string | null>(null);
  const [numPageAtual, setNumPageAtual] = useState(1);

  // console.log(numPageAtual);

  useEffect(() => {
    async function getData() {
      if (searchValue.length >= 2) {
        try {
          const data = await getApi_Search(searchValue, numPageAtual);
          setDados(data);
          if (data.Response === 'False') {
            setNotFound(data.Error);
          } else {
            setNotFound(null);
          }
        } catch (error) {
          console.log(`Não foi possível completar a requisição, ERROR ${error}`);
        }
      } else {
        setErrorMinLength("Digite no mínimo 3 caracteres");
      }
    }
    getData();
  }, [searchValue, numPageAtual]);

  useEffect(() => {
    // Salva os favoritos no localStorage sempre que mudar
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

  const numTotalResults = dados?.totalResults || 0;

  const getNumPagesTotal = (numTotal: number): number => {
    const pagesTotal = Math.ceil(numTotal / 10); // Divide o total de resultados pelo número de resultados por página e arredonda para cima
    if (Number.isNaN(pagesTotal)) return 0;
    return pagesTotal;
  }

  const numPagesTotal = getNumPagesTotal(numTotalResults);

  const prevPage = () => {
    if (numPageAtual > 1) {
      setNumPageAtual((prev) => prev - 1);
    }
  }

  const nextPage = () => {
    if (numPageAtual < numPagesTotal) {
      setNumPageAtual((prev) => prev + 1);
    }
  }

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
        {favoritesFromStorage.length > 0 && dados && dados.Response === "True" && (
          <Cards 
            dados={dados.Search.filter(item => favoritesFromStorage.includes(item.Title))} 
            onFavoriteToggle={toggleFavorite} 
            favorites={favorites} 
          />
        )}
        {dados?.Response === "False" && (<p>Nenhum favorito encontrado.</p>)}
      </ul>

      <h2>Todos os Resultados</h2>
      <div className='mudarPaginaBloco'>
        {numPageAtual > 1 && (
          <button type="button" onClick={prevPage}>
            <img src={leftArrow} alt="leftArrow" style={{ width: "20px" }} />
          </button>
        )}
        <span>Page {numPageAtual} de {numPagesTotal}</span>
        {numPageAtual < numPagesTotal && (
          <button type="button" onClick={nextPage}>
            <img src={rightArrow} alt="rightArrow" style={{ width: "20px" }} />
          </button>
        )}
      </div>
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
