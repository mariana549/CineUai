import { toggleFavorite } from "../../../functions/favorites/toggleFavorite/toggleFavorite";
import { Favorites } from "../../../utils/types/types";

describe("função toggleFavorite", () => {
  let setFavoritesMock: jest.Mock;

  beforeEach(() => {
    localStorage.clear();
    setFavoritesMock = jest.fn();
  });

  it("deve adicionar um favorito se não existir", () => {
    const title = "Harry Potter and the Deathly Hallows: Part 2";
    const id = "tt1201607";
    const initialFavorites: Favorites = {};

    setFavoritesMock.mockImplementation(
      (callback: (prevFavorites: Favorites) => Favorites) => {
        const newFavorites = callback(initialFavorites);
        expect(newFavorites[id]).toEqual({ title, isFavorite: true });
        return newFavorites;
      }
    );

    toggleFavorite(title, id, setFavoritesMock);

    expect(localStorage.getItem("favorites")).toBe(
      JSON.stringify({
        [id]: { title, isFavorite: true },
      })
    );
    expect(setFavoritesMock).toHaveBeenCalled();
  });

  it("deve remover um favorito se já existir", () => {
    const title = "Harry Potter and the Deathly Hallows: Part 2";
    const id = "tt1201607";
    const initialFavorites: Favorites = {
      [id]: { title, isFavorite: true },
    };

    setFavoritesMock.mockImplementation(
      (callback: (prevFavorites: Favorites) => Favorites) => {
        const newFavorites = callback(initialFavorites);
        expect(newFavorites[id]).toBeUndefined();
        return newFavorites;
      }
    );

    toggleFavorite(title, id, setFavoritesMock);

    expect(localStorage.getItem("favorites")).toBe(JSON.stringify({}));
    expect(setFavoritesMock).toHaveBeenCalled();
  });

  it("deve manter outros favoritos intactos", () => {
    const title = "Harry Potter and the Deathly Hallows: Part 2";
    const id = "tt1201607";
    const otherId = "tt1234567";
    const initialFavorites: Favorites = {
      [otherId]: { title: "Some Other Movie", isFavorite: true },
    };

    setFavoritesMock.mockImplementation(
      (callback: (prevFavorites: Favorites) => Favorites) => {
        const newFavorites = callback(initialFavorites);
        expect(newFavorites[id]).toEqual({ title, isFavorite: true });
        expect(newFavorites[otherId]).toEqual({
          title: "Some Other Movie",
          isFavorite: true,
        });
        return newFavorites;
      }
    );

    toggleFavorite(title, id, setFavoritesMock);

    expect(localStorage.getItem("favorites")).toBe(
      JSON.stringify({
        [otherId]: { title: "Some Other Movie", isFavorite: true },
        [id]: { title, isFavorite: true },
      })
    );
    expect(setFavoritesMock).toHaveBeenCalled();
  });
});
