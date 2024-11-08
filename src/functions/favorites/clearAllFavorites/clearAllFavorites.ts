import { Favorites } from "../../utils/types/types";

export const clearAllFavorites = (setFavorites: React.Dispatch<Favorites>) => {
  const alertClearAllFavorites = window.confirm(
    "Are you sure you want to delete all saved bookmarks?"
  );
  if (alertClearAllFavorites) {
    setFavorites({});
    localStorage.removeItem("favorites");
  }
};
