import { createContext } from "react";
import {
  DataContextType,
  FavoritesContextType,
  PageContextType,
} from "../utils/types/interfaces";
import {
  defaultDataContextValue,
  defaultFavoritesContextValue,
  defaultPageContextValue,
} from "./defaultValue";

export const DataContext = createContext<DataContextType>(
  defaultDataContextValue
);
export const FavoritesContext = createContext<FavoritesContextType>(
  defaultFavoritesContextValue
);
export const PageContext = createContext<PageContextType>(
  defaultPageContextValue
);
