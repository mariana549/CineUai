import { ToggleButton } from "./toogleButton";
import sol from "../../../public/icons/sol.png"
import lua from "../../../public/icons/lua.png"

export function TogglerButton({ togglerButton, theme }) {
    const SolLua = {
        Sol: sol,
        Lua: lua,
    };

    return (
        <ToggleButton type="button" onClick={togglerButton}>
            <img
                src={theme === 'dark' ? SolLua.Lua : SolLua.Sol}
                alt={theme === 'dark' ? 'button de tema modo ativo dark' : 'button de tema modo ativo light'}
            />
        </ToggleButton>
    )
}