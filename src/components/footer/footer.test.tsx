import { render, screen } from "@testing-library/react";
import { Footer } from ".";

describe("Footer", () => {
  it("deve renderizar o component", () => {
    render(<Footer />);
    const footer = screen.getByText("Mariana Antonia");
    expect(footer).toBeInTheDocument();
  });
});
