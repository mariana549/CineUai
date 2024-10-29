export const clearAllFavorites = (setFavorites: React.Dispatch<React.SetStateAction<Record<string, boolean>>>) => {
    const alertClearAllFavorites = window.confirm("Are you sure you want to delete all saved bookmarks?")
    if (alertClearAllFavorites) {
      setFavorites({});
      localStorage.removeItem('favorites');
    }
  };