import { Link } from "react-router-dom";
import { ButtonFavorite } from "../buttons/buttonFavorite/buttonfavorite";
import {
    Figure,
    InputCheckBox,
    Label,
    Main,
    PlotParagrafro,
    RatingItem,
    Section,
    Table,
    Td,
    Th,
    Thead,
    Tr,
} from "./mainDetalhesStyled";

import Voltar from "../../assets/icons/return.png";
import semFoto from "../../assets/images/semfoto.png";
import { DetailsCard } from "../../utils/types/interfaces";

export function MainDestalhesCard({
  favoriteDados,
  dados,
  plot,
  plotFullCheck,
}: DetailsCard) {
  return (
    <Main>
      <Link to={"/"}>
        <img src={Voltar} alt="retornar" />
      </Link>
      <ButtonFavorite favoriteDados={favoriteDados} bg={"transparent"} />
      <Figure>
        <img
          src={dados?.Poster === "N/A" ? semFoto : dados?.Poster}
          alt={dados?.Title}
        />
        <figcaption>
          <h1>{dados?.Title}</h1>
        </figcaption>
      </Figure>
      <Section>
        <Table>
          <Thead>
            <Tr>
              <Th>Actors</Th>
              <Td>{dados?.Actors}</Td>
            </Tr>
            <Tr>
              <Th>Director</Th>
              <Td>{dados?.Director}</Td>
            </Tr>
            <Tr>
              <Th>Released</Th>
              <Td>{dados?.Released}</Td>
            </Tr>
            <Tr>
              <Th>Genre</Th>
              <Td>{dados?.Genre}</Td>
            </Tr>
            <Tr>
              <Th>IMDb Rating</Th>
              <Td>{dados?.imdbRating}</Td>
            </Tr>
            <Tr>
              <Th>Box Office</Th>
              <Td>{dados?.BoxOffice}</Td>
            </Tr>
            <Tr>
              <Th>Country</Th>
              <Td>{dados?.Country}</Td>
            </Tr>
            <Tr>
              <Th>Runtime</Th>
              <Td>{dados?.Runtime}</Td>
            </Tr>
          </Thead>
          <tbody>
            <Tr>
              <Th>Awards</Th>
              <Td>{dados?.Awards}</Td>
            </Tr>
            <Tr>
              <Th>DVD</Th>
              <Td>{dados?.DVD}</Td>
            </Tr>
            <Tr>
              <Th>Language</Th>
              <Td>{dados?.Language}</Td>
            </Tr>
            <Tr>
              <Th>Metascore</Th>
              <Td>{dados?.Metascore}</Td>
            </Tr>
            <Tr>
              <Th>Production</Th>
              <Td>{dados?.Production}</Td>
            </Tr>
            <Tr>
              <Th>Rating</Th>
              <Td>{dados?.Rated}</Td>
            </Tr>
            <Tr>
              <Th>Type</Th>
              <Td>{dados?.Type}</Td>
            </Tr>
            <Tr>
              <Th>Website</Th>
              <Td>
                <a
                  href={dados?.Website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {dados?.Website}
                </a>
              </Td>
            </Tr>
            <Tr>
              <Th>Writer</Th>
              <Td>{dados?.Writer}</Td>
            </Tr>
            <Tr>
              <Th>ID</Th>
              <Td>{dados?.imdbID}</Td>
            </Tr>
            <Tr>
              <Th>IMDb Votes</Th>
              <Td>{dados?.imdbVotes}</Td>
            </Tr>
            <Tr>
              <Th>Ratings</Th>
              <Td>
                <ul>
                  {dados?.Ratings.map((e, i) => (
                    <RatingItem key={i}>
                      <strong>Source:</strong> {e.Source}
                      <br />
                      <strong>Value:</strong> {e.Value}
                    </RatingItem>
                  ))}
                </ul>
              </Td>
            </Tr>
            <Tr>
              <Th>Plot</Th>
              <Td>
                <Label htmlFor="plotFull">
                  {plot}
                  <InputCheckBox
                    type="checkbox"
                    name="plotFull"
                    id="plotFull"
                    onChange={(e) => plotFullCheck(e)}
                  />
                </Label>
                <PlotParagrafro>{dados?.Plot}</PlotParagrafro>
              </Td>
            </Tr>
          </tbody>
        </Table>
      </Section>
    </Main>
  );
}
