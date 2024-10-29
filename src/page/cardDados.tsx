import { ChangeEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SearchResult } from "../utils/types/interfaces";
import { getDetails } from "../functions/api/getDetails";
import { Container } from "../globalStyled";
import { HeaderCards } from "../components/header";
import { Pheader } from "../components/header/headerStyled";
import { MainDestalhesCard } from "../components/detalhesCard";
import { Footer } from "../components/footer";

export const CardDetailsDados = () => {
  const [dados, setDados] = useState<SearchResult>();
  const { type = "", id = "", title = "" } = useParams<{ type: string, id: string; title: string }>();
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
        <Pheader>Your {type} is here.</Pheader>
      </HeaderCards>

      <MainDestalhesCard
        favoriteDados={favoriteDados}
        plotFullCheck={plotFullCheck}
        dados={dados}
        plot={plot}
      />
      
      <Footer />
    </Container>
  )
} 