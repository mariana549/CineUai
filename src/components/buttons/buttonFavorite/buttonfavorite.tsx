import { useFavorites } from "../../../hooks/useFavorites";
import { FavoriteButton, FavoritedCardStyled } from "./buttonFavoriteStyled";

import favorited from "../../../assets/icons/favorited.png";
import notfavorited from "../../../assets/icons/notFavorited.png";
import { toggleFavorite } from "../../../functions/favorites/toggleFavorite/toggleFavorite";
import { FavoriteButtonProps } from "../../../utils/types/interfaces";

const imgFavorite = {
  notFavorited: notfavorited,
  favorited: favorited,
};

export function ButtonFavorite({ favoriteDados, bg }: FavoriteButtonProps) {
  const { favorites, setFavorites } = useFavorites();

  return (
    <FavoriteButton
      style={{ background: `${bg}` }}
      data-testid={`button-favorite-${favoriteDados.imdbID}`}
    >
      <FavoritedCardStyled
        src={
          favorites[favoriteDados.imdbID]?.isFavorite
            ? imgFavorite.favorited
            : imgFavorite.notFavorited
        }
        alt="favorite"
        onClick={() =>
          toggleFavorite(
            favoriteDados.Title,
            favoriteDados.imdbID,
            setFavorites
          )
        }
      />
    </FavoriteButton>
  );
}
