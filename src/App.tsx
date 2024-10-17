import { useEffect, useState } from 'react'
import { getApi_Search } from './services/requestApi'
import favorited from "../public/icons/favorited.png";
import notfavorited from "../public/icons/notFavorited.png";


interface SearchResult {
  Poster: string;
  Title: string;
  Year: string;
  Type: string;
}

interface ApiData {
  Search: SearchResult[];
}

const imgFavorite = {
  notFavorited: notfavorited,
  favorited: favorited,
}

function App() {
  const [dados, setDados] = useState<ApiData | null>(null);
  const [searchValue, setSearchValue] = useState('harry potter');
  const [erroMinLength, setErrorMinLength] = useState('');
  const [favorites, setFavorites] = useState(imgFavorite.notFavorited)

  useEffect(() => {
    async function getData() {
      if (searchValue.length >= 2) {
        try {
          const data = await getApi_Search(searchValue);
          setDados(data);

          // console.log(data)
        } catch (error) {
          console.log(`Não foi possivel completar a requisição, ERROR ${error}`)
        }
      } else {
        setErrorMinLength("Digite no minimo 3 caracteres")
      }
    }
    getData();
  }, [searchValue]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  function toogleFavorite(title: string) {
    // if(favorite){
    //   favorite === imgFavorite.notFavorited ? setFavorite(imgFavorite.favorited) : setFavorite(imgFavorite.notFavorited)
    // }
    setFavorites((prevFavorites) => ({
      ...prevFavorites, 
      [title]: !prevFavorites[title]
    }))

  }

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

      <ul>
        {dados?.Search?.map((e: SearchResult, i: number) => (
          <li key={i} style={{ border: "1px solid", margin: "10px", width: "300px" }}>
            {/* {console.log(e)} */}
            <img src={e.Poster} alt={e.Title} />
            <h3>{e.Title}</h3>
            <span>{e.Year}</span>
            <span> {e.Type}</span>
            <img
              src={favorites[e.Title] ? imgFavorite.favorited : imgFavorite.notFavorited}
              alt="favorite"
              onClick={() => toogleFavorite(e.Title)}
              style={{ width: "32px", cursor: "pointer" }}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
