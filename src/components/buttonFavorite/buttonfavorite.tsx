import { useFavorites } from "../../hooks/useFavorites";
import { FavoriteButton, FavoritedCardStyled } from "./buttonFavoriteStyled";

import favorited from "../../assets/icons/favorited.png";
import notfavorited from "../../assets/icons/notFavorited.png";
import { FavoriteButtonProps } from "../../utils/interfaces";

const imgFavorite = {
  notFavorited: notfavorited,
  favorited: favorited,
};


export function ButtonFavorite ({favoriteDados}: FavoriteButtonProps) {
    const { favorites, toggleFavorite } = useFavorites();

    return (
        <FavoriteButton >
        <FavoritedCardStyled
          src={favorites[favoriteDados.imdbID]?.isFavorite ? imgFavorite.favorited : imgFavorite.notFavorited}
          alt="favorite"
          onClick={() => toggleFavorite(favoriteDados.Title, favoriteDados.imdbID)}
        />
      </FavoriteButton>
    )
}