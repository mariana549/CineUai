export const handleSearch = (event: React.ChangeEvent<HTMLInputElement>, setSearchValue: React.Dispatch<React.SetStateAction<string>>) => {
    setSearchValue(event.target.value);
  };