import { Link } from "react-router-dom";
import { clearFavorite } from "../../functions/funcoes";
import { ClearFavorite, ListItem, StyledDiv } from "./savedFavoritesListStyled";
import { StyledUL } from "../../globalStyled";
import { useFavorites } from "../../hooks/useFavorites";

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