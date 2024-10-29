import { getApi_Dados } from "../../services/requestApi";
import { SearchResult } from "../../utils/types/interfaces";

export async function getDetails(setDados: React.Dispatch<React.SetStateAction<SearchResult | undefined>>, id: string, plot: string) {
    try {
      const data = await getApi_Dados(id, plot);
      setDados(data)
    } catch (error) {
      console.error(error)
    }
  }