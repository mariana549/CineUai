import { useEffect, useState } from "react";
import { ApiData } from "../utils/interfaces";
import { getData, getNumPagesTotal } from "../functions/funcoes";
import { Container } from "../globalStyled";
import { MainCards } from "../components/main";
import { HeaderCards } from "../components/header";

export function Home ({setDadosDetalhesCard}) {
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
            <HeaderCards
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                setNumPageAtual={setNumPageAtual}
                erroMinLength={erroMinLength}
            />

            <MainCards 
                favoritesFromStorage={favoritesFromStorage}
                dados={dados}
                filteredFavoritos={filteredFavoritos}
                toggleFavorite={toggleFavorite}
                favorites={favorites}
                transformFilterdFavoritos={transformFilterdFavoritos}
                numPageAtual={numPageAtual}
                setNumPageAtual={setNumPageAtual}
                numPagesTotal ={numPagesTotal}
                notFound={notFound}
                setDadosDetalhesCard={setDadosDetalhesCard}
            />
        </Container>
    )
  }