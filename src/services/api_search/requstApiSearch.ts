import axios from "axios";
import { BASE_URL } from "../../utils/config/variaveis";

const CHAVE_API_KEY = process.env.VITE_CHAVEAPI;

export async function getApi_Search(
  searchValue: string | number,
  numPageAtual: number,
  type?: string,
  year?: string | number
) {
  const URL_SEARCH = `${BASE_URL}/?s=${searchValue}&page=${numPageAtual}&type=${
    type || ""
  }&y=${year || ""}&apikey=${CHAVE_API_KEY}`;
  const response = await axios.get(URL_SEARCH);
  const data = await response.data;
  return data;
}
