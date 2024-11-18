import { getYear } from "../getYear";

describe("getYear", () => {
  let setYearMock: jest.Mock;

  beforeEach(() => {
    setYearMock = jest.fn();
  });

  it("deve truncar o valor do ano para 4 caracteres quando maior que 4 caracteres", () => {
    const event = {
      target: { value: "20210" },
    } as React.ChangeEvent<HTMLInputElement>;

    getYear(event, setYearMock);

    expect(event.target.value).toBe("2021");
    expect(setYearMock).toHaveBeenCalledWith(2021);
  });

  it("deve definir o ano como string vazia quando o valor for 0", () => {
    const event = {
      target: { value: "0" },
    } as React.ChangeEvent<HTMLInputElement>;

    getYear(event, setYearMock);

    expect(setYearMock).toHaveBeenCalledWith("");
  });

  it("deve definir o ano como número quando o valor não for 0 e for menor ou igual a 4 caracteres", () => {
    const event = {
      target: { value: "2021" },
    } as React.ChangeEvent<HTMLInputElement>;

    getYear(event, setYearMock);

    expect(setYearMock).toHaveBeenCalledWith(2021);
  });

  it("deve lidar com valor vazio corretamente", () => {
    const event = {
      target: { value: "" },
    } as React.ChangeEvent<HTMLInputElement>;

    getYear(event, setYearMock);

    expect(setYearMock).toHaveBeenCalledWith("");
  });

  it("não deve chamar setYear se o valor não for numérico", () => {
    const event = {
      target: { value: "abcd" },
    } as React.ChangeEvent<HTMLInputElement>;

    getYear(event, setYearMock);

    expect(setYearMock).toHaveBeenCalledWith(NaN);
  });
});
