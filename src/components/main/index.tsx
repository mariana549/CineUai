import { H4, StyledUL } from "../../globalStyled";
import { useData } from "../../hooks/useData";
import { useFavorites } from "../../hooks/useFavorites";
import { PropsChildren } from "../../utils/interfaces";
import { PageChangeButton } from "../../utils/pageChangeButtons";
import { Cards } from "../cards";
import { H2, Main, Section, VerificationMessage } from "./mainStyle";



export function MainCards({ children }: PropsChildren) {
    const { dados, notFound } = useData();
    const { favoritesFromStorage, transformFilterdFavoritos, filteredFavoritos } = useFavorites();

    return (
        <Main>
            <Section>
                <H2>Favoritos</H2>
                {children}

                <H4>Favoritos nessa pagina</H4>
                <StyledUL>
                    {favoritesFromStorage.length > 0 && dados && dados.Response === "True" ?
                        <Cards dados={filteredFavoritos || []} /> :
                        <VerificationMessage>Nenhum favorito encontrado.</VerificationMessage>
                    }

                    {transformFilterdFavoritos === "[]" &&
                        <VerificationMessage>Não possui favoritos nessa página.</VerificationMessage>
                    }
                </StyledUL>
            </Section>

            <Section>
                <H2>Todos os Resultados</H2>
                <PageChangeButton />
                <StyledUL>
                    {dados && (
                        dados.Response === 'True' ?
                            <Cards dados={dados.Search} /> :
                            <VerificationMessage>{notFound}</VerificationMessage>
                    )}
                </StyledUL>
            </Section>
        </Main>
    )
}
