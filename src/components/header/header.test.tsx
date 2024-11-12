import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Header } from ".";
import logo from "../../assets/images/logo.png";

describe("Header", () => {
  it("deve renderizar o componete", () => {
    render(
      <Router>
        <Header />
      </Router>
    );

    const header = screen.getByText(/Cine Uai/);
    expect(header).toBeInTheDocument();
  });

  it("deve exibir a imagem logo e o texto cine uai corretamente", () => {
    render(
      <Router>
        <Header />
      </Router>
    );

    const imgLogo = screen.getByAltText("logo");
    expect(imgLogo).toBeInTheDocument();
    expect(imgLogo).toHaveAttribute("src", logo);

    const logoText = screen.getByText("Cine Uai");
    expect(logoText).toBeInTheDocument();
  });

  it("deve renderizar os children corretamente", () => {
    render(
      <Header>
        <div>Child Element</div>
      </Header>
    );

    const childElement = screen.getByText('Child Element'); 
    expect(childElement).toBeInTheDocument();
  });
});
