import { Link } from "react-router-dom";
import { clearFavorite } from "../../functions/funcoes";
import { ClearFavorite, ListItem, StyledDiv } from "./savedFavoritesListStyled";
import { StyledUL } from "../../globalStyled";

export function SavedFavoritesList ({favoritesList, setFavorites}) {
    return (
        <StyledDiv>
        <StyledUL>
          {favoritesList.map((e, i) =>
            <>
              <ClearFavorite
                type="button"
                onClick={() => clearFavorite(e.title, e.id, setFavorites)}
              >
                X
              </ClearFavorite>
              <Link
                to={`/detalhes/${e.id}/${e.title.replace(/\s+/g, '_')}`}
                key={i}
                style={{ textDecoration: 'none' }}
              >
                <ListItem>
                  {e.title}
                </ListItem>
              </Link>
            </>
          )}
        </StyledUL>
      </StyledDiv>
    )
}