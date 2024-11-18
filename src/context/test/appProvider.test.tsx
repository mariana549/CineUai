import { render, screen, act } from "@testing-library/react";
import { AppProvider } from "../appProvider";
import { DataContext, FavoritesContext, PageContext } from "../appContext";
import { getData } from "../../functions/api/getData";
import { getNumPagesTotal } from "../../functions/api/pagination";

jest.mock("../../functions/api/getData");
jest.mock("../../functions/api/pagination");

describe("AppProvider", () => {
  const mockGetData = getData as jest.Mock;
  const mockGetNumPagesTotal = getNumPagesTotal as jest.Mock;

  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
  });

  it("deve inicializar corretamente com diferentes valores no localStorage", () => {
    localStorage.setItem("searchValue", "test search");
    localStorage.setItem("numPageAtual", "3");
    localStorage.setItem(
      "favorites",
      JSON.stringify({ "2": { title: "Favorite Movie" } })
    );
    render(
      <AppProvider>
        <DataContext.Consumer>
          {(data) => (
            <FavoritesContext.Consumer>
              {(favorites) => (
                <PageContext.Consumer>
                  {(page) => (
                    <>
                      <div>{data.searchValue}</div>
                      <div>{page.numPageAtual}</div>
                      <div>{favorites.favoritesList.length}</div>
                    </>
                  )}
                </PageContext.Consumer>
              )}
            </FavoritesContext.Consumer>
          )}
        </DataContext.Consumer>
      </AppProvider>
    );
    expect(screen.getByText("test search")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  it("deve fornecer valores corretos no DataContext", () => {
    render(
      <AppProvider>
        <DataContext.Provider
          value={{
            searchValue: "Jota",
            numTotalResults: 50,
            numPagesTotal: 5,
            erroMinLength: "",
            dados: null,
            setSearchValue: () => {},
            notFound: null,
            year: undefined,
            setType: () => {},
            setYear: () => {},
          }}
        >
          <DataContext.Consumer>
            {(context) => (
              <>
                <div>{context.searchValue}</div>
                <div>{context.numTotalResults}</div>
                <div>{context.numPagesTotal}</div>
              </>
            )}
          </DataContext.Consumer>
        </DataContext.Provider>
      </AppProvider>
    );

    expect(screen.getByText("Jota")).toBeInTheDocument();
    expect(screen.getByText("50")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
  });

  it("deve fornecer valores corretos no FavoritesContext", () => {
    const mockData = {
      totalResults: 50,
      Search: [
        { Title: "Harry Potter", id: "1" },
        { Title: "Harry Potter 2", id: "2" },
      ],
    };
    mockGetData.mockImplementation(() => {
      return mockData;
    });
    mockGetNumPagesTotal.mockReturnValue(5);

    localStorage.setItem(
      "favorites",
      JSON.stringify({ "1": { title: "Harry Potter" } })
    );

    render(
      <AppProvider>
        <FavoritesContext.Consumer>
          {(context) => (
            <>
              <div>{context.favorites["1"].title}</div>
              <div>favoriteList: {context.favoritesList.length}</div>
              <div>favoriteFromStorange: {context.favoritesFromStorage.length}</div>
            </>
          )}
        </FavoritesContext.Consumer>
      </AppProvider>
    );

    expect(screen.getByText("Harry Potter")).toBeInTheDocument();
    expect(screen.getByText(/favoriteList: 1/)).toBeInTheDocument();
    expect(
      screen.getByText(/favoriteFromStorange: 1/)
    ).toBeInTheDocument();
  });

  it("deve fornecer valores corretos no PageContext", () => {
    render(
      <AppProvider>
        <PageContext.Consumer>
          {(context) => (
            <>
              <div>{context.numPageAtual}</div>
            </>
          )}
        </PageContext.Consumer>
      </AppProvider>
    );

    expect(screen.getByText(/1/)).toBeInTheDocument();
  });

  it("deve atualizar o localStorage quando os favoritos mudam", () => {
    render(
      <AppProvider>
        <FavoritesContext.Consumer>
          {(context) => (
            <button
              onClick={() =>
                context.setFavorites({
                  "2": { title: "Harry Potter 2", isFavorite: true },
                })
              }
            >
              Add Favorite
            </button>
          )}
        </FavoritesContext.Consumer>
      </AppProvider>
    );

    const button = screen.getByText("Add Favorite");
    act(() => {
      button.click();
    });

    expect(localStorage.getItem("favorites")).toEqual(
      JSON.stringify({ "2": { title: "Harry Potter 2", isFavorite: true } })
    );
  });

  it("deve atualizar o localStorage quando searchValue ou numPageAtual mudam", () => {
    render(
      <AppProvider>
        <DataContext.Consumer>
          {(data) => (
            <PageContext.Consumer>
              {(page) => (
                <>
                  <button onClick={() => data.setSearchValue("new search")}>
                    Update Search
                  </button>
                  <button onClick={() => page.setNumPageAtual(2)}>
                    Update Page
                  </button>
                </>
              )}
            </PageContext.Consumer>
          )}
        </DataContext.Consumer>
      </AppProvider>
    );

    let button = screen.getByText("Update Search");
    act(() => {
      button.click();
    });
    expect(localStorage.getItem("searchValue")).toBe("new search");

    button = screen.getByText("Update Page");
    act(() => {
      button.click();
    });
    expect(localStorage.getItem("numPageAtual")).toBe("2");
  });

  it("deve chamar setDados corretamente ao obter dados", async () => {
    render(
      <AppProvider>
        <DataContext.Provider
          value={{
            searchValue: "Jota",
            numTotalResults: 100,
            numPagesTotal: 5,
            setSearchValue: () => {},
            notFound: null,
            year: undefined,
            erroMinLength: "",
            setType: () => {},
            setYear: () => {},
            dados: null,
          }}>

        <DataContext.Consumer>
          {(context) => (
            <>
              <div>{context.searchValue}</div>
              <div>{context.numTotalResults}</div>
            </>
          )}
        </DataContext.Consumer>
          </DataContext.Provider>
      </AppProvider>
    );
    expect(mockGetData).toHaveBeenCalled();
    expect(screen.getByText("100")).toBeInTheDocument();
  });
});
