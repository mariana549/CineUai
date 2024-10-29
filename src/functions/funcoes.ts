import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { getApi_Dados, getApi_Search } from "../services/requestApi";
import { SearchResult, UseStateDados } from "../utils/interfaces";

export async function getData(useStateDados: UseStateDados) {  
  if (useStateDados.searchValue.length >= 2) {
    try {
      const data = await getApi_Search(
        useStateDados.searchValue, 
        useStateDados.numPageAtual, 
        useStateDados.type, 
        useStateDados.year 
      );
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

export async function getDetails(setDados: React.Dispatch<React.SetStateAction<SearchResult | undefined>>, id: string, plot: string) {
  try {
    const data = await getApi_Dados(id, plot);
    setDados(data)
  } catch (error) {
    console.error(error)
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

export const nextPage = (numPageAtual: number, numPagesTotal: number, setNumPageAtual: React.Dispatch<React.SetStateAction<number>>) => {
  if (numPageAtual < numPagesTotal) {
    setNumPageAtual((prev) => prev + 1);
  }
}

export const handleSearch = (event: React.ChangeEvent<HTMLInputElement>, setSearchValue: React.Dispatch<React.SetStateAction<string>>) => {
  setSearchValue(event.target.value);
};

export const clearAllFavorites = (setFavorites: React.Dispatch<React.SetStateAction<Record<string, boolean>>>) => {
  const alertClearAllFavorites = window.confirm("Tem certeza que deseja excluir todos os favoritos salvos?")
  if (alertClearAllFavorites) {
    setFavorites({});
    localStorage.removeItem('favorites');
  }
};

export const clearFavorite = (name: string, id: string, setFavorites: React.Dispatch<React.SetStateAction<Record<string, boolean>>>) => {
  const alertClearFavorite = window.confirm(`Tem certeza que deseja excluir ${name}, dos favoritos salvos?`)
  if (alertClearFavorite) {
    setFavorites((prevFavorites) => {
      const updatedFavorites = { ...prevFavorites };
      delete updatedFavorites[id];
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  }
};

export const getTypes = (type: ChangeEvent<HTMLSelectElement>, setType: React.Dispatch<React.SetStateAction<string>>) => {
  if (type.target.value !== "") {
    setType(type.target.value)
  } else {
   setType("")
  }
}

export const getYear = (year: React.ChangeEvent<HTMLInputElement>, setYear: Dispatch<SetStateAction<string | number | undefined>>) => {
   if(year.target.value.length > 4){
       year.target.value = year.target.value.slice(0,4)
   }

   if (Number(year.target.value) === 0){
    return setYear("")
   } else {
    return setYear(Number(year.target.value))
   }
   
}