import lua from "../../../assets/icons/lua.png";
import sol from "../../../assets/icons/sol.png";
import { ThemeTypes } from "../../../utils/types/interfaces";
import { ToggleButton } from "./toogleButton";

export function TogglerButton({ setTheme, theme }: ThemeTypes) {
  const SolLua = {
    Sol: sol,
    Lua: lua,
  };

  function togglerButton() {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  }

  return (
    <ToggleButton type="button" onClick={togglerButton}>
      <img
        src={theme === "dark" ? SolLua.Lua : SolLua.Sol}
        alt={
          theme === "dark"
            ? "button de tema modo ativo dark"
            : "button de tema modo ativo light"
        }
      />
    </ToggleButton>
  );
}
