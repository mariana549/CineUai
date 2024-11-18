import { getDetails } from "../getDetails";
import { getApi_Dados } from "../../../services/api_dados/requestApiDados";
import { SearchResult } from "../../../utils/types/interfaces";

jest.mock("../../../services/api_dados/requestApiDados");

describe("getDetails", () => {
  const getApi_DadosMock = getApi_Dados as jest.Mock;
  let setDadosMock: jest.Mock;

  beforeEach(() => {
    setDadosMock = jest.fn();
    jest.clearAllMocks();
  });

  it("deve chamar getApi_Dados com os argumentos corretos e definir os dados quando a API retorna sucesso", async () => {
    const mockData: SearchResult = {
      Poster: "img.jpg",
      Title: "Test Movie",
      Year: "2015",
      Actors: "Actor A, Actor B",
      Director: "Director X",
      Released: "2000",
      Genre: "Drama",
      imdbRating: "8.0",
      BoxOffice: "$100,000,000",
      Country: "USA",
      Runtime: "120 min",
      Awards: "Some Awards",
      DVD: "2001",
      Language: "English",
      Metascore: "85",
      Production: "Some Production",
      Rated: "PG-13",
      Type: "movie",
      Website: "http://example.com",
      Writer: "Writer Y",
      imdbID: "tt1234567",
      imdbVotes: "5000",
      Ratings: [{ Source: "Internet Movie Database", Value: "8.0/10" }],
      Plot: "A test plot.",
    };

    getApi_DadosMock.mockResolvedValue(mockData);

    await getDetails(setDadosMock, "tt1234567", "short");

    expect(getApi_DadosMock).toHaveBeenCalledWith("tt1234567", "short");
    expect(setDadosMock).toHaveBeenCalledWith(mockData);
  });

  it("deve lidar com erros e não deve definir os dados quando a API retorna erro", async () => {
    const mockError = new Error("API error");
    getApi_DadosMock.mockRejectedValue(mockError);

    console.error = jest.fn();

    await getDetails(setDadosMock, "tt1234567", "short");

    expect(getApi_DadosMock).toHaveBeenCalledWith("tt1234567", "short");
    expect(setDadosMock).not.toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith(mockError);
  });

  it("deve lidar com plot vazio corretamente", async () => {
    const mockData = { Title: "Test Movie", Plot: "Test Plot" } as SearchResult;
    getApi_DadosMock.mockResolvedValue(mockData);

    await getDetails(setDadosMock, "tt1234567", "");

    expect(getApi_DadosMock).toHaveBeenCalledWith("tt1234567", "");
    expect(setDadosMock).toHaveBeenCalledWith(mockData);
  });

  it("deve chamar setDados uma única vez", async () => {
    const mockData = { Title: "Test Movie", Plot: "Test Plot" } as SearchResult;
    getApi_DadosMock.mockResolvedValue(mockData);

    await getDetails(setDadosMock, "tt1234567", "short");

    expect(setDadosMock).toHaveBeenCalledTimes(1);
  });
});
