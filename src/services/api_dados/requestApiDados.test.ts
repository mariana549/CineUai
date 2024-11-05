import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { getApi_Dados } from "./requestApiDados";

const CHAVE_API_KEY = process.env.VITE_CHAVEAPI;
const mock = new MockAdapter(axios);

describe("Função getApi_Dados", () => {
  const mockDataFilter = {
    Title: "Harry Potter and the Deathly Hallows: Part 1",
    Year: "2010",
    Plot: "Voldemort's (Ralph Fiennes') power is growing stronger. He now has control over the Ministry of Magic and Hogwarts. Harry (Daniel Radcliffe), Ron (Rupert Grint), and Hermione (Emma Watson) decide to finish Dumbledore's (Sir Michael Gambon's) work and find the rest of the Horcruxes to defeat the Dark Lord. But little hope remains for the trio and the rest of the Wizarding World, so everything they do must go as planned.",
  };

  it("testando se retorna os resultados coretamente", async () => {
    const ID = "tt0926084";
    const PLOT = "full";
    mock
      .onGet(
        `https://www.omdbapi.com/?i=${ID}&plot=${PLOT}&apikey=${CHAVE_API_KEY}`
      )
      .reply(200, mockDataFilter);

    const data = await getApi_Dados(ID, PLOT);
    expect(data).toEqual(mockDataFilter);
  });

  it("deve lidar coretamente com erro de rede", async () => {
    const ID = "tt0926084";
    const PLOT = "full";
    mock
      .onGet(
        `https://www.omdbapi.com/?i=${ID}&plot=${PLOT}&apikey=${CHAVE_API_KEY}`
      )
      .reply(500, mockDataFilter);

    const data = getApi_Dados(ID, PLOT);
    expect(data).rejects.toThrow("Request failed with status code 500");
  });

  it("deve lidar corretamente com dados não existentes ou com ID inválido", async () => {
    const ID = "";
    const PLOT = "";
    mock
      .onGet(
        `https://www.omdbapi.com/?i=${ID}&plot=${PLOT}&apikey=${CHAVE_API_KEY}`
      )
      .reply(404, { Response: "False", Error: "Incorrect IMDb ID." });

    await expect(getApi_Dados(ID, PLOT)).rejects.toThrow(
      "Request failed with status code 404"
    );
  });
});
