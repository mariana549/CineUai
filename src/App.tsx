import { useEffect, useState } from 'react'
import { getApi_Search } from './services/requestApi'

interface SearchResult {
  Poster: string;
  Title: string;
  Year: string;
  Type: string;
}

interface ApiData {
  Search: SearchResult[];
}

function App() {
  const [dados, setDados] = useState<ApiData | null>(null);
  const [searchValue, setSearchValue] = useState('harry potter');

  useEffect(() => {
    async function getData() {
      try {
        const data = await getApi_Search(searchValue);
        setDados(data);
        // console.log(data)
      } catch (error) {
        console.log(`Não foi possivel completar a requisição, ERROR ${error}`)
      }
    }
    getData();
  }, [searchValue]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };



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
        onChange={handleSearch}
      />
      <ul>
        {dados?.Search?.map((e: SearchResult, i: number) => (
          <li key={i}>
            {/* {console.log(e)} */}
            <img src={e.Poster} alt={e.Title} />
            <h3>{e.Title}</h3>
            <span>{e.Year}</span>
            <span> {e.Type}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
