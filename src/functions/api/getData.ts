import { getApi_Search } from "../../services/requestApi";
import { UseStateDados } from "../../utils/interfaces";

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