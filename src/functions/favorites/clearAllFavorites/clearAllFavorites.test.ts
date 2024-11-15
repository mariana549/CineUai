import { clearAllFavorites } from "./clearAllFavorites";

describe("clearAllFavorites", () => {
  let setFavoritesMock: jest.Mock;

  beforeEach(() => {
    setFavoritesMock = jest.fn();

    jest.spyOn(window, "confirm").mockReturnValue(true);

    jest.spyOn(Storage.prototype, "removeItem");
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("deve limpar todos os favoritos e remover do localStorage quando confirmado", () => {
    clearAllFavorites(setFavoritesMock);

    expect(window.confirm).toHaveBeenCalledWith(
      "Are you sure you want to delete all saved bookmarks?"
    );
    expect(setFavoritesMock).toHaveBeenCalledWith({});
    expect(localStorage.removeItem).toHaveBeenCalledWith("favorites");
  });

  it("deve lidar com erro ao remover favoritos do localStorage", () => {
    jest.spyOn(Storage.prototype, "removeItem").mockImplementation(() => {
      throw new Error("Erro ao acessar o localStorage");
    });

    try {
      clearAllFavorites(setFavoritesMock);
    } catch (error) {
      expect(error).toEqual(new Error("Erro ao acessar o localStorage"));
    }
    
    expect(window.confirm).toHaveBeenCalledWith(
      "Are you sure you want to delete all saved bookmarks?"
    );
    expect(setFavoritesMock).toHaveBeenCalledWith({});
  });

  it("não deve limpar os favoritos nem remover do localStorage quando não confirmado", () => {
    jest.spyOn(window, "confirm").mockReturnValue(false);

    clearAllFavorites(setFavoritesMock);

    expect(window.confirm).toHaveBeenCalledWith(
      "Are you sure you want to delete all saved bookmarks?"
    );
    expect(setFavoritesMock).not.toHaveBeenCalled();
    expect(localStorage.removeItem).not.toHaveBeenCalled();
  });
});
