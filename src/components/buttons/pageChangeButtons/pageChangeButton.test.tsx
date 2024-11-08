import { fireEvent, render, screen } from "@testing-library/react";
import { PageChangeButton } from ".";

import leftArrow from "../../../assets/icons/leftArrow.png";
import rightArrow from "../../../assets/icons/rigthArrow.png";
import { usePage } from "../../../hooks/usePage";
import { useData } from "../../../hooks/useData";
import { nextPage, prevPage } from '../../../functions/api/pagination';

jest.mock("../../../hooks/usePage");
jest.mock("../../../hooks/useData");
jest.mock("../../../functions/api/pagination");

const prevPageMock = prevPage as jest.Mock;
const nextPageMock = nextPage as jest.Mock;
const setNumPageAtualMock = jest.fn();

describe("PageChageButton", () => {
  beforeEach(() => {
    (usePage as jest.Mock).mockReturnValue({
      numPageAtual: 1,
      setNumPageAtual: setNumPageAtualMock,
    });
    (useData as jest.Mock).mockReturnValue({
      numPagesTotal: 5,
    });
  });

  it("deve renderizar o componente", () => {
    render(<PageChangeButton />);
    const span = screen.getByText("1 of 5");
    expect(span).toBeInTheDocument();
  });

  it("deve exibir o botão anterior quando numPageAtual > 1", () => {
    (usePage as jest.Mock).mockReturnValue({
      numPageAtual: 2,
      setNumPageAtual: setNumPageAtualMock,
    });

    render(<PageChangeButton />);
    const leftButton = screen.getByAltText("leftArrow");

    expect(leftButton).toBeInTheDocument();
    expect(leftButton).toHaveAttribute("src", leftArrow);
  });

  it("não deve exibir o botão anterior quando numPageAtual = 1", () => {
    render(<PageChangeButton />);
    const leftButton = screen.queryByAltText("leftArrow");

    expect(leftButton).not.toBeInTheDocument();
  });

  it("deve exibir o botão próximo quando numPageAtual < numPagesTotal", () => {
    render(<PageChangeButton />);
    const rightButton = screen.getByAltText("rightArrow");

    expect(rightButton).toBeInTheDocument();
    expect(rightButton).toHaveAttribute("src", rightArrow);
  });

  it("não deve exibir o botão próximo quando numPageAtual = numPagesTotal", () => {
    (usePage as jest.Mock).mockReturnValue({
      numPageAtual: 5,
      setNumPageAtual: setNumPageAtualMock,
    });
    (useData as jest.Mock).mockReturnValue({
      numPagesTotal: 5,
    });

    render(<PageChangeButton />);
    const rightButton = screen.queryByAltText("rightArrow");

    expect(rightButton).not.toBeInTheDocument();
  });

  it("deve chamar prevPage ao clicar no botão anterior", () => {
    (usePage as jest.Mock).mockReturnValue({
      numPageAtual: 2,
      setNumPageAtual: setNumPageAtualMock,
    });
    render(<PageChangeButton />);
    const leftButton = screen.getByAltText("leftArrow");
    fireEvent.click(leftButton);
    expect(prevPageMock).toHaveBeenCalledWith(2, setNumPageAtualMock);
  });

  it("deve chamar nextPage ao clicar no botão próximo", () => {
    render(<PageChangeButton />);
    const rightButton = screen.getByAltText("rightArrow");
    fireEvent.click(rightButton);
    expect(nextPageMock).toHaveBeenCalledWith(1, 5, setNumPageAtualMock);
  });
});
