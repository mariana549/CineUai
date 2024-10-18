import { handleSearch } from "../../functions/funcoes";
import { InputSearchProps } from "../../utils/interfaces";

export function InputSearch({searchValue, setSearchValue}: InputSearchProps) {
    return (
        <input
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