import { fireEvent, render, screen } from "@testing-library/react";
import { ButtonFavorite } from "./buttonfavorite";
import { toggleFavorite } from "../../../functions/favorites/toggleFavorite";
import { useFavorites } from "../../../hooks/useFavorites";
import favorited from "../../../assets/icons/favorited.png";
import notfavorited from "../../../assets/icons/notFavorited.png";

jest.mock("../../../hooks/useFavorites");
jest.mock("../../../functions/favorites/toggleFavorite");

const mockFavoriteDados = {
  Title: "Harry Potter and the Deathly Hallows: Part 2",
  imdbID: "tt1201607",
};

describe("buttonFavorite", () => {
  beforeEach(() => {
    localStorage.clear();

    (useFavorites as jest.Mock).mockReturnValue({
      favorites: {},
      setFavorites: jest.fn(),
    });
  });

  it("deve renderizar o componente", () => {
    render(
      <ButtonFavorite favoriteDados={mockFavoriteDados} bg={"transparent"} />
    );
    const buttonFavorite = screen.getByAltText("favorite");

    expect(buttonFavorite).toBeInTheDocument();
  });

  it("deve exibir a imagem correta quando favoritado", () => {
    const initialFavorites = {
      [mockFavoriteDados.imdbID]: {
        title: mockFavoriteDados.Title,
        isFavorite: true,
      },
    };

    (useFavorites as jest.Mock).mockReturnValue({
      favorites: initialFavorites,
      setFavorites: jest.fn(),
    });

    render(<ButtonFavorite favoriteDados={mockFavoriteDados} bg="blue" />);
    const buttonFavorite = screen.getByAltText("favorite");

    expect(buttonFavorite).toHaveAttribute("src", favorited);
  });

  it("deve exibir a imagem correta quando não favoritado", () => {
    (useFavorites as jest.Mock).mockReturnValue({
      favorites: {},
      setFavorites: jest.fn(),
    });

    render(<ButtonFavorite favoriteDados={mockFavoriteDados} bg="blue" />);
    const buttonFavorite = screen.getByAltText("favorite");

    expect(buttonFavorite).toHaveAttribute("src", notfavorited);
  });

it("deve chamar toggleFavorite ao clicar no botão", () => {
  const setFavoritesMock = jest.fn();
  const title = "Harry Potter and the Deathly Hallows: Part 2";
  const id = "tt1201607";

  (useFavorites as jest.Mock).mockReturnValue({
    favorites: {},
    setFavorites: setFavoritesMock,
  });
  
  render(<ButtonFavorite favoriteDados={mockFavoriteDados} bg="blue" />);
  fireEvent.click(screen.getByAltText("favorite"));

  expect(toggleFavorite).toHaveBeenCalledWith(title, id, setFavoritesMock);
});
});
