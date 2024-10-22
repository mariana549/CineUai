import React from 'react';
import favorited from "../../../public/icons/favorited.png";
import notfavorited from "../../../public/icons/notFavorited.png";
import semFoto from "../../../public/images/semfoto.png";
import { CardsProps } from '../../utils/interfaces';
import { CardContent, CardStled, FavoriteButton, FavoritedCardStyled, ImgCardStyled, MoreInfoButton, SpanCardStyled, TituloCardStyled } from './cardsStyled';

const imgFavorite = {
  notFavorited: notfavorited,
  favorited: favorited,
};

export const Cards: React.FC<CardsProps> = ({ dados, onFavoriteToggle, favorites }) => {
  return (
    <>
      {dados?.map((e, i) => (
        <CardStled key={i}>
          <ImgCardStyled src={e.Poster === "N/A" ? semFoto : e.Poster} alt={e.Title} />
          <FavoriteButton>
            <FavoritedCardStyled
              src={favorites[e.Title] ? imgFavorite.favorited : imgFavorite.notFavorited}
              alt="favorite"
              onClick={() => onFavoriteToggle(e.Title)}
            />
          </FavoriteButton>
          <CardContent>
            <TituloCardStyled>{e.Title}</TituloCardStyled>
            <SpanCardStyled>{e.Year} {e.Type}</SpanCardStyled>
            <MoreInfoButton>ver mais</MoreInfoButton>
          </CardContent>
        </CardStled>
      ))}
    </>
  );
};
