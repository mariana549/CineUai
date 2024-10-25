import { H4, StyledUL } from "../../globalStyled";
import { useData } from "../../hooks/useData";
import { useFavorites } from "../../hooks/useFavorites";
import { usePage } from "../../hooks/usePage";
import { PageChangeButton } from "../../utils/pageChangeButtons";
import { Cards } from "../cards";
import { H2, Main, Section, VerificationMessage } from "./mainStyle";

export function MainCards({ children }) {
    const { dados, numPagesTotal, notFound, searchValue } = useData();
    const { favorites, toggleFavorite, favoritesList } = useFavorites();
    const { numPageAtual, setNumPageAtual } = usePage()

    const favoritesFromStorage = favoritesList.map((e) => e.title);
    const filteredFavoritos = dados?.Search?.filter(item => favoritesFromStorage.includes(item.Title));

    // transformar o resultado do filteredFavoritos em string
    const transformFilterdFavoritos = JSON.stringify(filteredFavoritos);

    return (
        <Main>
            <Section>
                <H2>Favoritos</H2>
                {children}

                <H4>Favoritos nessa pagina</H4>
                <StyledUL>
                    {favoritesFromStorage.length > 0 && dados && dados.Response === "True" ? (
                        <Cards
                            dados={filteredFavoritos || []}
                            onFavoriteToggle={toggleFavorite}
                            favorites={favorites}
                            searchValue={searchValue}
                            numPageAtual={numPageAtual}
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
                    {
                        dados && (dados.Response === 'True' ? (
                            <Cards
                                dados={dados.Search}
                                onFavoriteToggle={toggleFavorite}
                                favorites={favorites}
                                searchValue={searchValue}
                                numPageAtual={numPageAtual}
                            />
                        ) : (
                            <VerificationMessage>{notFound}</VerificationMessage>
                        ))
                    }
                </StyledUL>
            </Section>
        </Main>
    )
}
