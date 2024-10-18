interface SearchResult {
    Poster: string;
    Title: string;
    Year: string;
    Type: string;
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
}