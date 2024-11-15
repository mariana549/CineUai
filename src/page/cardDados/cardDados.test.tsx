import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { getDetails } from "../../functions/api/getDetails";
import { MainDestalhesCard } from "../../components/detalhesCard";
import { CardDetailsDados } from "./cardDados";

jest.mock("../../functions/api/getDetails");
jest.mock("../../components/detalhesCard", () => ({
  MainDestalhesCard: jest.fn(({ plotFullCheck }) => (
    <div>
      Mocked MainDestalhesCard
      <label>
        This is a short plot. <input type="checkbox" onChange={plotFullCheck} />
      </label>
    </div>
  )),
}));

describe("CardDetailsPage", () => {
  const getDetailsMock = getDetails as jest.Mock;

  const mockResponse = {
    Poster: "img.jpg",
    Title: "Gam chin dai gwok",
    Actors: "Some Actor",
    Director: "Some Director",
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

  const idMock = "tt1409831";
  const plotMock = "short";

  beforeEach(() => {
    getDetailsMock.mockClear();
    getDetailsMock.mockImplementation((setDados, id, plot) => {
      setDados(mockResponse);
      id = idMock;
      plot = plotMock;
    });
  });

  const renderComponent = () => {
    render(
      <MemoryRouter
        initialEntries={["/details/movie/tt1409831/Gam_chin_dai_gwok"]}
      >
        <Routes>
          <Route
            path="/details/:type/:id/:title"
            element={<CardDetailsDados />}
          />
        </Routes>
      </MemoryRouter>
    );
  };

  it("deve renderizar o componente corretamente", () => {
    renderComponent();

    expect(screen.getByText("Mocked MainDestalhesCard")).toBeInTheDocument();
    expect(screen.getByText(/Your movie is here./)).toBeInTheDocument();
  });

  it("deve chamar getDetails na montagem", async () => {
    renderComponent();

    await waitFor(() => {
      expect(getDetailsMock).toHaveBeenCalledTimes(1);
      expect(getDetailsMock).toHaveBeenCalledWith(
        expect.any(Function),
        "tt1409831",
        "short"
      );
    });
  });

  it("deve atualizar o estado do plot ao marcar o checkbox", async () => {
    renderComponent();

    const checkbox = screen.getByLabelText("This is a short plot.");
    fireEvent.click(checkbox);

    await waitFor(() => {
      expect(getDetailsMock).toHaveBeenCalledWith(
        expect.any(Function),
        "tt1409831",
        "full"
      );
    });

    fireEvent.click(checkbox);

    await waitFor(() => {
      expect(getDetailsMock).toHaveBeenCalledWith(
        expect.any(Function),
        "tt1409831",
        "short"
      );
    });
  });

  it("deve passar as props corretas para o MainDestalhesCard", async () => {
    renderComponent();

    await waitFor(() => {
      expect(MainDestalhesCard).toHaveBeenCalledWith(
        {
          favoriteDados: { Title: "Gam_chin_dai_gwok", imdbID: "tt1409831" },
          plotFullCheck: expect.any(Function),
          dados: mockResponse,
          plot: "short",
        },
        {}
      );
    });
  });
});
