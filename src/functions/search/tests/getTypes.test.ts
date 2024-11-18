import { getTypes } from "../getTypes";
import { ChangeEvent } from "react";

describe("getTypes", () => {
  let setTypeMock: jest.Mock;

  beforeEach(() => {
    setTypeMock = jest.fn();
  });

  it("deve chamar setType com o valor selecionado quando não estiver vazio", () => {
    const event = {
      target: { value: "movie" },
    } as ChangeEvent<HTMLSelectElement>;

    getTypes(event, setTypeMock);

    expect(setTypeMock).toHaveBeenCalledWith("movie");
  });

  it("deve chamar setType com uma string vazia quando o valor selecionado estiver vazio", () => {
    const event = { target: { value: "" } } as ChangeEvent<HTMLSelectElement>;

    getTypes(event, setTypeMock);

    expect(setTypeMock).toHaveBeenCalledWith("");
  });
});
