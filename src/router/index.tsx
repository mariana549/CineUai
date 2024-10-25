import { Route, Routes } from "react-router-dom"
import { Home } from "../page/home.tsx"
import { DestalhesCard } from "../components/detalhesCard/index.tsx"
import { useEffect, useState } from "react"
import { ThemeProvider } from "styled-components"
import { Themes } from "../utils/themes.ts"
import { TogglerButton } from "../utils/toogleButton/index.tsx"

export function AppRoutes() {
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem("ThemeAtual");
        return savedTheme ? savedTheme : "light";
      });
    
    function togglerButton() {
        setTheme((prevState) => prevState === 'light' ? "dark" : "light");
    }

    useEffect(() => {
        localStorage.setItem("ThemeAtual", theme);
     }, [theme]);

    return (
        <ThemeProvider theme={{ Theme: Themes[theme] }}>
            <TogglerButton togglerButton={togglerButton} theme={theme} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:type/:id/:title" element={<DestalhesCard />} />
            </Routes>
        </ThemeProvider>
    )
}

