import { fireEvent, render, screen } from "@testing-library/react";
import { SavedFavoritesList } from ".";
import { useFavorites } from "../../../hooks/useFavorites";
import { BrowserRouter as Router } from "react-router-dom";
import { clearFavorite } from "../../../functions/favorites/clearFavorite/clearFavorite";

jest.mock("../../../hooks/useFavorites");
jest.mock("../../../functions/favorites/clearFavorite/clearFavorite");

const setFavoritesMock = jest.fn();
const clearFavoriteMock = clearFavorite as jest.Mock;

const mockFavoriteList = [
  {
    id: "tt0944836",
    title: "Harry Potter and the Order of the Phoenix",
  },
];

describe("SavedFavoritesList", () => {
  beforeAll(() => {
    (useFavorites as jest.Mock).mockReturnValue({
      favoritesList: mockFavoriteList,
      setFavorites: setFavoritesMock,
    });
  });

  it("deve renderizar o componente", () => {
    const { getByText } = render(
      <Router>
        <SavedFavoritesList />
      </Router>
    );
    const listItem = getByText("Harry Potter and the Order of the Phoenix");
    expect(listItem).toBeInTheDocument();
  });

  it("deve  gerar os links corretamente", () => {
    render(
      <Router>
        <SavedFavoritesList />
      </Router>
    );
    const links = screen.getByRole("link");
    expect(links).toHaveAttribute(
      "href",
      `/detalhes/${mockFavoriteList[0].id}/${mockFavoriteList[0].title.replace(
        /\s+/g,
        "_"
      )}`
    );
  });

  it("deve chamar corretamente clearFavorite ao clicar no botão de clear favorite (X)", () => {
    render(
      <Router>
        <SavedFavoritesList />
      </Router>
    );
    const buttonClear = screen.getAllByRole("button", { name: "X" });

    fireEvent.click(buttonClear[0]);
    expect(clearFavoriteMock).toHaveBeenCalledWith(
      mockFavoriteList[0].title,
      mockFavoriteList[0].id,
      setFavoritesMock
    );
  });
});
