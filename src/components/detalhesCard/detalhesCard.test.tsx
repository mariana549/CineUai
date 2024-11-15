import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { MainDestalhesCard } from ".";
import Voltar from "../../assets/icons/return.png";
import semFoto from "../../assets/images/semfoto.png";

jest.mock("../buttons/buttonFavorite/buttonfavorite", () => ({
  ButtonFavorite: jest.fn(() => <div>Mocked ButtonFavorite</div>),
}));

describe("MainDetalhesCard", () => {
  const favoriteDadosMock = { Title: "Gam chin dai gwok", imdbID: "tt1409831" };
  const dadosMock = {
    Poster: "img.jpg",
    Title: "Gam chin dai gwok",
    Actors: "Some Actor",
    Director: "Some Director",
    Year: "2020",
    Released: "2009",
    Genre: "Drama",
    imdbRating: "7.8",
    BoxOffice: "$100,000,000",
    Country: "USA",
    Runtime: "120 min",
    Awards: "Some Awards",
    DVD: "N/A",
    Language: "English",
    Metascore: "70",
    Production: "Some Production",
    Rated: "PG-13",
    Type: "movie",
    Website: "http://example.com",
    Writer: "Some Writer",
    imdbID: "tt1409831",
    imdbVotes: "10000",
    Ratings: [{ Source: "Internet Movie Database", Value: "7.8/10" }],
    Plot: "This is a short plot.",
  };
  const plotMock = "This is a short plot.";
  const plotFullCheckMock = jest.fn();

  beforeEach(() => {
    plotFullCheckMock.mockReset();
    jest.clearAllMocks();
  });

  it("deve renderizar corretamente", () => {
    render(
      <Router>
        <MainDestalhesCard
          favoriteDados={favoriteDadosMock}
          dados={dadosMock}
          plot={plotMock}
          plotFullCheck={plotFullCheckMock}
        />
      </Router>
    );

    expect(screen.getByText("Mocked ButtonFavorite")).toBeInTheDocument();
    expect(screen.getByAltText("retornar")).toHaveAttribute("src", Voltar);
    expect(screen.getByAltText(dadosMock.Title)).toHaveAttribute(
      "src",
      dadosMock.Poster
    );
    expect(screen.getByText(dadosMock.Title)).toBeInTheDocument();
    expect(screen.getByText(dadosMock.Actors)).toBeInTheDocument();
    expect(screen.getByText(dadosMock.Director)).toBeInTheDocument();
    expect(screen.getByText(dadosMock.Released)).toBeInTheDocument();
    expect(screen.getByText(dadosMock.Genre)).toBeInTheDocument();
    expect(screen.getByText(dadosMock.imdbRating)).toBeInTheDocument();
    expect(screen.getByText(dadosMock.BoxOffice)).toBeInTheDocument();
    expect(screen.getByText(dadosMock.Country)).toBeInTheDocument();
    expect(screen.getByText(dadosMock.Runtime)).toBeInTheDocument();
  });

  it("deve chamar plotFullCheck ao alterar o checkbox", () => {
    render(
      <Router>
        <MainDestalhesCard
          favoriteDados={favoriteDadosMock}
          dados={dadosMock}
          plot={plotMock}
          plotFullCheck={plotFullCheckMock}
        />
      </Router>
    );

    const checkbox = screen.getByLabelText(plotMock);
    fireEvent.click(checkbox);
    expect(plotFullCheckMock).toHaveBeenCalled();
  });

  it("deve renderizar link para o site corretamente", () => {
    render(
      <Router>
        <MainDestalhesCard
          favoriteDados={favoriteDadosMock}
          dados={dadosMock}
          plot={plotMock}
          plotFullCheck={plotFullCheckMock}
        />
      </Router>
    );

    const linkElement = screen.getByText(dadosMock.Website);
    expect(linkElement).toHaveAttribute("href", dadosMock.Website);
  });

  it("deve renderizar imagem padrão quando Poster é 'N/A'", () => {
    const dadosSemPosterMock = { ...dadosMock, Poster: "N/A" };
    render(
      <Router>
        {" "}
        <MainDestalhesCard
          favoriteDados={favoriteDadosMock}
          dados={dadosSemPosterMock}
          plot={plotMock}
          plotFullCheck={plotFullCheckMock}
        />{" "}
      </Router>
    );
    const imgElement = screen.getByAltText(dadosSemPosterMock.Title);
    expect(imgElement).toHaveAttribute("src", semFoto);
  });

  it("deve renderizar corretamente os ratings", () => {
    render(
      <Router>
        <MainDestalhesCard
          favoriteDados={favoriteDadosMock}
          dados={dadosMock}
          plot={plotMock}
          plotFullCheck={plotFullCheckMock}
        />
      </Router>
    );

    dadosMock?.Ratings.map(() => {
      expect(screen.getByText(/Internet Movie Database/)).toBeInTheDocument();
    });
  });

  it("deve renderizar link do website somente quando presente", () => {
    const dadosSemWebsiteMock = { ...dadosMock, Website: "N/A" };
    render(
      <Router>
        <MainDestalhesCard
          favoriteDados={favoriteDadosMock}
          dados={dadosSemWebsiteMock}
          plot={plotMock}
          plotFullCheck={plotFullCheckMock}
        />
      </Router>
    );
    const linkElement = screen.queryByText(dadosMock.Website);
    expect(linkElement).not.toBeInTheDocument();
  });
});
