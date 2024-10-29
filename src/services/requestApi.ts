import axios from "axios"
import { BASE_URL } from "../utils/config/variaveis"

const CHAVE_API_KEY = import.meta.env.VITE_CHAVEAPI

export async function getApi_Search(searchValue: string | number, numPageAtual: number, type: string | undefined, year: string | number | undefined) {
    const URL_SEARCH = `${BASE_URL}/?s=${searchValue}&page=${numPageAtual}&type=${type}&y=${year}&apikey=${CHAVE_API_KEY}`
    const response = await axios.get(URL_SEARCH)
    const data = await response.data
    return data 
} 

export async function getApi_Dados( ID: string | number | undefined, plot: string) {
    const URL_FILTER = `${BASE_URL}/?i=${ID}&plot=${plot}&apikey=${CHAVE_API_KEY}`
    const response = await axios.get(URL_FILTER)
    const data = await response.data
    return data
}