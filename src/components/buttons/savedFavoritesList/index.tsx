import { Link } from "react-router-dom";
import { clearFavorite } from "../../../functions/favorites/clearFavorite";
import { useFavorites } from "../../../hooks/useFavorites";
import { ClearFavorite, ListItem, StyledDiv } from "./savedFavoritesListStyled";
import { StyledUL } from "../../../globalStyled";

export function SavedFavoritesList () {
    const {favoritesList, setFavorites} = useFavorites()

    return (
        <StyledDiv>
        <StyledUL>
          {favoritesList.map((e, i) =>
            <div key={i}>
              <ClearFavorite
                type="button"
                onClick={() => clearFavorite(e.title, e.id, setFavorites)}
              >
                X
              </ClearFavorite>
              <Link
                to={`/detalhes/${e.id}/${e.title.replace(/\s+/g, '_')}`}
                style={{ textDecoration: 'none' }}
              >
                <ListItem>
                  {e.title}
                </ListItem>
              </Link>
            </div>
          )}
        </StyledUL>
      </StyledDiv>
    )
}