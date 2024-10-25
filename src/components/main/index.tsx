import { Link } from "react-router-dom";
import { PageChangeButton } from "../../utils/pageChangeButtons";
import { Cards } from "../cards";
import { ClearButton, H2, H4, ListItem, Main, Section, StyledDiv, StyledUL, VerificationMessage } from "./mainStyle";

export function MainCards({ dados, toggleFavorite, favorites, numPageAtual, setNumPageAtual, numPagesTotal, notFound, searchValue, setFavorites }) {
    const favoritesList = Object.keys(favorites).map((id) => ({
        title: favorites[id].title,
        id,
    }));

    const clearAllFavorites = () => {
        const alertClearAllFavorites = window.confirm("Tem certeza que deseja excluir todos os favoritos salvos?")
        if (alertClearAllFavorites){
            setFavorites({});
            localStorage.removeItem('favorites');
        }
    };


    const favoritesFromStorage = favoritesList.map((e) => e.title);
    const filteredFavoritos = dados?.Search?.filter(item => favoritesFromStorage.includes(item.Title));

    // transformar o resultado do filteredFavoritos em string
    const transformFilterdFavoritos = JSON.stringify(filteredFavoritos);

    return (
        <Main>
            <Section>
                <H2>Favoritos</H2>
                <ClearButton onClick={clearAllFavorites}>Excluir Todos os Favoritos</ClearButton>
                <StyledDiv>
                    <H4>lista completa de favoritos</H4>
                    <StyledUL>
                        {favoritesList.map((e, i) =>
                            <Link
                                to={`/detalhes/${e.id}/${e.title.replace(/\s+/g, '_')}`}
                                key={i}
                                style={{ textDecoration: 'none' }}
                            >
                                <ListItem>
                                    {e.title}
                                </ListItem>
                            </Link>
                        )}
                    </StyledUL>
                </StyledDiv>

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
                            // favoritesList.map((item, index) => 
                            <Cards
                                // key={index} 
                                dados={dados.Search}
                                onFavoriteToggle={toggleFavorite}
                                favorites={favorites}
                                searchValue={searchValue}
                                numPageAtual={numPageAtual}
                            />
                            // )
                        ) : (
                            <VerificationMessage>{notFound}</VerificationMessage>
                        ))
                    }
                </StyledUL>
            </Section>
        </Main>
    )
}
