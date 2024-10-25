import { getApi_Dados, getApi_Search } from "../services/requestApi";

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

export async function getDetails(setDados, id, plot) {
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

export const clearAllFavorites = (setFavorites) => {
  const alertClearAllFavorites = window.confirm("Tem certeza que deseja excluir todos os favoritos salvos?")
  if (alertClearAllFavorites) {
    setFavorites({});
    localStorage.removeItem('favorites');
  }
};

export const clearFavorite = (name, id, setFavorites) => {
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