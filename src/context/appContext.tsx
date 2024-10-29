import { createContext } from "react";
import { DataContextType, FavoritesContextType, PageContextType } from "../utils/types/interfaces";

export const DataContext = createContext<DataContextType | null>(null);
export const FavoritesContext = createContext<FavoritesContextType | null>(null);
export const PageContext = createContext<PageContextType | null>(null);