import { handleSearch } from "../../functions/funcoes";
import { InputSearchProps } from "../../utils/interfaces";
import { SearchInput } from "./searchStyled";

export function InputSearch({searchValue, setSearchValue}: InputSearchProps) {
    return (
        <SearchInput
        type="search"
        name="pesquisa"
        id="pesquisa"
        placeholder="Digite o nome"
        value={searchValue}
        minLength={3}
        onChange={(event)=> handleSearch(event, setSearchValue)}
      />
    )
}