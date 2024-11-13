import { H4, StyledUL } from "../../globalStyled";
import { useData } from "../../hooks/useData";
import { useFavorites } from "../../hooks/useFavorites";
import { PropsChildren } from "../../utils/types/interfaces";
import { PageChangeButton } from "../buttons/pageChangeButtons";
import { Cards } from "../cards";
import { H2, Main, Section, VerificationMessage } from "./mainStyle";

export function MainCards({ children }: PropsChildren) {
  const { dados, notFound } = useData() || { dados: {}, notFound: "" };
  const { transformFilterdFavoritos, filteredFavoritos } =
    useFavorites() || {
      favoritesFromStorage: [],
      transformFilterdFavoritos: "",
      filteredFavoritos: [],
    };

    return (
    <Main>
      <Section>
        <H2>Favorites</H2>
        {children}

        <H4>Favorites on this page</H4>
        <StyledUL>
          {filteredFavoritos && filteredFavoritos.length > 0 ? (
            <Cards dados={filteredFavoritos} />
          ) : (
            <VerificationMessage>No favorites found.</VerificationMessage>
          )}

          {transformFilterdFavoritos === "[]" && (
            <VerificationMessage>
              You have no favorites on this page.
            </VerificationMessage>
          )}
        </StyledUL>
      </Section>

      <Section>
        <H2>Todos os Resultados</H2>
        <PageChangeButton />
        <StyledUL style={{ justifyContent: "center" }}>
          {dados &&
            (dados.Response === "True" ? (
              <Cards dados={dados.Search} />
            ) : (
              <VerificationMessage>{notFound}</VerificationMessage>
            ))}
        </StyledUL>
      </Section>
    </Main>
  );
}
