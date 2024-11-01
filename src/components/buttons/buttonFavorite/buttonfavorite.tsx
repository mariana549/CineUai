import { useFavorites } from "../../../hooks/useFavorites";
import { FavoriteButton, FavoritedCardStyled } from "./buttonFavoriteStyled";

import favorited from "../../../assets/icons/favorited.png";
import notfavorited from "../../../assets/icons/notFavorited.png";
import { FavoriteButtonProps } from "../../../utils/types/interfaces";
import { toggleFavorite } from "../../../functions/favorites/toggleFavorite";

const imgFavorite = {
  notFavorited: notfavorited,
  favorited: favorited,
};


export function ButtonFavorite ({favoriteDados, bg}: FavoriteButtonProps) {
    const { favorites, setFavorites } = useFavorites();

    return (
        <FavoriteButton style={{background: `${bg}`}}>
        <FavoritedCardStyled
          src={favorites[favoriteDados.imdbID]?.isFavorite ? imgFavorite.favorited : imgFavorite.notFavorited}
          alt="favorite"
          onClick={() => toggleFavorite(favoriteDados.Title, favoriteDados.imdbID, setFavorites)}
        />
      </FavoriteButton>
    )
}