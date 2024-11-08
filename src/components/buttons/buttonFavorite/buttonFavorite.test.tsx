import { fireEvent, render, screen } from "@testing-library/react";
import { ButtonFavorite } from "./buttonfavorite";
import { toggleFavorite } from "../../../functions/favorites/toggleFavorite";
import { useFavorites } from "../../../hooks/useFavorites";

jest.mock("../../../hooks/useFavorites");
jest.mock("../../../functions/favorites/toggleFavorite");

const mockFavoriteDados = {
  Title: "Harry Potter and the Deathly Hallows: Part 2",
  imdbID: "tt1201607",
};

const mockFavorites: Record<string, { title: string; isFavorite: boolean }> =
  {};

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

  it("deve chamar toggleFavorite ao clicar no botão e retornar dados", () => {
    const setFavoritesMock = jest.fn();
    const title = "Harry Potter and the Deathly Hallows: Part 2";
    const id = "tt1201607";
    const initialFavorites = {
      [id]: { title, isFavorite: true },
    };

    setFavoritesMock.mockImplementation(
      (
        callback: (prevFavorites: typeof mockFavorites) => typeof mockFavorites
      ) => {
        const newFavorites = callback(initialFavorites);
        expect(newFavorites[id]).toEqual({ title, isFavorite: true });
        return newFavorites;
      }
    );

    (useFavorites as jest.Mock).mockReturnValue({
      favorites: initialFavorites,
      setFavorites: setFavoritesMock,
    });

    render(<ButtonFavorite favoriteDados={mockFavoriteDados} bg="blue" />);
    fireEvent.click(screen.getByAltText("favorite"));

    expect(toggleFavorite).toHaveBeenCalledWith(title, id, setFavoritesMock);
  });

  it("deve chamar toggleFavorite ao clicar no botão e retornar vazio", () => {
    const setFavoritesMock = jest.fn(() => {
      return {};
    });

    (useFavorites as jest.Mock).mockReturnValue({
      favorites: {},
      setFavorites: setFavoritesMock,
    });

    render(
      <ButtonFavorite favoriteDados={{ Title: "", imdbID: "" }} bg="blue" />
    );
    fireEvent.click(screen.getByAltText("favorite"));

    expect(toggleFavorite).toHaveBeenCalledWith("", "", setFavoritesMock);
  });
});
