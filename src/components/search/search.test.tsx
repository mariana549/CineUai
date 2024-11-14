import { fireEvent, render, screen } from "@testing-library/react";
import { InputSearch } from ".";
import { usePage } from "../../hooks/usePage";
import { useData } from "../../hooks/useData";
import { handleSearch } from "../../functions/search/handleSearch";

jest.mock("../../hooks/usePage");
jest.mock("../../hooks/useData");
jest.mock("../../functions/search/handleSearch");

describe("InputSearch", () => {
  const handleSearchMock = handleSearch as jest.Mock;
  const setNumPageAtualMock = jest.fn();
  const setSearchValueMock = jest.fn();
  const mockSearchValue = "Harry Potter";

  beforeEach(() => {
    jest.clearAllMocks();
    (usePage as jest.Mock).mockReturnValue({
      setNumPageAtual: setNumPageAtualMock,
    });
    (useData as jest.Mock).mockReturnValue({
      setSearchValue: setSearchValueMock,
      searchValue: mockSearchValue,
    });
  });

  it("deve renderizar o componente", () => {
    render(<InputSearch />);

    const inputSearch = screen.getByPlaceholderText("Digite o nome");
    expect(inputSearch).toBeInTheDocument();
  });

  it("deve atualizar o valor do campo de pesquisa ao digitar", () => {
    (useData as jest.Mock).mockReturnValue({
      searchValue: "dark",
    });

    render(<InputSearch />);

    const inputElement = screen.getByPlaceholderText("Digite o nome");
    fireEvent.change(inputElement, { target: { value: "dark" } });

    expect(inputElement).toHaveValue("dark");
  });

  it("deve chamar o HandleSearch", () => {
    render(<InputSearch />);

    const input = screen.getByPlaceholderText("Digite o nome");
    fireEvent.change(input, { target: { value: "game" } });

    expect(handleSearchMock).toHaveBeenCalledWith(
      expect.any(Object),
      setSearchValueMock
    );
  });

it("deve resetar a página atual para 1 ao alterar o valor do campo de pesquisa", () => {
  render(<InputSearch />);

  const inputElement = screen.getByPlaceholderText("Digite o nome");
  fireEvent.change(inputElement, { target: { value: "game" } });
  
  expect(setNumPageAtualMock).toHaveBeenCalledWith(1);
});

});
