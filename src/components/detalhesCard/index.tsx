import { ChangeEvent, useEffect, useState } from "react";
import { getDetails } from "../../functions/funcoes";
import { SearchResult } from "../../utils/interfaces";
import { Figure, InputCheckBox, Label, Main, PlotParagrafro, RatingItem, Section, Table, Td, Th, Thead, Tr } from "./detalhesStyled";
import { Link, useParams } from "react-router-dom";
import Voltar from "../../../public/icons/return.png"
import semFoto from "../../../public/images/semfoto.png"
import { HeaderCards } from "../header";
import { Container } from "../../globalStyled";
import { ButtonFavorite } from "../buttonFavorite/buttonfavorite";


export function DestalhesCard() {
    const [dados, setDados] = useState<SearchResult>();
    const { id = "", title = "" } = useParams<{ id: string; title: string }>(); 
    const [plot, setPlot] = useState("short");

    const plotFullCheck = (element: ChangeEvent<HTMLInputElement>) => {
        if (element.target.checked == true) {
            setPlot("full");
        } else {
            setPlot("short");
        }
    };

    useEffect(() => {
        getDetails(setDados, id, plot);
    }, [plot, id]);

    const favoriteDados = {
        Title: title?.replace(/\s+/g, ' '),
        imdbID: id
    }    

    return (
        <Container>
            <HeaderCards>
                <Link to={"/"}>
                    <img src={Voltar} alt="retornar" />
                </Link>
            </HeaderCards>
            <Main>
                <ButtonFavorite favoriteDados={favoriteDados}  />
                <Figure>
                    <img src={dados?.Poster === "N/A" ? semFoto : dados?.Poster} alt={dados?.Title} />
                    <figcaption><h1>{dados?.Title}</h1></figcaption>
                </Figure>
                <Section>
                    <Table>
                        <Thead>
                            <Tr>
                                <Th>Atores</Th>
                                <Td>{dados?.Actors}</Td>
                            </Tr>
                            <Tr>
                                <Th>Diretor</Th>
                                <Td>{dados?.Director}</Td>
                            </Tr>
                            <Tr>
                                <Th>Lançado</Th>
                                <Td>{dados?.Released}</Td>
                            </Tr>
                            <Tr>
                                <Th>Gênero</Th>
                                <Td>{dados?.Genre}</Td>
                            </Tr>
                            <Tr>
                                <Th>Classificação IMDb</Th>
                                <Td>{dados?.imdbRating}</Td>
                            </Tr>
                            <Tr>
                                <Th>Bilheteria</Th>
                                <Td>{dados?.BoxOffice}</Td>
                            </Tr>
                            <Tr>
                                <Th>País</Th>
                                <Td>{dados?.Country}</Td>
                            </Tr>
                            <Tr>
                                <Th>Duração</Th>
                                <Td>{dados?.Runtime}</Td>
                            </Tr>
                        </Thead>
                        <tbody>
                            <Tr>
                                <Th>Prêmios</Th>
                                <Td>{dados?.Awards}</Td>
                            </Tr>
                            <Tr>
                                <Th>DVD</Th>
                                <Td>{dados?.DVD}</Td>
                            </Tr>

                            <Tr>
                                <Th>Linguagem</Th>
                                <Td>{dados?.Language}</Td>
                            </Tr>
                            <Tr>
                                <Th>Metascore</Th>
                                <Td>{dados?.Metascore}</Td>
                            </Tr>
                            <Tr>
                                <Th>Produção</Th>
                                <Td>{dados?.Production}</Td>
                            </Tr>
                            <Tr>
                                <Th>Classificação</Th>
                                <Td>{dados?.Rated}</Td>
                            </Tr>
                            <Tr>
                                <Th>Tipo</Th>
                                <Td>{dados?.Type}</Td>
                            </Tr>
                            <Tr>
                                <Th>Site</Th>
                                <Td><a href={dados?.Website} target="_blank" rel="noopener noreferrer">{dados?.Website}</a></Td>
                            </Tr>
                            <Tr>
                                <Th>Escritor</Th>
                                <Td>{dados?.Writer}</Td>
                            </Tr>
                            <Tr>
                                <Th>ID</Th>
                                <Td>{dados?.imdbID}</Td>
                            </Tr>
                            <Tr>
                                <Th>Votos no IMDb</Th>
                                <Td>{dados?.imdbVotes}</Td>
                            </Tr>
                            <Tr>
                                <Th>Ratings</Th>
                                <Td>
                                    <ul>
                                        {dados?.Ratings.map((e, i) => (
                                            <RatingItem key={i}>
                                                <strong>Source:</strong> {e.Source}<br />
                                                <strong>Value:</strong> {e.Value}
                                            </RatingItem>
                                        ))}
                                    </ul>
                                </Td>
                            </Tr>
                            <Tr>
                                <Th>Enredo</Th>
                                <Td>
                                    <Label htmlFor="plotFull">
                                        {plot}
                                        <InputCheckBox type="checkbox" name="plotFull" id="plotFull" onChange={(e) => plotFullCheck(e)} />
                                    </Label>
                                    <PlotParagrafro>{dados?.Plot}</PlotParagrafro>
                                </Td>
                            </Tr>
                        </tbody>
                    </Table>
                </Section>
            </Main>
        </Container>
    )
}