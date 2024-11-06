import { DataContextType, FavoritesContextType, PageContextType } from '../utils/types/interfaces';

export const defaultDataContextValue: DataContextType = {
  searchValue: "harry potter",
  numTotalResults: 0,
  numPagesTotal: 0,
  erroMinLength: "",
  dados: null,
  setSearchValue: () => {},
  notFound: null,
  year: undefined,
  setType: () => {},
  setYear: () => {},
};

export const defaultFavoritesContextValue: FavoritesContextType = {
  favorites: {},
  setFavorites: () => {},
  favoritesList: [],
  favoritesFromStorage: [],
  filteredFavoritos: [],
  transformFilterdFavoritos: "[]",
};

export const defaultPageContextValue: PageContextType = {
  numPageAtual: 1,
  setNumPageAtual: () => {},
};
