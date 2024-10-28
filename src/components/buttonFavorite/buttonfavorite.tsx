import { useFavorites } from "../../hooks/useFavorites";
import { FavoriteButton, FavoritedCardStyled } from "./buttonFavoriteStyled";

import favorited from "../../../public/icons/favorited.png";
import notfavorited from "../../../public/icons/notFavorited.png";
import { FavoriteButtonProps } from "../../utils/interfaces";

const imgFavorite = {
  notFavorited: notfavorited,
  favorited: favorited,
};


export function ButtonFavorite ({favoriteDados, position}: FavoriteButtonProps) {
    const { favorites, toggleFavorite } = useFavorites();

    return (
        <FavoriteButton style={{position: `${position}`}}>
        <FavoritedCardStyled
          src={favorites[favoriteDados.imdbID]?.isFavorite ? imgFavorite.favorited : imgFavorite.notFavorited}
          alt="favorite"
          onClick={() => toggleFavorite(favoriteDados.Title, favoriteDados.imdbID)}
        />
      </FavoriteButton>
    )
}