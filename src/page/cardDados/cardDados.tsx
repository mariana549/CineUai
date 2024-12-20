import { ChangeEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MainDestalhesCard } from "../../components/detalhesCard";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { Pheader } from "../../components/header/headerStyled";
import { getDetails } from "../../functions/api/getDetails";
import { Container } from "../../globalStyled";
import { SearchResult } from "../../utils/types/interfaces";

export const CardDetailsDados = () => {
  const [dados, setDados] = useState<SearchResult>();
  const {
    type = "",
    id = "",
    title = "",
  } = useParams<{ type: string; id: string; title: string }>();
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
    Title: title?.replace(/\s+/g, " "),
    imdbID: id,
  };

  return (
    <Container>
      <Header>
        <Pheader>Your {type} is here.</Pheader>
      </Header>

      <MainDestalhesCard
        favoriteDados={favoriteDados}
        plotFullCheck={plotFullCheck}
        dados={dados}
        plot={plot}
      />

      <Footer />
    </Container>
  );
};
