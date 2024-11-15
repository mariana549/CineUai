import { getData } from "../getData"; // Certifique-se de que o caminho para a função está correto
import { getApi_Search } from "../../../services/api_search/requstApiSearch";
import { UseStateDados } from "../../../utils/types/interfaces";

jest.mock("../../../services/api_search/requstApiSearch");

describe("getData", () => {
  const getApi_SearchMock = getApi_Search as jest.Mock;

  const setDadosMock = jest.fn();
  const setNotFoundMock = jest.fn();
  const setErrorMinLengthMock = jest.fn();

  const mockUseStateDados: UseStateDados = {
    searchValue: "test",
    numPageAtual: 1,
    type: "",
    year: "",
    setDados: setDadosMock,
    setNotFound: setNotFoundMock,
    setErrorMinLength: setErrorMinLengthMock,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("deve buscar dados corretamente", async () => {
    const mockData = { Response: "True", Search: [] };
    getApi_SearchMock.mockResolvedValue(mockData);

    await getData(mockUseStateDados);

    expect(getApi_SearchMock).toHaveBeenCalledWith("test", 1, "", "");
    expect(setDadosMock).toHaveBeenCalledWith(mockData);
    expect(setNotFoundMock).toHaveBeenCalledWith(null);
  });

  it("deve configurar 'notFound' quando Response for 'False'", async () => {
    const mockErrorData = { Response: "False", Error: "Movie not found!" };
    getApi_SearchMock.mockResolvedValue(mockErrorData);

    await getData(mockUseStateDados);

    expect(getApi_SearchMock).toHaveBeenCalledWith("test", 1, "", "");
    expect(setDadosMock).toHaveBeenCalledWith(mockErrorData);
    expect(setNotFoundMock).toHaveBeenCalledWith("Movie not found!");
  });

  it("deve configurar 'setErrorMinLength' quando searchValue for menor que 3 caracteres", async () => {    
    await getData({ ...mockUseStateDados, searchValue: "te" });
    expect(setErrorMinLengthMock).toHaveBeenCalledWith(
      "Please enter at least 3 characters."
    );

    expect(getApi_SearchMock).not.toHaveBeenCalled();
  });

  it("deve tratar erros da requisição", async () => {
    getApi_SearchMock.mockRejectedValue(new Error("Network error"));

    const consoleLogSpy = jest
      .spyOn(console, "log")
      .mockImplementation(() => {});

    await getData(mockUseStateDados);

    expect(getApi_SearchMock).toHaveBeenCalledWith("test", 1, "", "");
    expect(setDadosMock).not.toHaveBeenCalled();
    expect(setNotFoundMock).not.toHaveBeenCalled();
    expect(consoleLogSpy).toHaveBeenCalledWith(
      "Não foi possível completar a requisição, ERROR Error: Network error"
    );

    consoleLogSpy.mockRestore();
  });
});
