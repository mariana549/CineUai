import { Route, Routes } from "react-router-dom"
import { Home } from "../page/home.tsx"
import { useEffect, useState } from "react"
import { ThemeProvider } from "styled-components"
import { Themes } from "../utils/config/themes.ts"
import { TogglerButton } from "../components/toogleButton/index.tsx"
import { AppProvider } from "../context/appProvider.tsx"
import { CardDetailsDados } from "../page/cardDados.tsx"

export function AppRoutes() {
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem("ThemeAtual");
        return savedTheme ? savedTheme : "light";
    });

    useEffect(() => {
        localStorage.setItem("ThemeAtual", theme);
    }, [theme]);

    return (
        <ThemeProvider theme={{ Theme: Themes[theme] }}>
            <TogglerButton setTheme={setTheme} theme={theme} />
            <AppProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/:type/:id/:title" element={<CardDetailsDados />} />
                </Routes>
            </AppProvider>
        </ThemeProvider>
    )
}

