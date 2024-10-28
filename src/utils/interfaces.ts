import { ReactNode } from "react";

export interface SearchResult {
    Poster: string;
    Title: string;
    Year: string;
    Type: string;
    Actors: string;
    Director: string;
    Awards: string;
    BoxOffice: string;
    Country: string;
    DVD: string;
    Genre: string;
    Language: string;
    Metascore: string;
    Production: string;
    Rated: string;
    Ratings: { Source: string; Value: string }[];
    Released: string;
    Runtime: string;
    Website: string;
    Writer: string;
    imdbID: string;
    imdbRating: string;
    imdbVotes: string;
    Plot: string;
}

export interface PropsChildren {
    children: ReactNode;
}

export interface cardProps {
    dados: SearchResult[];
}

interface Favorite {
    title: string;
    isFavorite: boolean;
}

export type Favorites = Record<string, Favorite>;

interface FavoriteDados {
    Title: string;
    imdbID: string;
}

export interface FavoriteButtonProps {
    favoriteDados: FavoriteDados;
}


export interface ApiData {
    Search: SearchResult[];
    Response: string;
    Error: string;
    totalResults: number | undefined;
}

export interface DataContextType {
    dados: ApiData | null;
    searchValue: string;
    setSearchValue: React.Dispatch<React.SetStateAction<string>>;
    numTotalResults: number;
    numPagesTotal: number;
    notFound: string | null;
    erroMinLength: string;
}

export interface FavoritesContextType {
    favorites: Record<string, { title: string; isFavorite: boolean }>;
    setFavorites: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
    toggleFavorite: (title: string, id: string) => void;
    favoritesList: { title: string; id: string }[];
    favoritesFromStorage: string[];
    filteredFavoritos: SearchResult[] | undefined
    transformFilterdFavoritos: string;
}

export interface PageContextType {
    numPageAtual: number;
    setNumPageAtual: React.Dispatch<React.SetStateAction<number>>;
}

export interface ThemeTypes {
    theme: string,
    setTheme: React.Dispatch<React.SetStateAction<string>>
}