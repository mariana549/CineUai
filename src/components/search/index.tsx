import { handleSearch } from "../../functions/funcoes";
import { InputSearchProps } from "../../utils/interfaces";
import { SearchInput } from "./searchStyled";

export function InputSearch({searchValue, setSearchValue, setNumPageAtual}: InputSearchProps) {
  const handleSearchWithReset = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleSearch( event, setSearchValue );
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