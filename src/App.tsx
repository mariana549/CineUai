import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./router"
import { GlobalStyle } from "./globalStyled";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
