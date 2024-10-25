import { useContext } from 'react';
import { FavoritesContext } from '../context/appContext';

export const useFavorites = () => useContext(FavoritesContext);
