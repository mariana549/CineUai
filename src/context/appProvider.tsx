import { useEffect, useState } from "react";
import { getData, getNumPagesTotal } from "../functions/funcoes";
import { DataContext, FavoritesContext, PageContext } from "./appContext";
import { ApiData } from "../utils/interfaces";

export const AppProvider = ({ children }) => {
    const [dados, setDados] = useState<ApiData | null>(null);
    const [searchValue, setSearchValue] = useState(localStorage.getItem('searchValue') || 'harry potter');
    const [numPageAtual, setNumPageAtual] = useState(parseInt(localStorage.getItem('numPageAtual') || '1', 10));
    const [erroMinLength, setErrorMinLength] = useState('');
    const [notFound, setNotFound] = useState<string | null>(null);
    const [favorites, setFavorites] = useState(() => {
        const savedFavorites = localStorage.getItem('favorites');
        return savedFavorites ? JSON.parse(savedFavorites) : {};
    });

    useEffect(() => {
        const useStateDados = {
            searchValue,
            numPageAtual,
            setDados,
            setNotFound,
            setErrorMinLength,
        };
        getData(useStateDados);
        localStorage.setItem('searchValue', searchValue);
        localStorage.setItem('numPageAtual', numPageAtual.toString());
    }, [searchValue, numPageAtual]);

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    const toggleFavorite = (title: string, id: string) => {
        setFavorites((prevFavorites) => {
            const updatedFavorites = { ...prevFavorites, [id]: { title, isFavorite: !prevFavorites[id]?.isFavorite || false } };
            if (!updatedFavorites[id].isFavorite) delete updatedFavorites[id];
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
            return updatedFavorites;
        });
    };

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
            numTotalResults: numTotalResults, numPagesTotal: numPagesTotal,
            erroMinLength: erroMinLength,
            dados: dados,
            setSearchValue: setSearchValue,
            notFound: notFound
        }}>
            <FavoritesContext.Provider value={{
                favorites: favorites,
                setFavorites: setFavorites,
                toggleFavorite: toggleFavorite,
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



