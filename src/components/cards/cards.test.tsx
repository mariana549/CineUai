import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Cards } from ".";
import { useData } from "../../hooks/useData";
import { usePage } from "../../hooks/usePage";
import semFoto from "../../assets/images/semfoto.png";
import { useFavorites } from "../../hooks/useFavorites";

const mockDados = [
  {
    Title: "Harry Potter and the Chamber of Secrets",
    Year: "2002",
    imdbID: "tt0304140",
    Type: "game",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNTM4NzQ2NjA4NV5BMl5BanBnXkFtZTgwODAwMjE4MDE@._V1_SX300.jpg",
  },
  {
    Title: "Harry Potter and the Deathly Hallows: Part II",
    Year: "2011",
    imdbID: "tt1680310",
    Type: "game",
    Poster: "N/A",
  },
];

jest.mock("../../hooks/useData");
jest.mock("../../hooks/usePage");
jest.mock("../../hooks/useFavorites");

const searchValue = "Harry Potter";
const numPageAtual = 1;

describe("Cards", () => {
  beforeEach(() => {
    (useData as jest.Mock).mockReturnValue({
      searchValue: searchValue,
    });
    (usePage as jest.Mock).mockReturnValue({
      numPageAtual: numPageAtual,
    });
    (useFavorites as jest.Mock).mockReturnValue({
      favorites: mockDados[0],
    });
  });

  it("deve renderizar o componente", () => {
    render(
      <Router>
        <Cards dados={mockDados} />
      </Router>
    );

    const cards = screen.getByText("Harry Potter and the Chamber of Secrets");
    expect(cards).toBeInTheDocument();
  });

  it("deve exibir a imagem correta ou imagem padrão quando 'N/A'", () => {
    render(
      <Router>
        <Cards dados={mockDados} />
      </Router>
    );

    const imagem1 = screen.getByAltText(
      "Harry Potter and the Chamber of Secrets"
    );
    expect(imagem1).toHaveAttribute(
      "src",
      "https://m.media-amazon.com/images/M/MV5BNTM4NzQ2NjA4NV5BMl5BanBnXkFtZTgwODAwMjE4MDE@._V1_SX300.jpg"
    );

    const imagem2 = screen.getByAltText(
      "Harry Potter and the Deathly Hallows: Part II"
    );
    expect(imagem2).toHaveAttribute("src", semFoto);
  });

  it("deve chamar a função hadleClik e atualizar o localStorange ao clicar no link", () => {
    render(
      <Router>
        <Cards dados={mockDados} />
      </Router>
    );

    const links = screen
      .getAllByText("see more")
      .map((button) => button.closest("a"));

    links.forEach((link, index) => {
      if (link) {
        fireEvent.click(link);
        expect(link).toHaveAttribute(
          "href",
          `/${mockDados[index].Type}/${mockDados[index].imdbID}/${mockDados[
            index
          ].Title.replace(/\s+/g, "_")}`
        );

        expect(localStorage.getItem("searchValue")).toBe(searchValue);
        expect(localStorage.getItem("numPageAtual")).toBe(
          numPageAtual.toString()
        );
      }
    });
  });

  it("deve renderizar o compontent ButtonFavorite para cada Card", () => {
    render(
      <Router>
        <Cards dados={mockDados} />
      </Router>
    );

    const button = screen.getByTestId(`button-favorite-${mockDados[0].imdbID}`);
    expect(button).toBeInTheDocument();
  });
});

