import { fireEvent, render, screen } from "@testing-library/react";
import { MainCards } from ".";
import { beforeEach } from "node:test";
import { useData } from "../../hooks/useData";
import { useFavorites } from "../../hooks/useFavorites";
import { BrowserRouter as Router } from "react-router-dom";
import { usePage } from "../../hooks/usePage";
import { prevPage } from "../../functions/api/pagination";

jest.mock("../../hooks/useData");
jest.mock("../../hooks/useFavorites");
jest.mock("../../hooks/usePage");
jest.mock("../../functions/api/pagination");

const prevPageMock = prevPage as jest.Mock;
const setNumPageAtualMock = jest.fn();

describe("MainCards", () => {
  const dadosMock = {
    Search: [
      {
        Poster: "img.jpg",
        Title: "Gam chin dai gwok",
        Type: "movie",
        Year: "2009",
        imdbID: "tt1409831",
      },

      {
        Title: "The Imitation Game",
        Year: "2014",
        imdbID: "tt2084970",
        Type: "movie",
        Poster: "img.jpg",
      },
    ],
    Response: "True",
  };

  const notFoundMock = "";
  const favoritesMock: { [key: string]: { title: string } } = {
    tt1409831: { title: "Gam chin dai gwok" },
  };
  const favoritesList = Object.keys(favoritesMock).map((id) => ({
    title: favoritesMock[id].title,
    id,
  }));
  const favoritesFromStorageMock = favoritesList.map((e) => e.title);
  const filteredFavoritosMock = dadosMock.Search.filter((item) =>
    favoritesFromStorageMock.includes(item.Title)
  );

  beforeEach(() => {
    jest.clearAllMocks();

    (useData as jest.Mock).mockReturnValue({
      dados: dadosMock,
      notFound: notFoundMock,
      numPagesTotal: 5,
    });
    (useFavorites as jest.Mock).mockReturnValue({
      favorites: favoritesMock,
      favoritesFromStorage: favoritesFromStorageMock,
      transformFilterdFavoritos: JSON.stringify(filteredFavoritosMock),
      filteredFavoritos: filteredFavoritosMock,
    });
    (usePage as jest.Mock).mockReturnValue({
      numPageAtual: 1,
      setNumPageAtual: setNumPageAtualMock,
    });

    prevPageMock.mockImplementation((currentPage, setPage) => {
      setPage(currentPage - 1);
    });
  });

  it("deve renderizar o componente ", () => {
    render(
      <MainCards>
        <div>kk</div>
      </MainCards>
    );

    const main = screen.getByText("Favorites");
    expect(main).toBeInTheDocument();
  });

  it("deve retornar o children corretamente", () => {
    render(
      <MainCards>
        <div>Favorite list</div>
      </MainCards>
    );

    const main = screen.getByText("Favorite list");
    expect(main).toBeInTheDocument();
  });

  it("deve exibir mensagem de error 'Movie not found!', quando não há resultados.", () => {
    (useData as jest.Mock).mockImplementation(() => ({
      dados: { Response: "False", Error: "Movie not found!" },
      notFound: "Movie not found!",
    }));
    render(
      <Router>
        <MainCards />
      </Router>
    );

    const notFound = screen.getByText("Movie not found!");
    expect(notFound).toBeInTheDocument();
  });

  it("deve retornar 'Too many results.', quando o response = false", () => {
    (useData as jest.Mock).mockImplementation(() => ({
      dados: { Response: "False", Error: "Too many results." },
      notFound: "Too many results.",
    }));
    render(
      <Router>
        <MainCards />
      </Router>
    );

    const notFound = screen.getByText("Too many results.");
    expect(notFound).toBeInTheDocument();
  });

  it("deve exibir itens filtrados corretamente", () => {
    (useData as jest.Mock).mockReturnValue(() => ({
      dados: dadosMock,
    }));
    (useFavorites as jest.Mock).mockReturnValue({
      filteredFavoritos: filteredFavoritosMock,
    });

    render(
      <Router>
        <MainCards />
      </Router>
    );

    const favoriteItem = screen.getByText("Gam chin dai gwok");
    expect(favoriteItem).toBeInTheDocument();
  });

  it("deve exibir mensagem 'No favorites found.', quando não há favoritos", () => {
    (useFavorites as jest.Mock).mockReturnValue({
      transformFilterdFavoritos: "[]",
      filteredFavoritos: [],
    });

    render(
      <Router>
        <MainCards />
      </Router>
    );

    const verificationMensagem = screen.getByText("No favorites found.");
    expect(verificationMensagem).toBeInTheDocument();
  });

  it("deve exibir mensagem de nenhum favorito na pagina", () => {
    (useFavorites as jest.Mock).mockReturnValue({
      transformFilterdFavoritos: "[]",
      filteredFavoritos: [],
    });

    render(
      <Router>
        <MainCards />
      </Router>
    );

    const verificationMensagem = screen.getByText(
      "You have no favorites on this page."
    );
    expect(verificationMensagem).toBeInTheDocument();
  });

  it("deve alterar a pagina quando corretamente ao clicar nos botoes de navegação", () => {
    (useData as jest.Mock).mockReturnValue({
      numPagesTotal: 5,
    });

    (usePage as jest.Mock).mockReturnValue({
      numPageAtual: 3,
      setNumPageAtual: setNumPageAtualMock,
    });

    const {rerender} = render(
      <Router>
        <MainCards />
      </Router>
    );

    let pagina = screen.getByText("3 of 5");
    expect(pagina).toBeInTheDocument();

    const leftButton = screen.getByAltText("leftArrow");
    fireEvent.click(leftButton);

    expect(prevPageMock).toHaveBeenCalledWith(3, setNumPageAtualMock);

    (usePage as jest.Mock).mockReturnValue({
      numPageAtual: 2,
      setNumPageAtual: setNumPageAtualMock,
    });

    rerender(
      <Router>
        <MainCards />
      </Router>
    );

    pagina = screen.getByText("2 of 5");
    expect(pagina).toBeInTheDocument();
  });
});
