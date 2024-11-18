import { clearFavorite } from "./clearFavorite";

describe("clearFavorite", () => {
  let setFavoritesMock: jest.Mock;

  beforeEach(() => {
    setFavoritesMock = jest.fn();

    jest.spyOn(window, "confirm").mockReturnValue(true);

    jest.spyOn(Storage.prototype, "setItem");
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("deve remover o favorito do estado e do localStorage quando confirmado", () => {
    const initialFavorites = {
      "1": { title: "Favorite 1" },
      "2": { title: "Favorite 2" },
    };
    setFavoritesMock.mockImplementation((updateFunction) => {
      const updatedFavorites = updateFunction(initialFavorites);
      expect(updatedFavorites).toEqual({ "2": { title: "Favorite 2" } });
    });

    clearFavorite("Favorite 1", "1", setFavoritesMock);

    expect(window.confirm).toHaveBeenCalledWith(
      "Are you sure you want to delete Favorite 1 from your saved favorites?"
    );
    expect(setFavoritesMock).toHaveBeenCalledTimes(1);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "favorites",
      JSON.stringify({ "2": { title: "Favorite 2" } })
    );
  });

  it("não deve remover o favorito do estado nem do localStorage quando não confirmado", () => {
    jest.spyOn(window, "confirm").mockReturnValue(false);

    clearFavorite("Favorite 1", "1", setFavoritesMock);

    expect(window.confirm).toHaveBeenCalledWith(
      "Are you sure you want to delete Favorite 1 from your saved favorites?"
    );
    expect(setFavoritesMock).not.toHaveBeenCalled();
    expect(localStorage.setItem).not.toHaveBeenCalled();
  });

  it("deve lidar com erro ao acessar o localStorage", () => {
    const initialFavorites = {
      "1": { title: "Favorite 1" },
      "2": { title: "Favorite 2" },
    };

    setFavoritesMock.mockImplementation((updateFunction) => {
      const updatedFavorites = updateFunction(initialFavorites);
      expect(updatedFavorites).toEqual({ "2": { title: "Favorite 2" } });
    });

    jest.spyOn(Storage.prototype, "setItem").mockImplementation(() => {
      throw new Error("Erro ao acessar o localStorage");
    }); 
    try {
      clearFavorite("Favorite 1", "1", setFavoritesMock);
    } catch (error) {
      expect(error).toEqual(new Error("Erro ao acessar o localStorage"));
    }
    expect(window.confirm).toHaveBeenCalledWith(
      "Are you sure you want to delete Favorite 1 from your saved favorites?"
    );
    expect(setFavoritesMock).toHaveBeenCalledTimes(1);
  });
});
