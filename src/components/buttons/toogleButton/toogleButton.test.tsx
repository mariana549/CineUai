import { fireEvent, render, screen } from "@testing-library/react";
import { ThemeTypes } from "../../../utils/types/interfaces";
import { TogglerButton } from ".";
import lua from "../../../assets/icons/lua.png";
import sol from "../../../assets/icons/sol.png";

let setThemeMock = jest.fn();

describe("toogleButton", () => {
  it("deve renderizar o componente", () => {
    const theme: ThemeTypes = { theme: "light", setTheme: setThemeMock };

    render(<TogglerButton {...theme} />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("deve exibir a imagem correta quando o tema for light", () => {
    const theme: ThemeTypes = { theme: "light", setTheme: setThemeMock };

    render(<TogglerButton {...theme} />);
    const img = screen.getByAltText("button de tema modo ativo light");
    expect(img).toHaveAttribute("src", sol);
  });

  it("deve exibir a imagem correta quando o tema for dark", () => {
    const theme: ThemeTypes = { theme: "dark", setTheme: setThemeMock };

    render(<TogglerButton {...theme} />);
    const img = screen.getByAltText("button de tema modo ativo dark");
    expect(img).toHaveAttribute("src", lua);
  });

  it("deve chamar o setTheme ao clicar no botão", () => {
    const theme: ThemeTypes = { theme: "light", setTheme: setThemeMock };

    render(<TogglerButton {...theme} />);
    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(setThemeMock).toHaveBeenCalledWith(expect.any(Function));
  });

  it("deve alternar o tema ao clicar no botão", () => {
    let temaAtual = "light";
    setThemeMock = jest
      .fn()
      .mockImplementation((callback: (theme: string) => string) => {
        temaAtual = callback(temaAtual);
      });
    const theme: ThemeTypes = { theme: temaAtual, setTheme: setThemeMock };

    const { rerender } = render(<TogglerButton {...theme} />);
    const button = screen.getByRole("button");

    // alternar tema para dark
    fireEvent.click(button);
    expect(temaAtual).toBe("dark");

    // re-renderizar tema com novo tema
    rerender(<TogglerButton {...theme} />);

    // alternar tema para light
    fireEvent.click(button);
    expect(setThemeMock).toHaveBeenCalledTimes(2);
    expect(temaAtual).toBe("light");
  });
});
