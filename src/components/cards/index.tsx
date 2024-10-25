import React from 'react';
import { CardsProps } from '../../utils/interfaces';

import {
  CardContent,
  CardStled,
  FavoriteButton,
  FavoritedCardStyled,
  ImgCardStyled,
  MoreInfoButton,
  SpanCardStyled,
  TituloCardStyled
} from './cardsStyled';

import { Link } from 'react-router-dom';
import { useFavorites } from '../../hooks/useFavorites';
import { useData } from '../../hooks/useData';
import { usePage } from '../../hooks/usePage';

import favorited from "../../../public/icons/favorited.png";
import notfavorited from "../../../public/icons/notFavorited.png";
import semFoto from "../../../public/images/semfoto.png";

const imgFavorite = {
  notFavorited: notfavorited,
  favorited: favorited,
};

export const Cards: React.FC<CardsProps> = ({ dados }) => {
  const { searchValue } = useData()
  const { numPageAtual } = usePage()
  const { favorites, toggleFavorite } = useFavorites();


  const handleLinkClick = () => {
    localStorage.setItem('searchValue', searchValue);
    localStorage.setItem('numPageAtual', numPageAtual.toString());
  };

  return (
    <>
      {dados?.map((e, i) => (
        <CardStled key={i}>
          <ImgCardStyled src={e.Poster === "N/A" ? semFoto : e.Poster} alt={e.Title} />

          <FavoriteButton>
            <FavoritedCardStyled
              src={favorites[e.imdbID]?.isFavorite ? imgFavorite.favorited : imgFavorite.notFavorited}
              alt="favorite"
              onClick={() => toggleFavorite(e.Title, e.imdbID)}
            />
          </FavoriteButton>

          <CardContent>
            <TituloCardStyled>{e.Title}</TituloCardStyled>
            <SpanCardStyled>{e.Year} {e.Type}</SpanCardStyled>
            {/* .replace(/\s+/g, '_') Remover Espaços do Título e adicionar o underline */}
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
