import { PageChangeButton } from "../../utils/pageChangeButtons";
import { Cards } from "../cards";
import { H2, Main, Section, StyledUL, VerificationMessage } from "./mainStyle";

export function MainCards({favoritesFromStorage, dados, filteredFavoritos, toggleFavorite, favorites, transformFilterdFavoritos, numPageAtual, setNumPageAtual, numPagesTotal, notFound}) {

    return (
        <Main>
            <Section>
                <H2>Favoritos</H2>
                <StyledUL>
                    {favoritesFromStorage.length > 0 && dados && dados.Response === "True" ? (
                        <Cards
                            dados={filteredFavoritos || []}
                            onFavoriteToggle={toggleFavorite}
                            favorites={favorites}
                        />
                    ) : (
                        <VerificationMessage>
                            Nenhum favorito encontrado.
                        </VerificationMessage>
                    )
                    }
                    {transformFilterdFavoritos === "[]" && (
                        <VerificationMessage>
                            Não possui favoritos nessa página.
                        </VerificationMessage>)}
                </StyledUL>
            </Section>

            <Section>
                <H2>Todos os Resultados</H2>
                <PageChangeButton
                    numPageAtual={numPageAtual}
                    setNumPageAtual={setNumPageAtual}
                    numPagesTotal={numPagesTotal}
                />
                <StyledUL>
                    {dados && (dados.Response === 'True' ? (
                        <Cards
                            dados={dados.Search}
                            onFavoriteToggle={toggleFavorite}
                            favorites={favorites}
                        />
                    ) : (
                        <VerificationMessage>{notFound}</VerificationMessage>
                    ))}
                </StyledUL>
            </Section>
        </Main>
    )
}