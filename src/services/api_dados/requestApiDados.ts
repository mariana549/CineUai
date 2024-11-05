import axios from "axios";
import { BASE_URL } from "../../utils/config/variaveis";

const CHAVE_API_KEY = process.env.VITE_CHAVEAPI;

export async function getApi_Dados(ID: string | number, plot: string) {
  const URL_FILTER = `${BASE_URL}/?i=${ID}&plot=${plot}&apikey=${CHAVE_API_KEY}`;
  const response = await axios.get(URL_FILTER);
  const data = await response.data;
  return data;
}
