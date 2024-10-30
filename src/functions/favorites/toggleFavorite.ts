import { Favorites } from "../../utils/types/types";

export const toggleFavorite = (title: string, id: string, setFavorites: React.Dispatch<React.SetStateAction<Favorites>>) => {
    setFavorites((prevFavorites: Favorites) => {
        const updatedFavorites: Favorites = { ...prevFavorites, [id]: { title, isFavorite: !prevFavorites[id]?.isFavorite || false } };
        if (!updatedFavorites[id].isFavorite) delete updatedFavorites[id];
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        return updatedFavorites;
    });
};