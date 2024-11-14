import { handleSearch } from "../../functions/search/handleSearch";
import { useData } from "../../hooks/useData";
import { usePage } from "../../hooks/usePage";
import { SearchInput } from "./searchStyled";

export function InputSearch() {
  const { setSearchValue, searchValue } = useData() || { searchValue: "harry" };
  const { setNumPageAtual } = usePage() || { setNumPageAtual: Number };

  const handleSearchWithReset = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    handleSearch(event, setSearchValue);
    setNumPageAtual(1); // Reseta a página atual para 1
  };

  return (
    <SearchInput
      type="search"
      name="pesquisa"
      id="pesquisa"
      placeholder="Digite o nome"
      value={searchValue}
      minLength={3}
      onChange={handleSearchWithReset}
    />
  );
}
