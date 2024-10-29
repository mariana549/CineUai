import { CardContent, CardStled, ImgCardStyled, MoreInfoButton, SpanCardStyled, TituloCardStyled } from './cardsStyled';
import { Link } from 'react-router-dom';
import { useData } from '../../hooks/useData';
import { usePage } from '../../hooks/usePage';
import { ButtonFavorite } from '../buttonFavorite/buttonfavorite';
import { cardProps } from '../../utils/interfaces';

import semFoto from "../../assets/images/semfoto.png";

export const Cards = ({ dados }:cardProps) => {
  const { searchValue } = useData();
  const { numPageAtual } = usePage();

  const handleLinkClick = () => {
    localStorage.setItem('searchValue', searchValue);
    localStorage.setItem('numPageAtual', numPageAtual.toString());
  };

  return (
    <>
      {dados?.map((e, i) => (
        <CardStled key={i}>
          <ImgCardStyled src={e.Poster === "N/A" ? semFoto : e.Poster} alt={e.Title} />
          <ButtonFavorite favoriteDados={e} bg={"rgba(0, 0, 0, 0.5)"}/> 
          <CardContent>
            <TituloCardStyled>{e.Title}</TituloCardStyled>
            <SpanCardStyled>{e.Year} {e.Type}</SpanCardStyled>
            <Link
              to={`/${e.Type}/${e.imdbID}/${e.Title.replace(/\s+/g, '_')}`}
              onClick={handleLinkClick}
            >
              <MoreInfoButton>see more</MoreInfoButton>
            </Link>
          </CardContent>
        </CardStled>
      ))}
    </>
  );
};
