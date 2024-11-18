import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { AppRoutes } from ".";
import { TogglerButton } from '../components/buttons/toogleButton';


jest.mock("../components/buttons/toogleButton", () => ({
  TogglerButton: jest.fn(({ setTheme, theme }) => (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      Toggle Theme
    </button>
  )),
}));
jest.mock("../context/appProvider", () => ({
  AppProvider: jest.fn(({ children }) => <div>{children}</div>),
}));
jest.mock("../page/home/home", () => ({
  Home: jest.fn(() => <div>Mocked Home</div>),
}));

jest.mock("../page/cardDados/cardDados", () => ({
  CardDetailsDados: jest.fn(() => <div>Mocked CardDetailsDados</div>),
}));


describe("AppRoutes", () => {
  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();

    jest.spyOn(Storage.prototype, "setItem");
  });

  it("deve renderizar o tema salvo do localStorage", () => {
    localStorage.setItem("ThemeAtual", "dark");

    render(
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    );

    expect(TogglerButton).toHaveBeenCalledWith(
      expect.objectContaining({ theme: "dark" }),
      {}
    );
  });

  it("deve usar o tema padrão (light) quando nenhum tema é salvo no localStorage", () => {
    render(
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    );

    expect(TogglerButton).toHaveBeenCalledWith(
      expect.objectContaining({ theme: "light" }),
      {}
    );
  });

  it("deve alternar o tema ao clicar no botão de alternância de tema", () => {
    render(
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    );

    const button = screen.getByRole("button", { name: /toggle theme/i });
    fireEvent.click(button);

    // Verifique se o tema foi alternado
    expect(localStorage.setItem).toHaveBeenCalledWith("ThemeAtual", "dark");
    expect(TogglerButton).toHaveBeenCalledWith(
      expect.objectContaining({ theme: "dark" }),
      {}
    );

    // Clique novamente para alternar de volta para "light"
    fireEvent.click(button);

    expect(localStorage.setItem).toHaveBeenCalledWith("ThemeAtual", "light");
    expect(TogglerButton).toHaveBeenCalledWith(
      expect.objectContaining({ theme: "light" }),
      {}
    );
  });

  it("deve renderizar o componente Home na rota raiz", () => {
    render(
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    );

    expect(screen.getByText("Mocked Home")).toBeInTheDocument();
  });

  it("deve renderizar o componente CardDetailsDados na rota correspondente", () => {
    render(
      <MemoryRouter initialEntries={["/movie/tt1234567/Test%20Movie"]}>
        <AppRoutes />
      </MemoryRouter>
    );

    expect(screen.getByText("Mocked CardDetailsDados")).toBeInTheDocument();
  });
});
