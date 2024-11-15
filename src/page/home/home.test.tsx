import { render, screen, fireEvent } from "@testing-library/react";
import { Home } from "./home";
import { useFavorites } from "../../hooks/useFavorites";
import { clearAllFavorites } from "../../functions/favorites/clearAllFavorites/clearAllFavorites";
import { Nav } from '../../components/nav/nav';

jest.mock("../../hooks/useFavorites");
jest.mock("../../functions/favorites/clearAllFavorites/clearAllFavorites");
jest.mock("../../components/header", () => ({
  Header: jest.fn(() => (
    <header>
      <p>Mocked Header</p>
      <p>
        Enter endless entertainment! Discover all about your movies and series
        now.
      </p>
      <Nav />
    </header>
  )),
}));
jest.mock("../../components/main", () => ({
  MainCards: jest.fn(({ children }) => <main>{children}</main>),
}));
jest.mock("../../components/buttons/savedFavoritesList", () => ({
  SavedFavoritesList: jest.fn(() => <div>Mocked SavedFavoritesList</div>),
}));
jest.mock("../../components/footer", () => ({
  Footer: jest.fn(() => <footer>Mocked Footer</footer>),
}));
jest.mock("../../components/header/headerStyled", () => ({
  Pheader: jest.fn(({ children }) => <p>{children}</p>),
}));
jest.mock("../../components/nav/nav", () => ({
  Nav: jest.fn(() => <nav>Mocked Nav</nav>),
}));

describe("Home", () => {
  const setFavoritesMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useFavorites as jest.Mock).mockReturnValue({
      setFavorites: setFavoritesMock,
    });
  });

  it("deve renderizar corretamente todos os componentes", () => {
    render(<Home />);

    expect(screen.getByText("Mocked Header")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Enter endless entertainment! Discover all about your movies and series now."
      )
    ).toBeInTheDocument();
    expect(screen.getByText("Mocked Nav")).toBeInTheDocument();
    expect(screen.getByText("Delete All Favorites")).toBeInTheDocument();
    expect(screen.getByText("Full list of favorites")).toBeInTheDocument();
    expect(screen.getByText("Mocked SavedFavoritesList")).toBeInTheDocument();
    expect(screen.getByText("Mocked Footer")).toBeInTheDocument();
  });

  it("deve chamar clearAllFavorites ao clicar no botão 'Delete All Favorites'", () => {
    render(<Home />);

    const deleteButton = screen.getByText("Delete All Favorites");
    fireEvent.click(deleteButton);

    expect(clearAllFavorites).toHaveBeenCalledWith(setFavoritesMock);
  });
});
