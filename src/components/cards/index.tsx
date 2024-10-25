import { CardContent, CardStled, ImgCardStyled, MoreInfoButton, SpanCardStyled, TituloCardStyled } from './cardsStyled';
import { Link } from 'react-router-dom';
import { useData } from '../../hooks/useData';
import { usePage } from '../../hooks/usePage';
import semFoto from "../../../public/images/semfoto.png";
import { ButtonFavorite } from '../buttonFavorite/buttonfavorite';

export const Cards = ({ dados }) => {
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
          <ButtonFavorite favoriteDados={e} /> 
          <CardContent>
            <TituloCardStyled>{e.Title}</TituloCardStyled>
            <SpanCardStyled>{e.Year} {e.Type}</SpanCardStyled>
            <Link
              to={`/${e.Type}/${e.imdbID}/${e.Title.replace(/\s+/g, '_')}`}
              onClick={handleLinkClick}
            >
              <MoreInfoButton>ver mais</MoreInfoButton>
            </Link>
          </CardContent>
        </CardStled>
      ))}
    </>
  );
};
