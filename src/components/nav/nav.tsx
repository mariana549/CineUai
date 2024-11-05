import { getTypes } from "../../functions/search/getTypes";
import { getYear } from "../../functions/search/getYear";
import { Box, SpanErrorInput } from "../../globalStyled";
import { useData } from "../../hooks/useData";
import { InputSearch } from "../search";
import { StyledInput, StyledOption, StyledSelect } from "./navStyled";

export function Nav() {
  const { searchValue, erroMinLength, notFound, year, setYear, setType } =
    useData();

  const isValidYear = year && typeof year === "number";
  const validationMessage =
    isValidYear && year <= 1889 ? "Please enter a valid year." : "";

  return (
    <nav>
      <InputSearch />
      <SpanErrorInput>
        {searchValue && searchValue.length <= 2 ? erroMinLength : ""}
      </SpanErrorInput>

      <Box>
        <StyledSelect name="types" onChange={(type) => getTypes(type, setType)}>
          <StyledOption value="">all</StyledOption>
          <StyledOption value="movie">movie</StyledOption>
          <StyledOption value="series">series</StyledOption>
          <StyledOption value="game">game</StyledOption>
        </StyledSelect>

        <StyledInput
          type="number"
          name="ano"
          min={1890}
          max={2080}
          placeholder="YYYY"
          onChange={(year) => getYear(year, setYear)}
        />
      </Box>
      <SpanErrorInput>{year ? notFound : ""}</SpanErrorInput>
      <SpanErrorInput>{validationMessage}</SpanErrorInput>
    </nav>
  );
}
