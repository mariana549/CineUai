interface SearchResult {
    Poster: string;
    Title: string;
    Year: string;
    Type: string;
    imdbID: string;
}

export interface CardsProps {
    dados: SearchResult[];
    onFavoriteToggle: (title: string) => void;
    favorites: Record<string, boolean>;
    setDadosDetalhesCard: React.Dispatch<React.SetStateAction<string>>
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
  
  