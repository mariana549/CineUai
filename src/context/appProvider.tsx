import { useEffect, useState } from "react";
import { getData } from "../functions/api/getData";
import { getNumPagesTotal } from "../functions/api/pagination";
import { DataContext, FavoritesContext, PageContext } from "./appContext";
import { ApiData, PropsChildren, UseStateDados } from "../utils/types/interfaces";

export const AppProvider = ({ children }: PropsChildren) => {
    const [dados, setDados] = useState<ApiData | null>(null);
    const [searchValue, setSearchValue] = useState(localStorage.getItem('searchValue') || 'harry potter');
    const [numPageAtual, setNumPageAtual] = useState(parseInt(localStorage.getItem('numPageAtual') || '1', 10));
    const [erroMinLength, setErrorMinLength] = useState('');
    const [notFound, setNotFound] = useState<string | null>(null);
    const [type, setType] = useState("");
    const [year, setYear] = useState<string | number>();
    const [favorites, setFavorites] = useState(() => {
        const savedFavorites = localStorage.getItem('favorites');
        return savedFavorites ? JSON.parse(savedFavorites) : {};
    });

    useEffect(() => {
        const useStateDados: UseStateDados = {
            searchValue: searchValue,
            numPageAtual: numPageAtual,
            type: type ?? "",
            year: year, 
            setDados: setDados,
            setNotFound: setNotFound,
            setErrorMinLength: setErrorMinLength,
          };
          
        getData(useStateDados);

        localStorage.setItem('searchValue', searchValue);
        localStorage.setItem('numPageAtual', numPageAtual.toString());
    }, [searchValue, numPageAtual, type, year]);

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    const numTotalResults = dados?.totalResults || 0;
    const numPagesTotal = getNumPagesTotal(numTotalResults);
    const favoritesList = Object.keys(favorites).map((id) => ({
        title: favorites[id].title,
        id,
    }));

    const favoritesFromStorage = favoritesList.map((e) => e.title);
    const filteredFavoritos = dados?.Search?.filter(item => favoritesFromStorage.includes(item.Title));

    // transformar o resultado do filteredFavoritos em string
    const transformFilterdFavoritos = JSON.stringify(filteredFavoritos);

    return (
        <DataContext.Provider value={{
            searchValue: searchValue,
            numTotalResults: numTotalResults, 
            numPagesTotal: numPagesTotal,
            erroMinLength: erroMinLength,
            dados: dados,
            setSearchValue: setSearchValue,
            notFound: notFound,
            year: year,
            setType: setType,
            setYear: setYear,
        }}>
            <FavoritesContext.Provider value={{
                favorites: favorites,
                setFavorites: setFavorites,
                favoritesList: favoritesList,
                favoritesFromStorage: favoritesFromStorage, 
                filteredFavoritos: filteredFavoritos,
                transformFilterdFavoritos: transformFilterdFavoritos
            }}>
                <PageContext.Provider value={{
                    numPageAtual: numPageAtual,
                    setNumPageAtual: setNumPageAtual
                }}>
                    {children}
                </PageContext.Provider>

            </FavoritesContext.Provider>

        </DataContext.Provider>
    );
};



