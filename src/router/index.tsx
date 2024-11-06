import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { TogglerButton } from "../components/buttons/toogleButton/index.tsx";
import { AppProvider } from "../context/appProvider.tsx";
import { CardDetailsDados } from "../page/cardDados.tsx";
import { Home } from "../page/home/home.js";
import { Themes } from "../utils/constants/themes.ts";

export function AppRoutes() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("ThemeAtual");
    return savedTheme ? savedTheme : "light";
  });

  useEffect(() => {
    localStorage.setItem("ThemeAtual", theme.toString());
  }, [theme]);

  return (
    <ThemeProvider theme={Themes[theme]}>
      <TogglerButton setTheme={setTheme} theme={theme} />
      <AppProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:type/:id/:title" element={<CardDetailsDados />} />
        </Routes>
      </AppProvider>
    </ThemeProvider>
  );
}
