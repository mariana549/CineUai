import { getApi_Search } from "../../services/api_search/requstApiSearch";
import { UseStateDados } from "../../utils/types/interfaces";

export async function getData(useStateDados: UseStateDados) {
  if (useStateDados.searchValue.length >= 3) {
    try {
      const data = await getApi_Search(
        useStateDados.searchValue,
        useStateDados.numPageAtual,
        useStateDados.type,
        useStateDados.year
      );
      useStateDados.setDados(data);

      if (data.Response === "False") {
        useStateDados.setNotFound(data.Error);
      } else {
        useStateDados.setNotFound(null);
      }
    } catch (error) {
      console.log(`Não foi possível completar a requisição, ERROR ${error}`);
    }
  } else {
    useStateDados.setErrorMinLength("Please enter at least 3 characters.");
  }
}
