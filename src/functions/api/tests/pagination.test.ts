import { getNumPagesTotal, prevPage, nextPage } from "../pagination";

describe("getNumPagesTotal", () => {
  it("deve retornar o número total de páginas arredondado para cima", () => {
    expect(getNumPagesTotal(55)).toBe(6); // 55 resultados => 6 páginas (55/10)
    expect(getNumPagesTotal(100)).toBe(10); // 100 resultados => 10 páginas (100/10)
    expect(getNumPagesTotal(101)).toBe(11); // 101 resultados => 11 páginas (101/10)
  });

  it("deve retornar 0 quando o resultado for NaN", () => {
    expect(getNumPagesTotal(NaN)).toBe(0);
  });

  it("deve retornar 0 quando o resultado for 0", () => {
    expect(getNumPagesTotal(0)).toBe(0);
  });
});

describe("prevPage", () => {
  let setNumPageAtualMock: jest.Mock;

  beforeEach(() => {
    setNumPageAtualMock = jest.fn((prev) => prev - 1);
  });

  it("deve decrementar a página atual quando numPageAtual for maior que 1", () => {
    prevPage(2, setNumPageAtualMock);

    const decrementFunction = setNumPageAtualMock.mock.calls[0][0];
    const newPage = decrementFunction(2);

    expect(setNumPageAtualMock).toHaveBeenCalled();
    expect(newPage).toBe(1);
  });

  it("não deve alterar a página atual quando numPageAtual for 1", () => {
    prevPage(1, setNumPageAtualMock);
    expect(setNumPageAtualMock).not.toHaveBeenCalled();
  });
});

describe("nextPage", () => {
  let setNumPageAtualMock: jest.Mock;

  beforeEach(() => {
    setNumPageAtualMock = jest.fn();
  });

  it("deve incrementar a página atual quando numPageAtual for menor que numPagesTotal", () => {
    nextPage(1, 10, setNumPageAtualMock);

    const incrementFunction = setNumPageAtualMock.mock.calls[0][0];
    const newPage = incrementFunction(1); // Simula o incremento da página atual

    expect(setNumPageAtualMock).toHaveBeenCalled();
    expect(newPage).toBe(2); 
  });

  it("não deve alterar a página atual quando numPageAtual for igual a numPagesTotal", () => {
    nextPage(10, 10, setNumPageAtualMock);

    expect(setNumPageAtualMock).not.toHaveBeenCalled();
  });
});
