import { handleSearch } from "../handleSearch";
import { ChangeEvent } from "react";

describe("handleSearch", () => {
  let setSearchValueMock: jest.Mock;

  beforeEach(() => {
    // Mock do setSearchValue
    setSearchValueMock = jest.fn();
  });

  it("deve chamar setSearchValue com o valor do evento", () => {
    const event = {
      target: { value: "Harry Potter" },
    } as ChangeEvent<HTMLInputElement>;

    handleSearch(event, setSearchValueMock);

    expect(setSearchValueMock).toHaveBeenCalledWith("Harry Potter");
  });

  it("deve chamar setSearchValue com uma string vazia se o valor do evento for vazio", () => {
    const event = { target: { value: "" } } as ChangeEvent<HTMLInputElement>;

    handleSearch(event, setSearchValueMock);

    expect(setSearchValueMock).toHaveBeenCalledWith("");
  });
});
