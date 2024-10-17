import axios from "axios"
import { BASE_URL, ID } from "../utils/variaveis"

const CHAVE_API_KEY = import.meta.env.VITE_CHAVEAPI

export async function getApi_Search(searchValue) {
    const URL_SEARCH = `${BASE_URL}/?s=${searchValue}&page=1&apikey=${CHAVE_API_KEY}`
    const response = await axios.get(URL_SEARCH)
    const data = await response.data
    return data
}

export async function getApi_Filter( titulo: string | number) {
    const URL_FILTER = `${BASE_URL}/?i=${ID}&t=${titulo}&type="series"&apikey=${CHAVE_API_KEY}`
    const response = await axios.get(URL_FILTER)
    const data = await response.data
    return data
}