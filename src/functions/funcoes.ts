import { getApi_Search } from "../services/requestApi";
import { InputSearchProps } from "../utils/interfaces";

export async function getData(useStateDados) {
    if (useStateDados.searchValue.length >= 2) {
      try {
        const data = await getApi_Search(useStateDados.searchValue, useStateDados.numPageAtual);
        useStateDados.setDados(data);
        if (data.Response === 'False') {
          useStateDados.setNotFound(data.Error);
        } else {
          useStateDados.setNotFound(null);
        }
      } catch (error) {
        console.log(`Não foi possível completar a requisição, ERROR ${error}`);
      }
    } else {
      useStateDados.setErrorMinLength("Digite no mínimo 3 caracteres");
    }
}


export const getNumPagesTotal = (numTotal: number): number => {
    const pagesTotal = Math.ceil(numTotal / 10); // Divide o total de resultados pelo número de resultados por página e arredonda para cima
    if (Number.isNaN(pagesTotal)) return 0;
    return pagesTotal;
}

export const prevPage = (numPageAtual: number, setNumPageAtual: React.Dispatch<React.SetStateAction<number>>) => {
    if (numPageAtual > 1) {
        setNumPageAtual((prev) => prev - 1);
    }
}

export const nextPage = (numPageAtual:number, numPagesTotal:number, setNumPageAtual: React.Dispatch<React.SetStateAction<number>>) => {
    if (numPageAtual < numPagesTotal) {
        setNumPageAtual((prev) => prev + 1);
    }
}

export const handleSearch = (event: React.ChangeEvent<HTMLInputElement>, setSearchValue:React.Dispatch<React.SetStateAction<string>>) => {
    setSearchValue(event.target.value);
  };