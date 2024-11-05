import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { getApi_Search } from "./requstApiSearch";

const CHAVE_API_KEY = process.env.VITE_CHAVEAPI;
const mock = new MockAdapter(axios);

describe("Função Api_Search", () => {
  const mockDataSearch = {
    Search: [
      {
        Title: "Harry Potter and the Deathly Hallows: Part 2",
        Year: "2011",
        imdbID: "tt1201607",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BOTA1Mzc2N2ItZWRiNS00MjQzLTlmZDQtMjU0NmY1YWRkMGQ4XkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "Harry Potter and the Sorcerer's Stone",
        Year: "2001",
        imdbID: "tt0241527",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BNTU1MzgyMDMtMzBlZS00YzczLThmYWEtMjU3YmFlOWEyMjE1XkEyXkFqcGc@._V1_SX300.jpg",
      },
    ],
    totalResults: "153",
    Response: "True",
  };

  it("testando se a api_Search retorna os resultados coretamente", async () => {
    const searchValue = "harry potter";
    const numPageAtual = 1;
    const type = "";
    const year = "";
    mock
      .onGet(
        `https://www.omdbapi.com/?s=${searchValue}&page=${numPageAtual}&type=${type}&y=${year}&apikey=${CHAVE_API_KEY}`
      )
      .reply(200, mockDataSearch);

    const data = await getApi_Search(searchValue, numPageAtual, type, year);
    expect(data).toEqual(mockDataSearch);
  });

  it("deve lidar coretamente com erro de rede", async () => {
    const searchValue = "harry potter";
    const numPageAtual = 1;
    const type = "";
    const year = "";
    mock
      .onGet(
        `https://www.omdbapi.com/?s=${searchValue}&page=${numPageAtual}&type=${type}&y=${year}&apikey=${CHAVE_API_KEY}`
      )
      .reply(500);

    expect(
      getApi_Search(searchValue, numPageAtual, type, year)
    ).rejects.toThrow("Request failed with status code 500");
  });

  it("deve lidar coretamente com resposta vazia", async () => {
    const searchValue = "harry potter";
    const numPageAtual = 1;
    const type = "";
    const year = "";
    mock
      .onGet(
        `https://www.omdbapi.com/?s=${searchValue}&page=${numPageAtual}&type=${type}&y=${year}&apikey=${CHAVE_API_KEY}`
      )
      .reply(200, { Search: [], totalResults: "0", Response: "false" });

    const data = await getApi_Search(searchValue, numPageAtual, type, year);
    expect(data).toEqual({ Search: [], totalResults: "0", Response: "false" });
  });

  it("deve lidar coretamente com dados não existir", async () => {
    const searchValue = "harry potte";
    const numPageAtual = 1;
    const type = "";
    const year = "";
    mock
      .onGet(
        `https://www.omdbapi.com/?s=${searchValue}&page=${numPageAtual}&type=${type}&y=${year}&apikey=${CHAVE_API_KEY}`
      )
      .reply(200, { Response: "False", Error: "Movie not found!" });

    const data = await getApi_Search(searchValue, numPageAtual, type, year);
    expect(data).toEqual({ Response: "False", Error: "Movie not found!" });
  });

  it("deve construir a url coretamente com diferentes parâmetros", async () => {
    const searchValue = "harry potter";
    const numPageAtual = 2;
    const type = "movie";
    const year = "2011";
    mock
      .onGet(
        `https://www.omdbapi.com/?s=${searchValue}&page=${numPageAtual}&type=${type}&y=${year}&apikey=${CHAVE_API_KEY}`
      )
      .reply(200, mockDataSearch);

    const data = await getApi_Search(searchValue, numPageAtual, type, year);
    expect(data).toEqual(mockDataSearch);
  });

  it("deve lidar corretamente com limite de taxa (429 Too Many Results)", async () => {
    const searchValue = "har";
    const numPageAtual = 1;
    const type = "";
    const year = "";
    mock
      .onGet(
        `https://www.omdbapi.com/?s=${searchValue}&page=${numPageAtual}&type=${type}&y=${year}&apikey=${CHAVE_API_KEY}`
      )
      .reply(429, { Response: "False", Error: "Too many results." });

    await expect(
      getApi_Search(searchValue, numPageAtual, type, year)
    ).rejects.toThrow("Request failed with status code 429");
  });
});
