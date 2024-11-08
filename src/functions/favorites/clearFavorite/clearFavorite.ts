import { Favorites } from '../../../utils/types/types';

export const clearFavorite = (name: string, id: string, setFavorites: React.Dispatch<React.SetStateAction<Favorites>>) => {
    const alertClearFavorite = window.confirm(`Are you sure you want to delete ${name} from your saved favorites?`)
  
    if (alertClearFavorite) {
      setFavorites((prevFavorites) => {
        const updatedFavorites = { ...prevFavorites };
        delete updatedFavorites[id];
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        return updatedFavorites;
      });
    }
};