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
  

export interface CardsProps {
    dados: SearchResult[];
    onFavoriteToggle: (title: string) => void;
    favorites: Record<string, boolean>;
}

export interface ApiData {
    Search: SearchResult[];
    Response: string;
    Error: string;
    totalResults: number | undefined;
}

export interface PageChangeButtonProps {
    numPageAtual: number;
    setNumPageAtual: React.Dispatch<React.SetStateAction<number>>;
    numPagesTotal: number;
}

export interface InputSearchProps {
    searchValue: string;
    setSearchValue: React.Dispatch<React.SetStateAction<string>>;
    setNumPageAtual: React.Dispatch<React.SetStateAction<number>>;
}
  
  