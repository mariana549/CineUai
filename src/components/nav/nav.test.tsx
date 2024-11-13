import { fireEvent, render, screen } from "@testing-library/react";
import { useData } from "../../hooks/useData";
import { Nav } from "./nav";

jest.mock("../../hooks/useData");

describe("Nav", () => {
  const searchValue = "harry potter";
  const erroMinLength = "";
  const notFound = null;
  const year = undefined;
  const mockSetYear = jest.fn();
  const mockSetType = jest.fn();

  beforeEach(() => {
    (useData as jest.Mock).mockReturnValue({
      searchValue: searchValue,
      erroMinLength: erroMinLength,
      notFound: notFound,
      year: year,
      setYear: mockSetYear,
      setType: mockSetType,
    });
  });

  it("deve renderizar o componente", () => {
    render(<Nav />);

    const inputSearch = screen.getByPlaceholderText("Digite o nome");
    const selectType = screen.getByTestId("types");
    const inputYear = screen.getByPlaceholderText("YYYY");

    expect(inputSearch).toBeInTheDocument();
    expect(selectType).toBeInTheDocument();
    expect(inputYear).toBeInTheDocument();
  });

  it("deve exibir mensagem de erro para ano errado", () => {
    (useData as jest.Mock).mockReturnValue({
      year: 1500,
    });
    render(<Nav />);

    const validationMessage = screen.getByText("Please enter a valid year.");
    expect(validationMessage).toBeInTheDocument();
  });

  it("deve chamar setType ao alterar o tipo", () => {
    render(<Nav />);

    const selectType = screen.getByTestId("types");
    fireEvent.change(selectType, { target: { value: "movie" } });

    expect(mockSetType).toHaveBeenCalledWith("movie");
  });

  it("deve chamar setYear ao alterar o valor", () => {
    render(<Nav />);

    const inputYear = screen.getByPlaceholderText("YYYY");
    fireEvent.change(inputYear, { target: { value: "2000" } });

    expect(mockSetYear).toHaveBeenCalledWith(2000);
  });

  it("deve exibir mensagem de erro para busca com menos de 3 caracteres", () => {
    (useData as jest.Mock).mockReturnValue({
      searchValue: "h",
      erroMinLength: "Please enter at least 3 characters.",
    });

    render(<Nav />);

    const inputSearch = screen.getByPlaceholderText("Digite o nome");
    expect(inputSearch).toBeInTheDocument();

    const errorMinLengthMensagem = screen.getByText(
      "Please enter at least 3 characters."
    );
    expect(errorMinLengthMensagem).toBeInTheDocument();
  });

  it('deve exibir mensagem de "No results found" quando aplicável', () => {
    (useData as jest.Mock).mockReturnValue({
      notFound: "No results found",
      year: 2071,
    });

    render(<Nav />);

    const notFoundMessage = screen.getByText("No results found");
    expect(notFoundMessage).toBeInTheDocument();
  });
});
