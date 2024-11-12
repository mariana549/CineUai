import { render, screen } from "@testing-library/react";
import { Footer } from ".";
import { BrowserRouter as Router } from "react-router-dom";

describe("Footer", () => {
  it("deve renderizar o component", () => {
    render(
      <Router>
        <Footer />
      </Router>
    );
    const footer = screen.getByText(/Creating by/);
    expect(footer).toBeInTheDocument();
  });

  it("deve renderizar o link de Rede social coretamente", () => {
    render(
      <Router>
        <Footer />
      </Router>
    );
    const link = screen.getByText(/Mariana Antonia/);
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "https://github.com/mariana549");
  })

  it("deve renderizar o link de navegação corretamente", () => {
    render(
      <Router>
        <Footer />
      </Router>
    );
    const link = screen.getByText(/Home/);
    expect(link).toBeInTheDocument();
    expect(link.closest("a")).toHaveAttribute("href", '/');
  })
});
